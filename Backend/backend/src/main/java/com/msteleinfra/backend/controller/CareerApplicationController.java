package com.msteleinfra.backend.controller;

import com.msteleinfra.backend.entity.CareerApplication;
import com.msteleinfra.backend.repository.CareerApplicationRepository;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/careers")
@CrossOrigin(origins = "http://localhost:5173")
public class CareerApplicationController {

    private final CareerApplicationRepository careerApplicationRepository;

    public CareerApplicationController(
            CareerApplicationRepository careerApplicationRepository
    ) {
        this.careerApplicationRepository = careerApplicationRepository;
    }

    @PostMapping(
            value = "/apply",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<?> applyForJob(
            @RequestParam("fullName") String fullName,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("experience") String experience,
            @RequestParam(value = "currentCompany", required = false) String currentCompany,
            @RequestParam(value = "expectedSalary", required = false) String expectedSalary,
            @RequestParam(value = "coverLetter", required = false) String coverLetter,
            @RequestParam("resume") MultipartFile resume
    ) {
        try {
            System.out.println("Application request received from: " + fullName);

            if (fullName == null || fullName.trim().isEmpty()
                    || email == null || email.trim().isEmpty()
                    || phone == null || phone.trim().isEmpty()
                    || experience == null || experience.trim().isEmpty()) {

                return ResponseEntity.badRequest().body(
                        Map.of("message", "Please fill all required fields.")
                );
            }

            if (resume == null || resume.isEmpty()) {
                return ResponseEntity.badRequest().body(
                        Map.of("message", "Resume PDF is required.")
                );
            }

            String originalFileName = resume.getOriginalFilename();

            if (originalFileName == null
                    || !originalFileName.toLowerCase().endsWith(".pdf")) {

                return ResponseEntity.badRequest().body(
                        Map.of("message", "Only PDF resume files are allowed.")
                );
            }

            long maxFileSize = 5 * 1024 * 1024;

            if (resume.getSize() > maxFileSize) {
                return ResponseEntity.badRequest().body(
                        Map.of("message", "Resume file size must be less than 5 MB.")
                );
            }

            Path uploadPath = Paths.get("uploads", "resumes");
            Files.createDirectories(uploadPath);

            String safeFileName = originalFileName.replaceAll(
                    "[^a-zA-Z0-9._-]",
                    "_"
            );

            String uniqueFileName = UUID.randomUUID() + "_" + safeFileName;

            Path filePath = uploadPath.resolve(uniqueFileName);

            Files.copy(resume.getInputStream(), filePath);

            CareerApplication application = new CareerApplication();

            application.setFullName(fullName);
            application.setEmail(email);
            application.setPhone(phone);
            application.setExperience(experience);
            application.setCurrentCompany(currentCompany);
            application.setExpectedSalary(expectedSalary);
            application.setCoverLetter(coverLetter);
            application.setResumeFileName(originalFileName);
            application.setResumePath(filePath.toString());

            CareerApplication savedApplication =
                    careerApplicationRepository.save(application);

            System.out.println(
                    "Application saved successfully. ID: "
                            + savedApplication.getId()
            );

            return ResponseEntity.ok(
                    Map.of(
                            "message", "Application submitted successfully.",
                            "application", savedApplication
                    )
            );

        } catch (IOException exception) {
            return ResponseEntity.internalServerError().body(
                    Map.of("message", "Resume upload failed. Please try again.")
            );
        }
    }

    @GetMapping("/applications")
    public List<CareerApplication> getAllApplications() {
        return careerApplicationRepository.findAll();
    }

    @GetMapping("/applications/{id}/resume")
    public ResponseEntity<?> openResume(@PathVariable Long id) {
        CareerApplication application = careerApplicationRepository
                .findById(id)
                .orElse(null);

        if (application == null) {
            return ResponseEntity.status(404).body(
                    Map.of("message", "Application not found.")
            );
        }

        try {
            Path resumeFilePath = Paths.get(application.getResumePath())
                    .toAbsolutePath()
                    .normalize();

            Resource resumeResource =
                    new UrlResource(resumeFilePath.toUri());

            if (!resumeResource.exists() || !resumeResource.isReadable()) {
                return ResponseEntity.status(404).body(
                        Map.of("message", "Resume file not found.")
                );
            }

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .header(
                            HttpHeaders.CONTENT_DISPOSITION,
                            ContentDisposition.inline()
                                    .filename(
                                            application.getResumeFileName(),
                                            StandardCharsets.UTF_8
                                    )
                                    .build()
                                    .toString()
                    )
                    .body(resumeResource);

        } catch (Exception exception) {
            return ResponseEntity.internalServerError().body(
                    Map.of("message", "Unable to open resume.")
            );
        }
    }

    @DeleteMapping("/applications/{id}")
    public ResponseEntity<?> deleteApplication(@PathVariable Long id) {
        CareerApplication application = careerApplicationRepository
                .findById(id)
                .orElse(null);

        if (application == null) {
            return ResponseEntity.status(404).body(
                    Map.of("message", "Application not found.")
            );
        }

        try {
            if (application.getResumePath() != null
                    && !application.getResumePath().isBlank()) {

                Path resumeFilePath = Paths.get(application.getResumePath())
                        .toAbsolutePath()
                        .normalize();

                Files.deleteIfExists(resumeFilePath);
            }

            careerApplicationRepository.delete(application);

            return ResponseEntity.ok(
                    Map.of("message", "Application deleted successfully.")
            );

        } catch (IOException exception) {
            return ResponseEntity.internalServerError().body(
                    Map.of("message", "Unable to delete application.")
            );
        }
    }
}
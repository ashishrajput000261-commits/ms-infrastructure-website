package com.msteleinfra.backend.controller;

import com.msteleinfra.backend.entity.Career;
import com.msteleinfra.backend.service.CareerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/careers")
@CrossOrigin(origins = "http://localhost:5173")
public class CareerController {

    private final CareerService careerService;

    public CareerController(CareerService careerService) {
        this.careerService = careerService;
    }

    @PostMapping
    public Career createCareer(@RequestBody Career career) {
        return careerService.saveCareer(career);
    }

    @GetMapping
    public List<Career> getAllCareers() {
        return careerService.getAllCareers();
    }

    @GetMapping("/{id}")
    public Career getCareerById(@PathVariable Long id) {
        return careerService.getCareerById(id);
    }

    @PutMapping("/{id}")
    public Career updateCareer(@PathVariable Long id, @RequestBody Career career) {
        return careerService.updateCareer(id, career);
    }

    @DeleteMapping("/{id}")
    public String deleteCareer(@PathVariable Long id) {
        careerService.deleteCareer(id);
        return "Career deleted successfully";
    }
}
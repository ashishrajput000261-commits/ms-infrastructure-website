package com.msteleinfra.backend.service;

import com.msteleinfra.backend.entity.Career;
import com.msteleinfra.backend.repository.CareerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CareerService {

    private final CareerRepository careerRepository;

    public CareerService(CareerRepository careerRepository) {
        this.careerRepository = careerRepository;
    }

    public Career saveCareer(Career career) {
        return careerRepository.save(career);
    }

    public List<Career> getAllCareers() {
        return careerRepository.findAll();
    }

    public Career getCareerById(Long id) {
        return careerRepository.findById(id).orElse(null);
    }

    public Career updateCareer(Long id, Career careerDetails) {
        Career career = careerRepository.findById(id).orElse(null);

        if (career == null) {
            return null;
        }

        career.setJobTitle(careerDetails.getJobTitle());
        career.setDepartment(careerDetails.getDepartment());
        career.setLocation(careerDetails.getLocation());
        career.setEmploymentType(careerDetails.getEmploymentType());
        career.setExperience(careerDetails.getExperience());
        career.setDescription(careerDetails.getDescription());
        career.setStatus(careerDetails.getStatus());

        return careerRepository.save(career);
    }

    public void deleteCareer(Long id) {
        careerRepository.deleteById(id);
    }
}
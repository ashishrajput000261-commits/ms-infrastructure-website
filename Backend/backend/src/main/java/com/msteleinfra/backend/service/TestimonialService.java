package com.msteleinfra.backend.service;

import com.msteleinfra.backend.entity.Testimonial;
import com.msteleinfra.backend.repository.TestimonialRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestimonialService {

    private final TestimonialRepository testimonialRepository;

    public TestimonialService(TestimonialRepository testimonialRepository) {
        this.testimonialRepository = testimonialRepository;
    }

    public Testimonial saveTestimonial(Testimonial testimonial) {
        return testimonialRepository.save(testimonial);
    }

    public List<Testimonial> getAllTestimonials() {
        return testimonialRepository.findAll();
    }

    public Testimonial updateTestimonial(Long id, Testimonial details) {
        Testimonial testimonial = testimonialRepository.findById(id).orElse(null);

        if (testimonial == null) {
            return null;
        }

        testimonial.setClientName(details.getClientName());
        testimonial.setCompany(details.getCompany());
        testimonial.setFeedback(details.getFeedback());
        testimonial.setRating(details.getRating());
        testimonial.setImageUrl(details.getImageUrl());

        return testimonialRepository.save(testimonial);
    }

    public void deleteTestimonial(Long id) {
        testimonialRepository.deleteById(id);
    }
}
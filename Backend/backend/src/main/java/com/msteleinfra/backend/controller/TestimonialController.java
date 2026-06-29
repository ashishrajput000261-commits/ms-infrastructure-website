package com.msteleinfra.backend.controller;

import com.msteleinfra.backend.entity.Testimonial;
import com.msteleinfra.backend.service.TestimonialService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/testimonials")
@CrossOrigin(origins = "http://localhost:5173")
public class TestimonialController {

    private final TestimonialService testimonialService;

    public TestimonialController(TestimonialService testimonialService) {
        this.testimonialService = testimonialService;
    }

    @PostMapping
    public Testimonial createTestimonial(@RequestBody Testimonial testimonial) {
        return testimonialService.saveTestimonial(testimonial);
    }

    @GetMapping
    public List<Testimonial> getAllTestimonials() {
        return testimonialService.getAllTestimonials();
    }

    @PutMapping("/{id}")
    public Testimonial updateTestimonial(@PathVariable Long id, @RequestBody Testimonial testimonial) {
        return testimonialService.updateTestimonial(id, testimonial);
    }

    @DeleteMapping("/{id}")
    public String deleteTestimonial(@PathVariable Long id) {
        testimonialService.deleteTestimonial(id);
        return "Testimonial deleted successfully";
    }
}
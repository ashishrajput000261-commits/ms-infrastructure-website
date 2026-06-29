package com.msteleinfra.backend.controller;

import com.msteleinfra.backend.entity.Gallery;
import com.msteleinfra.backend.service.GalleryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gallery")
@CrossOrigin(origins = "http://localhost:5173")
public class GalleryController {

    private final GalleryService galleryService;

    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    @PostMapping
    public Gallery createGallery(@RequestBody Gallery gallery) {
        return galleryService.saveGallery(gallery);
    }

    @GetMapping
    public List<Gallery> getAllGallery() {
        return galleryService.getAllGallery();
    }

    @PutMapping("/{id}")
    public Gallery updateGallery(@PathVariable Long id, @RequestBody Gallery gallery) {
        return galleryService.updateGallery(id, gallery);
    }

    @DeleteMapping("/{id}")
    public String deleteGallery(@PathVariable Long id) {
        galleryService.deleteGallery(id);
        return "Gallery deleted successfully";
    }
}
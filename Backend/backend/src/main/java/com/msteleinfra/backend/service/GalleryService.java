package com.msteleinfra.backend.service;

import com.msteleinfra.backend.entity.Gallery;
import com.msteleinfra.backend.repository.GalleryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GalleryService {

    private final GalleryRepository galleryRepository;

    public GalleryService(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    public Gallery saveGallery(Gallery gallery) {
        return galleryRepository.save(gallery);
    }

    public List<Gallery> getAllGallery() {
        return galleryRepository.findAll();
    }

    public Gallery updateGallery(Long id, Gallery galleryDetails) {
        Gallery gallery = galleryRepository.findById(id).orElse(null);

        if (gallery == null) {
            return null;
        }

        gallery.setTitle(galleryDetails.getTitle());
        gallery.setImageUrl(galleryDetails.getImageUrl());
        gallery.setCategory(galleryDetails.getCategory());
        gallery.setDescription(galleryDetails.getDescription());

        return galleryRepository.save(gallery);
    }

    public void deleteGallery(Long id) {
        galleryRepository.deleteById(id);
    }
}
import API from "../utils/axiosConfig";

export const getGallery = () => API.get("/gallery");

export const getGalleryItem = (id) => API.get(`/gallery/${id}`);

export const createGalleryItem = (data) => API.post("/gallery", data);

export const updateGalleryItem = (id, data) => API.put(`/gallery/${id}`, data);

export const deleteGalleryItem = (id) => API.delete(`/gallery/${id}`);
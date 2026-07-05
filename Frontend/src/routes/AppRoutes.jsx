import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Clients from "../pages/Clients";
import Careers from "../pages/Careers";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import AdminContacts from "../pages/AdminContacts";
import AdminApplications from "../pages/AdminApplications";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminCareers from "../pages/admin/AdminCareers";
import AdminGallery from "../pages/admin/AdminGallery";
import AdminTestimonials from "../pages/admin/AdminTestimonials";
import AdminEnquiries from "../pages/admin/AdminEnquiries";
import ProtectedRoute from "../components/admin/ProtectedRoute";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/careers"
  element={
    <ProtectedRoute>
      <AdminCareers />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/gallery"
  element={
    <ProtectedRoute>
      <AdminGallery />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/testimonials"
  element={
    <ProtectedRoute>
      <AdminTestimonials />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/enquiries"
  element={
    <ProtectedRoute>
      <AdminEnquiries />
    </ProtectedRoute>
  }
/>
          
          

          <Route path="/admin/contacts" element={<AdminContacts />} />
          <Route
            path="/admin/applications"
            element={<AdminApplications />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
import React from "react";
import {
  FiArrowRight,
  FiCamera,
  FiRadio,
  FiWifi,
  FiTool,
  FiMapPin,
  FiServer,
  FiUsers,
} from "react-icons/fi";

import { getGallery } from "../api/galleryApi.js";
import useFetch from "../hooks/useFetch.js";

const categories = [
  { icon: <FiRadio />, title: "Telecom Towers" },
  { icon: <FiWifi />, title: "Fiber Networks" },
  { icon: <FiMapPin />, title: "Site Surveys" },
  { icon: <FiTool />, title: "Network Maintenance" },
  { icon: <FiServer />, title: "Smart Infrastructure" },
  { icon: <FiUsers />, title: "Team Operations" },
];

const stats = [
  { value: "50+", label: "Projects" },
  { value: "100+", label: "Sites" },
  { value: "500+", label: "KM Fiber" },
  { value: "24/7", label: "Support" },
];

const Gallery = () => {
  const { data: galleryItems, loading, error } = useFetch(getGallery);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-2xl font-bold">
        Loading Gallery...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-red-500 text-2xl font-bold">
        Failed to load gallery.
      </div>
    );
  }

  return (
    <main className="bg-slate-950 text-white">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"></div>
        <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-5">
            Project Gallery
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Showcasing Our
            <span className="block text-cyan-400">Infrastructure Work</span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            Explore our telecom, fiber, tower, site survey, maintenance, and
            field operation work through a professional project gallery.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Gallery Categories
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Infrastructure Work Areas
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-3xl mb-6 group-hover:bg-cyan-400 group-hover:text-slate-950 transition">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Visual Showcase
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Project Image Gallery
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.length === 0 ? (
              <p className="text-slate-300 col-span-full text-center">
                No gallery items available.
              </p>
            ) : (
              galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative aspect-video overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-cyan-950 hover:border-cyan-400/60 transition"
                >
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-90 transition"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FiCamera className="text-6xl text-cyan-400/40 group-hover:text-cyan-400 transition" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/5 transition"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent">
                    <span className="text-xs font-bold tracking-[0.25em] text-cyan-400">
                      {item.category || `IMG-00${index + 1}`}
                    </span>
                    <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                    <p className="text-sm text-slate-300 mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative min-h-[420px] rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 to-cyan-950 flex items-center justify-center overflow-hidden">
              <FiRadio className="text-[140px] text-cyan-400/30" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-3">
                  Featured Work
                </p>
                <h3 className="text-3xl font-black">
                  Telecom Site Deployment
                </h3>
              </div>
            </div>
          </div>

          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Project Highlight
            </p>

            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Professional Field Execution And Quality Support
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our gallery represents field operations such as telecom tower
              work, fiber deployment, site inspection, network testing,
              maintenance activities, and project coordination.
            </p>

            <div className="space-y-5">
              {[
                "Site survey and planning documentation",
                "Telecom tower and network deployment support",
                "Fiber laying, splicing, and testing work",
                "Maintenance, safety, and quality inspection",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <FiArrowRight />
                  </div>
                  <p className="text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center"
            >
              <h3 className="text-4xl md:text-5xl font-black text-cyan-400 mb-3">
                {stat.value}
              </h3>
              <p className="text-slate-300 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Want To See More Projects?
          </h2>

          <p className="text-lg md:text-xl mb-10 font-medium">
            Contact our team to learn more about our telecom and infrastructure
            project capabilities.
          </p>

          <a
            href="/contact"
            className="bg-slate-950 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-slate-900 transition"
          >
            Contact Our Team
            <FiArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
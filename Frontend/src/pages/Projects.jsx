import { getProjects } from "../api/projectApi";
import useFetch from "../hooks/useFetch";
import React from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiRadio,
  FiWifi,
  FiServer,
  FiActivity,
} from "react-icons/fi";

const projects = [
  {
    title: "5G Network Rollout",
    location: "Metro & Urban Sites",
    category: "Telecom Deployment",
    desc: "End-to-end telecom site rollout support for high-speed mobile network expansion.",
    icon: <FiRadio />,
  },
  {
    title: "Fiber Backbone Deployment",
    location: "City Connectivity Zones",
    category: "Fiber Infrastructure",
    desc: "OFC laying, splicing, testing, and route support for reliable broadband connectivity.",
    icon: <FiWifi />,
  },
  {
    title: "Telecom Tower Infrastructure",
    location: "Rural & Semi-Urban Areas",
    category: "Tower Projects",
    desc: "Tower site development, survey support, installation coordination, and maintenance.",
    icon: <FiServer />,
  },
  {
    title: "Enterprise Network Upgrade",
    location: "Corporate Campuses",
    category: "Enterprise Solutions",
    desc: "Structured network infrastructure support for enterprise and commercial facilities.",
    icon: <FiActivity />,
  },
  {
    title: "Smart City Connectivity",
    location: "Smart Infrastructure Zones",
    category: "Smart Infrastructure",
    desc: "Network infrastructure support for smart poles, IoT nodes, and city-wide connectivity.",
    icon: <FiRadio />,
  },
  {
    title: "Data Center Connectivity",
    location: "Business & IT Parks",
    category: "Data Connectivity",
    desc: "High-reliability fiber and network connectivity support for data and cloud facilities.",
    icon: <FiServer />,
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100+", label: "Sites Supported" },
  { value: "500+", label: "KM Fiber Work" },
  { value: "24/7", label: "Field Support" },
];

const industries = [
  "Telecom Operators",
  "Government Projects",
  "Enterprise Networks",
  "Smart Cities",
  "Data Centers",
  "Utilities",
];

const Projects = () => {
  const { data: projects, loading, error } = useFetch(getProjects);
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"></div>
        <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-5">
            Our Projects
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Delivering Large Scale
            <span className="block text-cyan-400">
              Telecom Infrastructure
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            We support telecom, fiber, enterprise, and smart infrastructure
            projects with reliable planning, deployment, testing, and
            maintenance services.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Featured Work
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Project Portfolio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-44 bg-gradient-to-br from-slate-800 to-cyan-950 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-3xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-4xl group-hover:bg-cyan-400 group-hover:text-slate-950 transition">
                    {project.icon}
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <FiMapPin className="text-cyan-400" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Case Study */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Case Study
            </p>

            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Fiber Network Deployment For High-Speed Connectivity
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our team supported fiber route planning, OFC laying coordination,
              splicing, testing, and quality verification to improve network
              performance and connectivity reliability.
            </p>

            <div className="space-y-5">
              {[
                "Route survey and planning support",
                "Fiber laying and splicing coordination",
                "Testing and quality inspection",
                "Post-deployment maintenance support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <FiCheckCircle />
                  </div>
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-8">Project Results</h3>

            <div className="space-y-6">
              {[
                { label: "Coverage Improvement", value: "Enhanced" },
                { label: "Deployment Speed", value: "Faster" },
                { label: "Network Reliability", value: "Improved" },
                { label: "Maintenance Response", value: "24/7" },
              ].map((result, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-slate-800 pb-5"
                >
                  <span className="text-slate-400">{result.label}</span>
                  <span className="text-cyan-400 font-bold">
                    {result.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Industries Served
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Built For Modern Infrastructure Needs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400/60 transition"
              >
                <FiArrowRight className="text-cyan-400 text-2xl mb-5" />
                <h3 className="text-2xl font-bold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Have A Project In Mind?
          </h2>

          <p className="text-lg md:text-xl mb-10 font-medium">
            Let&apos;s build reliable telecom and infrastructure solutions
            together.
          </p>

          <a
            href="/contact"
            className="bg-slate-950 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-slate-900 transition"
          >
            Contact Us
            <FiArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Projects;
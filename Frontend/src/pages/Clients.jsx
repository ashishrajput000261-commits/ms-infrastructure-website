import React from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiCpu,
  FiGlobe,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const categories = [
  {
    icon: <FiGlobe />,
    title: "Telecom Operators",
    desc: "Supporting telecom companies with network deployment, fiber, tower, and maintenance services.",
  },
  {
    icon: <FiShield />,
    title: "Government Projects",
    desc: "Reliable infrastructure support for public connectivity, smart city, and utility networks.",
  },
  {
    icon: <FiBriefcase />,
    title: "Enterprise Clients",
    desc: "Helping businesses build secure and scalable network infrastructure for daily operations.",
  },
  {
    icon: <FiCpu />,
    title: "Infrastructure Partners",
    desc: "Working with contractors and technology partners for end-to-end project execution.",
  },
];

const clients = [
  "Telecom Partner",
  "Fiber Network Client",
  "Enterprise Client",
  "Smart City Partner",
  "Infrastructure Partner",
  "Government Project",
  "Utility Network",
  "Data Center Client",
];

const benefits = [
  "Quality-focused delivery",
  "Skilled technical workforce",
  "Timely project execution",
  "Safety-first work approach",
  "Reliable maintenance support",
  "Transparent communication",
];

const testimonials = [
  {
    name: "Project Manager",
    role: "Telecom Infrastructure Client",
    text: "The team provided reliable field support and completed deployment activities with proper coordination and quality checks.",
  },
  {
    name: "Operations Head",
    role: "Enterprise Network Client",
    text: "MS Infrastructure helped us improve network readiness with professional execution and responsive maintenance support.",
  },
  {
    name: "Site Coordinator",
    role: "Fiber Project Partner",
    text: "Their work process is structured, practical, and focused on timely completion of telecom infrastructure tasks.",
  },
];

const Clients = () => {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"></div>
        <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-5">
            Our Clients
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Trusted By
            <span className="block text-cyan-400">Industry Partners</span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            We work with telecom, enterprise, government, and infrastructure
            partners to deliver reliable connectivity and field execution
            support.
          </p>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Client Segments
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Who We Work With
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-3xl mb-6 group-hover:bg-cyan-400 group-hover:text-slate-950 transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Trusted Network
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Our Collaboration Areas
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="h-36 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center text-center p-6 hover:border-cyan-400/60 transition"
              >
                <div>
                  <FiUsers className="text-cyan-400 text-3xl mx-auto mb-4" />
                  <h3 className="font-black tracking-widest uppercase text-sm">
                    {client}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partners Trust Us */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Why Partners Trust Us
            </p>

            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Built On Quality, Safety And Timely Delivery
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our work approach focuses on strong coordination, practical
              execution, safety standards, and dependable support for every
              infrastructure project.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((item, index) => (
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
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black text-cyan-400">50+</h3>
                <p className="text-slate-400 mt-2">Projects</p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black text-cyan-400">100+</h3>
                <p className="text-slate-400 mt-2">Sites</p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black text-cyan-400">24/7</h3>
                <p className="text-slate-400 mt-2">Support</p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black text-cyan-400">5G</h3>
                <p className="text-slate-400 mt-2">Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              What Partners Say
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
              >
                <p className="text-slate-300 leading-relaxed mb-8">
                  “{item.text}”
                </p>

                <div className="border-t border-slate-800 pt-6">
                  <h3 className="font-bold text-white">{item.name}</h3>
                  <p className="text-cyan-400 text-sm mt-1">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Become Our Next Success Story
          </h2>

          <p className="text-lg md:text-xl mb-10 font-medium">
            Partner with us for reliable telecom, fiber, and infrastructure
            project execution.
          </p>

          <a
            href="/contact"
            className="bg-slate-950 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-slate-900 transition"
          >
            Work With Us
            <FiArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Clients;
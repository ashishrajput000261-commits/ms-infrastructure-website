import React from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiUsers,
  FiTrendingUp,
  FiTool,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const whyWork = [
  {
    icon: <FiTrendingUp />,
    title: "Growth Opportunities",
    desc: "Learn telecom, fiber, networking, field operations, and project execution from real industry work.",
  },
  {
    icon: <FiTool />,
    title: "Industry Exposure",
    desc: "Work on telecom infrastructure, fiber networks, site deployment, and maintenance projects.",
  },
  {
    icon: <FiUsers />,
    title: "Skilled Team",
    desc: "Collaborate with experienced professionals and improve your technical and communication skills.",
  },
  {
    icon: <FiBriefcase />,
    title: "Real Projects",
    desc: "Get practical exposure through live company projects and structured field/project tasks.",
  },
];

const jobs = [
  {
    title: "Telecom Engineer",
    type: "Full Time",
    location: "On-site / Field",
    desc: "Responsible for telecom site support, network deployment coordination, and quality checks.",
  },
  {
    title: "Fiber Technician",
    type: "Full Time",
    location: "Field Work",
    desc: "Support OFC laying, fiber splicing, route testing, and maintenance operations.",
  },
  {
    title: "Site Supervisor",
    type: "Full Time",
    location: "Project Site",
    desc: "Manage daily site activities, team coordination, safety checks, and execution updates.",
  },
  {
    title: "Project Coordinator",
    type: "Full Time",
    location: "Office / Site",
    desc: "Coordinate project planning, documentation, client updates, and team communication.",
  },
  {
    title: "Full Stack Developer Intern",
    type: "Internship",
    location: "Remote / Hybrid",
    desc: "Work on company website, admin panels, backend APIs, and digital workflow tools.",
  },
];

const benefits = [
  "Learning environment",
  "Career development",
  "Flexible work culture",
  "Team collaboration",
  "Real industry exposure",
  "Skill-based growth",
];

const hiringSteps = ["Apply", "Screening", "Interview", "Selection"];

const Careers = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-24 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-cyan-50"></div>
        <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-cyan-600 font-semibold uppercase tracking-[0.35em] text-sm mb-5">
            Careers
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            Join Our Team
            <span className="block text-cyan-600 mt-2">
              Build The Future Of Telecom
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
            Start or grow your career with MS Infrastructure. Work on telecom,
            fiber, network, and digital infrastructure projects with practical
            learning and professional guidance.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-600 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Why Work With Us
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Grow With Real Infrastructure Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWork.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-14 w-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-cyan-600 group-hover:text-white transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-cyan-600 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Open Positions
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Current Career Opportunities
            </h2>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-cyan-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex gap-5">
                    <div className="h-14 w-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-3xl shrink-0">
                      <FiBriefcase />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">
                        {job.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed mb-4 max-w-3xl">
                        {job.desc}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-medium">
                        <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full">
                          <FiClock className="text-cyan-600" />
                          {job.type}
                        </span>

                        <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full">
                          <FiMapPin className="text-cyan-600" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="bg-cyan-600 text-white px-6 py-3 rounded-full font-bold inline-flex items-center justify-center gap-3 hover:bg-cyan-700 transition shrink-0"
                  >
                    Apply Now
                    <FiArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-600 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Benefits
            </p>

            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">
              A Workplace Designed For Learning And Growth
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We value practical skills, teamwork, discipline, and continuous
              improvement. Our environment helps students, interns, and
              professionals gain useful real-world experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                    <FiCheckCircle size={20} />
                  </div>
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
                <h3 className="text-4xl font-black text-cyan-600">Live</h3>
                <p className="text-slate-500 font-medium mt-2">Projects</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
                <h3 className="text-4xl font-black text-cyan-600">Team</h3>
                <p className="text-slate-500 font-medium mt-2">Learning</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
                <h3 className="text-4xl font-black text-cyan-600">Skill</h3>
                <p className="text-slate-500 font-medium mt-2">Growth</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
                <h3 className="text-4xl font-black text-cyan-600">Career</h3>
                <p className="text-slate-500 font-medium mt-2">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-600 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Hiring Process
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Simple Selection Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {hiringSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-shadow"
              >
                <span className="text-6xl font-black text-cyan-100">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-bold mt-6 text-slate-900">{step}</h3>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  We follow a clear and professional process for every
                  candidate.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready To Build Your Career?
          </h2>

          <p className="text-lg md:text-xl mb-10 font-medium text-cyan-100">
            Apply today and start working on real telecom and infrastructure
            projects.
          </p>

          <a
            href="/contact"
            className="bg-white text-cyan-700 px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-slate-100 hover:shadow-lg transition-all"
          >
            Apply Now
            <FiArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Careers;
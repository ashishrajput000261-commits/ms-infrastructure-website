import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiRadio,
  FiWifi,
  FiTool,
  FiShield,
  FiZap,
} from "react-icons/fi";

const featuredBlogs = [
  {
    title: "5G Infrastructure Growth",
    desc: "How modern telecom infrastructure is supporting faster connectivity and better coverage.",
    icon: <FiRadio />,
  },
  {
    title: "Fiber Network Expansion",
    desc: "Why fiber backbone deployment is important for enterprise, telecom, and smart city projects.",
    icon: <FiWifi />,
  },
  {
    title: "Smart City Connectivity",
    desc: "The role of telecom networks, IoT infrastructure, and field operations in connected cities.",
    icon: <FiZap />,
  },
];

const blogs = [
  {
    category: "Telecom",
    title: "Telecom Tower Deployment",
    desc: "Key steps involved in telecom tower planning, installation support, and site readiness.",
  },
  {
    category: "Fiber",
    title: "Fiber Optic Networks",
    desc: "Understanding OFC laying, splicing, testing, and maintenance for strong connectivity.",
  },
  {
    category: "Maintenance",
    title: "Network Maintenance",
    desc: "How preventive maintenance helps reduce downtime and improves network reliability.",
  },
  {
    category: "Technology",
    title: "Smart Infrastructure",
    desc: "How smart poles, IoT systems, and connected devices depend on strong network infrastructure.",
  },
  {
    category: "Power",
    title: "Power Backup Systems",
    desc: "Why DG systems, battery backup, and power audits are important for telecom sites.",
  },
  {
    category: "Safety",
    title: "Field Safety Standards",
    desc: "Best practices for safe and professional work during site operations and deployments.",
  },
];

const categories = [
  "Telecom",
  "Fiber",
  "Infrastructure",
  "Technology",
  "Safety",
  "Projects",
];

const Blog = () => {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"></div>
        <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-5">
            Insights & Updates
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Latest From
            <span className="block text-cyan-400">
              Telecom Infrastructure
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            Explore articles, updates, and insights related to telecom networks,
            fiber infrastructure, site operations, maintenance, and smart
            connectivity.
          </p>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Featured Insights
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Industry Focus Areas
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <div
                key={index}
                className="group bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-3xl mb-6 group-hover:bg-cyan-400 group-hover:text-slate-950 transition">
                  {blog.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {blog.desc}
                </p>

                <button className="text-cyan-400 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read Insight
                  <FiArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Articles
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Latest Knowledge Posts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400/60 transition-all duration-300"
              >
                <div className="h-44 bg-gradient-to-br from-slate-800 to-cyan-950 flex items-center justify-center">
                  <FiBookOpen className="text-6xl text-cyan-400/50" />
                </div>

                <div className="p-8">
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">
                    {blog.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {blog.desc}
                  </p>

                  <button className="text-cyan-400 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                    <FiArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Categories
            </p>

            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Explore Topics By Interest
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              Browse insights based on telecom deployment, fiber networks,
              infrastructure work, technology updates, field safety, and project
              execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/60 transition"
              >
                <FiArrowRight className="text-cyan-400 text-2xl mb-4" />
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Stay Updated With MS Infrastructure
          </h2>

          <p className="text-lg md:text-xl mb-10 font-medium">
            Follow our latest updates, articles, and infrastructure insights.
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

export default Blog;
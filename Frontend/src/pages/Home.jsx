import { FiArrowRight, FiRadio, FiWifi, FiServer } from "react-icons/fi";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen py-32 bg-slate-950 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm mb-4">
            MS Telecom & Infrastructure
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Building The Future Of
            <span className="block text-cyan-400">
              Telecom Infrastructure
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg mb-10">
            Delivering telecom networks, fiber infrastructure, enterprise
            connectivity, and next-generation digital transformation solutions
            across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl font-bold text-slate-950 transition">
              Explore Services
            </button>

            <button className="border border-cyan-500 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-500/10 transition">
              Contact Us <FiArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              ["150+", "Projects Delivered"],
              ["50+", "Enterprise Clients"],
              ["24/7", "Network Monitoring"],
              ["99.9%", "Uptime SLA"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="bg-slate-900/70 border border-cyan-500/20 rounded-xl p-5 text-center"
              >
                <h3 className="text-3xl font-black text-cyan-400">{num}</h3>
                <p className="text-slate-300 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-900 py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-widest mb-3">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Telecom & Infrastructure Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-400 transition">
              <FiWifi className="text-4xl text-cyan-400 mb-5" />
              <h3 className="text-2xl font-bold mb-4">Fiber Network</h3>
              <p className="text-slate-400">
                End-to-end fiber deployment, maintenance and enterprise
                connectivity solutions.
              </p>
            </div>

            <div className="bg-slate-950 border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-400 transition">
              <FiRadio className="text-4xl text-cyan-400 mb-5" />
              <h3 className="text-2xl font-bold mb-4">Telecom Towers</h3>
              <p className="text-slate-400">
                Tower installation, optimization and telecom infrastructure
                development.
              </p>
            </div>

            <div className="bg-slate-950 border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-400 transition">
              <FiServer className="text-4xl text-cyan-400 mb-5" />
              <h3 className="text-2xl font-bold mb-4">Network Operations</h3>
              <p className="text-slate-400">
                24/7 monitoring, support and enterprise-grade network
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 uppercase tracking-widest text-cyan-400">
              Featured Projects
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Recent Infrastructure Deployments
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "National Fiber Rollout",
                desc: "Large-scale fiber deployment connecting enterprise hubs with high-speed reliable infrastructure.",
              },
              {
                title: "Smart Tower Network",
                desc: "Modern telecom tower infrastructure deployment designed for scalable 5G-ready connectivity.",
              },
              {
                title: "Enterprise Connectivity",
                desc: "Secure and high-availability network solutions for businesses, campuses and industrial clients.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="mb-6 h-40 rounded-xl bg-gradient-to-br from-cyan-500/20 to-slate-950"></div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-6 text-slate-400">{project.desc}</p>

                <button className="flex items-center gap-2 font-bold text-cyan-400">
                  View Project <FiArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-500 px-6 py-20 text-center text-slate-950">
        <h2 className="mb-4 text-4xl font-black">
          Ready To Build Future Infrastructure?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg font-semibold">
          Let’s discuss your telecom, fiber and infrastructure project
          requirements.
        </p>

        <button className="rounded-xl bg-slate-950 px-8 py-4 font-bold text-white transition hover:bg-slate-800">
          Contact Us
        </button>
      </section>
    </>
  );
};

export default Home;
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="mb-4 text-cyan-400 font-semibold tracking-widest">
              TELECOM • FIBER • INFRASTRUCTURE
            </p>

            <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
              Building The Future Of
              <span className="block text-cyan-400">
                Digital Infrastructure
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg text-slate-300">
              MS Infrastructure delivers telecom deployment, fiber network
              solutions, tower installation and next-generation connectivity
              projects across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:scale-105"
              >
                Get Started
              </Link>

              <Link
                to="/projects"
                className="rounded-lg border border-cyan-500 px-8 py-4 font-bold text-white transition hover:bg-cyan-500"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
              <h3 className="text-4xl font-black text-cyan-400">500+</h3>
              <p className="mt-2 text-slate-300">Projects Delivered</p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
              <h3 className="text-4xl font-black text-cyan-400">50+</h3>
              <p className="mt-2 text-slate-300">Enterprise Clients</p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
              <h3 className="text-4xl font-black text-cyan-400">24/7</h3>
              <p className="mt-2 text-slate-300">Network Support</p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
              <h3 className="text-4xl font-black text-cyan-400">10+</h3>
              <p className="mt-2 text-slate-300">Years Experience</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;0
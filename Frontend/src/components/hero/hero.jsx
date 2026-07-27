import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
      {/* Subtle Tech Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      {/* Animated Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-10 top-20 h-96 w-96 rounded-full bg-cyan-600/20 blur-[100px] animate-pulse"></div>
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:py-0">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side: Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping mr-2"></span>
              <span className="h-2 w-2 rounded-full bg-cyan-400 absolute mr-2"></span>
              <p className="ml-4 text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
                Telecom • Fiber • Infrastructure
              </p>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
              Building The Future Of{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg mt-2">
                Digital Infrastructure
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
              MS Infrastructure delivers telecom deployment, fiber network
              solutions, tower installation, and next-generation connectivity
              projects across India.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition-all hover:scale-[1.02] hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
              >
                Get Started
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/30" />
                </div>
              </Link>

              <Link
                to="/projects"
                className="rounded-xl border border-cyan-500/50 bg-slate-950/50 px-8 py-4 font-bold text-cyan-400 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* Stat Card 1 */}
            <div className="group cursor-default rounded-3xl border border-cyan-500/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-800/60 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.3)]">
              <div className="mb-4 h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-4xl font-black text-white">500<span className="text-cyan-400">+</span></h3>
              <p className="mt-2 text-sm font-medium text-slate-400 group-hover:text-cyan-300 transition-colors">Projects Delivered</p>
            </div>

            {/* Stat Card 2 */}
            <div className="group cursor-default mt-0 lg:mt-8 rounded-3xl border border-cyan-500/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-800/60 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.3)]">
               <div className="mb-4 h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-4xl font-black text-white">50<span className="text-blue-400">+</span></h3>
              <p className="mt-2 text-sm font-medium text-slate-400 group-hover:text-blue-300 transition-colors">Enterprise Clients</p>
            </div>

            {/* Stat Card 3 */}
            <div className="group cursor-default rounded-3xl border border-cyan-500/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-800/60 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.3)]">
               <div className="mb-4 h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-4xl font-black text-white">24/7</h3>
              <p className="mt-2 text-sm font-medium text-slate-400 group-hover:text-cyan-300 transition-colors">Network Support</p>
            </div>

            {/* Stat Card 4 */}
            <div className="group cursor-default mt-0 lg:mt-8 rounded-3xl border border-cyan-500/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-800/60 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.3)]">
               <div className="mb-4 h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-black text-white">10<span className="text-blue-400">+</span></h3>
              <p className="mt-2 text-sm font-medium text-slate-400 group-hover:text-blue-300 transition-colors">Years Experience</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
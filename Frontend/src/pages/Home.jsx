import React from 'react';
import { motion } from 'framer-motion';
import { FiRadio, FiShield, FiCpu, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import Hero from '../components/hero/Hero';

// Sample Modular Arrays mapping to core components requirement
const capabilities = [
  { icon: <FiRadio />, title: '5G Core Rollout', desc: 'Accelerated deployment of dense cell networks with zero architectural latency footprint.' },
  { icon: <FiCpu />, title: 'Dark Fiber Infrastructure', desc: 'High-strand-count fiber networks providing ultimate enterprise secure lines.' },
  { icon: <FiShield />, title: 'Edge Micro Centers', desc: 'Hardened facilities positioned closer to workloads to optimize compute processing.' },
];

const homeProjects = [
  { tag: 'Telecom', title: 'Metro Core 5G Expansion', loc: 'Chicago Metroplex', stat: 'Completed' },
  { tag: 'Infrastructure', title: 'Trans-Continental Fiber Array', loc: 'Pacific Seaboard', stat: 'In Progress' },
];

const homeTestimonials = [
  { quote: "MS Infrastructure executed our primary cloud node rollout two months ahead of schedule with flawless compliance metrics.", author: "Marcus Vance", role: "CTO, Nexus Corp Network" },
];

const clientLogos = ['QuantumTel', 'AeroNet Systems', 'Vertex Telecom', 'Horizon Cloud'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <div className="bg-slate-950 text-white select-none">
      <Hero />

      {/* Services Showcase Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-3">Core Engineering</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">High-Performance Capabilities</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {capabilities.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="text-3xl text-cyan-400 mb-6 p-3 bg-slate-950 rounded-xl inline-block group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-3">Deployments</h2>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">Critical Deliveries</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeProjects.map((project, index) => (
              <div key={index} className="relative h-[350px] rounded-2xl overflow-hidden border border-slate-800 group bg-slate-950 flex flex-col justify-end p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                {/* Tech aesthetics decoration */}
                <div className="absolute top-6 right-6 z-20 text-xs font-bold uppercase px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 rounded-full tracking-wider">
                  {project.stat}
                </div>
                <div className="relative z-20">
                  <span className="text-xs font-black text-cyan-400 tracking-widest uppercase">{project.tag}</span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide mt-2 mb-1">{project.title}</h3>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{project.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Trusted by Enterprise Grid Partners</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          {clientLogos.map((logo, i) => (
            <span key={i} className="text-lg font-black tracking-widest text-slate-400 border border-dashed border-slate-800 px-6 py-3 rounded-lg bg-slate-900/20">{logo}</span>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-12">Performance Proof</h2>
          {homeTestimonials.map((t, idx) => (
            <div key={idx} className="space-y-6">
              <p className="text-lg sm:text-2xl font-medium italic text-slate-300 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <h4 className="text-white font-bold tracking-wide uppercase text-sm">{t.author}</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight mb-4">Initialize System Diagnostics</h3>
            <p className="text-slate-400 text-sm sm:text-base font-medium">Connect with architectural estimators to finalize your enterprise scope parameters.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:max-w-md flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              required
              placeholder="ENTER SECURE EMAIL" 
              className="w-full px-5 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-xs font-bold tracking-widest uppercase"
            />
            <button className="w-full sm:w-auto shrink-0 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black tracking-widest uppercase px-6 py-4 rounded-xl transition-colors">
              Connect
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
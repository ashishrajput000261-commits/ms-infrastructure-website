import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiActivity, FiGlobe, FiRadio } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden pt-20">
      {/* Sci-Fi Ambient Grid Grid and Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Tech Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Futuristic Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Next-Gen Infrastructure Solutions
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase"
        >
          Architecting The Future <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            Of Telecommunications
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-slate-400 text-base sm:text-xl font-medium leading-relaxed mb-10"
        >
          Deploying mission-critical fiber networks, ultra-dense 5G macrocells, and smart hyperscale data centers across global tech hubs. 
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-slate-950 tracking-wider uppercase bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Explore Projects
            <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white tracking-wider uppercase bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center"
          >
            Request Consultation
          </Link>
        </motion.div>

        {/* Live Metrics Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md"
        >
          <div className="flex items-center gap-4 px-4 py-2 border-b sm:border-b-0 sm:border-r border-slate-800/80 last:border-0">
            <FiRadio className="text-3xl text-cyan-400 shrink-0" />
            <div className="text-left">
              <div className="text-2xl font-black text-white">12,500+</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Macro Nodes Active</div>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-2 border-b sm:border-b-0 sm:border-r border-slate-800/80 last:border-0">
            <FiGlobe className="text-3xl text-teal-400 shrink-0" />
            <div className="text-left">
              <div className="text-2xl font-black text-white">450,000+</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Fiber KM Laid</div>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-2 last:border-0">
            <FiActivity className="text-3xl text-blue-400 shrink-0" />
            <div className="text-left">
              <div className="text-2xl font-black text-white">99.999%</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">SLA Uptime Standard</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
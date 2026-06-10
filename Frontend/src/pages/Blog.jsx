import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const logs = [
  { slug: 'dense-5g', date: 'MAY 22, 2026', title: 'Optimizing High-Band Sub-6GHz Array Deployments in Urban Densities', intro: 'An exploration into spatial telemetry modeling for low-latency cell alignments.' },
  { slug: 'quantum-fiber', date: 'APR 14, 2026', title: 'Preparing Dark Fiber Trunks for Early Quantum Entangled Packet Testing', intro: 'Analyzing the physical cooling and attenuation bounds required for photon stability.' }
];

const Blog = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 border-b border-slate-900 pb-10">
          <h1 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-4">Operations Logistics & News</h1>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Technical Logs</h2>
        </div>

        {/* Articles Feed */}
        <div className="space-y-12">
          {logs.map((log) => (
            <article key={log.slug} className="space-y-3 max-w-3xl">
              <time className="text-xs font-mono font-bold text-slate-500 tracking-widest">{log.date}</time>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white hover:text-cyan-400 transition-colors cursor-pointer">
                {log.title}
              </h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">{log.intro}</p>
              <button className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 hover:underline pt-2">
                Access Document <FiArrowRight />
              </button>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
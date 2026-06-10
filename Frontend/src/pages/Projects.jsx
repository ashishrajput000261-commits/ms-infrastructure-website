import React from 'react';
import { FiExternalLink, FiMapPin } from 'react-icons/fi';

const currentDeployments = [
  { id: 'PRJ-901', client: 'QuantumTel Inc.', scope: '5G Urban Infill Matrix', loc: 'New York City Hub', status: 'Operational' },
  { id: 'PRJ-402', client: 'Horizon Cloud Corp', scope: 'Hyperscale Optical Interconnect', loc: 'Silicon Valley Campus', status: 'In Validation' },
  { id: 'PRJ-119', client: 'AeroNet Global', scope: 'Sub-Orbital Uplink Ground Array', loc: 'Texas Desert Grid', status: 'Construction Phase' },
  { id: 'PRJ-773', client: 'Vertex Telecom', scope: 'Regional Dark Fiber Network Loop', loc: 'Pacific Northwest Loop', status: 'Operational' },
];

const Projects = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-4">Active Operations</h1>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Deployment Portfolio</h2>
        </div>

        {/* Project Tracking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentDeployments.map((p) => (
            <div 
              key={p.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono tracking-widest text-slate-500 font-bold">{p.id}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    p.status === 'Operational' 
                      ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400' 
                      : p.status === 'In Validation' 
                      ? 'bg-amber-950/40 border-amber-500/30 text-amber-400'
                      : 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400'
                  }`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2">{p.scope}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">Client: {p.client}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-slate-500">
                <span className="flex items-center gap-1.5">
                  <FiMapPin className="text-cyan-400" />
                  {p.loc}
                </span>
                <span className="text-cyan-400 hover:underline cursor-pointer flex items-center gap-1">
                  Diagnostics <FiExternalLink />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
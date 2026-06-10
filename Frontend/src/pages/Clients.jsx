import React from 'react';
import { FiCheckSquare, FiShieldAlert } from 'react-icons/fi';

const clientLogos = [
  { name: 'QuantumTel Inc.', sector: 'Mobile Carrier Ops' },
  { name: 'Horizon Cloud Corp', sector: 'Hyperscale Cloud Data' },
  { name: 'AeroNet Global', sector: 'Satellite Ground Uplinks' },
  { name: 'Vertex Telecom', sector: 'Enterprise ISP Trunking' },
];

const Clients = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-4">Enterprise Network Partners</h1>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6">Validated Collaborations</h2>
          <p className="text-slate-400 text-sm font-medium">
            We partner with premier communications operators to support critical global computing lines.
          </p>
        </div>

        {/* Logo Matrix Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clientLogos.map((c, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 text-center flex flex-col justify-center items-center gap-2">
              <div className="text-lg font-black tracking-widest text-white">{c.name}</div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 mt-1">{c.sector}</div>
            </div>
          ))}
        </div>

        {/* SLA Callout banner */}
        <div className="p-8 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 max-w-3xl mx-auto flex gap-4 items-start">
          <FiShieldAlert className="text-3xl text-cyan-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wide mb-1">Guaranteed Master SLA Alignment</h4>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              All infrastructure delivery lines are bound by standard multi-regional service-level protocols ensuring rapid intervention tracking parameters.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Clients;
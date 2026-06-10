import React from 'react';
import { FiRadio, FiCpu, FiCloud, FiActivity, FiLayers, FiShield } from 'react-icons/fi';

const specializedServices = [
  { icon: <FiRadio />, name: '5G Node Optimization', details: 'Full stack deployment parameters, field spectrum calibration, macro site integration, and structural safety audits.' },
  { icon: <FiCpu />, name: 'Dark Fiber Infrastructure', desc: 'High-speed intra-city optical layout deployment with secure connection loops and custom backbone paths.' },
  { icon: <FiCloud />, name: 'Hyperscale Facilities', desc: 'Complete physical construction of cloud core setups, climate array parameters, and tier-4 structural resilience loops.' },
  { icon: <FiLayers />, name: 'Smart Grid Integrations', desc: 'Deploying custom low-latency IoT sensors and microcell relays across municipal parameters.' },
  { icon: <FiActivity />, name: 'Network Health Diagnostics', desc: 'Real-time telemetry physical monitoring, emergency fiber repair execution, and proactive power failover.' },
  { icon: <FiShield />, name: 'Secure Line Hardware', desc: 'Encrypted network switching installations and biometric hardware protection parameters for server banks.' }
];

const Services = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-4">Core Directory</h1>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6">Architectural Solutions</h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            Providing turn-key engineering solutions covering physical deployment and validation protocols for high-capacity enterprise frameworks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializedServices.map((srv, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-2xl text-cyan-400 mb-6 shadow-md">
                {srv.icon}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3">{srv.name}</h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                {srv.details || srv.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
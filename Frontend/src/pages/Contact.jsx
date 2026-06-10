import React, { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Side */}
          <div className="space-y-6">
            <h1 className="text-xs font-bold text-cyan-400 tracking-widest uppercase">System Initialization</h1>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">Connect Operations</h2>
            <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed">
              Submit your engineering site specifications. Our engineering estimating group responds within 24 operational system cycles.
            </p>
          </div>

          {/* Contact Form Container */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <FiCheckCircle className="text-5xl text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold uppercase tracking-wide">Data Packet Ingested</h3>
                <p className="text-sm font-medium text-slate-400">Your network payload transmission routing is complete.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Corporate Identity</label>
                  <input required type="text" className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 uppercase font-medium tracking-wide" placeholder="e.g. QUANTUMTEL CORP" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Secure Link Email</label>
                  <input required type="email" className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 uppercase font-medium tracking-wide" placeholder="ops@domain.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Scope Parameters</label>
                  <textarea required rows={4} className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 uppercase font-medium tracking-wide" placeholder="DESCRIBE INFRASTRUCTURE REQUIREMENTS..." />
                </div>
                <button type="submit" className="w-full py-4 rounded-xl text-xs font-black tracking-widest uppercase bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 transition-colors flex items-center justify-center gap-2">
                  Transmit Payload <FiSend />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
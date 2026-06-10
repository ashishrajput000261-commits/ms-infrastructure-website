import React, { useState } from 'react';
import { FiLock, FiCpu } from 'react-icons/fi';

const Login = () => {
  const [authCode, setAuthCode] = useState('');

  return (
    <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center px-4 relative overflow-hidden select-none">
      {/* Sci-Fi Ambient Glow */}
      <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-md p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md relative z-10 text-center">
        
        {/* Portal Icon Head */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center text-xl mx-auto mb-6 shadow-lg shadow-cyan-500/20">
          <FiCpu />
        </div>

        <h1 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2">Secure Client Portal</h1>
        <h2 className="text-xl font-black uppercase text-white tracking-tight mb-8">Access Infrastructure Link</h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-left">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Grid Operator ID</label>
            <input 
              required 
              type="text" 
              className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 font-mono text-center tracking-widest uppercase placeholder-slate-700" 
              placeholder="OP-XXXXX" 
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Passphrase Key</label>
            <input 
              required 
              type="password" 
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
              className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 font-mono text-center tracking-widest" 
              placeholder="••••••••••••" 
            />
          </div>
          <button type="submit" className="w-full py-3.5 mt-2 rounded-xl text-xs font-black tracking-widest uppercase bg-slate-800 border border-slate-700 text-white hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2">
            Authenticate Access <FiLock />
          </button>
        </form>

        <div className="mt-6 text-[10px] font-semibold text-slate-500 uppercase tracking-widest cursor-pointer hover:text-slate-400 transition-colors">
          Request Diagnostic Access Credentials
        </div>

      </div>
    </div>
  );
};

export default Login;
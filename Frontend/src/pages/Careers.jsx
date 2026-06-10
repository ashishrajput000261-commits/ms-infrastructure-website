import React from 'react';
import { FiArrowRight, FiBriefcase } from 'react-icons/fi';

const jobOpenings = [
  { id: 'HR-203', title: 'Senior Structural RF Engineer', dept: 'Cellular Deployments', loc: 'On-site / NY Operations' },
  { id: 'HR-811', title: 'Fiber Network Mapping Architect', dept: 'Fiber Systems Division', loc: 'Remote / US East Coast' },
  { id: 'HR-449', title: 'Hyperscale HVAC Systems Tech', dept: 'Facilities Engineering', loc: 'On-site / Austin HQ' }
];

const Careers = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-4">Join The Engineering Unit</h1>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6">Build Modern Connectivity Arrays</h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            Looking for highly disciplined structural engineers, optical routing analysts, and heavy-systems operations managers.
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4 max-w-5xl">
          {jobOpenings.map((job) => (
            <div 
              key={job.id} 
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl text-cyan-400 p-3 bg-slate-950 rounded-lg shrink-0">
                  <FiBriefcase />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500">{job.id}</span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide mt-0.5">{job.title}</h3>
                  <div className="flex gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                    <span>{job.dept}</span>
                    <span className="text-slate-600">•</span>
                    <span>{job.loc}</span>
                  </div>
                </div>
              </div>
              <button className="px-5 py-3 rounded-lg text-xs font-bold text-slate-950 tracking-widest uppercase bg-cyan-400 group-hover:bg-cyan-300 transition-colors self-start sm:self-center shrink-0 flex items-center gap-2">
                Apply System <FiArrowRight />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Careers;
import React from 'react';

const assetPhotos = [
  { label: '5G Cell Base Architecture' },
  { label: 'Fiber Splicer Core Deployment' },
  { label: 'Server Matrix Control Array' },
  { label: 'Hyperscale Climate Array Setup' },
  { label: 'High-Strand Optical Trunk Layer' },
  { label: 'Substation Microwave System Node' },
];

const Gallery = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-4">Visual Documentation</h1>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Physical Asset Archives</h2>
        </div>

        {/* Gallery Dynamic Placeholder Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assetPhotos.map((img, i) => (
            <div 
              key={i} 
              className="relative aspect-video rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex items-end p-6 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />
              <div className="relative z-10">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400">IMG-00{i+1}</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mt-1">{img.label}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
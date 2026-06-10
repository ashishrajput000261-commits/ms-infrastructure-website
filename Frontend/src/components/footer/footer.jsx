import React from 'react';
import { Link } from 'react-router-dom';
import { FiCpu, FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 relative z-10 overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-cyan-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Identity */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                <FiCpu className="text-lg" />
              </div>
              <span className="text-lg font-black tracking-wider text-white uppercase">
                MS <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">INFRA</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Pioneering hyper-connected cellular, optical, and core cloud enterprise frameworks for modern telecom operators worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <FiLinkedin />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <FiGithub />
              </a>
            </div>
          </div>

          {/* Column 2: Architecture Solutions */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-l-2 border-cyan-500 pl-3">
              Solutions
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">5G Small Cell Deployment</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">FTTH Backbone Systems</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Hyperscale Cloud Architecture</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Network Resilience Operations</Link></li>
            </ul>
          </div>

          {/* Column 3: Corporate Links */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-l-2 border-blue-500 pl-3">
              Corporate
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About History</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors">Careers / Open Roles</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Media Kit & News</Link></li>
            </ul>
          </div>

          {/* Column 4: Critical Ops HQ */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-l-2 border-teal-500 pl-3">
              Global HQ
            </h3>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-cyan-400 shrink-0 mt-1" />
                <span>100 Cyber City, Tower Delta, Suite 404, Tech Hub, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-cyan-400 shrink-0" />
                <span>+1 (555) 019-2831</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-cyan-400 shrink-0" />
                <span>ops@msinfrastructure.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold tracking-wider text-slate-500 uppercase">
          <div>
            © {currentYear} MS Infrastructure. All infrastructure reserves engineered.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Framework</a>
            <a href="#" className="hover:text-slate-400 transition-colors">SLA Metrics Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
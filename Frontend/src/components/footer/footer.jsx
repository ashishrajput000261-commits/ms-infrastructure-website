const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-2xl font-black text-cyan-400 mb-3">
            MS Infrastructure
          </h3>
          <p className="text-slate-400">
            Delivering telecom, fiber and infrastructure solutions across India.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p className="text-slate-400">info@msinfra.com</p>
          <p className="text-slate-400">+91 XXXXX XXXXX</p>
        </div>

      </div>

      <div className="text-center mt-10 text-slate-500 text-sm">
        © 2026 MS Infrastructure. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
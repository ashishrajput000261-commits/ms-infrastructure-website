import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Clients", path: "/clients" },
    { name: "Careers", path: "/careers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-cyan-400/20 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-black tracking-widest text-white">
            MS INFRASTRUCTURE
          </h1>
          <p className="text-xs tracking-[0.35em] text-cyan-300">
            CONNECTING TOMORROW
          </p>
        </div>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive ? "text-cyan-300" : "text-white hover:text-cyan-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="hidden rounded-lg border border-cyan-400 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-400 hover:text-slate-950 md:block"
        >
          Get Quote
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
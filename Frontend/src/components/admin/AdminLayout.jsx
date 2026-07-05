import { useState } from "react";
import {
  FiBarChart2,
  FiBriefcase,
  FiCamera,
  FiLogOut,
  FiMail,
  FiMenu,
  FiMessageSquare,
  FiX,
} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FiBarChart2 />,
    path: "/admin/dashboard",
  },
  {
    title: "Careers",
    icon: <FiBriefcase />,
    path: "/admin/careers",
  },
  {
    title: "Gallery",
    icon: <FiCamera />,
    path: "/admin/gallery",
  },
  {
    title: "Testimonials",
    icon: <FiMessageSquare />,
    path: "/admin/testimonials",
  },
  {
    title: "Enquiries",
    icon: <FiMail />,
    path: "/admin/enquiries",
  },
];

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("msAdminLoggedIn");

  navigate("/admin/login", { replace: true });
};

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-72 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 flex flex-col ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="px-6 py-7 border-b border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.18em] text-[10px] font-bold mb-2">
              MS Infrastructure
            </p>

            <h2 className="text-xl font-bold">Admin Panel</h2>
          </div>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white text-xl"
          >
            <FiX />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <p className="text-slate-500 uppercase tracking-[0.18em] text-[10px] font-bold px-3 mb-4">
            Management
          </p>

          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan-400 text-slate-950"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold text-red-300 hover:bg-red-500/10 hover:text-red-200 transition"
          >
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main dashboard area */}
      <main className="flex-1 min-w-0">
        <header className="h-20 border-b border-slate-800 bg-slate-950/90 flex items-center px-5 sm:px-8">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-slate-300 hover:text-cyan-400 text-2xl mr-4"
          >
            <FiMenu />
          </button>

          <div className="ml-auto flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold">
              A
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold">Administrator</p>
              <p className="text-xs text-slate-500">MS Infrastructure</p>
            </div>
          </div>
        </header>

        <div className="p-5 sm:p-8 lg:p-10">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
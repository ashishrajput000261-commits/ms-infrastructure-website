import { FiArrowRight, FiLock, FiMail, FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

 const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem("msAdminLoggedIn", "true");

  navigate("/admin/dashboard", { replace: true });
};

  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-5 py-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full" />

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-7 sm:p-10 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-7">
            <FiShield className="text-cyan-400 text-2xl" />
          </div>

          <p className="text-cyan-400 uppercase tracking-[0.22em] text-xs font-semibold mb-3">
            MS Infrastructure
          </p>

          <h1 className="text-3xl font-bold mb-3">Admin Portal</h1>

          <p className="text-slate-400 text-sm leading-6 mb-8">
            Sign in to manage careers, gallery updates, testimonials, and customer enquiries.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Admin ID
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                <input
                  id="email"
                  type="text"
                  placeholder="Enter admin ID"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white outline-none focus:border-cyan-400 transition"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white outline-none focus:border-cyan-400 transition"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl py-3.5 flex items-center justify-center gap-2 transition duration-300"
            >
              Sign In
              <FiArrowRight />
            </button>
          </form>

          <p className="text-center text-slate-500 text-xs mt-7">
            Authorized MS Infrastructure personnel only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
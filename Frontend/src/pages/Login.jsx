import React, { useState } from "react";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiLock,
  FiMail,
  FiShield,
  FiUser,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const securityPoints = [
  "Secure admin access",
  "Protected dashboard",
  "Backend JWT integration later",
];

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Login UI ready. Backend authentication will be connected later.");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"></div>
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Branding */}
        <div className="hidden lg:block">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-cyan-400 font-bold mb-10 hover:text-cyan-300 transition"
          >
            <FiArrowLeft />
            Back To Website
          </Link>

          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-5">
            Admin Portal
          </p>

          <h1 className="text-5xl font-black leading-tight mb-6">
            MS Infrastructure
            <span className="block text-cyan-400">Secure Dashboard</span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
            Login portal for managing company inquiries, career applications,
            projects, services, and website content from a secure admin panel.
          </p>

          <div className="space-y-5">
            {securityPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <FiCheckCircle />
                </div>
                <p className="text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="lg:hidden mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-cyan-400 font-bold hover:text-cyan-300 transition"
            >
              <FiArrowLeft />
              Back To Website
            </Link>
          </div>

          <div className="text-center mb-10">
            <div className="h-16 w-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-4xl mx-auto mb-6">
              <FiShield />
            </div>

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Secure Access
            </p>

            <h2 className="text-3xl md:text-4xl font-black">
              Admin Login
            </h2>

            <p className="text-slate-400 mt-4">
              Enter your credentials to access the dashboard.
            </p>
          </div>

          {message && (
            <div className="mb-6 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-cyan-300 text-sm">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Email Address
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="admin@msteleinfra.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Password
              </label>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
                <input
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
              <label className="flex items-center gap-3 text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="h-4 w-4 accent-cyan-400"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-black inline-flex items-center justify-center gap-3 hover:bg-cyan-300 transition"
            >
              Login To Dashboard
              <FiUser />
            </button>
          </form>

          <div className="mt-8 border-t border-slate-800 pt-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                <FiShield />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                This is currently frontend UI only. Real login, JWT token, role
                access, and dashboard protection will be added during backend
                integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
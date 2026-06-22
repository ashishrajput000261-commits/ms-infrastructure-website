import React, { useState } from "react";
import axios from "axios";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiPhone />,
    title: "Phone",
    value: "+91 98765 43210",
    desc: "Call us for project inquiries",
  },
  {
    icon: <FiMail />,
    title: "Email",
    value: "info@msteleinfra.com",
    desc: "Send your requirements",
  },
  {
    icon: <FiMapPin />,
    title: "Office",
    value: "India",
    desc: "Telecom & infrastructure services",
  },
  {
    icon: <FiClock />,
    title: "Working Hours",
    value: "Mon - Sat",
    desc: "10:00 AM - 6:00 PM",
  },
];

const services = [
  "Telecom Network Deployment",
  "Fiber Optic Infrastructure",
  "Network Maintenance",
  "Power Solutions",
  "Smart Infrastructure",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:8080/api/contact", formData);

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit inquiry. Please check backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"></div>
        <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-5">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Let&apos;s Build Reliable
            <span className="block text-cyan-400">
              Infrastructure Together
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            Get in touch with MS Infrastructure for telecom network deployment,
            fiber infrastructure, site operations, maintenance, and project
            support requirements.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-3xl mb-6 group-hover:bg-cyan-400 group-hover:text-slate-950 transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-cyan-400 font-bold mb-2">{item.value}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Service Inquiry */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Send Inquiry
            </p>

            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Tell Us About Your Project
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Fill the form with your project details. Our team will review your
              requirement and contact you for the next steps.
            </p>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Services You Can Ask For
              </h3>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <FiCheckCircle />
                    </div>
                    <p className="text-slate-200">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-16">
                <FiCheckCircle className="text-6xl text-emerald-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black mb-4">
                  Inquiry Submitted
                </h3>
                <p className="text-slate-400 mb-8">
                  Thank you. Your inquiry has been saved successfully.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Company / Organization"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Service Required
                  </label>
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Select service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400 resize-none"
                    placeholder="Tell us about your requirement..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-400 disabled:bg-slate-600 disabled:text-slate-300 text-slate-950 px-8 py-4 rounded-xl font-black inline-flex items-center justify-center gap-3 hover:bg-cyan-300 transition"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                  <FiSend />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden">
            <div className="min-h-[420px] flex items-center justify-center bg-gradient-to-br from-slate-950 to-cyan-950">
              <div className="text-center px-6">
                <FiMapPin className="text-7xl text-cyan-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black mb-4">
                  Office Location
                </h3>
                <p className="text-slate-300 max-w-2xl">
                  Map integration will be added during backend and deployment
                  phase. For now, this section is ready as a professional
                  location placeholder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready To Start Your Project?
          </h2>

          <p className="text-lg md:text-xl mb-10 font-medium">
            Contact our team and discuss your telecom or infrastructure
            requirement today.
          </p>

          <a
            href="/services"
            className="bg-slate-950 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-slate-900 transition"
          >
            Explore Services
            <FiArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
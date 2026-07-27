import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiServer,
  FiTool,
  FiWifi,
} from "react-icons/fi";

const API_URL = "http://localhost:8080/api/contact";

const services = [
  {
    id: 1,
    icon: FiWifi,
    title: "Telecom Tower Infrastructure",
    description:
      "End-to-end site preparation, civil works and tower erection support for modern cellular network infrastructure.",
  },
  {
    id: 2,
    icon: FiActivity,
    title: "Fiber Optic Network Deployment",
    description:
      "Underground and aerial fiber cable laying, splicing, network testing and commissioning services.",
  },
  {
    id: 3,
    icon: FiTool,
    title: "Operations and Maintenance",
    description:
      "Preventive and corrective maintenance services designed to improve network reliability and operational uptime.",
  },
  {
    id: 4,
    icon: FiServer,
    title: "Enterprise Networking",
    description:
      "Scalable LAN, WAN, structured cabling and server connectivity solutions for businesses and industrial facilities.",
  },
  {
    id: 5,
    icon: FiMapPin,
    title: "Site Survey and Planning",
    description:
      "Site inspections, technical feasibility checks, route planning and structured project execution preparation.",
  },
  {
    id: 6,
    icon: FiCheckCircle,
    title: "Infrastructure Testing",
    description:
      "Quality inspection, network testing, documentation and technical verification before project handover.",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Site Survey & Planning",
    description:
      "We study project requirements, conduct feasibility checks, inspect site conditions and prepare a structured execution plan. Our engineering team evaluates the important technical and operational requirements before execution begins.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    alt: "Engineers conducting site survey and project planning",
  },
  {
    id: "02",
    title: "Execution & Installation",
    description:
      "Our technical and field teams execute the approved work using suitable materials, safety procedures and proper project coordination. Every stage is managed carefully to support reliable and timely delivery.",
    image:
      "https://images.unsplash.com/photo-1558227092-2374e2d36187?auto=format&fit=crop&w=1600&q=80",
    alt: "Telecom infrastructure installation work",
  },
  {
    id: "03",
    title: "Testing & Handover",
    description:
      "The completed infrastructure is inspected, tested and documented before final client handover. Our team verifies the completed work and provides the required project information for operational support.",
    image:
      "https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&w=1600&q=80",
    alt: "Network infrastructure testing and verification",
  },
];

const clientBenefits = [
  "Structured project planning",
  "Safety-focused execution",
  "Experienced field coordination",
  "Transparent communication",
  "Reliable maintenance support",
  "Quality inspection and documentation",
];

const initialFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  message: "",
};

const initialStatus = {
  loading: false,
  success: false,
  error: false,
  errorMessage: "",
};

const Client = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    document.title = "Client Solutions | MS Telecom & Infrastructure";
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (status.success || status.error) {
      setStatus(initialStatus);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: false,
      errorMessage: "",
    });

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      service: formData.service,
      message: `Project Location: ${formData.location.trim()}

Message:
${formData.message.trim()}`,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(
          "Enquiry submit nahi hui. Backend server aur contact API check karo."
        );
      }

      setStatus({
        loading: false,
        success: true,
        error: false,
        errorMessage: "",
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Client enquiry submission error:", error);

      setStatus({
        loading: false,
        success: false,
        error: true,
        errorMessage:
          error.message ||
          "Enquiry submit nahi hui. Please kuch der baad dobara try karo.",
      });
    }
  };

  return (
    <main className="client-page min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-950 px-6 py-24 text-center md:px-12 lg:px-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544990928-8d4e92ebf6d9?auto=format&fit=crop&w=1800&q=80"
            alt="Telecom tower and infrastructure network"
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/80 to-slate-950" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          <span className="mb-5 rounded-full bg-cyan-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Client Solutions
          </span>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Reliable Telecom &
            <span className="block text-cyan-400">
              Infrastructure Partnerships
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
            Supporting businesses through telecom network deployment,
            enterprise connectivity, infrastructure maintenance and structured
            project execution.
          </p>

          <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Discuss Your Project
              <FiArrowRight />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Explore Services
            </a>
          </div>
        </div>

        <a
          href="#services"
          aria-label="Scroll to client services"
          className="absolute bottom-8 z-10 animate-bounce text-3xl text-slate-400 transition hover:text-cyan-400"
        >
          <FiChevronDown />
        </a>
      </section>

      {/* Client Services */}
      <section
        id="services"
        className="scroll-mt-20 bg-slate-50 px-6 py-20 md:px-12 md:py-28 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
              What We Deliver
            </p>

            <h2 className="text-3xl font-black text-slate-900 md:text-5xl">
              Our Service Capabilities
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Professional telecom and infrastructure solutions designed to
              support operational reliability, connectivity and long-term
              project requirements.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900">
                    {service.title}
                  </h3>

                  <p className="flex-1 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href="#enquiry"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                  >
                    Enquire Now
                    <FiArrowRight />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Heading */}
      <section className="bg-white px-6 pb-10 pt-20 text-center md:px-12 md:pt-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
            How We Work
          </p>

          <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            A Structured Process for
            <span className="block text-cyan-600">
              Reliable Project Delivery
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            From site assessment to final testing and handover, every project
            follows a clear process focused on safety, coordination, quality and
            responsible execution.
          </p>
        </div>
      </section>

      {/* How We Work Steps */}
      <section className="bg-white px-6 pb-20 md:px-12 md:pb-28 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:gap-24">
          {processSteps.map((process, index) => {
            const imageOnLeft = index % 2 !== 0;

            return (
              <article
                key={process.id}
                className={`flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg lg:min-h-[520px] ${
                  imageOnLeft
                    ? "flex-col lg:flex-row"
                    : "flex-col lg:flex-row-reverse"
                }`}
              >
                <div className="h-[300px] w-full overflow-hidden sm:h-[380px] lg:h-auto lg:w-1/2">
                  <img
                    src={process.image}
                    alt={process.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="flex w-full items-center p-8 sm:p-12 lg:w-1/2 lg:p-16 xl:p-20">
                  <div className="w-full text-center lg:text-left">
                    <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-xl font-black text-white">
                      {process.id}
                    </span>

                    <h3 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                      {process.title}
                    </h3>

                    <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                      {process.description}
                    </p>

                    <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-cyan-500 lg:mx-0" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="bg-blue-950 px-6 py-20 text-white md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Client Benefits
            </p>

            <h2 className="text-3xl font-black text-white md:text-5xl">
              Why Partner With Us?
            </h2>

            <p className="mt-6 text-base leading-8 text-blue-200 md:text-lg">
              We focus on professional planning, safe execution, clear
              communication and quality-focused project delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clientBenefits.map((benefit) => (
              <article
                key={benefit}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <FiCheckCircle className="mt-1 shrink-0 text-2xl text-cyan-400" />

                <p className="text-lg font-semibold leading-7 text-slate-100">
                  {benefit}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client Enquiry Form */}
      <section
        id="enquiry"
        className="scroll-mt-20 bg-slate-100 px-6 py-20 md:px-12 md:py-28 lg:px-24"
      >
        <div className="mx-auto flex max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl max-lg:flex-col">
          <div className="flex w-full flex-col justify-between bg-slate-950 p-8 text-white sm:p-10 lg:w-2/5 lg:p-12">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                Project Enquiry
              </p>

              <h2 className="text-3xl font-black leading-tight">
                Let&apos;s Discuss Your Project
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Share your project requirements and our team can review the
                information for further discussion.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="rounded-full bg-white/10 p-3 text-cyan-400">
                    <FiPhone />
                  </div>

                  <span>Project enquiries and technical discussions</span>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="rounded-full bg-white/10 p-3 text-cyan-400">
                    <FiMail />
                  </div>

                  <span>Direct communication with our team</span>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="rounded-full bg-white/10 p-3 text-cyan-400">
                    <FiMapPin />
                  </div>

                  <span>Support based on project location</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-8 sm:p-10 lg:w-3/5 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="clientName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Client Name *
                  </label>

                  <input
                    id="clientName"
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Company Name *
                  </label>

                  <input
                    id="companyName"
                    required
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter company name"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="clientEmail"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address *
                  </label>

                  <input
                    id="clientEmail"
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="clientPhone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="clientPhone"
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="requiredService"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Required Service *
                  </label>

                  <select
                    id="requiredService"
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Tower Infrastructure">
                      Tower Infrastructure
                    </option>

                    <option value="Fiber Optic Deployment">
                      Fiber Optic Deployment
                    </option>

                    <option value="Operations & Maintenance">
                      Operations & Maintenance
                    </option>

                    <option value="Enterprise Networking">
                      Enterprise Networking
                    </option>

                    <option value="Site Survey">
                      Site Survey & Planning
                    </option>

                    <option value="Infrastructure Testing">
                      Infrastructure Testing
                    </option>

                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="projectLocation"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Project Location *
                  </label>

                  <input
                    id="projectLocation"
                    required
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, State, India"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="clientMessage"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Project Message *
                </label>

                <textarea
                  id="clientMessage"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Briefly describe your project requirements..."
                  className="w-full resize-y rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {status.success && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                  Thank you! Your enquiry has been submitted successfully.
                </div>
              )}

              {status.error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                  {status.errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.loading ? "Sending..." : "Submit Enquiry"}
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-blue-950 px-6 py-24 text-center md:px-12 lg:px-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
            alt="Digital enterprise network connectivity"
            loading="lazy"
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-blue-950/80" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Ready to Build Reliable Infrastructure?
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-blue-200 md:text-lg">
            Connect with MS Telecom & Infrastructure to discuss your telecom,
            fiber network, enterprise connectivity or infrastructure
            requirements.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-9 py-4 text-lg font-bold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-slate-100"
          >
            Start a Project Discussion
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Client;
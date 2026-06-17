import {
  FiRadio,
  FiWifi,
  FiServer,
  FiCpu,
  FiShield,
  FiActivity,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiRadio />,
      title: "Telecom Network Deployment",
      desc: "End-to-end telecom site deployment including tower installation, site survey, and network rollout support.",
      points: ["Tower Installation", "Site Acquisition", "RF Survey"],
    },
    {
      icon: <FiWifi />,
      title: "Fiber Optic Infrastructure",
      desc: "Reliable OFC laying, splicing, testing, and maintenance for high-speed connectivity.",
      points: ["OFC Laying", "Fiber Splicing", "OTDR Testing"],
    },
    {
      icon: <FiServer />,
      title: "Network Maintenance",
      desc: "Preventive and corrective maintenance services to keep telecom networks running smoothly.",
      points: ["Preventive Maintenance", "Emergency Support", "Site Inspection"],
    },
    {
      icon: <FiActivity />,
      title: "Managed Services",
      desc: "Complete field operation and monitoring support for telecom and enterprise infrastructure.",
      points: ["Network Monitoring", "Field Operations", "SLA Support"],
    },
    {
      icon: <FiShield />,
      title: "Power Solutions",
      desc: "Power backup and electrical infrastructure support for telecom sites and data systems.",
      points: ["DG Installation", "Battery Backup", "Power Audit"],
    },
    {
      icon: <FiCpu />,
      title: "Smart Infrastructure",
      desc: "Modern infrastructure solutions for smart city, IoT, and enterprise network requirements.",
      points: ["IoT Solutions", "Smart City Networks", "Enterprise Infra"],
    },
  ];

  const process = [
    "Planning & Survey",
    "Deployment",
    "Testing & Quality Check",
    "Support & Maintenance",
  ];

  const industries = [
    "Telecom",
    "Government",
    "Enterprise",
    "Data Centers",
    "Smart Cities",
    "Utilities",
  ];

  return (
    <main className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"></div>
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-5">
            Our Services
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Building Reliable
            <span className="block text-cyan-400">
              Telecom Infrastructure
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            MS Telecom & Infrastructure provides professional telecom,
            fiber, network maintenance, power, and smart infrastructure
            solutions for modern connectivity needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Complete Telecom Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-3xl mb-6 group-hover:bg-cyan-400 group-hover:text-slate-950 transition">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <FiCheckCircle className="text-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              How We Deliver Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8"
              >
                <span className="text-6xl font-black text-cyan-400/20">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold mt-6">{item}</h3>
                <p className="text-slate-400 mt-3 leading-relaxed">
                  We follow a structured and quality-focused approach to ensure
                  reliable infrastructure delivery.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Trusted Partner For Telecom Infrastructure
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We focus on quality, safety, and timely execution. Our team works
              with modern tools and industry practices to deliver strong and
              scalable telecom infrastructure.
            </p>

            <div className="space-y-5">
              {[
                "Experienced telecom infrastructure team",
                "Quality-focused project execution",
                "Fast response and maintenance support",
                "Professional field operation management",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <FiCheckCircle />
                  </div>
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-950 border border-slate-800 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-900 rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-black text-cyan-400">50+</h3>
                  <p className="text-slate-400 mt-2">Projects</p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-black text-cyan-400">24/7</h3>
                  <p className="text-slate-400 mt-2">Support</p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-black text-cyan-400">100%</h3>
                  <p className="text-slate-400 mt-2">Quality Focus</p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-black text-cyan-400">5G</h3>
                  <p className="text-slate-400 mt-2">Ready Infra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Industries We Serve
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Supporting Modern Connectivity
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400/60 transition"
              >
                <FiArrowRight className="text-cyan-400 text-2xl mb-5" />
                <h3 className="text-2xl font-bold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Need Telecom Infrastructure Services?
          </h2>

          <p className="text-lg md:text-xl mb-10 font-medium">
            Contact our team for reliable telecom, fiber, and infrastructure
            solutions.
          </p>

          <button className="bg-slate-950 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-slate-900 transition">
            Get Quote
            <FiArrowRight />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Services;
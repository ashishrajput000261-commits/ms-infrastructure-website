import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiWifi, FiActivity, FiTool, FiCpu, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const services = [
  {
    id: "telecom-towers",
    title: "Telecom Tower Infrastructure",
    icon: FiWifi,
    description:
      "End-to-end solutions for telecommunication towers including site surveying, civil foundation works, tower erection and auditing.",
    features: [
      "Site acquisition & feasibility surveys",
      "Greenfield and rooftop tower erection",
      "Civil foundation & electrical grounding",
      "Structural reinforcement & auditing",
    ],
    image:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "fiber-optics",
    title: "Fiber Optic Networks",
    icon: FiActivity,
    description:
      "Underground and aerial Optical Fiber Cable installation for reliable high-speed connectivity.",
    features: [
      "Underground & aerial cable laying",
      "Splicing, jointing & testing",
      "Right of Way coordination",
      "Fiber network upgrades & expansion",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "operations-maintenance",
    title: "Operations & Maintenance",
    icon: FiTool,
    description:
      "Preventive and corrective maintenance services for telecom infrastructure to improve uptime.",
    features: [
      "Emergency fault rectification",
      "Routine preventive site maintenance",
      "Power backup & battery inspection",
      "Alarm monitoring & resolution",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "enterprise-networking",
    title: "Enterprise Networking Solutions",
    icon: FiCpu,
    description:
      "Custom networking solutions for offices, commercial facilities and industrial environments.",
    features: [
      "In-Building Solutions for coverage",
      "LAN architecture",
      "Structured data cabling",
      "Enterprise Wi-Fi & IoT deployments",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
];

const processSteps = [
  { step: "01", title: "Site Survey & Planning", description: "We study requirements, conduct feasibility checks and prepare execution plan." },
  { step: "02", title: "Execution & Installation", description: "Our teams execute work using suitable materials and safety procedures." },
  { step: "03", title: "Testing & Handover", description: "Completed work is inspected, tested and documented before handover." },
];

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services | MS Telecom & Infrastructure";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Our Premium Services</h1>
        <p className="max-w-2xl mx-auto text-lg text-blue-100">
          Delivering telecom infrastructure, fiber connectivity, maintenance and enterprise networking solutions.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-100"
        >
          Discuss Your Project <FiArrowRight />
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          const imageOnLeft = index % 2 === 0;
          return (
            <article
              key={service.id}
              className={`flex flex-col gap-12 mb-20 lg:items-center ${imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  <Icon className="text-3xl" />
                  <span className="font-bold uppercase tracking-wide">Service {String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="text-3xl font-extrabold mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <FiCheckCircle className="text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-500"
                >
                  Request Info <FiArrowRight />
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      {/* Process Section */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-900">How We Work</h2>
          <p className="mt-4 text-slate-700">A structured process for reliable project delivery.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {processSteps.map((step) => (
            <div key={step.step} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
              <div className="text-blue-600 font-black text-2xl mb-4">{step.step}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Strengthen Your Network?</h2>
        <p className="max-w-2xl mx-auto text-blue-200 mb-8">
          Connect with MS Telecom & Infrastructure to discuss your telecom, fiber, maintenance or enterprise requirements.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-100"
        >
          Contact Our Team <FiArrowRight />
        </Link>
      </section>
    </main>
  );
};

export default ServicesPage;

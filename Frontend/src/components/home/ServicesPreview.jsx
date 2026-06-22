const services = [
  {
    title: "Telecom Network Deployment",
    description:
      "End-to-end telecom infrastructure deployment and maintenance services.",
  },
  {
    title: "Fiber Optic Solutions",
    description:
      "High-speed fiber installation, splicing and network expansion.",
  },
  {
    title: "Tower Installation",
    description:
      "Telecom tower erection, commissioning and support services.",
  },
  {
    title: "Infrastructure Projects",
    description:
      "Civil and telecom infrastructure execution for enterprise clients.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black text-white">
            Our Services
          </h2>
          <p className="mt-4 text-slate-400">
            Delivering reliable telecom and infrastructure solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <h3 className="mb-4 text-xl font-bold text-cyan-400">
                {service.title}
              </h3>

              <p className="text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
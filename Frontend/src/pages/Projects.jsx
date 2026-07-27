import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Telecom Tower Deployment",
    image:
      "https://images.unsplash.com/photo-1544839556-91218579d47c?auto=format&fit=crop&w=1200&q=80",
    alt: "Telecom tower infrastructure",
    description:
      "Telecom tower installation and infrastructure support, including site preparation, foundation work, tower erection and technical inspection.",
  },
  {
    id: 2,
    title: "Underground Fiber Optic Network",
    image:
      "https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&w=1200&q=80",
    alt: "Fiber optic network installation",
    description:
      "Underground optical fiber cable laying, route coordination, splicing and network testing for reliable high-speed connectivity.",
  },
  {
    id: 3,
    title: "Telecom Infrastructure Development",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80",
    alt: "Telecom infrastructure development",
    description:
      "Development and support of telecom infrastructure with a focus on proper planning, safe execution and long-term operational reliability.",
  },
  {
    id: 4,
    title: "Enterprise Network Installation",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    alt: "Enterprise server and networking infrastructure",
    description:
      "Structured cabling, internal networking, server connectivity and enterprise infrastructure solutions for offices and commercial facilities.",
  },
];

const Projects = () => {
  useEffect(() => {
    document.title = "Our Projects | MS Telecom & Infrastructure";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        .projects-page {
          --projects-primary: #003b5c;
          --projects-secondary: #007bb5;
          --projects-text: #333333;
          --projects-background: #f9f9f9;

          min-height: 100vh;
          background-color: var(--projects-background);
          color: var(--projects-text);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .projects-page * {
          box-sizing: border-box;
        }

        .projects-hero {
          padding: 90px 24px;
          background-color: var(--projects-secondary);
          color: #ffffff;
          text-align: center;
        }

        .projects-hero-content {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
        }

        .projects-hero-label {
          margin-bottom: 14px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #d9f3ff;
        }

        .projects-hero h1 {
          margin: 0;
          font-size: clamp(40px, 6vw, 64px);
          line-height: 1.15;
          font-weight: 800;
        }

        .projects-hero p {
          max-width: 700px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.8;
          color: #eaf8ff;
        }

        .projects-section {
          padding: 80px 24px;
        }

        .projects-section-heading {
          max-width: 760px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .projects-section-label {
          margin-bottom: 12px;
          color: var(--projects-secondary);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .projects-section-heading h2 {
          margin: 0;
          color: var(--projects-primary);
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.2;
        }

        .projects-section-heading p {
          margin: 18px auto 0;
          color: #66717c;
          font-size: 17px;
          line-height: 1.8;
        }

        .projects-container {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-card {
          overflow: hidden;
          border: 1px solid #e3e9ed;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-7px);
          border-color: #9ed5ec;
          box-shadow: 0 16px 32px rgba(0, 59, 92, 0.14);
        }

        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 260px;
          background-color: #dde7ec;
        }

        .project-image-wrapper::after {
          position: absolute;
          inset: 0;
          content: "";
          background: linear-gradient(
            to top,
            rgba(0, 59, 92, 0.35),
            transparent 55%
          );
        }

        .project-image-wrapper img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image-wrapper img {
          transform: scale(1.05);
        }

        .project-number {
          position: absolute;
          right: 20px;
          bottom: 18px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background-color: #ffffff;
          color: var(--projects-primary);
          font-size: 16px;
          font-weight: 800;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        .project-content {
          padding: 28px;
        }

        .project-content h3 {
          margin: 0 0 14px;
          color: var(--projects-primary);
          font-size: 24px;
          line-height: 1.3;
        }

        .project-content p {
          margin: 0 0 24px;
          color: #666666;
          font-size: 15px;
          line-height: 1.8;
        }

        .project-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 11px 18px;
          border-radius: 5px;
          background-color: var(--projects-primary);
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition:
            background-color 0.3s ease,
            transform 0.3s ease;
        }

        .project-button svg {
          transition: transform 0.3s ease;
        }

        .project-button:hover {
          transform: translateY(-2px);
          background-color: var(--projects-secondary);
        }

        .project-button:hover svg {
          transform: translateX(4px);
        }

        .projects-cta {
          padding: 30px 24px 90px;
        }

        .projects-cta-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 30px;
          border-radius: 16px;
          background-color: var(--projects-primary);
          color: #ffffff;
          text-align: center;
        }

        .projects-cta-content h2 {
          margin: 0;
          font-size: clamp(30px, 5vw, 46px);
          line-height: 1.25;
        }

        .projects-cta-content p {
          max-width: 700px;
          margin: 18px auto 30px;
          color: #dbeaf2;
          font-size: 17px;
          line-height: 1.8;
        }

        .projects-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 6px;
          background-color: var(--projects-secondary);
          color: #ffffff;
          font-weight: 700;
          text-decoration: none;
          transition:
            background-color 0.3s ease,
            transform 0.3s ease;
        }

        .projects-cta-button:hover {
          transform: translateY(-2px);
          background-color: #0694d4;
        }

        @media (max-width: 850px) {
          .projects-container {
            grid-template-columns: 1fr;
            max-width: 650px;
          }
        }

        @media (max-width: 600px) {
          .projects-hero {
            padding: 65px 20px;
          }

          .projects-hero p {
            font-size: 16px;
          }

          .projects-section {
            padding: 60px 18px;
          }

          .projects-section-heading {
            margin-bottom: 35px;
          }

          .project-image-wrapper {
            height: 220px;
          }

          .project-content {
            padding: 22px;
          }

          .project-content h3 {
            font-size: 21px;
          }

          .projects-cta {
            padding: 10px 18px 65px;
          }

          .projects-cta-content {
            padding: 45px 22px;
          }
        }
      `}</style>

      <main className="projects-page">
        {/* Hero Section */}
        <section className="projects-hero">
          <div className="projects-hero-content">
            <p className="projects-hero-label">
              Our Work
            </p>

            <h1>Our Recent Projects</h1>

            <p>
              Delivering reliable telecommunications, fiber connectivity and
              infrastructure solutions through professional planning and
              responsible execution.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <div className="projects-section-heading">
            <p className="projects-section-label">
              Project Portfolio
            </p>

            <h2>
              Telecom and Infrastructure Solutions
            </h2>

            <p>
              Explore the primary types of telecom, network and infrastructure
              projects supported by our engineering and field teams.
            </p>
          </div>

          <div className="projects-container">
            {projects.map((project, index) => (
              <article className="project-card" key={project.id}>
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                  />

                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <Link className="project-button" to="/contact">
                    Discuss Project
                    <FiArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="projects-cta">
          <div className="projects-cta-content">
            <h2>
              Planning a Telecom Infrastructure Project?
            </h2>

            <p>
              Connect with MS Telecom & Infrastructure to discuss your tower,
              fiber network, enterprise connectivity or maintenance
              requirements.
            </p>

            <Link className="projects-cta-button" to="/contact">
              Contact Our Team
              <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
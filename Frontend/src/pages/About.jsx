import { useEffect } from "react";
import { Link } from "react-router-dom";

const coreValues = [
  {
    id: 1,
    title: "Quality",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    description:
      "We maintain high-quality standards while planning and executing telecom and infrastructure projects.",
  },
  {
    id: 2,
    title: "Safety",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    description:
      "Safety is an important part of our field operations, installation work and maintenance services.",
  },
  {
    id: 3,
    title: "Reliability",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    description:
      "We focus on dependable execution, transparent communication and long-term client support.",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About Us | MS Telecom & Infrastructure";
  }, []);

  return (
    <>
      <style>{`
        .about-page {
          --primary-color: #2c3e50;
          --secondary-color: #3498db;
          --text-color: #333333;
          --background-color: #f9f9f9;
          --white-color: #ffffff;

          background-color: var(--background-color);
          color: var(--text-color);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          min-height: 100vh;
        }

        .about-page * {
          box-sizing: border-box;
        }

        .about-hero {
          background-color: var(--white-color);
          border-bottom: 1px solid #dddddd;
          padding: 80px 20px;
          text-align: center;
        }

        .about-hero-content {
          margin: 0 auto;
          max-width: 850px;
        }

        .about-hero-label {
          color: var(--secondary-color);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .about-hero h1 {
          color: var(--primary-color);
          font-size: clamp(40px, 7vw, 68px);
          line-height: 1.1;
          margin: 0 0 20px;
        }

        .about-hero-description {
          color: #5f6b76;
          font-size: 18px;
          line-height: 1.8;
          margin: 0 auto;
          max-width: 700px;
        }

        .about-container {
          margin: 0 auto;
          max-width: 1200px;
          padding: 80px 20px;
        }

        .about-section {
          align-items: center;
          display: flex;
          gap: 50px;
          margin-bottom: 90px;
        }

        .about-text,
        .about-image-wrapper {
          flex: 1;
        }

        .section-label {
          color: var(--secondary-color);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .about-text h2,
        .values-heading h2,
        .mission-card h2 {
          color: var(--primary-color);
          line-height: 1.25;
          margin: 0;
        }

        .about-text h2 {
          font-size: clamp(30px, 4vw, 44px);
          margin-bottom: 20px;
        }

        .about-text p {
          color: #5b6570;
          font-size: 16px;
          line-height: 1.9;
          margin-bottom: 16px;
        }

        .about-main-image {
          border-radius: 16px;
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.15);
          display: block;
          height: 430px;
          object-fit: cover;
          width: 100%;
        }

        .mission-vision-grid {
          display: grid;
          gap: 30px;
          grid-template-columns: repeat(2, 1fr);
          margin-bottom: 90px;
        }

        .mission-card {
          background-color: var(--white-color);
          border-left: 5px solid var(--secondary-color);
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(44, 62, 80, 0.08);
          padding: 35px;
        }

        .mission-card h2 {
          font-size: 28px;
          margin-bottom: 15px;
        }

        .mission-card p {
          color: #5b6570;
          line-height: 1.8;
          margin: 0;
        }

        .values-heading {
          margin-bottom: 40px;
          text-align: center;
        }

        .values-heading h2 {
          font-size: clamp(30px, 4vw, 42px);
          margin-bottom: 12px;
        }

        .values-heading p {
          color: #66717c;
          margin: 0 auto;
          max-width: 650px;
        }

        .values-grid {
          display: grid;
          gap: 30px;
          grid-template-columns: repeat(3, 1fr);
        }

        .value-card {
          background-color: var(--white-color);
          border-radius: 14px;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.07);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .value-card:hover {
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
          transform: translateY(-7px);
        }

        .value-card img {
          display: block;
          height: 220px;
          object-fit: cover;
          width: 100%;
        }

        .value-card-content {
          padding: 25px;
          text-align: center;
        }

        .value-card h3 {
          color: var(--primary-color);
          font-size: 23px;
          margin: 0 0 12px;
        }

        .value-card p {
          color: #66717c;
          line-height: 1.7;
          margin: 0;
        }

        .about-cta {
          background-color: var(--primary-color);
          color: white;
          padding: 70px 20px;
          text-align: center;
        }

        .about-cta-content {
          margin: 0 auto;
          max-width: 750px;
        }

        .about-cta h2 {
          font-size: clamp(30px, 5vw, 46px);
          line-height: 1.25;
          margin: 0 0 15px;
        }

        .about-cta p {
          color: #dbe4ec;
          font-size: 17px;
          line-height: 1.8;
          margin: 0 auto 30px;
        }

        .about-cta-button {
          background-color: var(--secondary-color);
          border-radius: 8px;
          color: white;
          display: inline-block;
          font-weight: 700;
          padding: 14px 28px;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .about-cta-button:hover {
          background-color: #2585c4;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .about-section {
            flex-direction: column;
          }

          .about-image-wrapper,
          .about-text {
            width: 100%;
          }

          .mission-vision-grid {
            grid-template-columns: 1fr;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .about-hero {
            padding: 60px 20px;
          }

          .about-container {
            padding: 60px 18px;
          }

          .about-section {
            gap: 30px;
            margin-bottom: 60px;
          }

          .about-main-image {
            height: 300px;
          }

          .mission-vision-grid {
            margin-bottom: 60px;
          }

          .mission-card {
            padding: 25px;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .about-cta {
            padding: 55px 20px;
          }
        }
      `}</style>

      <main className="about-page">
        {/* Header Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <p className="about-hero-label">About Our Company</p>

            <h1>About MS Telecom & Infrastructure</h1>

            <p className="about-hero-description">
              Providing reliable telecom, networking and infrastructure
              solutions that help businesses and communities stay connected.
            </p>
          </div>
        </section>

        <div className="about-container">
          {/* About Section */}
          <section className="about-section">
            <div className="about-text">
              <p className="section-label">Who We Are</p>

              <h2>Building Reliable Telecom Infrastructure</h2>

              <p>
                MS Telecom & Infrastructure provides professional telecom and
                infrastructure services for businesses, network operators and
                project partners.
              </p>

              <p>
                Our services include telecom tower work, fiber network
                development, site surveys, installation, network maintenance
                and enterprise connectivity solutions.
              </p>

              <p>
                We focus on quality execution, responsible field operations and
                clear communication throughout every stage of the project.
              </p>
            </div>

            <div className="about-image-wrapper">
              <img
                className="about-main-image"
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                alt="Telecom and infrastructure project"
              />
            </div>
          </section>

          {/* Mission and Vision */}
          <section className="mission-vision-grid">
            <article className="mission-card">
              <p className="section-label">Our Purpose</p>
              <h2>Our Mission</h2>

              <p>
                To provide safe, reliable and efficient telecom infrastructure
                services that help our clients improve connectivity and
                successfully complete their projects.
              </p>
            </article>

            <article className="mission-card">
              <p className="section-label">Our Future</p>
              <h2>Our Vision</h2>

              <p>
                To become a trusted telecom and infrastructure service provider
                recognised for quality, technical expertise and dependable
                project execution.
              </p>
            </article>
          </section>

          {/* Core Values */}
          <section>
            <div className="values-heading">
              <p className="section-label">What Defines Us</p>
              <h2>Our Core Values</h2>

              <p>
                Our values guide how we work with clients, manage projects and
                support our engineering and field teams.
              </p>
            </div>

            <div className="values-grid">
              {coreValues.map((value) => (
                <article className="value-card" key={value.id}>
                  <img src={value.image} alt={value.title} />

                  <div className="value-card-content">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Contact CTA */}
        <section className="about-cta">
          <div className="about-cta-content">
            <h2>Let&apos;s Build Better Connectivity Together</h2>

            <p>
              Contact our team to discuss your telecom, fiber network,
              installation or infrastructure project requirements.
            </p>

            <Link className="about-cta-button" to="/contact">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
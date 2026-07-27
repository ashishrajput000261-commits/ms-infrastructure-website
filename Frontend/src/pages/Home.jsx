import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "MS Telecom & Infrastructure";
  }, []);

  return (
    <>
      <style>{`
        :root {
          --primary-color: #004b87;
          --secondary-color: #f4f7f6;
          --accent-color: #00a8e8;
          --text-color: #333333;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: var(--text-color);
          line-height: 1.6;
          background-color: #ffffff;
        }

        .home-page {
          width: 100%;
          min-height: 100vh;
        }

        .home-page h1,
        .home-page h2,
        .home-page h3,
        .home-page p {
          margin-top: 0;
        }

        /* Header */

        .home-header {
          background-color: var(--primary-color);
          color: #ffffff;
          padding: 32px 20px;
          text-align: center;
        }

        .home-header h1 {
          margin-bottom: 8px;
          font-size: 40px;
          letter-spacing: 1px;
        }

        .home-header p {
          margin-bottom: 0;
          font-size: 18px;
        }

        /* Navbar */

        .home-navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #222222;
        }

        .home-navbar a {
          display: block;
          padding: 16px 30px;
          color: #ffffff;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 700;
          transition: background-color 0.3s ease;
        }

        .home-navbar a:hover {
          background-color: var(--accent-color);
        }

        /* Hero Section */

        .home-hero {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 50px 20px;
          color: #ffffff;
          text-align: center;

          background-image:
            linear-gradient(
              rgba(0, 30, 60, 0.72),
              rgba(0, 30, 60, 0.72)
            ),
            url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1920");

          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }

        .home-hero h2 {
          margin-bottom: 16px;
          font-size: clamp(38px, 6vw, 58px);
          line-height: 1.2;
        }

        .home-hero p {
          max-width: 700px;
          margin: 0 auto;
          font-size: 20px;
        }

        /* Common Container */

        .home-container {
          width: 85%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 0;
        }

        .home-section-title {
          margin-bottom: 35px;
          color: var(--primary-color);
          text-align: center;
          font-size: 34px;
        }

        /* About Section */

        .home-about-text {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          font-size: 18px;
        }

        /* Services */

        .home-services {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          gap: 30px;
        }

        .home-service-box {
          flex: 1 1 280px;
          max-width: 360px;
          padding: 32px;
          background-color: var(--secondary-color);
          border-bottom: 4px solid var(--accent-color);
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .home-service-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 28px rgba(0, 75, 135, 0.18);
        }

        .home-service-box h3 {
          margin-bottom: 15px;
          color: var(--primary-color);
          font-size: 23px;
        }

        .home-service-box p {
          margin-bottom: 0;
        }

        /* Footer */

        .home-footer {
          margin-top: 30px;
          padding: 25px 20px;
          background-color: #222222;
          color: #cccccc;
          text-align: center;
        }

        .home-footer p {
          margin: 5px 0;
        }

        /* Responsive Design */

        @media (max-width: 768px) {
          .home-header h1 {
            font-size: 31px;
          }

          .home-navbar {
            position: static;
            flex-direction: column;
          }

          .home-navbar a {
            width: 100%;
            padding: 14px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
          }

          .home-hero {
            min-height: 65vh;
          }

          .home-hero p {
            font-size: 17px;
          }

          .home-container {
            width: 90%;
            padding: 50px 0;
          }

          .home-section-title {
            font-size: 29px;
          }

          .home-services {
            flex-direction: column;
            align-items: center;
          }

          .home-service-box {
            width: 100%;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .home-header {
            padding: 25px 15px;
          }

          .home-header h1 {
            font-size: 26px;
          }

          .home-header p {
            font-size: 16px;
          }

          .home-hero h2 {
            font-size: 35px;
          }

          .home-hero p {
            font-size: 16px;
          }

          .home-section-title {
            font-size: 26px;
          }

          .home-service-box {
            padding: 25px 20px;
          }
        }
      `}</style>

      <main className="home-page">
        {/* Header */}
        <header className="home-header">
          <h1>MS Telecom &amp; Infrastructure</h1>
          <p>Connecting the Future, Today.</p>
        </header>

        {/* Navigation */}
        <nav className="home-navbar">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#infrastructure">Infrastructure</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Hero Section */}
        <section className="home-hero">
          <h2>Next-Generation Connectivity</h2>

          <p>
            Building the backbone of modern communication with cutting-edge
            telecom infrastructure and cloud integration.
          </p>
        </section>

        {/* About Section */}
        <section className="home-container" id="about">
          <h2 className="home-section-title">Who We Are</h2>

          <p className="home-about-text">
            At MS Telecom &amp; Infrastructure, we specialize in deploying,
            scaling, and managing robust telecommunication networks. From
            global fiber-optic rollouts to laying the groundwork for 5G and
            cloud computing, our mission is to deliver seamless, high-speed,
            and reliable connectivity solutions to businesses and communities
            worldwide.
          </p>
        </section>

        {/* Services Section */}
        <section className="home-container" id="services">
          <h2 className="home-section-title">Our Core Infrastructure</h2>

          <div className="home-services" id="infrastructure">
            <article className="home-service-box">
              <h3>5G &amp; Wireless Networks</h3>

              <p>
                End-to-end deployment of cell towers, small cells, and advanced
                wireless broadband solutions to power the next generation of
                mobile connectivity.
              </p>
            </article>

            <article className="home-service-box">
              <h3>Fiber Optic Expansion</h3>

              <p>
                Designing, laying, and maintaining high-capacity fiber-optic
                cables to ensure blazing-fast internet and secure enterprise
                data transmission.
              </p>
            </article>

            <article className="home-service-box">
              <h3>Cloud Network Integration</h3>

              <p>
                Modernizing telecom infrastructure with scalable cloud
                solutions to support edge computing, data centers, and
                virtualized network functions.
              </p>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="home-footer" id="contact">
          <p>
            &copy; {new Date().getFullYear()} MS Telecom &amp; Infrastructure.
            All Rights Reserved.
          </p>

          <p>
            123 Connectivity Way, Tech District | info@mstelecom-infra.com
          </p>
        </footer>
      </main>
    </>
  );
};

export default Home;
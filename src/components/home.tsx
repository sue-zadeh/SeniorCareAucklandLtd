import React from 'react'
import { Link } from 'react-scroll'
import homeImage from '../assets/homeImage.png'
import logo from '../assets/logo.png'

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url(${homeImage})`,
      }}
    >
      <div className="hero-overlay">
        <div className="container-fluid px-3 px-md-4 px-lg-5 position-relative h-100">

          {/* Brand block on picture */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="hero-brand-block text-decoration-none"
          >
            <div className="brand-name-line">
              <span className="brand-senior">Senior </span>
              <span className="brand-healthcare">Healthcare</span>
            </div>

            <div className="brand-wave" />

            <div className="brand-auckland">Auckland Ltd.</div>

            <img
              src={logo}
              alt="Senior Healthcare Auckland Ltd logo"
              className="hero-brand-logo img-fluid"
            />
          </Link>

          <div className="row min-vh-100 align-items-center">
            <div className="col-12 col-md-10 col-lg-7 col-xl-6">
              <div className="hero-content-card">
                <h1 className="hero-title mb-3">
                  Compassionate Care in Auckland
                </h1>

                <p className="hero-text mb-4">
                  We provide support workers for homes, hospitals, healthcare,
                  community care, and rest homes.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Link
                    to="services-section"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="btn hero-btn-primary btn-lg px-4 py-3 fw-semibold"
                  >
                    Explore Services
                  </Link>

                  <Link
                    to="contact-us"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="btn hero-btn-secondary btn-lg px-4 py-3 fw-semibold"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
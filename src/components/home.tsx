import React from 'react'
import { Link } from 'react-scroll'
import homeImage from '../assets/homeImage.png'

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
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <div className="row min-vh-100 align-items-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="hero-content-card">
                <h1 className="hero-title display-5 mb-3">
                  Compassionate Care in Auckland
                </h1>

                <p className="hero-text fs-4 mb-4">
                  We provide support workers for homes, hospitals, healthcare,
                  community care, and rest homes
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Link
                    to="services-section"
                    smooth={true}
                    duration={500}
                    offset={-90}
                    className="btn hero-btn-primary btn-lg px-4 py-3 fw-semibold"
                  >
                    Explore Services
                  </Link>

                  <Link
                    to="contact-us"
                    smooth={true}
                    duration={500}
                    offset={-90}
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
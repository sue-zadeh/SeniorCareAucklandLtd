import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo1.png'

const serviceItems = [
  { id: 'personal-care', label: 'Support Services - Personal Care' },
  { id: 'medication-support', label: 'Medication Support' },
  { id: 'meal-preparation', label: 'Meal Preparation' },
  { id: 'domestic-assistance', label: 'Domestic Assistance' },
  { id: 'transport', label: 'Transport' },
  { id: 'community-social-participation', label: 'Community and Social Participation' },
]

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMenus = () => {
    setMobileOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container-fluid px-3 px-lg-4">
        <div className="d-flex align-items-center navbar-row py-3">
          {/* Left brand: logo + company name */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-90}
            className="brand-link text-decoration-none"
          >
            <img
              src={logo}
              alt="Senior Healthcare Auckland Ltd logo"
              className="brand-logo"
            />

            <div className="brand-text-wrap">
              <div className="brand-name-line">
                <span className="brand-senior">Senior </span>
                <span className="brand-healthcare">Healthcare</span>
              </div>
              <div className="brand-wave"></div>
              <div className="brand-auckland">Auckland Ltd.</div>
            </div>
          </Link>

          {/* Big space */}
          <div className="flex-grow-1"></div>

          {/* Desktop nav */}
          <nav className="d-none d-lg-flex align-items-center gap-4">
            <Link
              to="home"
              smooth={true}
              spy={true}
              duration={500}
              offset={-90}
              activeClass="active"
              className="nav-link-custom"
            >
              Home
            </Link>

            <div
              className="services-dropdown"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`nav-link-custom nav-btn-custom ${servicesOpen ? 'active' : ''}`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <FaChevronDown size={12} />
              </button>

              <div className={`services-menu ${servicesOpen ? 'show' : ''}`}>
                {serviceItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-90}
                    activeClass="active"
                    className="services-item"
                    onClick={closeMenus}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="about-us"
              smooth={true}
              spy={true}
              duration={500}
              offset={-90}
              activeClass="active"
              className="nav-link-custom"
            >
              About Us
            </Link>

            <Link
              to="work-for-us"
              smooth={true}
              spy={true}
              duration={500}
              offset={-90}
              activeClass="active"
              className="nav-link-custom"
            >
              Work For Us
            </Link>

            <Link
              to="for-clients"
              smooth={true}
              spy={true}
              duration={500}
              offset={-90}
              activeClass="active"
              className="nav-link-custom"
            >
              For Clients
            </Link>

            <Link
              to="contact-us"
              smooth={true}
              spy={true}
              duration={500}
              offset={-90}
              activeClass="active"
              className="nav-link-custom"
            >
              Contact Us
            </Link>

            <Link
              to="testimony"
              smooth={true}
              spy={true}
              duration={500}
              offset={-90}
              activeClass="active"
              className="nav-link-custom"
            >
              Testimony
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="d-lg-none mobile-toggle-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu d-lg-none ${mobileOpen ? 'show' : ''}`}>
          <Link to="home" smooth={true} spy={true} duration={500} offset={-90} activeClass="active" className="mobile-link" onClick={closeMenus}>
            Home
          </Link>

          <div className="mobile-services">
            <button
              type="button"
              className="mobile-link mobile-services-btn"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <FaChevronDown size={12} />
            </button>

            <div className={`mobile-services-menu ${servicesOpen ? 'show' : ''}`}>
              {serviceItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-90}
                  activeClass="active"
                  className="mobile-sub-link"
                  onClick={closeMenus}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="about-us" smooth={true} spy={true} duration={500} offset={-90} activeClass="active" className="mobile-link" onClick={closeMenus}>
            About Us
          </Link>
          <Link to="work-for-us" smooth={true} spy={true} duration={500} offset={-90} activeClass="active" className="mobile-link" onClick={closeMenus}>
            Work For Us
          </Link>
          <Link to="for-clients" smooth={true} spy={true} duration={500} offset={-90} activeClass="active" className="mobile-link" onClick={closeMenus}>
            For Clients
          </Link>
          <Link to="contact-us" smooth={true} spy={true} duration={500} offset={-90} activeClass="active" className="mobile-link" onClick={closeMenus}>
            Contact Us
          </Link>
          <Link to="testimony" smooth={true} spy={true} duration={500} offset={-90} activeClass="active" className="mobile-link" onClick={closeMenus}>
            Testimony
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'

function App() {
  return (
    <>
      <Navbar />
      <Home />

      <section id="services-section" className="content-section container py-5">
        <h2>Our Services</h2>
      </section>

      <section id="personal-care" className="content-section container py-5">
        <h2>Support Services - Personal Care</h2>
      </section>

      <section id="medication-support" className="content-section container py-5">
        <h2>Medication Support</h2>
      </section>

      <section id="meal-preparation" className="content-section container py-5">
        <h2>Meal Preparation</h2>
      </section>

      <section id="domestic-assistance" className="content-section container py-5">
        <h2>Domestic Assistance</h2>
      </section>

      <section id="transport" className="content-section container py-5">
        <h2>Transport</h2>
      </section>

      <section id="community-social-participation" className="content-section container py-5">
        <h2>Community and Social Participation</h2>
      </section>

      <section id="about-us" className="content-section container py-5">
        <h2>About Us</h2>
      </section>

      <section id="work-for-us" className="content-section container py-5">
        <h2>Work For Us</h2>
      </section>

      <section id="for-clients" className="content-section container py-5">
        <h2>For Clients</h2>
      </section>

      <section id="contact-us" className="content-section container py-5">
        <h2>Contact Us</h2>
      </section>

      <section id="testimony" className="content-section container py-5">
        <h2>Testimony</h2>
      </section>
    </>
  )
}

export default App
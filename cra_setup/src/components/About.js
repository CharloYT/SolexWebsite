import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <section className="company-history">
        <h2>Our History</h2>
        <p>
          "Solex was founded in 2001 by Benson Charles with a vision to briefly
          describe the founder's vision or goal. With a passion for innovation
          and a commitment to excellence, our company has grown from a small
          startup to a leading Tech Company in the world. Over the years, we
          have achieved numerous milestones, including Launched our flagship
          product called Saze w. Through our journey, we have remained true to
          our core values of Integrity, Innovation, Customer Centricity,
          Sustainability, Teamwork.
        </p>
      </section>
      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          "Our mission is to empower individuals and businesses by providing
          innovative solutions that enhance productivity and foster growth. We
          are committed to delivering exceptional value through our products and
          services while maintaining integrity, sustainability, and a strong
          focus on customer satisfaction. Together, we strive to create a
          positive impact in our community and the world."
        </p>
      </section>
      <section className="team-members">
        <h2>Our Team</h2>
        <ul>
          <li>
            <h3>John Doe</h3>
            <p>CEO</p>
          </li>
          <li>
            <h3>Jane Smith</h3>
            <p>Executive Officer</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default About;

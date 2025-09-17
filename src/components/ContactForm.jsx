/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus("✅ Thank you for your message! We will get back to you soon.");
  //   setFormData({ name: "", email: "", message: "" });
  // };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const phoneNumber = "919537182599";
  //     const message = `Hello, I am ${formData.name}.
  // Email: ${formData.email}
  // Message: ${formData.message}`;

  //     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //       message
  //     )}`;

  //     window.open(url, "_blank");
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Pehle owner ko mail bhejna
    emailjs
      .send(
        "service_pce81ci", // owner ka service ID
        "template_yrdt9dh", // owner ko jane wala template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "hp5yJxzVDJq-krRd-"
      )
      .then(
        (result) => {
          // ✅ Ab user ko auto-reply bhejna
          emailjs.send(
            "service_pce81ci",
            "template_e0pgjsj", // user ke liye auto-reply template
            {
              from_name: formData.name,
              to_email: formData.email, // 👈 important: user ka email
              message: formData.message,
            },
            "hp5yJxzVDJq-krRd-"
          );

          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <p>
          Have questions or need support? Reach out to us and our team will
          respond promptly.
        </p>

        <div className={styles.grid}>
          {/* Left Info Section */}
          <div className={styles.info}>
            <h3>Get in Touch</h3>
            <p>
              <FaMapMarkerAlt className={styles.icon} /> MiQB Executive
              Coworking Space Plot 23, Sector 18 Maruti Industrial Development
              Area, Gurugram, Haryana 122015
            </p>
            <p>
              <FaEnvelope className={styles.icon} /> support@vehiclecare.in
            </p>
            <p>
              <FaPhoneAlt className={styles.icon} /> +91 99110 20209, +91 93553
              02514
            </p>
          </div>

          {/* Right Form Section */}
          <div className={styles.card}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
              {status && <p className={styles.status}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import React, { useState } from "react";
import styles from "../styles/ServiceMain.module.css";
import video from "../assets/video/car-service-banner-video.mp4";
import BasicCarService from "../assets/image/BasicCarService.png";
import StandardCarService from "../assets/image/StandardCarService.png";
import ComprehensiveCarService from "../assets/image/ComprehensiveCarService.png";
import VehicleCareComparison from "./VehicleCareComparison";
import Features from "./Features";
import Testimonials from "./Testimonials";

const services = [
  {
    id: 1,
    title: "Basic Car Service",
    desc: "Complete car care for safety, comfort, and smooth performance daily.",
    img: BasicCarService,
    details: (
      <div>
        <h4>🛠️ Included Services</h4>
        <ul>
          <li>Air Filter Cleaning</li>
          <li>Battery Water Top-Up</li>
          <li>Coolant Top Up (200 ml)</li>
          <li>Engine Oil Replacement</li>
          <li>Car Inspection</li>
          <li>Oil Filter Replacement</li>
          <li>Heater/Spark Plugs Checking</li>
          <li>Wiper Fluid Replacement</li>
          <li>Interior Vacuuming (Carpet & Seat)</li>
          <li>Dashboard & Tyre Polish</li>
          <li>Car Wash</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: "Standard Car Service",
    desc: "Wheel alignment, balancing, and care for smooth rides.",
    img: StandardCarService,
    details: (
      <div>
        <h4>🛠️ Included Services</h4>
        <ul>
          <li>Engine Oil Replacement</li>
          <li>Oil Filter Replacement</li>
          <li>Air Filter Replacement</li>
          <li>Wiper Fluid Replacement</li>
          <li>AC Filter Cleaning</li>
          <li>Coolant Top Up (200 ml)</li>
          <li>Brake Fluid Top-Up</li>
          <li>Battery Water top-up</li>
          <li>Front Brake Pads Serviced</li>
          <li>Rear Brake Shoes Serviced</li>
          <li>Heater/Spark Plugs Checking</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: "Comprehensive Car Service",
    desc: "Car AC maintenance and repairs for cool, comfortable drives.",
    img: ComprehensiveCarService,
    details: (
      <div>
        <h4>🛠️ Included Services</h4>
        <ul>
          <li>Rear Brake Shoes Cleaning</li>
          <li>Wheel Alignment</li>
          <li>Wheel Balancing</li>
          <li>Car Inspection</li>
          <li>Car Scanning</li>
          <li>Fuel Filter Checking</li>
          <li>Heater/Spark Plugs Checking</li>
          <li>Engine Oil Replacement</li>
          <li>Front Brake Pads Cleaning</li>
          <li>Gear Oil Top-Up</li>
          <li>Battery Water top-up</li>
        </ul>
      </div>
    ),
  },
];

const ServiceMain = () => {
  // const [formData, setFormData] = useState({
  //   city: "",
  //   car: "",
  // });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // TODO: Integrate with your booking API
  //   alert(`Checking price for ${formData.car} in ${formData.city}`);
  // };

  return (
    <>
      <section id="home" className={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
          poster="/images/hero-car.jpg"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <p>Anytime, Anywhere</p>
            <h1>
              Car Service in Ahmedabad, <br /> Pickup & Delivery Available
            </h1>
          </div>

          {/* <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Vehicle Model (e.g., Honda City)"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Year (e.g., 2020)"
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
              required
            />
            <select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              required
            >
              <option value="">Select Service</option>
              <option value="ac-service">AC Service</option>
              <option value="oil-change">Engine Oil Change</option>
              <option value="brake-repair">Brake Repair</option>
              <option value="full-service">Full Service</option>
            </select>
            <button type="submit">Book Now</button>
          </form> */}
        </div>
      </section>{" "}
      <div className={styles.container}>
        <h2>Our Services</h2>
        <p>
          Our mission is to drive progress and enhance the lives of our
          customers by delivering superior car care services that exceed
          expectations.
        </p>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(service);
                }}
              >
                Know more →
              </a>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && selectedService && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            {selectedService.details}
            <button className={styles.bookButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
      <VehicleCareComparison />
      <Features />
      <Testimonials />
    </>
  );
};

export default ServiceMain;

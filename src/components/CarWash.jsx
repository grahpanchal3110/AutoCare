import React, { useState } from "react";
import styles from "../styles/ServiceMain.module.css";
import video from "../assets/video/car-wash.mp4";
import TopWash from "../assets/image/TopWash.png";
import Car_wash from "../assets/image/CarWash.png";
import CarInteriorDryCleaning from "../assets/image/CarInteriorDryCleaning.png";
import VehicleCareComparison from "./VehicleCareComparison";
import StepSection from "./StepSection";
import WhyChoose from "./WhyChoose";

const services = [
  {
    id: 1,
    title: "Top Wash",
    desc: "Comprehensive exterior wash to remove dirt, grime, and restore your car's showroom shine.",
    img: TopWash,
    details: (
      <div>
        <h4>🛠️ Included Services</h4>
        <ul>
          <li>Exterior Foam Wash</li>
          <li>Tire Cleaning</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: "Car Wash",
    desc: "Thorough exterior cleaning to restore shine and maintain your car's appearance.",
    img: Car_wash,
    details: (
      <div>
        <h4>🛠️ Included Services</h4>
        <ul>
          <li>Top wash</li>
          <li>Dashboard polish for shine</li>
          <li>Engine bay cleaning</li>
          <li>Wheel and tire cleaning</li>
          <li>Interior vacuuming (seats & carpets)</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: "Car Interior Dry Cleaning",
    desc: "Deep interior cleaning to remove dust, stains, and odors for a refreshed cabin.",
    img: CarInteriorDryCleaning,
    details: (
      <div>
        <h4>🛠️ Included Services</h4>
        <ul>
          <li>Deep Interior Vacuuming</li>
          <li>Dashboard & Console Cleaning</li>
          <li>Window & Glass Cleaning</li>
          <li>Seat & Upholstery Cleaning</li>
          <li>Engine Bay Dusting</li>
          <li>Wheel & Tire Cleaning</li>
          <li>Hand Dry Exterior Cleaning</li>
          <li>Smart Dry Wash for a Fresh Look</li>
        </ul>
      </div>
    ),
  },
];

const CarWash = () => {
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
              Find a Premium Car Wash <br /> Near me.
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
          customers by delivering <br /> superior car care services that exceed
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
      <StepSection />
      <VehicleCareComparison />
      <WhyChoose />
    </>
  );
};

export default CarWash;

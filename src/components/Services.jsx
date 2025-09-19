// // Services.js
// import React, { useState } from "react";
// import styles from "../styles/Services.module.css";
// import BasicCarService from "../assets/image/BasicCarService.png";
// import StandardCarService from "../assets/image/StandardCarService.png";
// import ComprehensiveCarService from "../assets/image/ComprehensiveCarService.png";

// const services = [
//   {
//     id: 1,
//     title: "Basic Car Service",
//     desc: "Complete car care for safety, comfort, and smooth performance daily.",
//     img: BasicCarService,
//     details: (
//       <div>
//         <h4>🛠️ Included Services</h4>
//         <ul>
//           <li>Air Filter Cleaning</li>
//           <li>Battery Water Top-Up</li>
//           <li>Coolant Top Up (200 ml)</li>
//           <li>Engine Oil Replacement</li>
//           <li>Car Inspection</li>
//           <li>Oil Filter Replacement</li>
//           <li>Heater/Spark Plugs Checking</li>
//           <li>Wiper Fluid Replacement</li>
//           <li>Interior Vacuuming (Carpet & Seat)</li>
//           <li>Dashboard & Tyre Polish</li>
//           <li>Car Wash</li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     title: "Standard Car Service",
//     desc: "Wheel alignment, balancing, and care for smooth rides.",
//     img: StandardCarService,
//     details: (
//       <div>
//         <h4>🛠️ Included Services</h4>
//         <ul>
//           <li>Engine Oil Replacement</li>
//           <li>Oil Filter Replacement</li>
//           <li>Air Filter Replacement</li>
//           <li>Wiper Fluid Replacement</li>
//           <li>AC Filter Cleaning</li>
//           <li>Coolant Top Up (200 ml)</li>
//           <li>Brake Fluid Top-Up</li>
//           <li>Battery Water top-up</li>
//           <li>Front Brake Pads Serviced</li>
//           <li>Rear Brake Shoes Serviced</li>
//           <li>Heater/Spark Plugs Checking</li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     title: "Comprehensive Car Service",
//     desc: "Car AC maintenance and repairs for cool, comfortable drives.",
//     img: ComprehensiveCarService,
//     details: (
//       <div>
//         <h4>🛠️ Included Services</h4>
//         <ul>
//           <li>Rear Brake Shoes Cleaning</li>
//           <li>Wheel Alignment</li>
//           <li>Wheel Balancing</li>
//           <li>Car Inspection</li>
//           <li>Car Scanning</li>
//           <li>Fuel Filter Checking</li>
//           <li>Heater/Spark Plugs Checking</li>
//           <li>Engine Oil Replacement</li>
//           <li>Front Brake Pads Cleaning</li>
//           <li>Gear Oil Top-Up</li>
//           <li>Battery Water top-up</li>
//         </ul>
//       </div>
//     ),
//   },
// ];

// const Services = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   const openModal = (service) => {
//     setSelectedService(service);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedService(null);
//   };

//   return (
//     <section id="services" className={styles.section}>
//       <div className={styles.container}>
//         <h2>Our Services</h2>
//         <p>
//           Our mission is to drive progress and enhance the lives of our
//           customers by delivering superior car care services that exceed
//           expectations.
//         </p>
//         <div className={styles.grid}>
//           {services.map((service) => (
//             <div key={service.id} className={styles.card}>
//               <img src={service.img} alt={service.title} />
//               <h3>{service.title}</h3>
//               <p>{service.desc}</p>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   openModal(service);
//                 }}
//               >
//                 Know more →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//       {isModalOpen && selectedService && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <button className={styles.closeButton} onClick={closeModal}>
//               ×
//             </button>
//             {selectedService.details}
//             <button className={styles.bookButton} onClick={closeModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Services;

// Services.js
import React from "react";
import styles from "../styles/Services.module.css";
import insurance_claim from "../assets/image/insurance_claim.svg";
import dent_paint from "../assets/image/dent_paint.svg";
import custom_repair from "../assets/image/custom_repair.svg";
import comprehensive_service from "../assets/image/comprehensive-service.svg";
// import amc from "../assets/image/amc.png";
// import wire from "../assets/image/wire.svg";
// import warranty from "../assets/image/warranty.png";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Insurance Claim",
      desc: "Quick insurance help with smooth claims and easy support process.",
      icon: insurance_claim,
    },
    {
      id: 2,
      title: "Car Service",
      desc: "Complete car care for safety, comfort, and smooth performance daily.",
      icon: comprehensive_service,
    },
    {
      id: 3,
      title: "Car Repair",
      desc: "Expert car repairs using genuine parts and professional service care.",
      icon: custom_repair,
    },
    {
      id: 4,
      title: "Dent & Paint",
      desc: "Restore your car’s shine with expert dent and paint repair services.",
      icon: dent_paint,
    },
    // {
    //   id: 5,
    //   title: "EV Certified Service",
    //   desc: "Certified EV service with diagnostics, battery checks, and updates.",
    //   icon: wire,
    // },
    // {
    //   id: 6,
    //   title: "Warranty",
    //   desc: "Manage vehicle warranty claims easily through trusted service centers.",
    //   icon: warranty,
    // },
    // {
    //   id: 7,
    //   title: "AMC",
    //   desc: "Annual maintenance plans for worry-free ownership all year long.",
    //   icon: amc,
    // },
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <h2>All Car Care Services</h2>
        <p>
          Our mission is to drive progress and enhance the lives of our
          customers by delivering superior car care services that exceed
          expectations.
        </p>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles.icon}
              />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to="/" className={styles.knowMore}>
                Know more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

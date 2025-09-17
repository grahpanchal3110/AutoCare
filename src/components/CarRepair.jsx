import React, { useState } from "react";
import styles from "../styles/ServiceMain.module.css";
import video from "../assets/video/home-banner-video.mp4";
import BasicCarService from "../assets/image/BasicCarService.png";
import StandardCarService from "../assets/image/StandardCarService.png";
import ComprehensiveCarService from "../assets/image/ComprehensiveCarService.png";
import VehicleCareComparison from "./VehicleCareComparison";
import StepSection from "./StepSection";
import WhyChoose from "./WhyChoose";
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

const CarRepair = () => {
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
              Your search for Car Repair <br /> near me ends here
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
      <Testimonials />
    </>
  );
};

export default CarRepair;

// import React, { useState } from "react";
// import homeVideo from "../assets/video/home-banner-video.mp4";
// import BasicCarService from "../assets/image/BasicCarService.png";
// import StandardCarService from "../assets/image/StandardCarService.png";
// import ComprehensiveCarService from "../assets/image/ComprehensiveCarService.png";
// import VehicleCareComparison from "./VehicleCareComparison";
// import StepSection from "./StepSection";
// import WhyChoose from "./WhyChoose";
// import Testimonials from "./Testimonials";

// const services = [
//   {
//     id: 1,
//     title: "Basic Car Service",
//     desc: "Complete car care for safety, comfort, and smooth performance daily.",
//     img: BasicCarService,
//     details: (
//       <div>
//         <h4 className="text-lg font-semibold mb-2">🛠️ Included Services</h4>
//         <ul className="list-disc pl-5 space-y-1 text-gray-700">
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
//         <h4 className="text-lg font-semibold mb-2">🛠️ Included Services</h4>
//         <ul className="list-disc pl-5 space-y-1 text-gray-700">
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
//         <h4 className="text-lg font-semibold mb-2">🛠️ Included Services</h4>
//         <ul className="list-disc pl-5 space-y-1 text-gray-700">
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

// const CarRepair = () => {
//   const [formData, setFormData] = useState({
//     city: "",
//     car: "",
//   });
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Checking price for ${formData.car} in ${formData.city}`);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative w-full h-screen overflow-hidden" id="home">
//         <video
//           className="w-full max-w-2xl rounded-lg shadow-lg"
//           controls
//           autoPlay // Optional: Autoplay the video
//           loop // Optional: Loop the video
//           muted // Optional: Mute the video initially
//         >
//           <source
//             src="https://drive.google.com/file/d/13DdCCwZQybTjxmRVogwnL6ogIuz4hd17/view?pli=1"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>

//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4 text-center z-10">
//           <div className="max-w-2xl mb-6">
//             <p className="text-lg mb-2">Anytime, Anywhere</p>
//             <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//               Your search for Car Repair <br /> near me ends here
//             </h1>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-wrap gap-3 justify-center w-full max-w-3xl"
//           >
//             <input
//               type="text"
//               placeholder="Vehicle Model (e.g., Honda City)"
//               value={formData.model}
//               onChange={(e) =>
//                 setFormData({ ...formData, model: e.target.value })
//               }
//               required
//               className="flex-1 min-w-[150px] px-4 py-3 rounded-md bg-white/90 text-gray-800 focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Year (e.g., 2020)"
//               value={formData.year}
//               onChange={(e) =>
//                 setFormData({ ...formData, year: e.target.value })
//               }
//               required
//               className="flex-1 min-w-[150px] px-4 py-3 rounded-md bg-white/90 text-gray-800 focus:outline-none"
//             />
//             <select
//               value={formData.service}
//               onChange={(e) =>
//                 setFormData({ ...formData, service: e.target.value })
//               }
//               required
//               className="flex-1 min-w-[150px] px-4 py-3 rounded-md bg-white/90 text-gray-800 focus:outline-none"
//             >
//               <option value="">Select Service</option>
//               <option value="ac-service">AC Service</option>
//               <option value="oil-change">Engine Oil Change</option>
//               <option value="brake-repair">Brake Repair</option>
//               <option value="full-service">Full Service</option>
//             </select>
//             <button
//               type="submit"
//               className="bg-gray-700 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-md"
//             >
//               Book Now
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Services Section */}
//       <div className="max-w-6xl mx-auto px-6 py-12 relative bg-white text-gray-800">
//         <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-600 mb-4">
//           Our Services
//         </h2>
//         <p className="text-center mb-10 text-gray-600">
//           Our mission is to drive progress and enhance the lives of our
//           customers by delivering <br /> superior car care services that exceed
//           expectations.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="bg-gray-100 p-4 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform"
//             >
//               <img
//                 src={service.img}
//                 alt={service.title}
//                 className="w-full h-64 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">{service.desc}</p>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   openModal(service);
//                 }}
//                 className="text-red-600 mt-3 inline-block hover:underline"
//               >
//                 Know more →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && selectedService && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
//           <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-3 right-3 text-gray-600 text-2xl"
//               onClick={closeModal}
//             >
//               ×
//             </button>
//             {selectedService.details}
//             <button
//               className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-md mt-4"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <StepSection />
//       <VehicleCareComparison />
//       <WhyChoose />
//       <Testimonials />
//     </>
//   );
// };

// export default CarRepair;

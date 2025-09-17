// // Hero.js
// import { useState } from "react";
// import styles from "../styles/Hero.module.css";
// import video from "../assets/video/car-service-banner-video.mp4";

// const Hero = () => {
//   const [formData, setFormData] = useState({
//     model: "",
//     year: "",
//     service: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Integrate with your booking API
//     alert(
//       `Booking for ${formData.model} ${formData.year} - ${formData.service}`
//     );
//   };

//   return (
//     <section id="home" className={styles.hero}>
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className={styles.video}
//         poster="/images/hero-car.jpg" // Fallback image
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className={styles.overlay}>
//         <div className={styles.textOverlay}>
//           <h1>Professional Car Service in Ahmedabad</h1>
//           <p>
//             Expert maintenance, quick repairs, and genuine parts. Book your slot
//             today!
//           </p>
//           <form onSubmit={handleSubmit} className={styles.form}>
//             <input
//               type="text"
//               placeholder="Vehicle Model (e.g., Honda City)"
//               value={formData.model}
//               onChange={(e) =>
//                 setFormData({ ...formData, model: e.target.value })
//               }
//               required
//             />
//             <input
//               type="text"
//               placeholder="Year (e.g., 2020)"
//               value={formData.year}
//               onChange={(e) =>
//                 setFormData({ ...formData, year: e.target.value })
//               }
//               required
//             />
//             <select
//               value={formData.service}
//               onChange={(e) =>
//                 setFormData({ ...formData, service: e.target.value })
//               }
//               required
//             >
//               <option value="">Select Service</option>
//               <option value="ac-service">AC Service</option>
//               <option value="oil-change">Engine Oil Change</option>
//               <option value="brake-repair">Brake Repair</option>
//               <option value="full-service">Full Service</option>
//             </select>
//             <button type="submit">Book Now</button>
//           </form>
//         </div>
//         <div className={styles.textOverlay}>
//           <p>Anytime, Anywhere</p>
//           <h2>
//             Car Service in Ahmedabad,
//             <br />
//             Pickup & Delivery Available
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// Hero.js
import React from "react";
import styles from "../styles/Hero.module.css";
import video from "../assets/video/home-banner-video.mp4";
import carwash from "../assets/image/carwash.svg";
import dent_paint from "../assets/image/dent_paint.svg";
import custom_repair from "../assets/image/custom_repair.svg";
import comprehensive_service from "../assets/image/comprehensive-service.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  // const [formData, setFormData] = useState({
  //   city: "",
  //   car: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // TODO: Integrate with your booking API
  //   alert(`Checking price for ${formData.car} in ${formData.city}`);
  // };

  return (
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
        <div className={styles.textOverlay}>
          <h1>One-Stop Car Service & Repairs in Ahmedabad</h1>
          <p>Anytime, Anywhere</p>
        </div>
        <div className={styles.serviceOptions}>
          <div className={styles.serviceCard}>
            <img src={carwash} alt="Car Wash" />
            <p>
              Car Wash
              <br />
              Get your car sparkling clean with quick and affordable service.
            </p>
            <Link to="/car-wash">Know more →</Link>
          </div>
          <div className={styles.serviceCard}>
            <img src={comprehensive_service} alt="Car Service" />
            <p>
              Car Service
              <br />
              Complete care for safety, comfort, and smooth performance daily.
            </p>
            <Link to="/service">Know more →</Link>
          </div>
          <div className={styles.serviceCard}>
            <img src={custom_repair} alt="Car Repair" />
            <p>
              Car Repair
              <br />
              Expert car repairs using genuine parts and professional service
              care.
            </p>
            <Link to="/car-repair">Know more →</Link>
          </div>
          <div className={styles.serviceCard}>
            <img src={dent_paint} alt="Dent & Paint" />
            <p>
              Dent & Paint
              <br />
              Restore your car’s shine with expert dent and paint repair
              services.
            </p>
            <Link to="/Dent-Paint">Know more →</Link>
          </div>
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
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
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
    </section>
  );
};

export default Hero;

import React from "react";
import styles from "../styles/ServiceMain.module.css";
import video from "../assets/video/dent-paint-banner-video.mp4";
import FullBody from "../assets/image/FullBody.png";
import GenuineSpareParts from "../assets/image/FrontBumper.png";
import BodyRepair from "../assets/image/RearBumper.png";
import VehicleCareComparison from "./VehicleCareComparison";
import StepSection from "./StepSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";

const services = [
  {
    id: 1,
    title: "Full Body",
    desc: "Complete body repair and paint services to restore your car's original look.",
    img: FullBody,
  },
  {
    id: 2,
    title: "Genuine Spare Parts",
    desc: "High-quality OEM / OES spare parts for reliable and long-lasting performance.",
    img: GenuineSpareParts,
  },
  {
    id: 3,
    title: "BodyRepair",
    desc: "Dent, paint, and collision repair services to fix and restore body damage.",
    img: BodyRepair,
  },
];

const DentPaint = () => {
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
            <h2 style={{ fontSize: "30px" }}>
              Car Denting & Painting in Ahmedabad, Affordable & Quick
            </h2>
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
              <p>{service.desc}</p> <a>Know more →</a>
            </div>
          ))}
        </div>
      </div>
      <StepSection />
      <VehicleCareComparison />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default DentPaint;

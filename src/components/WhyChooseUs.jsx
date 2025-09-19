import React from "react";
import styles from "../styles/WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const points = [
    {
      id: 1,
      text: "Your car is your baby and we understand your feelings. We handle your car with extreme care and attention.",
    },
    {
      id: 2,
      text: "Qutocare offers quick appointment booking via our website or app. Enjoy hassle-free door pick-up and drop-off services for your convenience.",
    },
    {
      id: 3,
      text: "We use cutting-edge tools and modern tech for high-quality results. Transparent communication keeps you informed throughout the repair process.",
    },
    {
      id: 4,
      text: "We offer a one-year warranty on all dent & paint jobs. A dedicated service manager keeps you updated at every step of your service journey.",
    },
    {
      id: 5,
      text: "Whether it's a sedan, SUV, or luxury car, our experienced team ensures a perfect match for your vehicle's dent & paint needs.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Why Choose Qutocare for Your Car's{" "}
          <span className={styles.highlight}>Dent & Paint</span> Needs?
        </h2>

        <div className={styles.grid}>
          {points.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.number}>{item.id}</div>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

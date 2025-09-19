import React from "react";
import styles from "../styles/WhyChoose.module.css";

const reasons = [
  {
    id: 1,
    title: "Genuine Parts",
    desc: "Top-notch quality with OEM/OES spares only.",
    icon: "🛠️", // temporary emoji, later replace with image/svg
  },
  {
    id: 2,
    title: "Transparent",
    desc: "24x7 assistance and live status updates in App.",
    icon: "👁️",
  },
  {
    id: 3,
    title: "Hassel-Free",
    desc: "Services delivered through bespoke solutions.",
    icon: "💺",
  },
  {
    id: 4,
    title: "Honest Pricing",
    desc: "Best quote in the industry for your car service.",
    icon: "₹",
  },
];

const WhyChoose = () => {
  return (
    <section className={styles.whyWrapper}>
      <h2 className={styles.heading}>Why Choose Qutocare</h2>
      <div className={styles.reasonsGrid}>
        {reasons.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;

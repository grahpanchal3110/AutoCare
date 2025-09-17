import styles from "../styles/StepSection.module.css";
import React from "react";
const steps = [
  {
    id: 1,
    title: "Select Your Car",
    desc: "Choose from our portfolio of cars.",
    icon: "🚗", // temporary emoji, aap chahe to image ya SVG dal sakte ho
  },
  {
    id: 2,
    title: "Free Pick-Up & Drop",
    desc: "Get free pick up & drop on all booked services.",
    icon: "📍",
  },
  {
    id: 3,
    title: "Live Tracking",
    desc: "Get real-time updates on your car location & status.",
    icon: "📱",
  },
  {
    id: 4,
    title: "30 Days Warranty",
    desc: "Stay assured. Get 30 days warranty on all car services.",
    icon: "🛡️",
  },
];

const StepSection = () => {
  return (
    <section className={styles.stepsWrapper}>
      <h2 className={styles.heading}>Service In 4 Easy Steps</h2>
      <div className={styles.stepsGrid}>
        {steps.map((step) => (
          <div key={step.id} className={styles.card}>
            <div className={styles.icon}>{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepSection;

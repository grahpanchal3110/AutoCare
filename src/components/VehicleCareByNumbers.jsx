import React from "react";
import styles from "../styles/VehicleCareByNumbers.module.css";

const stats = [
  {
    id: 1,
    number: "250+",
    title: "Cities",
    description: "We serve across India with wide city coverage and access.",
  },
  {
    id: 2,
    number: "1800+",
    title: "Workshops",
    description:
      "Authorized, verified car workshops offering consistent service experience.",
  },
  {
    id: 3,
    number: "100+",
    title: "Partners",
    description:
      "OEMs, dealers, and aggregators collaborating for better service delivery.",
  },
  {
    id: 4,
    number: "1.5 Lac",
    title: "Vehicles Served",
    description:
      "Thousands of happy customers with reliable service and repair history.",
  },
];

const VehicleCareByNumbers = () => {
  return (
    <section id="vehicle-care-numbers" className={styles.section}>
      <div className={styles.container}>
        <h2>Qutocare By The Numbers</h2>
        <p>Real impact. Real results. Trusted by thousands across India.</p>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.card}>
              <h3 className={styles.number}>{stat.number}</h3>
              <p className={styles.title}>{stat.title}</p>
              <p className={styles.description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleCareByNumbers;

import React from "react";
import styles from "../styles/VehicleCareComparison.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const VehicleCareComparison = () => {
  const features = [
    {
      id: 1,
      name: "Convenience - Pick-up & Drop Service",
      local: false,
      authorized: false,
      verified: true,
    },
    {
      id: 2,
      name: "Quality Check - Thorough Inspection",
      local: false,
      authorized: false,
      verified: true,
    },
    {
      id: 3,
      name: "Assurance - Service Warranty",
      local: false,
      authorized: true,
      verified: true,
    },
    {
      id: 4,
      name: "Parts Reliability - Genuine Spares",
      local: false,
      authorized: true,
      verified: true,
    },
    {
      id: 5,
      name: "Time-Saving - Same-Day Delivery",
      local: false,
      authorized: false,
      verified: true,
    },
    {
      id: 6,
      name: "Expertise - Skilled Mechanics",
      local: false,
      authorized: true,
      verified: true,
    },
    {
      id: 7,
      name: "Flexibility - Doorstep Servicing",
      local: false,
      authorized: false,
      verified: true,
    },
    {
      id: 8,
      name: "Transparency - No Hidden Costs",
      local: false,
      authorized: false,
      verified: true,
    },
  ];

  return (
    <section id="vehicle-care-comparison" className={styles.section}>
      <div className={styles.container}>
        <h2>VehicleCare Benefits Comparison</h2>
        <div className={styles.grid}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Features</th>
                <th className={styles.th}>Local Mechanic</th>
                <th className={styles.th}>Authorized Center</th>
                <th className={styles.th + " " + styles.verified}>Verified</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.id} className={styles.tr}>
                  <td className={styles.td}>{feature.name}</td>
                  <td className={styles.td}>
                    {feature.local ? (
                      <FaCheckCircle className={styles.iconGreen} />
                    ) : (
                      <FaTimesCircle className={styles.iconRed} />
                    )}
                  </td>
                  <td className={styles.td}>
                    {feature.authorized ? (
                      <FaCheckCircle className={styles.iconGreen} />
                    ) : (
                      <FaTimesCircle className={styles.iconRed} />
                    )}
                  </td>
                  <td className={styles.td}>
                    {feature.verified ? (
                      <FaCheckCircle className={styles.iconGreen} />
                    ) : (
                      <FaTimesCircle className={styles.iconRed} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default VehicleCareComparison;

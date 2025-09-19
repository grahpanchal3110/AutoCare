// Features.js
import React from "react";
import styles from "../styles/Features.module.css";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Why Qutocare is The Right Choice for You</h2>
        <p className={styles.subtitle}>
          Unreliable car repairs in Gurgaon? Try Qutocare certified mechanics,
          doorstep service, and real-time updates.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Common Problems Faced by Car Owners</h3>
            <p>
              <span style={{ color: "black", fontWeight: "bold" }}>
                Inconsistent Service Quality:
              </span>{" "}
              Local garages lack standards, causing unpredictable results.
              <br />
              <span style={{ color: "black", fontWeight: "bold" }}>
                Poor Communication:
              </span>{" "}
              No real-time updates from traditional workshops. <br />
              <span style={{ color: "black", fontWeight: "bold" }}>
                Hidden Charges:
              </span>
              Unexpected billing surprises hurt trust. <br />{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                Non-Genuine Parts:
              </span>
              Inferior spares reduce your car's reliability.
            </p>
          </div>
          <div className={styles.card}>
            <h3>How Qutocare Adds Value</h3>
            <p>
              <span style={{ color: "black", fontWeight: "bold" }}>
                Certified Mechanics in Gurgaon:
              </span>{" "}
              Background-verified and trained experts only. <br />{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                Tech-Enabled Workshops:
              </span>{" "}
              Equipped with diagnostic tools and service SOPs. <br />
              <span style={{ color: "black", fontWeight: "bold" }}>
                Doorstep Service:{" "}
              </span>
              Pickup and drop or on-the-spot service. <br />
              <span style={{ color: "black", fontWeight: "bold" }}>
                Real-Time Communication:
              </span>{" "}
              Live updates via app and WhatsApp. <br />{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                Transparent Pricing:
              </span>{" "}
              Upfront cost estimates, no hidden charges. <br />{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                Genuine Spare Parts:
              </span>{" "}
              OEM-approved or equivalent quality assured. <br />{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                24x7 Roadside Assistance:{" "}
              </span>{" "}
              Quick help anywhere in Gurgaon.
            </p>
          </div>
          <div className={styles.cardDark}>
            <h3>Popular Car Services in Gurgaon</h3>

            <li style={{ listStyleType: "none" }}>
              <span style={{ color: "white", fontWeight: "bold" }}>
                Doorstep Car Service:
              </span>{" "}
              Hassle-free, time-saving service at your location.
            </li>
            <li style={{ listStyleType: "none" }}>
              <span style={{ color: "white", fontWeight: "bold" }}>
                Car Detailing:
              </span>{" "}
              Interior deep clean + exterior polish for showroom-like finish.
            </li>
            <li style={{ listStyleType: "none" }}>
              {" "}
              <span style={{ color: "white", fontWeight: "bold" }}>
                Battery Replacement:
              </span>{" "}
              Fast, warranty-backed battery installs.
            </li>
            <li style={{ listStyleType: "none" }}>
              <span style={{ color: "white", fontWeight: "bold" }}>
                Wheel Alignment & Balancing:
              </span>{" "}
              Improved safety and smooth drive.
            </li>
            <li style={{ listStyleType: "none" }}>
              <span style={{ color: "white", fontWeight: "bold" }}>
                AC Servicing:
              </span>{" "}
              Gas refills, filters, and performance restoration.
            </li>
            <li style={{ listStyleType: "none" }}>
              {" "}
              <span style={{ color: "white", fontWeight: "bold" }}>
                24x7 Roadside Assistance:
              </span>{" "}
              Flat tyre? Breakdown? We’ve got you covered.
            </li>
            <li style={{ listStyleType: "none" }}>
              {" "}
              <span style={{ color: "white", fontWeight: "bold" }}>
                AMC / Maintenance Plans:
              </span>{" "}
              Custom car care packages tailored to you.
            </li>

            <Link to="/service" className={styles.visitButton}>
              Visit Now
            </Link>
          </div>
          <div className={styles.card}>
            <h3>Book Your Car Service Now</h3>
            <p>
              Say goodbye to unreliable local garages. Choose
              VehicleCare—trusted mechanics, modern workshops, and seamless car
              service across Gurgaon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

// Testimonials.js
import React from "react";
import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Anita P.",
    text: "Quick AC repair at my doorstep in Ahmedabad—amazing service!",
    rating: 5,
  },
  {
    id: 2,
    name: "Vikram R.",
    text: "Oil change was fast and affordable. Great pickup service!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha D.",
    text: "Full car service exceeded expectations. Highly satisfied!",
    rating: 4,
  },
];

const Testimonials = () => (
  <section id="testimonials" className={styles.section}>
    <div className={styles.container}>
      <h2>What Our Customers Say in Ahmedabad</h2>
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.card}>
            <div className={styles.stars}>
              ⭐️{Array(testimonial.rating).fill("⭐️").join("")}
            </div>
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

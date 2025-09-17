import React, { useState } from "react";
import styles from "../styles/FrequentlyAskedQuestions.module.css";

const faqs = [
  {
    id: 1,
    question: "How can I book my car service with VehicleCare in Gurgaon?",
    answer:
      "You can book your car service by visiting our website, selecting your preferred service, choosing a convenient time slot, and confirming your booking online.",
  },
  {
    id: 2,
    question: "How many VehicleCare car services are there in Gurgaon?",
    answer:
      "We currently have 5 VehicleCare service centers across Gurgaon to serve you better.",
  },
  {
    id: 3,
    question: "How much time will it take to deliver our car?",
    answer:
      "The delivery time typically ranges from 2 to 4 hours, depending on the service type and availability.",
  },
  {
    id: 4,
    question: "Is it mandatory to book an appointment in Gurgaon?",
    answer:
      "While booking an appointment is recommended for a smoother experience, walk-ins are accepted based on availability.",
  },
  {
    id: 5,
    question: "How do I have to inform about my car accident claim?",
    answer:
      "You can inform us about your car accident claim by contacting our support team via phone or submitting details through our website’s claim section.",
  },
  {
    id: 6,
    question: "What all do you check during inspection of our car?",
    answer:
      "We perform a comprehensive check including brakes, tires, engine, fluids, lights, and more to ensure your car is in top condition.",
  },
  {
    id: 7,
    question: "How long will my car’s inspection take?",
    answer:
      "A standard car inspection typically takes about 30 to 60 minutes, depending on the car's condition.",
  },
  {
    id: 8,
    question: "How many workshops are there in Gurgaon?",
    answer:
      "There are 10 certified workshops in Gurgaon partnered with VehicleCare for your convenience.",
  },
];

const FrequentlyAskedQuestions = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>
        <p>
          We’re here to help. Find answers to common questions across
          categories.
        </p>
        <div className={styles.grid}>
          {faqs.map((faq) => (
            <div key={faq.id} className={styles.card}>
              <div
                className={styles.question}
                onClick={() => toggleFAQ(faq.id)}
              >
                {faq.question}
                <span className={styles.toggle}>
                  {openFAQ === faq.id ? "−" : "+"}
                </span>
              </div>
              {openFAQ === faq.id && (
                <div className={styles.answer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;

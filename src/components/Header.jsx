import React from "react";
import styles from "../styles/Header.module.css";
import Autocare from "../assets/image/Autocare.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={Autocare} alt="Your Startup Logo" width="150" />
          </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.cta}>
          <a
            href="https://wa.me/+917623927451"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Call Now: +91-7623927451</button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// import React from "react";
// import styles from "../styles/Header.module.css";
// import Autocare from "../assets/image/Autocare.jpg";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <nav className={styles.nav}>
//         <div className={styles.logo}>
//           <Link to="/">
//             <img src={Autocare} alt="Your Startup Logo" width="150" />
//           </Link>
//         </div>
//         <ul className={styles.menu}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/service">Services</Link>
//           </li>

//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//         <div className={styles.cta}>
//           <a
//             href="https://wa.me/+917623927451"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button>Call Now: +91-7623927451</button>
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Autocare from "../assets/image/Autocare.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={Autocare} alt="Logo" width="150" />
          </Link>
        </div>

        {/* Hamburger SVG */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.5 12.5h13v-1h-13v1zm0-5h13v-1h-13v1zm0-5v1h13v-1h-13z"
            />
          </svg>
        </div>

        <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/service" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
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

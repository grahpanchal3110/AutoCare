// // Footer.js
// import React from "react";
// import styles from "../styles/Footer.module.css";

// const Footer = () => {
//   return (
//     <footer id="footer" className={styles.footer}>
//       <div className={styles.container}>
//         <div className={styles.section}>
//           <h3>AutoCare Ahmedabad</h3>
//           <p>
//             123 Service Lane, Ahmedabad, Gujarat, India
//             <br />
//             Phone: +91-98765-43210
//             <br />
//             Email: support@carcareahmedabad.com
//           </p>
//         </div>
//         <div className={styles.section}>
//           <h3>Quick Links</h3>
//           <ul>
//             <li>
//               <a href="#home">Home</a>
//             </li>
//             <li>
//               <a href="#services">Services</a>
//             </li>
//             <li>
//               <a href="#testimonials">Testimonials</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//         <div className={styles.section}>
//           <h3>Our Services</h3>
//           <ul>
//             <li>AC Service</li>
//             <li>Engine Oil Change</li>
//             <li>Brake Repair</li>
//             <li>Full Car Service</li>
//           </ul>
//         </div>
//         <div className={styles.section}>
//           <h3>Follow Us</h3>
//           <div className={styles.social}>
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Facebook
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Twitter
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Instagram
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className={styles.bottom}>
//         <p>&copy; 2025 CarCare Ahmedabad. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import Autocare from "../assets/image/Autocare.jpg";
import styles from "../styles/Footer.module.css";
import {
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import googleplay from "../assets/image/google-play.png";
import appstore from "../assets/image/appstore.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <img
              src={Autocare}
              alt="QutoCare Logo"
              style={{ width: "100px" }}
            />
            <span>QutoCare</span>
          </div>
          <p className={styles.about}>
            QutoCare offers car service, repair, insurance help, and business
            support with smart technology and trusted workshops across India.
            Easy, reliable, and customer-friendly solutions.
          </p>
          <div className={styles.social}>
            <Link to="/">
              <FaLinkedin />
            </Link>
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaYoutube />
            </Link>
            <Link to="/">
              <FaWhatsapp />
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className={styles.middle}>
          <p>
            QutoCare workshop Near Aaradhya Homes, New Chandkheda
            <br />
            Ahmedabad, Gujarat 382424
          </p>
          <p>
            <strong>Email: </strong>
            <span className={styles.red}>qutocareworkshop@gmail.com</span>
          </p>
          <p>
            <strong>Phone:</strong>
            <span className={styles.red}> +917623927451</span>
          </p>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <a href="#">
            <img src={googleplay} alt="Google Play" />
          </a>
          <a href="#">
            <img src={appstore} alt="Google Play" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p>
          Copyright ©2025 QutoCare Services Private Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

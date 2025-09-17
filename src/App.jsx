import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Features from "./components/Features.jsx";
import Testimonials from "./components/Testimonials.jsx";
import VehicleCareByNumbers from "./components/VehicleCareByNumbers.jsx";
import Footer from "./components/Footer.jsx";
import styles from "./styles/App.module.css";
import VehicleCareComparison from "./components/VehicleCareComparison.jsx";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ServiceMain from "./components/ServiceMain.jsx";
import CarWash from "./components/CarWash.jsx";
import CarRepair from "./components/CarRepair.jsx";
import DentPaint from "./components/DentPaint.jsx";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Features />
                <VehicleCareComparison />
                <FrequentlyAskedQuestions />
                <Testimonials />
                <VehicleCareByNumbers />
              </>
            }
          />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/service" element={<ServiceMain />} />
          <Route path="/car-wash" element={<CarWash />} />
          <Route path="/car-repair" element={<CarRepair />} />
          <Route path="/Dent-Paint" element={<DentPaint />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

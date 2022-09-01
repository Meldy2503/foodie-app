import React from "react";
import HeroSection from "../components/pricing/heroSection/Hero";
import FaqSection from "../components/pricing/FaqSection/FAQ";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

const Pricing = () => {
  return (
    <div>
      <Navbar bgCo="#fff" />
      <HeroSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Pricing;

import React from "react";
import HeroSection from "../components/affilliates/heroSection/Hero";
import PartnerWithFoodie from "../components/affilliates/partnership/Partnership";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

const Affilliates = () => {
  return (
    <div>
      <Navbar bgCo="#edfaee" />
      <HeroSection />
      <PartnerWithFoodie />
      <Footer />
    </div>
  );
};

export default Affilliates;

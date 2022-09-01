import React from "react";
import Hero from "../components/privacyPolicy/heroSection/hero";
import Policy from "../components/privacyPolicy/policy/policy";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar bgCo="#edfaee" position="relative" />
      <Hero />
      <Policy />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

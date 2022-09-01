import React from "react";
import HeroSection from "../components/home/heroSection/HeroSection";
import ThemeSection from "../components/home/themeSection/Theme";
import RestaurantSection from "../components/home/restaurantSection/Restaurant";
import FaqSection from "../components/home/faqSection/FaqSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

const Home = () => {
  return (
    <div>
      <Navbar bgCo="#faeded"/>
      <HeroSection />
      <ThemeSection />
      <RestaurantSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;

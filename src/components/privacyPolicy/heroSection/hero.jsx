import React from "react";
import {
  HeroSection,
  MainHeading,
  ContentWrapper,
  SubHeading,
  HeroText,
} from "./heroStyle";

const Hero = () => {
  return (
    <HeroSection>
      <ContentWrapper>
        <SubHeading>Updated March 3, 2021</SubHeading>
        <MainHeading>Privacy Policy</MainHeading>
        <HeroText>How foodie handles your data</HeroText>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;

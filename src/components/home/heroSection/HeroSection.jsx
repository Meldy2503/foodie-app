import React from "react";
import sectionImg1 from "../../../assets/images/homePgImgs/home.png";

import {
  SectionContainer,
  ContentWrapper,
  TextContainer,
  MainHeading,
  Para1,
  Form,
  EmailInput,
  SignupBtn,
  Para2,
  Img,
} from "./heroStyle";

const HeroSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContainer>
          <MainHeading>
            Simple Commerce Solution for Restaurants and Chefs
          </MainHeading>
          <Para1>
            Foodie helps restaurant grow by expanding your kitchen and
            restaurant beyond your immediate reach, manage your own personalized
            online restaurant and receive payments quickly.
          </Para1>
          <Form>
            <EmailInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <SignupBtn type="submit" value="Sign Up" />
          </Form>
          <Para2>
            Try Foodie free for 14 days, no credit card required. By entering
            your email, you agree to receive marketing emails from Foodie.
          </Para2>
        </TextContainer>
        <Img src={sectionImg1} alt="heroSection image" />
      </ContentWrapper>
    </SectionContainer>
  );
};

export default HeroSection;

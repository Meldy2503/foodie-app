import React from "react";
import tour from "../../assets/images/footerImg/tour.png";
import instagram from "../../assets/images/footerImg/instagram.svg";
import like from "../../assets/images/footerImg/like.svg";
import twitter from "../../assets/images/footerImg/twitter.svg";
import youtube from "../../assets/images/footerImg/youtube.svg";
import logo from "../../assets/images/footerImg/foodieL.png";
import Data from "./data";

import {
  SectionContainer,
  Contents,
  Row1,
  Row2,
  Row3,
  Row4,
  Row1Left,
  Row1Right,
  Header,
  Links,
  Row3Left,
  Row3Right,
  Row4Left,
  Row4Right,
  Row1Heading,
  LinkImage,
  Column,
  Img,
  BackArrow,
  Form,
  Input,
  SignupBtn,
  Text,
  FormSelect,
  SelectOption,
  Option,
  Icons,
  Logo,
  Row4Wrapper,
  TextPolicy,
  LinkContents,
  SocialMediaLinks,
} from "./footerStyle";

const Footer = () => {
  return (
    <SectionContainer>
      <Contents>
        <Row1>
          <Row1Left>
            <Row1Heading>We love hearing from you.</Row1Heading>
            <LinkImage href="/">
              <Img src={tour} alt="tour" />
              <BackArrow />
            </LinkImage>
          </Row1Left>
          <Row1Right>
            <Row1Heading>Sign up to the newsroom</Row1Heading>
            <Form>
              <Input type="email" id="email" name="email" />
              <SignupBtn type="submit" value="Sign Up" />
            </Form>
          </Row1Right>
        </Row1>
        <Row2>
          {Data.map((items) => {
            return (
              <Column key={items.id}>
                <Header>{items.header}</Header>

                {items.links.map((link, index) => {
                  return (
                    <LinkContents key={index}>
                      <Links to={link[1]}>{link[0]}</Links>
                    </LinkContents>
                  );
                })}
              </Column>
            );
          })}
        </Row2>
        <Row3>
          <Row3Left>
            <Logo src={logo} alt="logo" />
            <FormSelect>
              <SelectOption id="languages" name="languages">
                <Option value="English">United States - English</Option>
                <Option value="German">Germany - German</Option>
                <Option value="French">France - French</Option>
              </SelectOption>
              <SelectOption id="Currency" name="Currency">
                <Option value="NGN">NGN</Option>
                <Option value="EURO">EURO</Option>
              </SelectOption>
            </FormSelect>
          </Row3Left>
          <Row3Right>
            <SocialMediaLinks href="/">
              <Icons src={like} alt="like icon" />
            </SocialMediaLinks>
            <SocialMediaLinks href="/">
              <Icons src={twitter} alt="twitter" />
            </SocialMediaLinks>
            <SocialMediaLinks href="/">
              <Icons src={youtube} alt="youtube" />
            </SocialMediaLinks>
            <SocialMediaLinks href="/">
              <Icons src={instagram} alt="instagram" />
            </SocialMediaLinks>
          </Row3Right>
        </Row3>
      </Contents>
      <Row4Wrapper>
        <Row4>
          <Row4Left>
            <Text>
              Copyright © 2020 Foodie Nigeria Company, LLC. All Rights Reserved.
              The Foodie Nigeria word mark is a registered trademark of Foodie
              Nigeria Company, LLC in the Nigeria. Use of this Site is subject
              to express terms of use. By using this site, you signify that you
              agree to be bound by these Universal Terms of Service.
            </Text>
          </Row4Left>
          <Row4Right>
            <TextPolicy to="/terms">Legal</TextPolicy>
            <TextPolicy to="/privacy-policy">Privacy Policy</TextPolicy>
            <TextPolicy to="/">Cookies</TextPolicy>
          </Row4Right>
        </Row4>
      </Row4Wrapper>
    </SectionContainer>
  );
};

export default Footer;

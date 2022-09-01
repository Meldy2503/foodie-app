import React from "react";
import { Data, Theme } from "./data";
import hands from "../../../assets/images/aboutUsImg/hands.png";
import bicycleGuy from "../../../assets/images/aboutUsImg/bicycleGuy.jpg";
import familyImg from "../../../assets/images/aboutUsImg/familyPics.jpg";
import {
  AboutUs,
  BusinesSection,
  HeroSection,
  ContentContainer,
  Row,
  TextContent,
  HeroText,
  ImageContent,
  Img1,
  Img2,
  Row1,
  LeftContent,
  SubHeader,
  Header,
  Text,
  RightContent,
  Image,
  Row2,
  Col1,
  Col2,
  Img,
  Column,
  Box,
  Heading,
  Link,
  BackArrow,
  Row3,
  ThemeContainer,
} from "./businesStyle";

const businesSection = () => {
  return (
    <AboutUs>
      <HeroSection>
        <Row>
          <TextContent>
            <SubHeader>ABOUT US</SubHeader>
            <Header>
              foodie is taking charge of the market space one move at a time.
            </Header>
            <HeroText>
              Our ‘brand role’ is a simple and powerful statement that guides
              everything we do. Including how we look, think and talk to the
              world.
            </HeroText>
          </TextContent>
          <ImageContent>
            <Img1 src={bicycleGuy} alt="man on bicycle" />
            <Img2 src={familyImg} alt="family img" />
          </ImageContent>
        </Row>
      </HeroSection>

      <BusinesSection>
        <ContentContainer>
          {Data.map((item) => {
            return (
              <Row1
                key={item.id}
                flexDirection={item.id % 2 !== 0 && "row-reverse"}
              >
                <LeftContent>
                  <SubHeader>{item.smallHeader}</SubHeader>
                  <Header>{item.bigHeader}</Header>
                  <Text>{item.text}</Text>
                </LeftContent>
                <RightContent>
                  <Image src={item.img} alt="setup store img" />
                </RightContent>
              </Row1>
            );
          })}

          <Row2>
            <Col1>
              <Img src={hands} alt="" />
            </Col1>
            <Col2>
              <SubHeader>OUR TEAM</SubHeader>
              <Header>We are One in All</Header>
              <Text>
                Our ‘brand role’ is a simple and powerful statement that guides
                everything we do. Including how we look, think and talk to the
                world. Our ‘brand role’ is a simple and powerful statement that
                guides everything we do. Including how we look, think and talk
                to the world. Our ‘brand role’ is a simple and powerful
                statement that guides everything we do. Including how we look,
                think and talk to the world.
              </Text>
            </Col2>
          </Row2>

          <Row3>
            <Header>Learn more about foodie</Header>
            <ThemeContainer>
              {Theme.map((themes) => {
                return (
                  <Column key={themes.id}>
                    <Box></Box>
                    <Heading>{themes.header}</Heading>
                    <Text>{themes.text}</Text>
                    <Link href="#">
                      Learn more <BackArrow />
                    </Link>
                  </Column>
                );
              })}
            </ThemeContainer>
          </Row3>
        </ContentContainer>
      </BusinesSection>
    </AboutUs>
  );
};

export default businesSection;

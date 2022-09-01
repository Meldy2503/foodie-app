import React from "react";
import Data from "./data";
import partners from "../../../assets/images/homePgImgs/partners.png";
import yellowLady from "../../../assets/images/homePgImgs/yellow-lady.png";
import {
  SectionContainer,
  ContentContainer,
  MainHeading,
  HeadingText,
  Row,
  LeftContent,
  SubHeader,
  Header,
  Para,
  Link,
  RightContent,
  Image,
  BackArrow,
  PartnersLogo,
  ImageContainer,
  Col1,
  TextWrapper,
  Comment,
  Name,
  Letter,
  Wrapper,
  FirstName,
  LastName,
  Btn,
  Col2,
  Img,
  PlayCircle,
} from "./restaurantStyle";

const RestaurantSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <MainHeading>Create an online restaurant with few clicks</MainHeading>
        <HeadingText>
          Create a Store - Set Location - Create Menu - Start Selling
        </HeadingText>
        {Data.map((item) => {
          return (
            <Row
              key={item.id}
              flexDirection={item.id % 2 === 0 && "row-reverse"}
            >
              <LeftContent>
                <SubHeader>{item.smallHeader}</SubHeader>
                <Header>{item.bigHeader}</Header>
                <Para>{item.text}</Para>
                <Link href="#">
                  Learn more <BackArrow />
                </Link>
              </LeftContent>
              <RightContent>
                <Image src={item.img} alt="setup store img" />
              </RightContent>
            </Row>
          );
        })}
        <PartnersLogo src={partners} alt="partners" />
        <ImageContainer>
          <Col1>
            <TextWrapper>
              <Comment>
                “I’ve been able to build something in 3 years that a lot of
                brands haven’t actually gotten to in 10 years.”
              </Comment>
              <Name>
                <Letter>W</Letter>
                <Wrapper>
                  <FirstName>innies</FirstName>
                  <LastName>bakery</LastName>
                </Wrapper>
              </Name>
              <Btn href="#">
                See Winnies Story <PlayCircle />
              </Btn>
            </TextWrapper>
          </Col1>
          <Col2>
            <Img src={yellowLady} alt="" />
          </Col2>
        </ImageContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default RestaurantSection;

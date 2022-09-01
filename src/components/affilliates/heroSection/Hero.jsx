import React from "react";
import blackGuy from "../../../assets/images/affilliateImg/blackGuy.png";
import Lady from "../../../assets/images/affilliateImg/singleLady.png";
import Ladies from "../../../assets/images/affilliateImg/ladies.png";

import Data from "./data";

import {
  PageWrapper,
  SectionA,
  SectionB,
  Row,
  Row1,
  TextContent,
  Header,
  Btn,
  MobileBtn,
  BackArrow,
  ImageContent,
  Img1,
  Img2,
  Contents,
  Col1,
  Col2,
  Column,
  Text,
  Title,
  Image,
} from "./heroStyle";

const HeroSection = () => {
  return (
    <PageWrapper>
      <SectionA>
        <Row>
          <TextContent>
            <Header>Help shape the future of commerce</Header>
            <Btn href="/">
              Apply now <BackArrow />
            </Btn>
          </TextContent>
          <ImageContent>
            <Img1 src={Lady} alt="lady on glasses" />
            <Img2 src={blackGuy} alt="black guy" />
          </ImageContent>
          <MobileBtn href="/">
            Apply now <BackArrow />
          </MobileBtn>
        </Row>
      </SectionA>
      <SectionB>
        <Contents>
          <Header>Empower your audience</Header>
          <Text>Get support from foodie every step of the way</Text>
          <Row1>
            <Col1>
              {Data.map((data) => {
                return (
                  <Column key={data.id}>
                    <Title>{data.header}</Title>
                    <Text>{data.text}</Text>
                  </Column>
                );
              })}
            </Col1>
            <Col2>
              <Image src={Ladies} alt="group of ladies" />
            </Col2>
          </Row1>
        </Contents>
      </SectionB>
    </PageWrapper>
  );
};

export default HeroSection;

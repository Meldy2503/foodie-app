import React from "react";
import Data from "./data";
import purpleLady from "../../../assets/images/affilliateImg/purpleLady.png";
import {
  Section,
  Contents,
  Header,
  Row1,
  Column,
  Title,
  Text,
  Link,
  BackArrow,
  Row2,
  LeftContent,
  RightContent,
  Img,
  Caption,
  Comment,
  Row3,
  Btn,
  Arrow,
} from "./partnerStyle";

const Partnership = () => {
  return (
    <Section>
      <Contents>
        <Header>Partner with foodie</Header>
        <Row1>
          {Data.map((data) => {
            return (
              <Column key={data.id}>
                <Title>{data.header}</Title>
                <Text>{data.text}</Text>
                <Link href="/">
                  Learn more <BackArrow />
                </Link>
              </Column>
            );
          })}
        </Row1>
        <Row2>
          <LeftContent>
            <Comment>
              "A relentless focus on our mission is at the heart of everything
              we do at foodie."
            </Comment>
          </LeftContent>
          <RightContent>
            <Img src={purpleLady} alt="purple lady" />
            <Caption>
              <strong> Mae Ramos - </strong>Chief Talent Officer
            </Caption>
          </RightContent>
        </Row2>
        <Row3>
          <Header>Become an affiliate</Header>
          <Btn href="/">
            Apply now <Arrow />
          </Btn>
        </Row3>
      </Contents>
    </Section>
  );
};

export default Partnership;

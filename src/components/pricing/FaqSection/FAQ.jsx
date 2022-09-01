import React from "react";
import Data from "./data";

import {
  SectionContainer,
  ContentContainer,
  SubHeading,
  Row,
  Column,
  Header,
  Text,
} from "./faqStyle";

const FaqSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <SubHeading>Frequently Asked Questions</SubHeading>
        <Row>
          {Data.map((faq) => {
            return (
              <Column key={faq.id}>
                <Header>{faq.header}</Header>
                <Text>{faq.text}</Text>
              </Column>
            );
          })}
        </Row>
      </ContentContainer>
    </SectionContainer>
  );
};

export default FaqSection;

import React from "react";
import Data from "./data";

import {
  SectionContainer,
  ContentContainer,
  MainHeading,
  SubHeading,
  Row,
  Column,
  Header,
  Text,
  Journey,
  Heading,
  Para,
  Btn,
  BackArrow,
} from "./faqStyle";

const FAQSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <MainHeading>
          Millions of <span>restaurants</span> rely on our domains and web
          hosting to get their ideas online.
        </MainHeading>
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
        <Journey>
          <Heading>Start your business journey with foodie</Heading>
          <Para>
            We are as excited as you are and can’t wait to show what we have in
            store for you! Whenever you’re ready, click on the get started
            button, and we’ll be happy to walk you through the entire process.
          </Para>
          <Btn>
            Get started <BackArrow />
          </Btn>
        </Journey>
      </ContentContainer>
    </SectionContainer>
  );
};

export default FAQSection;

import React from "react";
import { Titles, Data } from "./data";

import {
  PolicySection,
  ContentContainer,
  Col1,
  Col2,
  LinkWrapper,
  Links,
  Contents,
  Title,
  Para1,
  ListContainer,
  ListItems,
  Para2,
} from "./policyStyle";

const Policy = () => {
  return (
    <PolicySection>
      <ContentContainer>
        <Col1>
          {Titles.map((list) => (
            <LinkWrapper key={list.id}>
              <Links href={list.select} activeStyle="active">
                {list.link}
              </Links>
            </LinkWrapper>
          ))}
        </Col1>
        <Col2>
          {Data.map((item) => (
            <Contents key={item.id} id={item.location}>
              <Title>{item.title}</Title>
              <Para1>{item.text1}</Para1>
              <ListContainer>
                {item.points.map((items, index) => (
                  <ListItems key={index}>{items}</ListItems>
                ))}
              </ListContainer>
              <Para2>{item.text2}</Para2>
            </Contents>
          ))}
        </Col2>
      </ContentContainer>
    </PolicySection>
  );
};

export default Policy;

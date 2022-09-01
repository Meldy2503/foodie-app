import React from "react";
import { priceData, tableData } from "./data";
import {
  SectionContainer,
  ContentContainer,
  SubHeader,
  MainHeader,
  Row,
  Column,
  Title,
  Text,
  Price,
  Amount,
  FireIcon,
  IconWrapper,
  TableContainer,
  Table,
} from "./heroStyle";

const HeroSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <SubHeader>PRICING</SubHeader>
        <MainHeader>Choose a plan that works for you</MainHeader>
        <Row>
          {priceData.map((plans) => {
            return (
              <Column
                key={plans.id}
                style={{
                  backgroundColor: plans.color,
                }}
              >
                <Title>{plans.header}</Title>
                <Text>{plans.text}</Text>
                <Price>
                  $<Amount>{plans.price}</Amount>/mo
                </Price>
                {plans.id === 2 && (
                  <IconWrapper>
                    <FireIcon />
                  </IconWrapper>
                )}
              </Column>
            );
          })}
        </Row>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>
                  Basic foodie <br /> $<span>29</span>/mo
                </th>
                <th>
                  foodie + <br /> $<span>79</span>/mo
                </th>
                <th>
                  Premium foodie <br /> $<span>340</span>/mo
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>
                      {data.td1}
                      <br />
                      <span>{data.text}</span>
                    </td>
                    <td>{data.td2}</td>
                    <td>{data.td3}</td>
                    <td>{data.td4}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroSection;

import React, { useState } from "react";
import foodieLogo from "../../assets/images/foodie-logo.svg";
import formImg from "../../assets/images/formImg.png";

import FormInputs from "./data";
import {
  Wrapper,
  Section,
  BgImg,
  ContentContainer,
  Contents,
  Logo,
  LogoWrapper,
  LogoText,
  Header,
  HeaderText,
  Form,
  Input,
  TextWrapper,
  Text,
  LinkText,
  SubmitBtn,
  BackArrow,
} from "./accountStyle";

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log(formData);
  };

  return (
    <Wrapper>
      <Section>
        <ContentContainer>
          <Contents>
            <LogoWrapper>
              <Logo src={foodieLogo} alt="foodie logo" />
              <LogoText>foodie</LogoText>
            </LogoWrapper>
            <Header>Create an account</Header>
            <HeaderText>
              Your account will allow you to partner with foodie
            </HeaderText>
            <Form>
              {FormInputs.map((inputs) => (
                <span key={inputs.id}>
                  <Input
                    style={{
                      marginRight: inputs.id === 1 && "3%",
                    }}
                    width={inputs.id <= 2 ? "48%" : "100%"}
                    swidth={inputs.id <= 2 ? "100%" : "100%"}
                    type={inputs.type}
                    name={inputs.name}
                    id={inputs.idty}
                    onChange={handleFormData}
                    value={formData[inputs.value]}
                    placeholder={inputs.placeholder}
                    required
                  />
                </span>
              ))}
              <br />
              <TextWrapper>
                <Text> By proceeding, you agree to the</Text>
                <LinkText to="/terms">Terms and Conditions</LinkText>
              </TextWrapper>
              <SubmitBtn type="submit" onClick={onSubmit}>
                Create account
                <BackArrow />
              </SubmitBtn>
            </Form>
            <TextWrapper>
              <Text> Already have an account?</Text>
              <LinkText to="/">Sign In</LinkText>
            </TextWrapper>
          </Contents>
        </ContentContainer>
        <BgImg src={formImg} alt="form image" />
      </Section>
    </Wrapper>
  );
};

export default Account;

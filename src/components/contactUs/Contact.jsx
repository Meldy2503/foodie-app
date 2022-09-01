import React, { useState } from "react";
import flower from "../../assets/images/contactImg/flower.png";
import help from "../../assets/images/contactImg/help.svg";
import handShake from "../../assets/images/contactImg/handshake.svg";
import officeMan from "../../assets/images/contactImg/work-guy.png";
import FormInputs from "./data";

import {
  PageWrapper,
  HeroSection,
  Contents,
  TextContent,
  SubHeader,
  Header,
  Text,
  Connect,
  LinkWrapper,
  Link,
  LinkText,
  ImageContainer,
  Img,
  Image1,
  Image2,
  FormSection,
  FormContents,
  SubmitBtn,
  Form,
  BackArrow,
  Input,
  Textarea,
  JobLink,
} from "./contactStyle";

const Contact = () => {
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
    <PageWrapper>
      <HeroSection>
        <Contents>
          <TextContent>
            <SubHeader>CONTACT</SubHeader>
            <Header>We love hearing from you!</Header>
            <Text>
              This is the place to start. Find the answers you need from the
              foodie Community or our award-winning support team.
            </Text>
            <Connect>
              <LinkWrapper>
                <Link href="/">
                  <Img src={help} alt="help icon" />
                  <LinkText>Help Center</LinkText>
                </Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link href="/">
                  <Img src={handShake} alt="support icon" />
                  <LinkText>Customer Support</LinkText>
                </Link>
              </LinkWrapper>
            </Connect>
          </TextContent>
          <ImageContainer>
            <Image1 src={officeMan} alt="office guy img" />
            <Image2 src={flower} alt="art img" />
          </ImageContainer>
        </Contents>
      </HeroSection>

      <FormSection>
        <Contents>
          <FormContents>
            <Header>Join our ever growing workforce</Header>
            <Text>
              We’re always looking for hard-working, passionate people to help
              us make commerce better.
            </Text>
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

              <Textarea
                name="message"
                id="message"
                cols="30"
                value={formData.value}
                onChange={handleFormData}
                rows="10"
                placeholder="How can we partner?"
                required
              ></Textarea>
              <br />
              <SubmitBtn type="submit" onClick={onSubmit}>
                Send
                <BackArrow />
              </SubmitBtn>
            </Form>
            <JobLink href="#">
              Current job postings <BackArrow />
            </JobLink>
          </FormContents>
        </Contents>
      </FormSection>
    </PageWrapper>
  );
};

export default Contact;

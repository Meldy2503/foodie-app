import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const PageWrapper = styled.main`
  width: 100%;
  position: relative;
`;

// STYLE FOR THE HERO SECTION--------START
export const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.blue1};
  width: 100%;
  display: flex;
  margin-top: 6.8rem;
`;

export const Contents = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 3%;
`;

export const TextContent = styled.div`
  width: 55%;
  max-width: 55%;
  padding: 15rem 0 5rem 0;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    max-width: 100%;
    padding: 10rem 0;
  }
`;
export const SubHeader = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;
export const Header = styled.h1`
  font-weight: bold;

  @media screen and (max-width: 1260px) {
    width: 85%;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 90%;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  margin: 2rem 0 1.8rem 0;
  line-height: 1.4;
  width: 80%;
  color: ${({ theme }) => theme.colors.black1};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 90%;
  }
`;

export const Connect = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
`;
export const LinkWrapper = styled.div`
  height: 13rem;
  width: 14rem;
  margin-right: 2rem;
  border-radius: 0.5rem;
  background-color: #f8fbff;
  padding: 2rem 8rem 2rem 2rem;
  background-color: ${({ theme }) => theme.colors.white2};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 12rem;
    height: 12rem;
  }
`;
export const Link = styled.a`
  display: flex;
  flex-direction: column;
`;
export const LinkText = styled.h3`
  line-height: 1.4;
  margin-top: 1.5rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-style: normal;
  color: ${({ theme }) => theme.colors.black3};
`;
export const Img = styled.img`
  width: 3.5rem;
  max-width: 100%;
`;
export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 53%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 0%;
    height: 0%;
  }
`;
export const Image1 = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  border-bottom-left-radius: 2rem;
  z-index: 100;
  object-position: top;
  position: absolute;
  right: 0;
  top: 0;
  height: 75%;

  @media screen and (max-width: 1260px) {
    object-position: left;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: none;
  }
`;

export const Image2 = styled.img`
  object-fit: cover;
  position: absolute;
  right: 53%;
  bottom: 0;
  width: 37%;
  height: 50%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: none;
  }
`;
// STYLE FOR THE HERO SECTION--------END

// STYLE FOR THE FORM SECTION--------START
export const FormSection = styled(HeroSection)`
  background-color: ${({ theme }) => theme.colors.white1};
`;

export const FormContents = styled.div`
  width: 50%;
  max-width: 50%;
  padding: 10rem 0;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    max-width: 100%;
    padding: 3rem 0 10rem 0;
  }
`;
export const Form = styled.form`
  width: 70%;
  margin-top: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 80%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const Input = styled.input`
  border: none;
  border-bottom: 0.2rem solid #777;
  outline: none;
  margin-bottom: 2rem;
  padding-bottom: 0.7rem;
  font-family: "ProximaNovaAlt", sans-serif;
  color: #000;
  font-size: 1.7rem;
  font-weight: normal;
  width: ${({ width }) => width || "100%"};

  @media screen and (max-width: 1024px) {
    width: ${({ swidth }) => swidth || "100%"};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.black1};
  }
`;
export const Textarea = styled(Input)``;

export const BackArrow = styled(HiOutlineArrowNarrowRight)`
  margin-left: 2rem;
  font-size: 2rem;
`;

export const SubmitBtn = styled.button`
  padding: 1.2rem 1.5rem;
  border-radius: 0.7rem;
  display: flex;
  font-weight: bold;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black2};
  color: ${({ theme }) => theme.colors.white1};
  margin-top: 3rem;
  border: none;
  cursor: pointer;
`;

export const JobLink = styled.a`
  padding: 1rem 1.5rem;
  border-radius: 0.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white1};
  color: ${({ theme }) => theme.colors.black2};
  border: 0.2rem solid ${({ theme }) => theme.colors.black2};
  width: fit-content;
  margin-top: -4.4rem;
  margin-left: 12.5rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    margin-top: 2rem;
    margin-left: 0rem;
  }
`;

// STYLE FOR THE FORM SECTION--------END

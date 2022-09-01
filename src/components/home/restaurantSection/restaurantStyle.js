import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FiPlayCircle } from "react-icons/fi";

export const SectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white1};
`;
export const ContentContainer = styled.div`
  padding: 10rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
`;
export const MainHeading = styled.h1`
  width: 55%;
  margin-bottom: 1.8rem;
  color: ${({ theme }) => theme.colors.black2};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 65%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const HeadingText = styled.p`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  margin-bottom: 8rem;
  color: ${({ theme }) => theme.colors.black1};
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  margin: 0 auto 5rem auto;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin: 0 auto 6rem auto;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column-reverse;
    margin: 0 auto 8rem auto;
  }
`;

export const LeftContent = styled.div`
  width: 47%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin-top: 2rem;
  }
`;
export const SubHeader = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;
export const Header = styled.h2`
  font-family: "Expletus Sans", cursive;
  font-weight: bold;
`;
export const Para = styled.p`
  text-align: justify;
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  margin: 2rem 0 1.8rem 0;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.black1};
`;
export const Link = styled.a`
  color: ${({ theme }) => theme.colors.red1};
  font-size: 1.8rem;
  font-weight: 600;
  font-style: normal;
  display: flex;
  align-items: center;
`;

export const BackArrow = styled(HiOutlineArrowNarrowRight)`
  color: ${({ theme }) => theme.colors.red1};
  margin-left: 1rem;
`;
export const RightContent = styled.div`
  width: 47%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

export const PartnersLogo = styled.img`
  // max-width: 50%;
  width: 57rem;
  margin: 9rem auto 0 auto;
  display: flex;
  justify-content: center;
  object-fit: cover;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 80%;
    margin: 5rem auto 0 auto;
    height: 10rem;
    justify-content: center;
    object-fit: contain;
    // width: 27rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    // width: 27rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 7rem auto 0 auto;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.yellow1};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column-reverse;
  }
`;
export const Col1 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 0 5rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    padding: 6rem 5rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding: 6rem 3rem;
  }

  @media screen and (max-width: 600px) {
    padding: 5rem 3rem;
  }
  @media screen and (max-width: 350px) {
    padding: 5rem 1.5rem;
  }
`;
export const Comment = styled.h1`
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    font-size: 3.2rem;
  }
`;
export const Name = styled.span`
  margin: 3rem 0 6rem 0;
  display: flex;
  align-items: center;
`;
export const Letter = styled.h1`
  font-family: "Bilbo", cursive;
  font-size: 5rem;
`;
export const Wrapper = styled.span`
  margin-bottom: 1rem;
  font-family: "Hermione", sans-serif;
  margin-left: 0.3rem;
  font-size: 2rem;
  font-weight: bold;
`;
export const FirstName = styled.p``;
export const LastName = styled(FirstName)`
  margin-top: -0.6rem;
`;
export const Btn = styled.a`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black2};
  color: ${({ theme }) => theme.colors.white1};
  padding: 1.2rem;
  border-radius: 0.5rem;
  width: fit-content;
`;
export const Col2 = styled.div`
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const Img = styled.img`
  max-width: 100%;
  height: 100%;
  filter: brightness(105%) contrast(95%);
  object-fit: cover;
  object-position: left center;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    border-radius: 1rem;
  }
`;

export const PlayCircle = styled(FiPlayCircle)`
  margin-left: 1.1rem;
  font-size: 2rem;
`;

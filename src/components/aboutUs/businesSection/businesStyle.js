import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const AboutUs = styled.main`
  width: 100%;
`;
export const BusinesSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white1};
`;

export const HeroSection = styled(BusinesSection)`
  background-color: ${({ theme }) => theme.colors.blue1};
  margin-top: 6.8rem;
`;
export const ContentContainer = styled.div`
  padding: 10rem 0 5rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 8rem 0 5rem 0;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  margin: 2rem 0 1.8rem 0;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.black1};
`;

// ----------------HERO SECTION START
export const Row = styled(ContentContainer)`
  padding: 13rem 0 10rem 0;
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    padding: 8rem 0 10rem 0;
  }
`;
export const TextContent = styled.div`
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const HeroText = styled(Text)`
  width: 75%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 85%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 95%;
  }
`;
export const ImageContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 48%;
  height: 70rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    height: 50rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 550px) {
    height: 40rem;
  }
`;

export const Img1 = styled.img`
  max-width: 100%;
  width: 40rem;
  object-fit: cover;
  border-top-right-radius: 28rem;
  border-top-left-radius: 28rem;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  object-position: right;
  position: absolute;
  right: 25rem;
  top: 11rem;
  height: 55%;

  @media screen and (max-width: 1500px) {
    right: 12rem;
  }
  @media screen and (max-width: 1100px) {
    right: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    position: relative;
    object-fit: cover;
    top: 2rem;
    width: 80%;
    height: 50rem;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    height: 40rem;
  }
`;

export const Img2 = styled.img`
  object-fit: cover;
  object-position: 0 -8rem;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 10rem;
  border-bottom-left-radius: 10rem;
  position: absolute;
  right: 25rem;
  bottom: 0.5rem;
  width: 27rem;
  height: 26%;

  @media screen and (max-width: 1500px) {
    right: 12rem;
  }
  @media screen and (max-width: 1100px) {
    right: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 0%;
    height: 0%;
  }
`;
// ----------------HERO SECTION END

// ----------------ROW 1 START(business setup)
export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  margin: 0 auto 5rem auto;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin: 0 auto 6rem auto;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    margin: 0 auto 5rem auto;
  }
`;

// style for the Row1 left content
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
export const Header = styled.h1`
  font-weight: bold;
`;

// style for the Row1 right content
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
  object-position: left;
  height: 45rem;
  width: 50rem;
  border-radius: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    object-fit: cover;
    object-position: left;
    height: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;
// ----------------ROW 1 END

// ----------------ROW 2 START(Hands Image)
export const Row2 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 8rem auto;
  border-radius: 4rem;
  background-color: ${({ theme }) => theme.colors.blue1};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column-reverse;
  }
`;

// image content-- column one
export const Col1 = styled.div`
  width: 45%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const Img = styled.img`
  max-width: 100%;
  height: 100%;
  filter: brightness(105%) contrast(95%);
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 4rem;
  border-bottom-left-radius: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    border-radius: 4rem;
  }
`;

// text content for the container --column two
export const Col2 = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 6.5rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding: 5rem 4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    padding: 5rem 4rem 2rem 4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    padding: 5rem 2rem 2rem 2rem;
  }
`;
// ----------------ROW 2 END

// ----------------ROW 3 START
export const Row3 = styled.div`
  width: 100%;
  margin-top: 10rem;
`;
export const ThemeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const Column = styled.div`
  width: 35%;
  margin-bottom: 5rem;
  margin-right: 9rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 46%;
    margin: 0 auto 5rem auto;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    text-align: left;
  }
`;

export const Box = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 1rem;
  margin: 1rem 0 3rem 0;
  background-color: ${({ theme }) => theme.colors.white3};
`;

export const Heading = styled.h3`
  margin-bottom: 2rem;
  font-family: "Expletus Sans", cursive;
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
// ----------------ROW 3 END

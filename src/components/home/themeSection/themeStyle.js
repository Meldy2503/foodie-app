import styled from "styled-components";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

export const SectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.red1};
  color: ${({ theme }) => theme.colors.white1};
`;
export const ContentContainer = styled.div`
  padding: 10rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  text-align: center;
`;
export const MainHeading = styled.h1`
  color: ${({ theme }) => theme.colors.white1};
  width: 60%;
  margin: 0 auto;
  /* width: 90%;
  max-width: 120rem; */
  line-height: 1.3;
  margin-bottom: 5rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 90%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 97%;
  }
`;

export const Carousel = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  position: relative;
  /* height: 37rem; */

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    height: 100%;
  }

  .slick-dots li button:before {
    font-size: 1.1rem;
    padding: 2rem 0;
    color: ${({ theme }) => theme.colors.white2};
  }

  .slick-slide {
    margin: 0 2rem;
    height: inherit !important;
    display: flex !important;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin: 0;
    }
  }

  .slick-slide > div {
    height: 100%;
  }

  .slick-track {
    display: flex !important;
    /* margin: 0 2rem; */
  }
`;
export const Gallary = styled.div`
  /* height: 50rem; */
  /* padding-right: 15rem; */
  /* display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* width: 70%; */
  /* position: relative; */
`;
export const CarouselThemes = styled.img`
  max-width: 100%;
  /* height: auto; */
  object-fit: cover;
  /* height: 40rem; */
  /* margin-right: 19rem; */
  /* width: 50rem; */
`;

export const RightArrowIcon = styled(HiOutlineArrowNarrowRight)`
  font-size: 2rem;
  position: absolute;
  font-weight: bold;
  top: 31%;
  right: 1.5rem;
`;
export const LeftArrowIcon = styled(HiOutlineArrowNarrowLeft)`
  font-size: 2rem;
  position: absolute;
  top: 31%;
  right: 1.5rem;
`;
export const RightArrow = styled.div`
  height: 5rem;
  width: 5rem;
  position: absolute;
  bottom: -8rem;
  right: 0;
  z-index: 20;
  border: 0.15rem solid ${({ theme }) => theme.colors.white2};
  background-color: ${({ theme }) => theme.colors.red1};
  cursor: pointer;
  border-radius: 0.3rem;
  /* width: 90%;
  max-width: 120rem; */
`;
export const LeftArrow = styled(RightArrow)`
  right: 8rem;
`;

export const Para = styled.p`
  margin: 1.5rem auto 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.white1};

  & > span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.white2};
  }
`;
export const Link = styled.a`
  color: #fff;
  text-decoration: underline;
  padding: 4rem 0 6rem 0;
  display: block;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 8rem 0 5rem 0;
  }
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 8rem;
  border-top: 0.02rem solid #d0d0d0;
  /* width: 90%;
  max-width: 120rem; */
`;

export const Column = styled.div`
  width: 30%;
  margin-bottom: 5.5rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 46%;
    margin: 0 auto 5.5rem auto;
    /* text-align: center; */
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    text-align: left;
  }
`;
export const Heading = styled.h3`
  margin-bottom: 2rem;
  font-family: "Expletus Sans", cursive;
`;

export const Text = styled.p`
  width: 90%;
  font-weight: normal;
  font-style: normal;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.white2};
`;

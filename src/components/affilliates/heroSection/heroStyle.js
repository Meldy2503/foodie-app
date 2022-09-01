import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const PageWrapper = styled.main`
  width: 100%;
  position: relative;
`;
export const SectionA = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green1};
  margin-top: 6.8rem;
`;

export const Row = styled.div`
  padding: 15rem 0 18rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    padding: 7rem 0 10rem 0;
  }
`;

export const TextContent = styled.div`
  width: 55%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    width: 48%;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    text-align: center;
  }
`;

export const Header = styled.h1`
  margin-bottom: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-bottom: 4rem;
  }
`;

export const Btn = styled.a`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black2};
  color: ${({ theme }) => theme.colors.white1};
  padding: 1.2rem 2rem;
  border-radius: 0.5rem;
  width: fit-content;
  margin-top: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: none;
  }
`;

export const MobileBtn = styled(Btn)`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: block;
    margin: 5rem auto 0 auto;
  }
`;

export const BackArrow = styled(HiOutlineArrowNarrowRight)`
  margin-left: 3rem;
`;

export const ImageContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 48%;
  height: 70rem;
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    height: fit-content;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Img1 = styled.img`
  max-width: 100%;
  width: 75rem;
  object-fit: contain;
  border-bottom-left-radius: 2rem;
  object-position: top;
  position: absolute;
  right: 14rem;
  top: 2%;
  height: 55%;

  @media screen and (max-width: 1500px) {
    right: 7rem;
  }
  @media screen and (max-width: 1300px) {
    right: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    position: relative;
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Img2 = styled.img`
  object-fit: contain;
  position: absolute;
  right: 32rem;
  bottom: 10rem;
  width: 23rem;
  height: 27%;

  @media screen and (max-width: 1500px) {
    right: 22rem;
  }
  @media screen and (max-width: 1300px) {
    right: 0rem;
    left: 2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 820px) {
    right: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 0%;
    height: 0%;
  }
`;

export const SectionB = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white1};
`;

export const Contents = styled(Row)`
  flex-direction: column;
  padding: 10rem 0;
`;
export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
  }
`;

export const Col1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }
`;
export const Col2 = styled.div`
  width: 45%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    width: 50%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 65%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Column = styled.div`
  width: 46%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    width: 90%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 46%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin: 1.5rem 0 1.5rem 0;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    margin: 1rem 0;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  line-height: 1.4;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.black1};
`;

export const Image = styled.img`
  max-width: 100%;
`;

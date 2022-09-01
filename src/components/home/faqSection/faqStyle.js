import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const SectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white1};
`;
export const ContentContainer = styled.div`
  padding: 0 0 10rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  text-align: center;
`;
export const MainHeading = styled.h1`
  color: ${({ theme }) => theme.colors.black2};
  margin: 0 auto;
  line-height: 1.4;
  width: 80%;

  & > span {
    color: ${({ theme }) => theme.colors.red1};
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 100%;
  }
`;
export const SubHeading = styled.h2`
  margin: 4.5rem 0;
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  width: 46%;
  margin-bottom: 5.5rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const Header = styled.h3`
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-weight: normal;
  font-style: normal;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.black1};
`;
export const Journey = styled.div`
  margin-top: 5rem;
`;

export const Heading = styled.h1`
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 60%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 70%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 100%;
  }
`;

export const Para = styled(Text)`
  width: 50%;
  margin: 2rem auto 1.5rem auto;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 70%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 80%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 100%;
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
  margin: 0 auto;
  cursor: pointer;
`;

export const BackArrow = styled(HiOutlineArrowNarrowRight)`
  margin-left: 2.5rem;
`;

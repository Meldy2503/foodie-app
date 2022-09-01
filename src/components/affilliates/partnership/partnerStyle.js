import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white1};
`;

export const Contents = styled.div`
  padding: 3rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    padding: 1rem 0 5rem 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding: 0 0 5rem 0;
  }
`;

export const Header = styled.h1`
  margin-bottom: 2rem;
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  width: 30%;
  margin-bottom: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 47%;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  margin: 2.5rem 0 1.2rem 0;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  line-height: 1.4;
  margin-bottom: 1.2rem;
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
export const Row2 = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  padding: 10rem 0;
  width: 88%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column-reverse;
    padding: 8rem 0;
  }
`;
export const LeftContent = styled.div`
  width: 45%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin: 3rem auto 0 auto;
  }
`;

export const Comment = styled.h1`
  background-image: linear-gradient(127deg, #f1608a -3%, #aa68d2 98%);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const RightContent = styled.figure`
  width: 45%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 70%;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  max-width: 100%;
`;
export const Caption = styled.figcaption`
  font-size: 1.8rem;
  text-align: center;
  margin-top: 1rem;
`;

export const Row3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;

  @media screen and (max-width: 320px) {
    align-items: flex-start;
    justify-content: flex-start;
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
  margin-top: 1rem;
`;

export const Arrow = styled(BackArrow)`
  margin-left: 3rem;
  color: ${({ theme }) => theme.colors.white1};
`;

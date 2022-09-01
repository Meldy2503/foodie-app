import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.red2};
`;
export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.red2};
  display: flex;
  position: relative;
  align-items: center;
  padding: 5rem 0 5rem 7rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 5rem 0;
  }
`;

export const BgImg = styled.img`
  max-width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40rem;
  object-fit: cover;
  object-position: right;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  max-width: 120rem;
  width: 65rem;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white1};
  border-radius: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    width: 95%;
  }
`;
export const Contents = styled.div`
  padding: 5rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 4rem;
  }
  @media screen and (max-width: 400px) {
    padding: 4rem 2rem;
  }
`;
export const LogoWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;
export const LogoText = styled.h3`
  font-family: "Expletus Sans", cursive;
`;
export const Logo = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 1rem; ;
`;
export const Header = styled.h2`
  font-family: "Expletus Sans", cursive;
`;
export const HeaderText = styled.p`
  margin: 1.4rem 0 2rem 0;
  font-size: 1.7rem;
`;
export const Form = styled.form``;
export const Input = styled.input`
  border: none;
  border-bottom: 0.2rem solid #777;
  outline: none;
  margin-top: 2.5rem;
  padding-bottom: 0.7rem;
  font-family: "ProximaNovaAlt", sans-serif;
  color: #000;
  font-size: 1.6rem;
  font-weight: normal;
  width: ${({ width }) => width || "100%"};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: ${({ swidth }) => swidth || "100%"};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.black1};
  }
`;
export const TextWrapper = styled.span`
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Text = styled.p`
  font-weight: normal;
  font-style: normal;
  margin: 2rem 0 1.8rem 0;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.black1};

  @media screen and (max-width: 500px) {
    margin: 2rem 0 0.5rem 0;
  }
`;
export const LinkText = styled(Link)`
  text-decoration: underline;
  margin-left: 0.7rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red1};

  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`;
export const SubmitBtn = styled.button`
  padding: 1.3rem 1.5rem;
  border-radius: 0.7rem;
  display: flex;
  font-weight: bold;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black2};
  color: ${({ theme }) => theme.colors.white1};
  margin-top: 2.5rem;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    margin-top: 4.5rem;
  }
`;
export const BackArrow = styled(HiOutlineArrowNarrowRight)`
  margin-left: 2rem;
  font-size: 2rem;
`;

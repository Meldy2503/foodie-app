import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export const SectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black4};
  color: ${({ theme }) => theme.colors.white1};
  z-index: 10000;
`;
export const Contents = styled.div`
  padding: 2rem 0 2rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
`;
// style for row 1 contents --start
export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0 6rem 0;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;

export const Row1Left = styled.div`
  width: 47%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const Row1Heading = styled.h3`
  margin-bottom: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-bottom: 2rem;
  }
`;

export const LinkImage = styled.a`
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  max-width: 100%;
  height: 6rem;
  width: 25rem;
  object-fit: contain;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 24rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 23rem;
  }
`;
export const BackArrow = styled(HiOutlineArrowNarrowRight)`
  color: #aa68d2;
  font-size: 2.5rem;
  margin: 1.5rem 1.5rem 0 0;
`;

export const Row1Right = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin-top: 5rem;
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
  }
`;
export const Input = styled.input`
  padding: 1.8rem 0.7rem 1.8rem 1.7rem;
  width: 70%;
  outline: none;
  color: ${({ theme }) => theme.colors.white1};
  background-color: #39313b;
  font-size: 1.6rem;
  border-radius: 0.3rem;
  border: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #39313b inset !important;
    -webkit-box-shadow: 0 0 0 30px #39313b inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white1} !important;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      width: 70%;
    }
  }

  &::placeholder {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white1};
  }
`;
export const SignupBtn = styled(Input)`
  padding: 1.8rem 1.7rem;
  width: 30%;
  color: ${({ theme }) => theme.colors.black4};
  background-color: ${({ theme }) => theme.colors.white1};
  border: none;
  border-radius: 0.2rem;
  font-weight: bold;
  cursor: pointer;
`;
// row1-------------end

// style for row 2 contents --start
export const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 8rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-bottom: 4rem;
  }
`;
export const Column = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    margin-bottom: 4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    margin-right: 1.1rem;
    margin-left: 1.1rem;
  }
`;
export const Header = styled.h4`
  color: #fafafc;
  margin-bottom: 1.8rem;
`;

export const LinkContents = styled.div`
  margin-bottom: 1.8rem;
`;
export const Links = styled(Link)`
  color: #bebebe;
  font-size: 1.4rem;
`;
// row2---------------end

// style for row 3 contents --start
export const Row3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;
export const Row3Left = styled.span`
  width: 70%;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Logo = styled.img`
  max-width: 100%;
  height: 6rem;
  width: 12rem;
  object-fit: contain;
  margin-right: 2rem;
`;
export const FormSelect = styled.form`
  cursor: pointer;
`;
export const SelectOption = styled.select`
  color: #fafafc;
  font-family: "ProximaNovaAlt", sans-serif;
  background-color: transparent;
  border: none;
  margin-left: 2rem;
  outline: none;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin: 0 2rem 0 0;
  }
`;
export const Option = styled.option`
  width: 100%;
  color: #090909;
`;
export const Row3Right = styled.span`
  width: 30%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const SocialMediaLinks = styled.a``;
export const Icons = styled.img`
  height: 2.8rem;
  width: 2.8rem;
  margin-left: 2.2rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin: 2rem 2.2rem 0 0;
  }
`;
// row3---------------end

// style for row 4 contents --start
export const Row4Wrapper = styled.div`
  width: 100%;
  border-top: 0.15rem solid #707070;
`;

export const Row4 = styled.div`
  width: 90%;
  max-width: 120rem;
  margin: 3rem auto 0 auto;
  padding-bottom: 4rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;

export const Row4Left = styled.div`
  width: 67%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;

export const Row4Right = styled.span`
  width: 28%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white1};
`;
export const TextPolicy = styled(Link)`
  margin-left: 3rem;
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white1};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin: 2rem 3rem 0 0;
  }
`;

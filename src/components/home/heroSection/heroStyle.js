import styled from "styled-components";

export const SectionContainer = styled.section`
  background: linear-gradient(152deg, #faeded 75%, #c62410 50%);
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  margin-top: 6.8rem;

  @media screen and (max-width: 850px) {
    background: ${({ theme }) => theme.colors.red2};
  }
`;

export const ContentWrapper = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 3%;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 55%;
  max-width: 55%;
  padding: 13rem 0 10rem 0;
  background-color: ${({ theme }) => theme.colors.red2};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding: 7rem 0;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const MainHeading = styled.h1`
  width: 90%;

  @media screen and (max-width: 850px) {
    width: 95%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 100%;
  }
`;
export const Para1 = styled.p`
  width: 86%;
  margin: 2.8rem 0;
  font-size: 1.9rem;
  font-weight: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.black1};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 86%;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 100%;
  }
`;
export const EmailInput = styled.input`
  padding: 1.78rem 0.7rem 1.8rem 1.7rem;
  width: 60%;
  outline: none;
  color: ${({ theme }) => theme.colors.black2};
  background-color: ${({ theme }) => theme.colors.white2};
  font-size: 1.6rem;
  border-radius: 0.2rem;
  border-right: none;
  border-top: solid 1px ${({ theme }) => theme.colors.black3};
  border-left: solid 1px ${({ theme }) => theme.colors.black3};
  border-bottom: solid 1px ${({ theme }) => theme.colors.black3};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.white2} inset !important;
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.white2} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.black2} !important;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      width: 70%;
    }
  }

  &::placeholder {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.black2};
  }
`;
export const SignupBtn = styled(EmailInput)`
  padding: 1.9rem 1.7rem;
  width: 30%;
  color: ${({ theme }) => theme.colors.white1};
  background-color: ${({ theme }) => theme.colors.red1};
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
`;
export const Para2 = styled(Para1)`
  width: 80%;
  margin: 1.5rem 0 0 0;
  font-size: 1.4rem;
  line-height: 1.4;

  @media screen and (max-width: 850px) {
    width: 78%;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 95%;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  width: 50%;
  object-fit: cover;
  object-position: top left;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

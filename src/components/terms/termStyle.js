import styled from "styled-components";
import terms from "../../assets/images/termsImg.png";

export const Section = styled.section`
  width: 100%;
  overflow: hidden;
`;
export const Contents = styled.div`
  padding: 8rem 0 0 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
`;

export const HeroSection = styled.div`
  background: url(${terms});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  height: 22rem;
  width: 100%;
  margin-top: 6.8rem;
  position: relative;
`;
export const MainHeader = styled.h1`
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    top: 63%;
  }
`;

export const Terms = styled.p`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  line-height: 1.4;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.black1};
`;
export const AccountTerms = styled.div`
  margin: 10rem 0;
`;
export const Title = styled.h3`
  font-family: "Expletus Sans", cursive;
`;
export const AccountTexts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;
export const ListContainer = styled.ul`
  width: 65%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;

export const ListItems = styled.li`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  line-height: 1.4;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.black1};
  list-style-type: disc;
  margin-left: 2rem;
`;
export const Meaning = styled.div`
  width: 30%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin-top: 1rem;
  }
`;
export const Text = styled(Terms)`
  font-weight: 550;
`;
export const SubHeading = styled.h4`
  font-family: "Expletus Sans", cursive;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-size: 2rem;
`;

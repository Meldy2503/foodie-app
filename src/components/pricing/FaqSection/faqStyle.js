import styled from "styled-components";

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

export const SubHeading = styled.h2`
  margin: 2.5rem 0 4.5rem 0;
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

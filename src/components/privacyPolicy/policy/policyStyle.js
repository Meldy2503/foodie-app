import styled from "styled-components";

export const PolicySection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white1};
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;
export const Col1 = styled.div`
  width: 38%;
  height: fit-content;
  border-left: 0.3rem solid #d0d0d0;
  padding-left: 1.7rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-bottom: 5rem;
    width: 100%;
  }
`;
export const Col2 = styled.div`
  width: 65%;
  scroll-behavior: smooth;
  max-height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 58%;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const LinkWrapper = styled.div`
  margin-bottom: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding-bottom: 0.3rem;
  }
`;

export const Links = styled.a`
  color: ${({ theme }) => theme.colors.black1};
  padding: 0.6rem 0 0.6rem 0;
  cursor: pointer;
  scroll-behavior: smooth;

  &.active {
    border-left: 0.3rem solid #525252;
    margin-left: -2rem;
    padding-left: 1.5rem;
    color: green;
  }
`;

export const Contents = styled.div`
  margin-bottom: 7rem;
`;
export const Title = styled.h3`
  font-family: "Expletus Sans", cursive;
  margin-bottom: 2rem;
`;
export const Para1 = styled.p``;
export const ListContainer = styled.ul`
  margin: 1rem 0 1rem 2rem;
`;
export const ListItems = styled.li`
  padding: 1rem 0;
  list-style-type: disc;
`;
export const Para2 = styled.p``;

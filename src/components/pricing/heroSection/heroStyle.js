import styled from "styled-components";
import { MdLocalFireDepartment } from "react-icons/md";

export const SectionContainer = styled.section`
  width: 100%;
  margin-top: 6.8rem;
  background-color: ${({ theme }) => theme.colors.white1};
`;
export const ContentContainer = styled.div`
  padding: 7rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
`;
export const SubHeader = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  text-align: center;
`;
export const MainHeader = styled.h1`
  color: ${({ theme }) => theme.colors.black2};
  text-align: center;
  line-height: 1.4;
  margin-bottom: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 100%;
  }
`;
export const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Column = styled.section`
  width: 32%;
  padding: 2.5rem;
  position: relative;
  border-radius: 2rem;
  margin-bottom: 2.5rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 48%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const Title = styled.h3`
  font-family: "Expletus Sans", cursive;
`;
export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  margin: 2rem 0 3rem 0;
  line-height: 1.4;
  height: 8rem;
  width: 60%;
  color: ${({ theme }) => theme.colors.black1};

  @media screen and (max-width: 1300px) {
    width: 85%;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 70%;
    height: 7rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
    width: 90%;
    height: 7rem;
  }
`;

export const Price = styled.h3`
  font-family: "Expletus Sans", cursive;
  text-align: right;
`;
export const Amount = styled.span`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.17;
  color: ${({ theme }) => theme.colors.black2};
`;
export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white1};
  border-radius: 50%;
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  padding: 0.3rem;
`;

export const FireIcon = styled(MdLocalFireDepartment)`
  font-size: 3rem;
  color: #da3847;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;
export const Table = styled.table`
  width: 100%;
  border: 0.1rem solid #d0d0d0;
  border-collapse: collapse;
  white-space: normal;
  text-align: center;
  font-size: 1.8rem;
  margin-top: 3rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.black3};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 74.5rem !important;
  }

  .tick {
    font-size: 2.5rem;
    color: #da3847;
  }

  span {
    font-weight: normal;
    color: ${({ theme }) => theme.colors.black3};
    margin-top: 1rem;
  }

  th {
    padding: 1rem;
    font-family: "Expletus Sans", cursive;
    font-size: 2rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.black2};

    & > span {
      font-size: 2.5rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.black2};
    }
  }

  th:nth-child(1) {
    border-top: 0.15rem solid #fff;
    border-left: 0.15rem solid #fff;
  }

  td,
  th {
    border: 0.15rem solid #d0d0d0;
  }

  tr:nth-child(odd) {
    border-bottom: 0.01rem solid #d0d0d0;
  }

  td:nth-child(1) {
    text-align: left;
    padding: 1rem 2rem;
    width: 40%;
    font-weight: bold;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.black3};
  }

  td:nth-child(2),
  td:nth-child(3),
  td:nth-child(4) {
    width: 20%;
  }
`;

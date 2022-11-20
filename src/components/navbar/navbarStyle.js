import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  cursor: pointer;
  position: ${({ position }) => position || "fixed"};
  top: 0;
  bottom: 0;
  left: 0;
  padding-bottom: 4rem;
  z-index: 5000;
  height: 7rem;
  background-color: ${({ bgCo }) => bgCo || "#edf2fa"};
  color: #000;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  padding: 1rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    align-items: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
`;
export const Logo = styled.div`
  img {
    width: 4.5rem;
    max-width: 100%;
  }

  h2 {
    font-family: "Expletus Sans", cursive;
    font-size: 2.2rem;
    margin-left: 0.7rem;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.black1};
  }
`;

export const LinkContainer = styled.ul`
  display: none;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    background-color: ${({ bgCo }) => bgCo || "#edf2fa"};
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 6.5rem;
    display: block;
    z-index: 5000;
    height: 100vh;
    transition: all 0.5s ease;
  }

  ${(props) => props.isMenuOpen} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 82%;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      display: none;
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
`;

export const LinkLists = styled.li`
  padding-left: 3.5rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding: 3rem 0 1.5rem 2.6rem;
    border-bottom: 0.1rem solid #d0d0d0;
    width: 100%;
  }
`;
export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black2};
  font-weight: bold;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    font-size: 1.9rem;
  }
`;

export const Medium = styled.a`
  color: ${({ theme }) => theme.colors.black2};
  font-weight: bold;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    font-size: 1.9rem;
  }
`;

export const GetStarted = styled.div`
  background-color: ${({ theme }) => theme.colors.red1};
  padding: 1rem 1.3rem;
  margin-left: 2.5rem;
  border-radius: 0.5rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin-left: 2rem;
    margin-top: 2.5rem;
  }
`;

export const Link2 = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white1};
  font-size: 1.5rem;
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: block;
    font-weight: bolder;
  }
`;

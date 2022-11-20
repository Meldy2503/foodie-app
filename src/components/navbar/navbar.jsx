import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { ClickAwayListener } from "@material-ui/core";
import LogoImg from "../../assets/images/foodie-logo.svg";

import {
  Header,
  NavContainer,
  Logo,
  LinkContainer,
  LinkLists,
  Link,
  Link2,
  Medium,
  MenuIcon,
  GetStarted,
  Wrapper,
} from "./navbarStyle";

const Navbar = ({ bgCo, position }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuIcon = () => setIsMenuOpen(!isMenuOpen);
  const closeMenuLink = () => setIsMenuOpen(false);
  const handleClickAway = () => setIsMenuOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Header bgCo={bgCo} position={position}>
        <NavContainer>
          <Logo>
            <Link to="/">
              <img src={LogoImg} alt="foodie-app logo" />
              <h2>foodie</h2>
            </Link>
          </Logo>
          <LinkContainer isMenuOpen={isMenuOpen} bgCo={bgCo}>
            <Wrapper>
              <LinkLists>
                <Link to="/about-us" onClick={closeMenuLink}>
                  About Us
                </Link>
              </LinkLists>
              <LinkLists>
                <Medium
                  href="https://medium.com/foodienig"
                  target="_blank"
                  onClick={closeMenuLink}
                >
                  Learn
                </Medium>
              </LinkLists>
            </Wrapper>
            <Wrapper>
              <LinkLists>
                <Link to="/pricing" onClick={closeMenuLink}>
                  Pricing
                </Link>
              </LinkLists>
              <LinkLists>
                <Link to="/contact-us" onClick={closeMenuLink}>
                  Contact Us
                </Link>
              </LinkLists>
              <LinkLists>
                <Link to="/create-account" onClick={closeMenuLink}>
                  Login
                </Link>
              </LinkLists>

              <GetStarted>
                <Link2 to="/create-account">Get Started</Link2>
              </GetStarted>
            </Wrapper>
          </LinkContainer>
          <MenuIcon onClick={handleMenuIcon}>
            <Hamburger
              rounded
              color="#000"
              size={25}
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
            />
          </MenuIcon>
        </NavContainer>
      </Header>
    </ClickAwayListener>
  );
};

export default Navbar;

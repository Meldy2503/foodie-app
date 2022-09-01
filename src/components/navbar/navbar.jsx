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
  Link1,
  Link2,
  MenuIcon,
  GetStarted,
  Wrapper,
  ArrowDown,
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
              <img src={LogoImg} alt="foodie logo" />
              <h2>foodie</h2>
            </Link>
          </Logo>
          <LinkContainer isMenuOpen={isMenuOpen} bgCo={bgCo}>
            <Wrapper>
              <LinkLists>
                <Link1 to="/" onClick={closeMenuLink}>
                  Start <ArrowDown />
                </Link1>
              </LinkLists>
              <LinkLists>
                <Link1 to="/" onClick={closeMenuLink}>
                  Learn <ArrowDown />
                </Link1>
              </LinkLists>
            </Wrapper>
            <Wrapper>
              <LinkLists>
                <Link to="/pricing" onClick={closeMenuLink}>
                  Pricing
                </Link>
              </LinkLists>
              <LinkLists>
                <Link to="/" onClick={closeMenuLink}>
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

import { Fragment } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Affilliates from "./pages/Affilliates";
import TermsAndConditions from "./pages/Terms";
import CreateAccount from "./pages/createAccount";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./pages/scrollToTop";

const theme = {
  colors: {
    red1: "#ed1d41",
    red2: "#faeded",
    black1: "#000",
    black2: "#08080d",
    black3: "#525252",
    black4: "#201a21",
    white1: "#fff",
    white2: "#f8fbff",
    white3: "#ebebeb",
    yellow1: "#f8b400",
    blue1: "#edf2fa",
    blue2: "#f2f2f2",
    green1: "#edfaee",
  },

  mediaQuery: {
    smobile: "400px",
    mobile: "767px",
    tablet: "960px",
    desktop: "1200px",
  },
};

function App() {
  return (
    <Router>
      <ScrollToTop>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/affilliates" element={<Affilliates />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Fragment>
        </ThemeProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;

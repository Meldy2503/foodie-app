import { Fragment, lazy, Suspense } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary";
import Loading from "./components/Loading";
import ScrollToTop from "./pages/scrollToTop";

let Home = lazy(() => import("./pages/Home"));
let Contact = lazy(() => import("./pages/Contact"));
let Pricing = lazy(() => import("./pages/Pricing"));
let Affilliates = lazy(() => import("./pages/Affilliates"));
let TermsAndConditions = lazy(() => import("./pages/Terms"));
let CreateAccount = lazy(() => import("./pages/createAccount"));
let PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
let AboutUs = lazy(() => import("./pages/AboutUs"));

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
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

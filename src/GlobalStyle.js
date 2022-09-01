import { createGlobalStyle } from "styled-components";
import ProximaNovaARegularA from "./assets/fonts/ProximaNovaA-Regular.ttf";
import ProximaNovaARegularB from "./assets/fonts/ProximaNovaA-Regular.woff";
import ProximaNovaASemiboldA from "./assets/fonts/ProximaNovaA-Bold.ttf";
import ProximaNovaASemiboldB from "./assets/fonts/ProximaNovaA-Bold.woff";
import Hermione from "./assets/fonts/hermione.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "ProximaNovaAlt";
    src: url(${ProximaNovaARegularA}) format("truetype"), url(${ProximaNovaARegularB}) format("woff");
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: "ProximaNovaAlt" ;
    src: url(${ProximaNovaASemiboldA}) format("truetype"), url(${ProximaNovaASemiboldB}) format("woff");
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: "Hermione" ;
    src: url(${Hermione}) format("truetype");
    font-weight: 600;
    font-style: normal;
}


*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    font-family: 'ProximaNovaAlt', sans-serif;
    font-size: 1.6rem;
    background-color: #fff;
}

h1 {
    font-size: 4rem;
    font-family: 'Expletus Sans', cursive;
  font-weight: bold;
  line-height: 1.17;
  color: ${({ theme }) => theme.colors.black2};
 
}
h2 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.17;
}
h3 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.17;
}


ul li {
    list-style-type: none;
}

a {
    text-decoration: none;
}

@media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    
    html {
        font-size: 60%;
    }

    h1 {
        font-size: 3.7rem;
    }
    h2 {
        font-size: 2.7rem;
    }
    h3 {
        font-size: 2.2rem;
    }
  }

  
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {

    html {
        font-size: 58%; 
    }
    h1 {
        font-size: 3.2rem;

    }
    h2 {
        font-size: 2.5rem;

    }
    h3 {
        font-size: 2rem;

    }
  }

`;

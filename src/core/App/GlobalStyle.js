import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Lato', sans-serif;
      transition: background 0.3s;
      background: ${({ theme }) => theme.colors.site.background};
      color: ${({ theme }) => theme.colors.site.text};
      font-size: 18px;
      letter-spacing: 0.05em;
      word-break: break-all;
      overflow-y: scroll;
      padding-bottom: 108px;
      word-break: normal;
      @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding-bottom: 32px; 
      }
    }

.lato-thin {
  font-family: "Lato", serif;
  font-weight: 100;
  font-style: normal;
}

.lato-light {
  font-family: "Lato", serif;
  font-weight: 300;
  font-style: normal;
}

.lato-regular {
  font-family: "Lato", serif;
  font-weight: 400;
  font-style: normal;
}

.lato-bold {
  font-family: "Lato", serif;
  font-weight: 700;
  font-style: normal;
}

.lato-black {
  font-family: "Lato", serif;
  font-weight: 900;
  font-style: normal;
}

.lato-thin-italic {
  font-family: "Lato", serif;
  font-weight: 100;
  font-style: italic;
}

.lato-light-italic {
  font-family: "Lato", serif;
  font-weight: 300;
  font-style: italic;
}

.lato-regular-italic {
  font-family: "Lato", serif;
  font-weight: 400;
  font-style: italic;
}

.lato-bold-italic {
  font-family: "Lato", serif;
  font-weight: 700;
  font-style: italic;
}

.lato-black-italic {
  font-family: "Lato", serif;
  font-weight: 900;
  font-style: italic;
}
`;
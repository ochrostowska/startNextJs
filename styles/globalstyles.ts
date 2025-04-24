import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    max-width: 100vw;
    overflow-x: hidden;
    // This defines what 1rem is => 10px/16px = 62.5% -> 1rem = 10px
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-weight: 400;
    line-height: 1.7;
    color: $color-almost-black;
    font-family: Poppins, sans-serif;
    padding-top: calc(${({ theme }) => theme.constants.fragmentVerticalOffset} * 2 + 4rem); // Account for navbar height

    @media ${(props) => props.theme.media.tabPort} {
      padding-top: calc(${({ theme }) => theme.constants.fragmentVerticalOffsetTablet} * 2 + 4rem);
    }
  }

  // apply custom style to the selected text
  ::selection {
    background-color: $color-primary;
    color: $color-white;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: 2rem;
    font-family: Poppins, sans-serif;

    @media ${(props) => props.theme.media.tabLand} {
      font-size: 1.8rem;
    }
    @media ${(props) => props.theme.media.phone} {
      font-size: 1.4rem;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

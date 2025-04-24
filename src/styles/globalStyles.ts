import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.gray300};
  }

  input::placeholder, textarea::placeholder {
    color: ${(props) => props.theme.colors.gray400};
    font-style: normal;
  }
`;

export default GlobalStyle;

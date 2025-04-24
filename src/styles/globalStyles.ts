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

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    
    max-width: 660px;
    width: 90%;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.gray500_70};
  }
`;

export default GlobalStyle;

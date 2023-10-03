import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Colors from "../themes/colors";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background: ${Colors.white};

    .form-check-input:checked,
  .form-check-input:checked {
    background-color: ${Colors.primaryGreen};
    border-color: transparent;
  }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

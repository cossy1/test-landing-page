import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Colors from "../themes/colors";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background: ${Colors.white};
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

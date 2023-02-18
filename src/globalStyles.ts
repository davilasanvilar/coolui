import { createGlobalStyle } from "styled-components";
import { device } from "./StyledTheme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width:100%;
    height: 100vh;
    overflow: hidden;
    scroll-behavior: smooth;
    color: ${(props) => props.theme.color.main.d7};

  }
  ::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
}

::-webkit-scrollbar-thumb {
  border-radius: 12px;
    background: ${(props) => props.theme.color.main.l4};  
}
`

export default GlobalStyle;

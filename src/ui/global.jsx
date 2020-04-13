import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #fad390;
    font-family: Arial, sans-serif;
    padding-top: 50px;
  }

  ::placeholder {
    font-style: italic;
    color: ${colors.white.darker};
  }
`;

export default GlobalStyle;

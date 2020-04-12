import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fad390;
    font-family: Arial, sans-serif;
    padding-top: 50px;
  }

  ::placeholder {
    font-style: italic;
  }
`;

export default GlobalStyle;

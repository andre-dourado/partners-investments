import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #2a2d3a;
    font-family: 'Poppins', sans-serif;
    color: #fff;
  }

  button {
    background: none;
    border: 0;
    color: #fff;
  }
`;

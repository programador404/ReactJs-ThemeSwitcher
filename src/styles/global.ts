import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75px;
    }

    @media(max-width: 720px) {
      font-size: 87.5px;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    -webkit-font-smooting: antialiased;
  }

  body, input, textarea, button {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--texts);
  }

  button {
    cursor: pointer;
  }
`;
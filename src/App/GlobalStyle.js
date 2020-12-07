import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.color.body};
    color: ${({ theme }) => theme.color.text};
    transition: all 0.50s linear;
  }
`;
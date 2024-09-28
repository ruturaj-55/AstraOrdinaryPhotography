import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --bg-color: #0c0c0c;
    --primary-color: #0d0d0d;
    --secondary-color: #fff;
    --text-color: #fff;
    --text-color-2: #fff;
    --overlay-color: rgb(12 12 12 / 63%);
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text} !important;
    cursor: pointer !important;
    text-decoration:none
  }

  button {
    border: 2px solid ${({ theme }) => theme.colors.button.text} !important;
    color : ${({ theme }) => theme.colors.button.text} !important;
    display: inline-block;
    padding: 1em 2em;
    font-size: 14px;
    border-radius: 4px;
    margin: 0.5em !important;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
    background: none;
    line-height: 1;
    font: inherit;      
  }

  button:hover,
  button:focus{
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) =>
      theme.colors.buttonhover.text};
    transform: translateY(-0.25em);
    border: 2px solid ${({ theme }) =>
      theme.colors.buttonhover.text} !important;
    color: ${({ theme }) => theme.colors.buttonhover.text} !important;
  }
  
`;

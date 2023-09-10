import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(https://img.freepik.com/free-photo/cinema-concept-with-clapperboard-popcorn_23-2147989058.jpg?w=1480&t=st=1694344585~exp=1694345185~hmac=975b580560208cef43e6b4acb74ead969b7b51e6cfb34ab34df9c282a577b773);
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
    background-color: rgba(46, 47, 66, 0.7);
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }
`;

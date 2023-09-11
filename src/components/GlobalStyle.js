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
    height: 100vh;
font-family: "Gill Sans", sans-serif;    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    justify-content: center;
  background-image: url(https://img.freepik.com/free-photo/clapperboard-popcorn_23-2147775681.jpg?w=1800&t=st=1694351573~exp=1694352173~hmac=5db78882fe3ae6bfe3b1dd83e809bb7484ddc94765e08b587f6edc75f8851349);
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
    color: black;
  }

`;

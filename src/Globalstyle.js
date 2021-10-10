import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  *, 
  *:after, 
  *:before {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    background-color: #F1F2F6;
  }
  
  a {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    color: #FFF;
  }
  
  ul,
  li {
    list-style-type: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p, 
  span {
    font-family: 'Poppins', sans-serif;
  }

  input[id=radio-1]:checked ~ .tab-slider{
    transform: translateX(0);
  }

  input[id=radio-2]:checked ~ .tab-slider{
    transform: translateX(95%);

    @media screen and (max-width: 409px) {
      transform: translateX(105%);
    }
  }

  .form__input:focus + .form__label {
    top: -.5rem;
    left: .8rem;
    color: #333;
    font-size: .8rem;
    font-weight: 500;
    z-index: 10;
  }

  /*Input focus sticky top label*/
  .form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
    top: -.5rem;
    left: .8rem;
    z-index: 10;
    font-size: .9rem;
    font-weight: 500;
  }

  /*Input focus*/
  .form__input:focus {
    border: 1.5px solid #C8C8C8;
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style:none;
    margin:0;
    padding:0;
  }
  button{
    cursor:pointer;
    border:0;
    background:transparent;
    outline:none;
  }
 
  `;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

   body {
    background: #bdc3c7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    opacity: 1;
    transition:all .4s ease-in-out;
    }
   
    *,button,input{
      border:0;
      outline:0;
      font-family: 'Roboto', sans-serif;
    }

    button{
      cursor:pointer;
    }

`;

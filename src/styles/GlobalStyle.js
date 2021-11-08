import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    body {  
        font-family: 'DM Sans', sans-serif;
        margin: 0;
        background-image: url('/images/bg-home.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-color: rgba(0,0,0,0.55);
    }

`

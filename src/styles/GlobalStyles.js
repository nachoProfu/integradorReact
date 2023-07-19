import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    :root{
        --background: #EBF5EE;
        --primary: #0A1128;
        --secondary: #001F54;
        --text-nav: #283044;
        --text-hero: #fcfcfc;

    }


    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Lato', sans-serif;
        text-decoration: none;
        list-style-type: none;
        user-select:none;
        /* background-color: #242425; */
        /* background-color: var(--background); */
        /* color: white;  */
    
    }

`;

export default GlobalStyles;

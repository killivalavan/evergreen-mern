import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{ 
    --green: #00e06e;
    --grey: #686868
}

body{
    font-family: 'Open Sans', sans-serif;
} 
a{
    text-decoration: none;
    color: black;
    /* &:hover{
        color: inherit;
    }    */
}

a,button{
    &:hover{
      cursor: pointer;
    }
}
ul{
    list-style: none;
    margin-bottom:0 ;
}
p{
    margin-bottom: 0;
}
    


`;

export default GlobalStyle;

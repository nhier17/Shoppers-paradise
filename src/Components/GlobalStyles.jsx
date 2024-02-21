import { createGlobalStyle } from "styled-components"
const GlobalStyles = createGlobalStyle`
      *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: grey;
        }
        &::-webkit-scrollbar-track {
    background: grey;
  }
    }
    body {
        font-family: 'Poppins',sans-serif;
        overflow-x: hidden;
        height:auto;
        width: auto;
    }
`
export default GlobalStyles
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
        overflow-x: hidden;
        height:auto;
        width: auto;
        font-family: "Roboto",sans-serif;
        background: black;
        p{
        color: white;
        }
        h1, h2, h3, h4{
            color: white
        }
        @media (max-width: 768px) {
            padding: 1rem;
        
        }
    }
`
export default GlobalStyles
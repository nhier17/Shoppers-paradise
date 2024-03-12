import React from 'react'
import success from "../Images/success.png"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Success = () => {
    return (
        <Container>
           <Contents>
            <span>Payment Succssful! </span>
            <StyledSpan>Your order is in our system.</StyledSpan>
            <ImageContainer>
               <img src={success} alt="success" /> 
            </ImageContainer>
            <StyledLink>
                <Link to="/">Back to Home</Link>
            </StyledLink>
            </Contents> 
        </Container>
      )
    }
    
    const Container = styled.div`
        display: grid;
      place-items: center;
      width: 100%;
      height: 100%;
      font-family: 'Raleway', sans-serif;
      background-color: #F7F7F7;
      
      @media (min-width: 768px) {
        height: 100vh;
      }
    
    `
    const Contents = styled.div`
        max-width: 20rem;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        span {
            color: #2cdc26;
            font-size: 24px;
        }
    `
    const StyledSpan= styled.span`
      color: #e4ef44;
      text-align: center;
      margin-top: 8px;
      font-size: 2xl;
      font-weight: bold;    
    `
    const ImageContainer = styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: auto;
      margin-top: 12px;
      width: 96px;
      img{
        width: 100%;
        height: auto;
      }
    `
    const StyledLink = styled.div`
       margin-top: 10px;
      margin: auto;
      Link {
        text-decoration: none;
        font-size: 19px;
        
      }
`
export default Success
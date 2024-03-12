import React from 'react'
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom"
import styled from "styled-components";

const CancelPayment = () => {
  return (
    <Container>
       <Contents>
        <span>Something went wrong!</span>
        <StyledSpan>Please retry again later</StyledSpan>
        <ImageContainer>
           <MdCancel /> 
        </ImageContainer>
        <StyledContainer>
            <Link to="/">Back to Home</Link>
        </StyledContainer>
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
        color: #DC2626;
        font-size: 24px;
    }
`
const StyledSpan= styled.span`
  color: #EF4444;
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
  svg {
    font-size: 50px;
  }
`
const StyledContainer = styled.div`
   margin-top: 10px;
  margin: auto;
 `

export default CancelPayment
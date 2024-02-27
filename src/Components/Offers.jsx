import React from 'react'
import exclusive_image from "../Images/exclusive_image.png"
import styled from "styled-components"



const Offers = () => {
  return (
    <Container>
       <OffersLeft>
        <h1>Exclusive</h1>
        <h2>Offers for you</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
        </OffersLeft> 
        <OffersRight>
          <img src={exclusive_image} alt="" />  
        </OffersRight>
    </Container>
  )
}

const Container = styled.div`
 width: 100%;
 height: 60vh;
 display: flex;
 padding-left: 1rem;
 margin-left: 2rem;
 padding: 0px 1rem;
 margin-bottom: 2rem;
 margin-top: 1rem;
 background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%); 
@media (max-width: 768px) {
  margin-left: 1rem;
  padding-left:1rem;
  img {
    width: 250px;
    
  }
}

`
const OffersLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
   flex: 1; 
   h1 {
    color: #090909;
    font-size: 26px;
    font-weight: 600;
   }
   p {
    color: #171717;
    font-size: 22px;
    font-weight: 600;
   }
   button {
    width: 200px;
    height: 70px;
    border-radius: 20px;
    background: #FF9900;
    color: white;
    font-size: 18px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin-top: 20px;
   }
`
const OffersRight = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: flex-end;
padding-top: 50px;
`

export default Offers

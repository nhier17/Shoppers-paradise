import React from 'react'
import styled from "styled-components"

const NewsLetter = () => {
  return (
    <Container>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
        </form>
    </Container>
  )
}
const Container = styled.div`
   width: 65%;
   height: 40vh; 
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin:  auto;
   padding: 0px 140px;
   margin-bottom: 150px;
   background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
   gap: 30px;
   h1 {
    color: #090909;
    font-size: 22px;
    font-weight: 600;
   }
   p {
    color: #090909;
    font-size: 20px;
    
   }
   form {
    display: flex;
    
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 730px;
    height: 70px;
    input {
      color: #616161;
      background: linear-gradient(35deg, #e9e4e4,#7e7979);
     border: none;
     margin: 8px 0;
     padding: 1rem 3rem;
     font-size: 16px;
     border-radius: 8px;
     outline: none;
    }
    button {
     width: 180px;
     height: 50px;
     background: #FF9900;
     font-size: 16px;
     border-radius: 80px;
     cursor: pointer;
     background: black;
     color: white;
    }
   }
`

export default NewsLetter
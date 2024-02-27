import React from 'react'
import styled from "styled-components"
import hands from "../Images/hand_icon.png"
import avatar from "../Images/hero_image.png"
import arrow from "../Images/arrow.png"

const Hero = () => {
  return (
    <StyledHero>
<Left>
<h2>NEW ARRIVALS</h2>
<div>
<Icons>
<p>New</p>
<img src={hands} alt="title" />
</Icons>
<p>Collections</p>
<p>For everyone</p>
</div>
<Latest>
<div>Latest Collection</div>
<img src={arrow} alt="arrow" />
</Latest>
    </Left>
    <Right>
<img src={avatar} alt="avatar"/>
    </Right>
     </StyledHero>
  )
}
const StyledHero = styled.div`

background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
display: flex;
@media (max-width: 768px) {
   margin-bottom: 1rem;
   margin-top: 1rem;
   
  }
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
padding-left: 180px;
line-height:   1.1; 
h2 {
   color: #090909;
    font-size: 19px;
    font-weight: 600;
}
p {
    color: #171717;
    font-size: 60px;
    font-weight: 700;
}
@media (max-width: 768px) {
    padding-left: 1rem;
 
    h2 {
      font-size: 19px;
      margin-top: 1rem;
    }
    p {
      font-size: 30px;
    }
  }

`
const Right = styled.div`
 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center; 
  
 
 @media (max-width: 768px) {
    margin-bottom: 10px;
    img {
  width: 250px;
 } 
  }
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;  
  img {
    width: 105px;
  }
`
const Latest = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
width: 250px;
height: 70px;
border-radius: 20px;
margin-top: 4rem;
background: #FF9900;
color: white;
border: none;
font-size: 22px;
cursor: pointer;

@media (max-width: 768px) {
    margin-bottom: 20px;
    width: 100%;
    font-size: 19px;
  }
`
export default Hero
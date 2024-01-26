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
height: 100vh;
background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
display: flex;
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
    font-size: 26px;
    font-weight: 600;
}
p {
    color: #171717;
    font-size: 100px;
    font-weight: 700;
}
`
const Right = styled.div`
 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;   
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
width: 310px;
height: 70px;
border-radius: 75px;
margin-top: 4rem;
background: #ff4141;
color: white;
font-size: 22px;
font-weight: 500;
cursor: pointer;
`
export default Hero
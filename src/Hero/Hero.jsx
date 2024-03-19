import React from 'react'
import styled from "styled-components"
import hands from "../Images/hand_icon.png"
import avatar from "../Images/hero_image.png"


const Hero = () => {
  return (
    <StyledHero>
<Left>
<div>
<Icons>
<p>New</p>
<img src={hands} alt="title" />
</Icons>
<p>Collections</p>
<p>For <span>everyone</span></p>
</div>
    </Left>
    <Right>
<img src={avatar} alt="avatar"/>
    </Right>
     </StyledHero>
  )
}
const StyledHero = styled.div`

background: linear-gradient(180deg, #0ef, #e1ffea22 60%);
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

p {
    
    font-size: 60px;
    font-weight: 700;
}

@media (max-width: 768px) {
    padding-left: 1rem;
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
 img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
 
  @media (max-width: 768px) {
    margin-bottom: 10px;

    img {
      width: 100%;
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

export default Hero
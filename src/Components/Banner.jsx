import React, { useState, useEffect } from 'react'
import slide1 from "../Images/slide1.jpg"
import slide2 from "../Images/slide2.jpg"
import slide3 from "../Images/slide3.jpg"
import slide4 from "../Images/slide4.jpg"
import slide7 from "../Images/slide7.jpg"
import slide6 from "../Images/slide6.png"

import { FaSearch } from 'react-icons/fa'
import styled from "styled-components"
import {motion } from "framer-motion"


const Banner = () => {
    const slides = [slide1, slide2, slide3, slide4, slide7, slide6]
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() =>{
const interval = setInterval(() => {
    setCurrentSlideIndex((prevIndex) =>
    prevIndex === slides.length -1 ? 0 : prevIndex + 1
);
}, 5000);
return () => clearInterval(interval)
    },[slides.length]);
  return (
    <Container>
        <ContentWrapper>
        <StyledBanner>
        <h1>All the assets you need in one place!!</h1>
        </StyledBanner>
<Description>
        <p>Shop for clothes,phones, accessories and more from independent sellers around the world</p>
        </Description>
        <FormStyle>
    <div>
        <FaSearch />
        <input type="text" placeholder="Search for products" />
        
    </div>
        </FormStyle>
        </ContentWrapper>
        {slides.map((slide, index) => (
                <BackgroundSlide
                key={index}
                src={slide}
                animate={
                index === currentSlideIndex
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: '100%' }
                }
                transition={{ duration: 1 }}
                  
                />
            ))}
    </Container>
  )
}
const Container = styled(motion.div)`
height: 60vh;
position: relative;
overflow: hidden;
z-index: 30;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: opacity 5;
@media (max-width: 768px) {
  width: 100%;
  height: 50vh;
}

`
const StyledBanner = styled(motion.div)`
h1 {
     font-size: 2rem !important;
     padding-bottom: 2rem;
     color: white;
}
@media (max-width: 768px){
    h1 {
        font-size: 1.5rem !important;
    }
}
`
const Description = styled.p`
width: 45rem;
font-size: 18px;
line-height: 1.3;
margin-top: 0rem;
max-width: 360px;
margin-left: 1rem;
margin-bottom: 1rem;
font-family: 'Lato',sans-serif;
color: white;
`
const FormStyle = styled.form`
margin: 0rem 2rem;
div {
position: relative;
width: 100%;
}
input {
    border: none;
    background: linear-gradient(35deg, #FFFFFF, #FFFFFF);
    font-size: 14px;
    color: black;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
}

svg {
    position: absolute;
    top: 50%;
    left: 0%;
    font-size: 24px;
    transform: translate(100%, -50%);
    }
`
const BackgroundSlide = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  
`;
export default Banner
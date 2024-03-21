import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components"
//images
import wm from "../Images/wm.png"
import mn from "../Images/mn.png"
import ms from "../Images/ms1.png"
import ws from "../Images/ws.jpeg"
import kds from "../Images/kds.png"
import ph from "../Images/ph.png"
import ap from "../Images/ap.png"
import gw from "../Images/gw.png"
import lp from "../Images/lp.png"

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Categories = (props) => {
    return (
        <Container>
            <h2>Categories</h2>
  <Carousel
   infinite={true}
  customTransition="all .75"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
   autoPlaySpeed={3000}
   itemClass="carousel-item-padding-20-px"
  responsive={responsive}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  >
  <Contents>
    <img src={wm} alt="wm" />
    <p>Women outfit</p>
  </Contents>
  <Contents>
    <img src={mn} alt="mn" />
    <p>Men outfit</p>
  </Contents>
  <Contents>
    <img src={ms} alt="ms" />
    <p>Men shoes</p>
  </Contents>
  <Contents>
    <img src={ph} alt="ws" />
    <p>SmartPhones</p>
  </Contents>
  <Contents>
    <img src={ws} alt="ws" />
    <p>Women shoes</p>
  </Contents>
  <Contents>
    <img src={kds} alt="kds" />
    <p>Kids outfits</p>
  </Contents>
  <Contents>
    <img src={gw} alt="kds" />
    <p>Gym wear</p>
  </Contents>
  <Contents>
    <img src={lp} alt="kds" />
    <p>Computing</p>
  </Contents>
  <Contents>
    <img src={ap} alt="kds" />
    <p>Appliances</p>
  </Contents>
</Carousel>;
        </Container>
    )
}
const Container = styled.div`
margin-top: 3rem;
padding: 3rem;
h2 {
    margin-bottom: 2rem;
    padding-left: 3rem;
    font-size: 19px;
}
`
const Contents = styled.div`
  border: 1px solid #F3F4F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 width: 200px; 
  height: 200px; 
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    overflow: hidden;
  }  
  p {
    font-size: 1rem;
     margin-top: 2rem;
  }
`


export default Categories
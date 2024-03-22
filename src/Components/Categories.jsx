import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components"
import { Link } from "react-router-dom"
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
      items: 2
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
    <Link to="/women">
    <img src={wm} alt="wm" />
    </Link>
    <p>Women outfit</p>
    </Contents>
  <Contents>
    <Link to="/men">
    <img src={mn} alt="mn" />
    </Link>
    <p>Men outfit</p>
     </Contents>
  <Contents>
    <Link to="/men">
    <img src={ms} alt="ms" />
    </Link>
    <p>Men shoes</p>
     </Contents>
  <Contents>
    <Link to="/smartphones">
    <img src={ph} alt="ws" />
    </Link>
    <p>SmartPhones</p>
  </Contents>
  <Contents>
    <Link to="/women">
    <img src={ws} alt="ws" />
    </Link>
    <p>Women shoes</p>
  </Contents>
  <Contents>
    <Link to="kids">
    <img src={kds} alt="kds" />
    </Link>
    <p>Kids outfits</p>
  </Contents>
  <Contents>
    <Link to="/gym">
    <img src={gw} alt="kds" />
    </Link>
    <p>Gym wear</p>
     </Contents>
  <Contents>
    <Link to="smartphones">
    <img src={lp} alt="kds" />
    </Link>
    <p>Computing</p>
  </Contents>
  <Contents>
    <Link to="/smartphones">
    <img src={ap} alt="kds" />
    </Link>
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
@media (max-width: 768px) {
padding: 1rem;
h2 {
    margin-bottom: 1rem;
    padding-left: 1rem;
    
}
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
  text-decoration: none;
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
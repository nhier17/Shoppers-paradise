import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { categoriesData } from "../Util";



const splideOptions = {
  type: 'loop',
  autoplay: true,
  interval: 4000, 
  pauseOnHover: true,
  resetProgress: false,
  arrows: false,
  pagination: false,
  perPage: 3, 
  gap: '1rem', 
  breakpoints: {
    640: {
      perPage: 2, 
    },
  },
};
const Categories = (props) => {
    return (
   <Container>
     <h2>Categories</h2>
     <Splide options={splideOptions}>
      {categoriesData.map((item) => (
        <SplideSlide key={item.id}>
        <Contents key={item.id}>
          <StyledLink to={item.link}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </StyledLink>
        </Contents>
        </SplideSlide>
      ))}
      </Splide>
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
    width: 160px;
    height: 160px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;
  }  
  p {
    font-size: 1rem;
     margin-top: 2rem;
  } 

`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; 
  margin-top: 10px;
`;


export default Categories
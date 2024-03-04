import React, {useContext} from 'react'
import { FaStar,FaStarHalf } from "react-icons/fa";

import styled  from "styled-components"
import {ShopContext} from "../Context/ShopContext"

const ProductDetails = ({product}) => {
  const {addToCart} = useContext(ShopContext)
  return (
    <Container>
       
      <Details>
         <List>
          <img crossOrigin="anonymous" src={product.image} alt={product.name} />
          <img crossOrigin="anonymous" src={product.image} alt={product.name} />
          <img crossOrigin="anonymous" src={product.image} alt={product.name} />
          <img crossOrigin="anonymous" src={product.image} alt={product.name} />
          </List>
         <DisplayMain>
          <img crossOrigin="anonymous" src={product.image} alt={product.name}/>
          </DisplayMain> 
      </Details>
    
       <DisplayRight>
       <h1>{product.name}</h1>
       <Description>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
       <FaStarHalf />
       <p>(122)</p>
       </Description>
       <Prices>
        <OldPrice>
          KSh {product.old_price}
        </OldPrice>
        <NewPrice>
          KSh {product.new_price}
        </NewPrice>
       </Prices>
       <div className="description">
       Ready for pickup between  22 February & 23 February when you order within next 2hrs 33mins
       </div>
       <Sizes>
        <h1>Select Size</h1>
        <Contents>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </Contents>
       </Sizes>
      
       <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
      
        </DisplayRight>
       </Container>
  )
}
const Container = styled.div`
margin-top: 2rem;
padding: 2rem;
 display: flex;
 
 button {
  margin-top: 1rem;
    padding: 1rem;
    font-size: 16px;
    font-weight: 600;
    background: #e07e1b;
    color: white;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
  }
  div {
    color: white;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Details = styled.div`
display: flex;
gap: 1rem;
@media (max-width: 768px) {
  flex-direction: row;
  align-items: center;
  
}

`
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    height: 163px;
    border-radius: 1rem;
    @media (max-width: 768px) {
      height: 150px;
      width: 100%;
      object-fit: contain;
      
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 5px;
    align-items: center;
    overflow-x: auto; /* Enable horizontal scrolling */
    scroll-snap-type: x mandatory; /* Snap to the images */
  }
  
`
const DisplayMain = styled.div`
img {
  width: 586px;
  height: 700px;
  object-fit: cover;
  border-radius: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
 }

`
const DisplayRight = styled.div`
margin: 1rem auto;
display: flex;
flex-direction: column;
align-items: center;
h1 {
  color: white;
  font-size: 19px;
  font-weight: 600;
}

`

const Description = styled.div`
display: flex;
align-items: center;
gap: 10px;
padding: 10px;
svg {
  color: #F6B01E;
  font-size: 19px;
  gap: 5px;
  
}
`
const Prices = styled.div`
 display: flex;
 margin: 20px 0px;
 gap: 30px;
 font-size: 24px; 
 justify-content: flex-start;
 align-items: center;
`
const OldPrice = styled.div`
color: #818181;
text-decoration: line-through;
font-size: 14px;
`
const NewPrice = styled.div`
font-weight: 600;
font-size: 18px;
color: white;
`
const Sizes = styled.div`
h1 {
  margin-top: 55px;
  color: #656565;
  font-size: 20px;
  font-weight: 600;
}
`
const Contents = styled.div`
  display: flex;
  margin: 20px 0px;
  gap: 20px;
  div {
    color: grey;
    padding: 18px 24px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    cursor: pointer;
  }
`
export default ProductDetails
import React, {useContext} from 'react'
import { FaStar,FaStarHalf } from "react-icons/fa";

import styled  from "styled-components"
import {ShopContext} from "../Context/ShopContext"

const ProductDetails = ({product}) => {
  const {addToCart} = useContext(ShopContext)
  let image_url ="https://shoppers-paradise17.onrender.com"
  return (
    <Container key={product._id}>
       
      <Details>
         <List>
          <img crossOrigin="anonymous" src={image_url+product.image} alt={product.name} />
          <img crossOrigin="anonymous" src={image_url+product.image} alt={product.name} />
          <img crossOrigin="anonymous" src={image_url+product.image} alt={product.name} />
          <img crossOrigin="anonymous" src={image_url+product.image} alt={product.name} />
          </List>
         <DisplayMain>
          <img crossOrigin="anonymous" src={image_url+product.image} alt={product.name}/>
          </DisplayMain> 
      </Details>
    
       <DisplayRight>
       <h3>{product.name}</h3>
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
       <p>
       {product.description}
       </p>
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
      
       <button onClick={() => {addToCart(product._id)}}>ADD TO CART</button>
      
        </DisplayRight>
       </Container>
  )
}
const Container = styled.div`
margin-top: 2rem;
padding: 2rem;
 display: flex;
 justify-content: flex-start;
  align-items: flex-start;
 button {
  margin-top: 1rem;
    padding: 1rem 3rem;
    font-size: 16px;
    font-weight: 600;
    background: #e07e1b;
    color: white;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const Details = styled.div`
display: flex;
gap: 1rem;
@media (max-width: 768px) {
  flex-direction: row;
    
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
    overflow-x: auto; 
    scroll-snap-type: x mandatory; 
  }
  
`
const DisplayMain = styled.div`

img {
  width: 586px;
  height: 700px;
  object-fit: cover;
  border-radius: 1rem;
  padding-right: 2rem;
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
align-items: flex-start;
h1 {
  
  font-size: 19px;
  font-weight: 600;
}
@media (max-width: 768px) {
  p{
    font-size: 16px;
    
  }
}

`

const Description = styled.div`
display: flex;
gap: 10px;
padding: 10px;
svg {
  color: #F6B01E;
  font-size: 1.2rem;
  }
`
const Prices = styled.div`
 display: flex;
 margin: 20px 0px;
 gap: 30px;
 font-size: 1rem; 
 justify-content: flex-start;
 align-items: center;
`
const OldPrice = styled.div`
color: #818181;
text-decoration: line-through;

`
const NewPrice = styled.div`
font-weight: 600;

`
const Sizes = styled.div`
margin-top: 2rem;
h1 {
  font-size: 1.2rem;
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
  @media (max-width: 768px) {
    gap: 10px;
    div {
      padding: 9px 12px;
    }
  }
`
export default ProductDetails
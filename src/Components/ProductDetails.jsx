import React from 'react'
import { FaStar,FaStarHalf } from "react-icons/fa";

import styled  from "styled-components"
import {Link } from "react-router-dom"

const ProductDetails = ({product}) => {
  
  return (
    <Container>
       
      <Details>
         <List>
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          </List>
         <DisplayMain>
          <img src={product.image} alt={product.name}/>
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
       Ready for pickup between 22 February & 23 February when you order within next 2hrs 33mins
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
      <Link to="/cart">
       <button>ADD TO CART</button>
       </Link>
        </DisplayRight>
       </Container>
  )
}
const Container = styled.div`
 display: flex;
 button {
  padding: 20px 40px;
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  background: #E07E1B;
  color: white;
  border: none;
  border-radius: 8px;
  outline: none;  
  cursor: pointer;
 }
`
const Details = styled.div`
display: flex;
gap: 1rem;

`
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    height: 163px;
    border-radius: 1rem;
  }
`
const DisplayMain = styled.div`
img {
  width: 586px;
  height: 700px;
  object-fit: cover;
  border-radius: 1rem;
}
`
const DisplayRight = styled.div`
margin: 0px auto;
display: flex;
flex-direction: column;
h1 {
  color: #090909;
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
font-size: 20px;
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
    padding: 18px 24px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    cursor: pointer;
  }
`
export default ProductDetails
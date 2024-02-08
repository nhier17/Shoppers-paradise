import React from 'react'
import styled from "styled-components"

const Items = ({name,image, new_price, old_price}) => {
  return (
    <Item>
      <img src={image} alt="product" />
      <p>{name}</p>
      <ItemPrices>
      <NewPrice>
        {new_price}
        </NewPrice>
      <OldPrice>
        {old_price}    
      </OldPrice>
      </ItemPrices>
    </Item>
  )
}

const Item = styled.div`
  width: 350px;
  p {
    margin: 6px 0px;
  }
  img {
    display: block;
    width: 100%;
    height: 60dvh;
    object-fit: cover;
   margin-top: 1rem;
   margin-bottom: 1rem;
    transition: transform 450ms;
    }
    &:hover{
transform: scale(1.08);
opacity: 1;
  }
  &:hover {
    transform: scale(1.08);
    transition: 0.6s;
  }
`
const ItemPrices = styled.div`
  display: flex;
  gap: 30px;
`
const NewPrice = styled.div`
 color: #374151;
 font-size: 18px; 
 `
 const OldPrice = styled.div`
  color: #8c8c8c;
  font-size: 18px;
  text-decoration: line-through;
 `
export default Items
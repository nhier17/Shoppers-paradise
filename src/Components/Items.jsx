import React from 'react'
import styled from "styled-components"

const Items = ({name,image, new_price, old_price}) => {
  return (
    <Item>
      <img src={image} alt="product" />
      <div>
      <p>{name}</p>
      </div>
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
padding-left: 3rem;
 cursor: pointer;
p {
  max-width: 223px;
  
}
  img {
    display: block;
    border-radius: 1rem;
   width: 223.5px;
   height: 223.5px;
   object-fit: cover;
 
    transition: transform 450ms;
    &:hover{
transform: scale(1.08);
transition: 0.6s;
opacity: 1;
  }
    }
  

`
const ItemPrices = styled.div`
  display: flex;
  gap: 10px;
  
  
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
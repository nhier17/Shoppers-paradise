import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Items = ({name,image, new_price, old_price,id}) => {
  const truncate = (str,n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
const truncatedName = truncate(name,20)
  return (
    <Item>
      <Link to={`/product/${id}`} onClick={window.scrollTo(0,0)}>
      <img crossOrigin="anonymous" src={image} alt="product" />
      </Link>
      <div>
      <p>{truncatedName}</p>
      </div>
      <ItemPrices>
      <NewPrice>
       Ksh {new_price}
        </NewPrice>
      <OldPrice>
       Ksh {old_price}    
      </OldPrice>
      </ItemPrices>
    </Item>
  )
}

const Item = styled.div`
padding-left: 3rem;
 cursor: pointer;
 
 transition: transform 450ms;
    &:hover{
transform: scale(1.08);
transition: 0.6s;
opacity: 1;
  }
p {
  max-width: 223px;
  
}
  img {
    display: block;
    border-radius: 1rem;
   width: 223.5px;
   height: 223.5px;
   object-fit: cover;
 
    }
  

`
const ItemPrices = styled.div`
  display: flex;
  gap: 10px;
  
  
`
const NewPrice = styled.div`
 color: white;
 font-size: 14px; 
 
 `
 const OldPrice = styled.div`
  color: grey;
  font-size: 14px;
  text-decoration: line-through;
 `

export default Items
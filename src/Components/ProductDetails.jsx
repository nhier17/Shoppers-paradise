import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";
import styled  from "styled-components"

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
    
       <div className="right">
       <h1>{product.name}</h1>
       <div className="contents">
       <CiStar />
       <CiStar />
       <CiStar />
       <CiStar />
       <FaStarHalfAlt />
       <p>(122)</p>
       </div>
       <div className="prices">
        <div className="old">
          KSh {product.old_price}
        </div>
        <div className="new">
          KSh {product.new_price}
        </div>
       </div>
       <div className="description">
       Ready for pickup between 22 February & 23 February when you order within next 2hrs 33mins
       </div>
       <div className="size">
        <h1>Select Size</h1>
        <div className="sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
       </div>
       <button>ADD TO CART</button>
       <p>Cate</p>
       </div>
       </Container>
  )
}
const Container = styled.div`
 display: flex;
 marging: 0px 170px; 
`
const Details = styled.div`
display: flex;
gap: 17px;

`
const List = styled.div`
  displays: flex;
  flex-direction: column;
  gap: 16px;
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

export default ProductDetails
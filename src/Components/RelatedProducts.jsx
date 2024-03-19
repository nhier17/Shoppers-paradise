import React, { useState, useEffect,useCallback } from 'react'
import axios from 'axios'
import Items from "./Items"
import styled from "styled-components"

const RelatedProducts = ({productId, category}) => {
    const [related, setRelated] = useState([])
    let image_url = "https://shoppers-paradise17.onrender.com"
    
    const getDetails = useCallback(async () => {
        try {
          const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products?&category=${category}`);
          setRelated(response.data.products);
           } catch (error) {
          console.log(error);
        }
      }, [category]);
    
      useEffect(() => {
        getDetails();
      }, [getDetails]);
    
 
  return (
    <Container>
        <p>You may also like</p>
        <hr />
        <Contents>
           {related.map((item) => (
            <Items
            key={item.id}
            id={item.id}
            name={item.name}
            image={image_url+item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            />
           ))} 
        </Contents>
    </Container>
  )
}
const Container = styled.div`
padding: 2rem;
 height: 90vh;
 p {
  
  font-size: 1rem;
  padding: 1rem;
  font-weight: 600;  
 }
 hr {
     width: 200px;
     height: 6px;
     border-radius: 6px;
    background-color: #252525;
 }

`
const Contents = styled.div`
 margin-top: 50px;
 display: flex;
 overflow-x: scroll;
 overflow-y: hidden;
 width: 100%;
 gap: 1rem;
 &::-webkit-scrollbar{
    display: none;
}
img {
  overflow: hidden;
}
`
export default RelatedProducts
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Items from "./Items"
import styled from "styled-components"

const RelatedProducts = ({productId, category}) => {
    const [related, setRelated] = useState([])
    
    const getDetails = async () => {
        try {
        const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products?&category=${category}`)
        setRelated(response.data.products)
        console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getDetails()
    }, [productId, category])
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
            image={item.image}
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
  color: #171717;
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
 overflow: scroll;
 width: 70%;
 gap: 1rem;
 &::-webkit-scrollbar{
    display: none;
}
`
export default RelatedProducts
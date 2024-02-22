import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Items from "./Items"
import styled from "styled-components"

const RelatedProducts = () => {
    const [related, setRelated] = useState([])
    
    const getDetails = async () => {
        const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products`)
        setRelated(response.data.products)
    }
    useEffect(() => {
        getDetails()
    }, [])
  return (
    <Container>
        <h1>Related Products</h1>
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
 display: flex;
 flex-direction: column;
 gap: 10px;
 align-items: center;  
 height: 90vh;
 h1 {
  color: #171717;
  font-size: 26px;
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
 gap: 30px

`
export default RelatedProducts
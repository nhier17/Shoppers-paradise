import React, { useState, useEffect } from 'react'
import axios from "axios"
import Items from './Items'
import styled from "styled-components"


const Popular = () => {
    const [popular, setPopular] = useState([])
    
    const getDetails = async () => {
        const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products?&category=women`)
        console.log(response.data)
        setPopular(response.data)
        
    }
    useEffect(()=>{
        getDetails()
    }, [])
  return (
    <PopularProducts>
      <h1>Popular in Women</h1>  
      <PItems>
        {popular.products?.map((item) => (
            <Items 
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            />
        ))}
      </PItems>
    </PopularProducts>
  )
}

const PopularProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 90vh;
`
const PItems = styled.div`
    display: flex; 
    gap: 30px;
  
`
export default Popular
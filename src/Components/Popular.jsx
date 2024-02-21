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
  
h1 {
  padding-left: 3rem;
}
    @media (max-width: 768px) {
    height: auto;
    
  }
`
const PItems = styled.div`
 display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
    grid-gap: 1rem;
    
`
export default Popular
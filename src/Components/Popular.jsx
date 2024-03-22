import React, { useState, useEffect } from 'react'
import axios from "axios"
import Items from './Items'
import styled from "styled-components"
import { toast } from "sonner"



const Popular = () => {
    const [popular, setPopular] = useState([])
    const [loading, setLoading] = useState(true)
    let image_url = "https://shoppers-paradise17.onrender.com"
    
    const getDetails = async () => {
      try {
        const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products?&category=gym`)
        setPopular(response.data.products)
      } catch (error) {
        toast.error("Error fetching data")
      } finally {
        setLoading(false)
      }
    }

    useEffect(()=>{
        getDetails()
    }, [])
  return (
    <PopularProducts>
      <h1>Flash Sales</h1>
      {loading ? ( 
        <LoadingMessage>Loading...</LoadingMessage>
      ) : ( 
      <PItems>
        {popular.map((item) => (
          
            <Items 
            key={item._id}
            id={item._id}
            name={item.name}
            image={image_url+item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            />
          
        ))}
      </PItems>
      )}
    </PopularProducts>
  )
}

const PopularProducts = styled.div`
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
 margin: 0 auto;
max-width: 960px;
margin-bottom: 3rem;
h1 {
  padding-left: 3rem;
  margin-bottom: 2rem;
  font-size: 19px;
  margin-top: 2rem;
}
    @media (max-width: 768px) {
    height: auto;
    padding-left: 0rem;
    h1 {
      padding-left: 1rem;
    }
  }
`
const PItems = styled.div`
 display: grid;
grid-template-columns: repeat(auto-fit,minmax(12rem,1fr));
grid-gap: 4rem;
@media (max-width: 768px) {
  display: flex;
  gap: 0.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
scrollbar-color: black;
&::-webkit-scrollbar{
    display: none;
}
img {
  overflow: hidden;
}
    }
    
`
const LoadingMessage = styled.div`
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
`;
export default Popular
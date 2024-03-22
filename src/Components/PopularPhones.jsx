import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import Items from "./Items"
import styled from "styled-components"

const PopularPhones = () => {
    const [popular, setPopular] = useState([])
    let image_url = "https://shoppers-paradise17.onrender.com"
    
    const getPhones = async () => {
        const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products?&category=smartphones`)
        setPopular(response.data.products)
      
    }
    useEffect(()=>{
        getPhones()
    }, [])

    return (
        <PopularProducts>
          <h1>SmartPhones</h1>  
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
        </PopularProducts>
      )
    }

const PopularProducts = styled.div`
 padding-left: 3rem;
  display: flex;
  flex-direction: column;
 margin: 0 auto;
max-width: 960px;
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
 grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
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
      width: 145px;
      height: 193px;
      object-fit: cover;
      overflow: hidden;
    }
        }
        
    `


export default PopularPhones
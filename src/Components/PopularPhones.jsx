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
        console.log(response.data.products)
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
                key={item.id}
                id={item.id}
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
      margin-top: 2rem;
      
    h1 {
      padding-left: 3rem;
      margin-bottom: 2rem;
      font-size: 19px;
    }
        @media (max-width: 768px) {
        height: auto;
        padding-left: 0rem;
      }
    `
    const PItems = styled.div`
     display: grid;
        grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
        grid-gap: 4rem;
        @media (max-width: 768px) {
          display: flex;
          gap: 0.5rem;
          overflow: scroll;
    scrollbar-color: black;
    &::-webkit-scrollbar{
        display: none;
    }
    img {
      width: 145px;
      height: 193px;
      object-fit: cover;
    }
        }
        
    `


export default PopularPhones
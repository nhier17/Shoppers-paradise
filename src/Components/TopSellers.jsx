import React, { useState, useEffect } from 'react'
import axios from "axios"
import styled from "styled-components"
import Items from './Items'
import { photoAnim } from "../animations";
import { motion } from "framer-motion"

const TopSellers = () => {
    const [top, setTop] =  useState([])
    let image_url = "https://shoppers-paradise17.onrender.com"
    
    const getDetails = async () => {
        const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products?&category=mixed`)
        setTop(response.data.products)
    }
    useEffect(() => {
    getDetails()
    }, [])
    

    return (
        <PopularProducts variants={photoAnim}>
          <h1>Trending this week!</h1>  
          <PItems>
            {top.map((item) => (
              
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
    
    const PopularProducts = styled(motion.div)`
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

export default TopSellers
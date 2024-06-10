import React, { useState, useEffect } from 'react'
import axios from "axios"
import styled from "styled-components"
import { Items } from '.'
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Bars } from "react-loader-spinner"

const TopSellers = () => {
    const [top, setTop] =  useState([])
    const [loading, setLoading] = useState(true)
    let image_url = "https://shoppers-paradise17.onrender.com"
    
    const getDetails = async () => {
        try {
         const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products?&category=mixed`)
          setTop(response.data.products)  
        } catch (error) {
            toast.error("Error fetching data")
        } finally {
            setLoading(false)
        }
        
    }
    useEffect(() => {
    getDetails()
    }, [])
    

    return (
        <PopularProducts>
          <h2>Trending this week!</h2>  
          {loading ? (
            <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
             />
            ) : (
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
          )}
        </PopularProducts>
      )
    }
    
    const PopularProducts = styled(motion.div)`
   padding-left: 3rem;  
   display: flex;
  flex-direction: column;
 margin: 0 auto;
max-width: 960px;
       h2 {
      padding-left: 3rem;
      margin-bottom: 2rem;
      font-size: 19px;
     margin-top: 2rem;
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
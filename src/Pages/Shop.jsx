import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers'
import NewCollections from '../Components/NewCollections'
import NewsLetter from '../Components/NewsLetter'
import {motion} from "framer-motion"

 const Shop = () => {
   return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.75}}
    >
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
        
    </motion.div>
  )
}

export default Shop

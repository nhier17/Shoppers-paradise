import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Components/Popular'
import PopularPhones from '../Components/PopularPhones'
import Offers from '../Components/Offers'
import NewCollections from '../Components/NewCollections'
import NewsLetter from '../Components/NewsLetter'
import TopSellers from '../Components/TopSellers'
import {motion} from "framer-motion"
import Banner from '../Components/Banner'

 const Shop = () => {
   return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.75}}
    >
        <Banner/>
        <TopSellers />
        <PopularPhones/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
        
    </motion.div>
  )
}

export default Shop

import React from 'react'
import Popular from '../Components/Popular'
import PopularPhones from '../Components/PopularPhones'
import Offers from '../Components/Offers'
import NewsLetter from '../Components/NewsLetter'
import TopSellers from '../Components/TopSellers'
import {motion} from "framer-motion"
import Banner from '../Components/Banner'
import Categories from '../Components/Categories'

 const Shop = () => {
   return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.75}}
    >
        <Banner/>
        <Categories />
        <TopSellers />
        <PopularPhones/>
        <Offers/>
        <Popular/>
        <NewsLetter/>
        
    </motion.div>
  )
}

export default Shop

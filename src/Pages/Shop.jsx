import React from 'react';
import { Popular, PopularPhones, Offers, NewsLetter, Banner, Categories, TopSellers  } from '../components';
import {motion} from "framer-motion";

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

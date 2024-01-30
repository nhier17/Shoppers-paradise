import React from 'react'
import { Routes, Route  } from "react-router-dom"
import Shop from "./Shop";
import ShopCategory from "./ShopCategory";
import Product from "./Product";
import Cart from "./Cart";

const Home = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/men" element={<ShopCategory category="men"/>} />
        <Route path="/women" element={<ShopCategory category="women"/>} />
        <Route path="/kids" element={<ShopCategory category="kids"/>} />
        <Route path="/product" element={<Product/>}>
        <Route path=":id"  element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>} />
         </Routes>
    </div>
  )
}

export default Home
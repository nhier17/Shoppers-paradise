import React from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import Shop from './Shop';
import ShopCategory from './ShopCategory';
import Product from './Product';
import Cart from './Cart';
import men from '../Images/banner_men.png';
import women from '../Images/banner_women.png';
import kids from '../Images/banner_kids.png';
import { AnimatePresence } from "framer-motion"
import { Checkout, Success, CancelPayment } from "../Components"
import Dashboard from "./Dashboard"

function Pages(){
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
      <Routes  location={location} key={location.pathname}>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory image={men} category="men" />} />
        <Route path="/women" element={<ShopCategory image={women} category="women" />} />
        <Route path="/kids" element={<ShopCategory image={kids} category="kids" />} />
        <Route path="/smartphones" element={<ShopCategory image={kids} category="smartphones" />} />
        <Route path="/gym" element={<ShopCategory image={men} category="gym" />} />
        <Route path="/product" element={<Product category={["kids","women","men","gym","smartphones"]}/>}>
         <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
         <Route path="/success" element={<Success />} />
         <Route path="/cancel" element={<CancelPayment />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Pages;

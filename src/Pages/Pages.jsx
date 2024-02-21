import React from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import Shop from './Shop';
import ShopCategory from './ShopCategory';
import Product from './Product';
import Cart from './Cart';
import men from '../Images/banner_men.png';
import women from '../Images/banner_women.png';
import kids from '../Images/banner_kids.png';

function Pages(){
  const location = useLocation();
  return (
    <div>
      <Routes  location={location} key={location.pathname}>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory image={men} category="men" />} />
        <Route path="/women" element={<ShopCategory image={women} category="women" />} />
        <Route path="/kids" element={<ShopCategory image={kids} category="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Pages;

import React from "react"
import NavBar from "./NavBar/NavBar";
import GlobalStyles from "./Components/GlobalStyles";
import {Routes, Route  } from "react-router-dom"
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/men" element={<ShopCategory category="men"/>} />
        <Route path="/women" element={<ShopCategory category="women"/>} />
        <Route path="/kids" element={<ShopCategory category="kids"y/>} />
        <Route path="/product" element={<Product/>}>
        <Route path=":id"  element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup/>} />
      </Routes>
    </div>
  );
}

export default App;

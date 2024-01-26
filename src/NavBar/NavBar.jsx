import React, { useState } from 'react'
import styled from "styled-components"
import {AiFillShopping} from "react-icons/ai"
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

const NavBar = () =>{
  const[menu, setMenu] = useState("shop")  
  return (
    <StyledNav>
    <NavLogo>    
        <AiFillShopping/>
        <p>SHOPPER</p>
    </NavLogo>   
    <ul>
     <Link to="/">
     <li onClick={()=>{setMenu("shop")}}>Shop{menu === "shop"? <hr/> : <></> }</li>  
     </Link>
     <Link to="/men">
     <li onClick={()=>{setMenu("men")}}>Men {menu === "men"? <hr/> : <></> } </li> 
     </Link>
     <Link to="/women">
     <li onClick={()=>{setMenu("women")}}>Women {menu === "women"? <hr/> : <></> }</li> 
     </Link>
     <Link to="/kids">
     <li onClick={()=>{setMenu("kids")}}>Kids {menu === "kids"? <hr/> : <></> }</li>  
     </Link>
    </ul> 
    <Cart>
    <Link to="/login">
    <button>Login</button>
    </Link>
    <Link to="/cart">
    <MdOutlineShoppingCart/>
    </Link>
    <CartCounter>
        0
    </CartCounter>
    </Cart>
    </StyledNav>

  )
}

const StyledNav = styled.div`
 display: flex;
justify-content: space-around;
 padding: 16px;
 box-shadow: 0 1px 3px -2px black;
ul {
    display: flex;
    align-items: center;
    gap: 50px;
} 
li {
    
    list-style: none;
    color: #626262;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    cursor: pointer;
}
hr {
    border: none;
    width: 80%;
    height: 3px;
    border-radius: 10px;
    background: #ff4141;
}
`
const NavLogo = styled.div`
display: flex;
align-items: center;
gap: 10px;   
p {
   font-size: 38px;
   color: #171717;
   font-weight: 600;

} 
svg {
    font-size: 38px;
    color: orange;
}

`
const Cart = styled.div`
display: flex;
align-items: center; 
gap: 45px;
button {
    width: 157px;
    height: 58px;
    border-radius: 75px;
    outline: none;
    border: 1px solid #7a7a7a;
    color: #515151;
    font-size: 20px;
    background: white;
    cursor: pointer;
    &:active {
        background: #b91c1c;
    }
}
svg {
    font-size: 38px;
}
`
const CartCounter = styled.div`
    width: 22px;
    height: 22px;
    display: flex;
    justify-items: center;
    align-items: center;
    margin-top: -35px;
    margin-left: -55px;
    border-radius: 11px;
    font-size: 14px;
    background: red;
    color: white;
`

export default NavBar
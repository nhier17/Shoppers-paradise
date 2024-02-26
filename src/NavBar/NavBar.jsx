import React, { useContext } from 'react'
import styled from "styled-components"
import {AiFillShopping} from "react-icons/ai"
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link,useLocation } from 'react-router-dom';
import {motion} from "framer-motion"
import { ShopContext } from "../Context/ShopContext"



const NavBar = () =>{
  const { pathname } = useLocation();
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <StyledNav>
    <NavLogo>    
        <AiFillShopping/>
        <p>SHOPPERS PARADISE</p>
    </NavLogo>   
    <ul>
     
     <li>
     <Link to="/">
        Shop
        <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </Link>
        </li>  
        <li>
     <Link to="/men">
     Men
     <Line
         transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/men" ? "100%" : "0%" }}
          />     
     </Link>
     </li> 
     <li>
     <Link to="/women">Women</Link> 
     <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/women" ? "100%" : "0%" }}
          />

     </li>
     <li>
     <Link to="/kids">Kids</Link>
     <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/kids" ? "100%" : "0%" }}
          />
     </li> 
    </ul> 
    <Cart>
    <Link to="/login">
    <button>Login</button>
    </Link>
    <Link to="/cart">
    <MdOutlineShoppingCart/>
    </Link>
    <CartCounter>
        {getTotalCartItems()}
    </CartCounter>
    </Cart>
    </StyledNav>

  )
}

const StyledNav = styled.div`
 display: flex;
justify-content: space-between;
 padding: 16px;
 box-shadow: 0 1px 3px -2px black;
 a {
    text-decoration: none;
 }
ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    list-style: none;   
} 
li {
 position: relative;   
}
@media (max-width: 768px) {
  justify-content: center;
}



`
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 768px) {
    left: 0%;
  }
`;
const NavLogo = styled.div`
display: flex;
align-items: center;
gap: 10px;   
p {
   font-size: 20px;
   color: #171717;
   font-weight: 600;
   @media (max-width: 768px) {
    display: none;
   }

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
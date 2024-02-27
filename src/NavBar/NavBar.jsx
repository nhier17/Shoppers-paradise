import React, { useContext } from 'react'
import styled from "styled-components"
import {AiFillShopping} from "react-icons/ai"
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link,useLocation } from 'react-router-dom';
import {motion} from "framer-motion"
import { ShopContext } from "../Context/ShopContext"
import { FaUser } from 'react-icons/fa'



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
    <FaUser />
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
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  position: sticky;
  top: 0;
  z-index: 70;
  background: white;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.12);
 a {
    text-decoration: none;
 }
ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;   
} 
li {
  padding-left: 1rem;
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
gap: 20px;

svg {
    font-size: 30px;
    color: black;
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
    background: #FF9900;
    color: white;
`

export default NavBar
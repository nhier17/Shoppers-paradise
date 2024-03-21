import React, { useContext,useState } from 'react'
import styled from "styled-components"
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineShoppingCart,MdClose } from "react-icons/md";

import { Link,useLocation } from 'react-router-dom';
import {motion,AnimatePresence } from "framer-motion"
import { ShopContext } from "../Context/ShopContext"
import { FaUser } from 'react-icons/fa'
import Logout from "../Components/Logout"



const NavBar = () =>{
  const { pathname } = useLocation();
  const {getTotalCartItems} = useContext(ShopContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  //check if user is logged in
  const [isLoggedin, setIsLoggedin] = useState(true) 
 
  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  

  return (
    <StyledNav>
    <NavLogo>   
      {isMenuOpen ? ( 
        <MdClose onClick={toggleMenu} />
      ) : (
    <CiMenuBurger onClick={toggleMenu} />
    )}
        <p>SHOPPERS PARADISE</p>
    </NavLogo>   
    <AnimatePresence mode='wait'>
        {isMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
          >
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/men" onClick={toggleMenu}>
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" onClick={toggleMenu}>
                  Women
                </Link>
              </li>
              <li>
                <Link to="/kids" onClick={toggleMenu}>
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/smartphones" onClick={toggleMenu}>
                  SmartPhones
                </Link>
              </li>
              <li>
                <Link to="/gym" onClick={toggleMenu}>
                  Gym wear
                </Link>
              </li>
            </ul>
          </MobileMenu>
        )}
      </AnimatePresence>
    <ul>
     
     <li>
     <StyledLink to="/">
        Shop
        <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </StyledLink>
        </li>  
        <li>
     <StyledLink to="/men">
     Men
     <Line
         transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/men" ? "100%" : "0%" }}
          />     
     </StyledLink>
     </li> 
     <li>
     <StyledLink to="/women">Women</StyledLink> 
     <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/women" ? "100%" : "0%" }}
          />

     </li>
     <li>
     <StyledLink to="/kids">Kids</StyledLink>
     <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/kids" ? "100%" : "0%" }}
          />
     </li> 
    </ul> 
    <Cart>
      {isLoggedin ? (
        <>
    <Link to="/login">
    <FaUser />
    </Link>
    </>
      ) : (
    
    <Link to="/logout">
    <Logout setIsLoggedin={setIsLoggedin}/>
    </Link>
    
    )}
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
    margin: 0;
    padding: 0;
    
} 
li {
  padding-left: 1rem;
 position: relative;   
}
@media (max-width: 768px) {
  justify-content: space-between;
  ul {
    display: none;
    z-index: 68;
  }
}
`
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: white;
cursor: pointer;
z-index: -1;

  ul {
    display: flex;
    flex-direction: column;
     gap: 1rem;
    list-style: none;
    padding-top: 5rem;
     li {
      padding: 1rem;
    }

    a {
      text-decoration: none;
      color: black;
      font-size: 1.2rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    left: 0%;
    transform: translateX(0%);
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
   font-family: "Montserrat", "Helvetica";
   @media (max-width: 768px) {
    display: none;
   }

} 
svg {
    font-size: 38px;
    color: black;
    cursor: pointer;
    display: none;
    @media(max-width: 768px) {
      display: initial;
}
}

`
const Cart = styled.div`
display: flex;
align-items: center; 
gap: 20px;

svg {
    font-size: 30px;
    color: black;
    display: initial;
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
const StyledLink = styled(Link)`
 text-decoration: none;
color: black;
`



export default NavBar
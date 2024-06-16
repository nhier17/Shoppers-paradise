import React, { useContext,useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineShoppingCart,MdClose } from "react-icons/md";

import { Link,useLocation } from 'react-router-dom';
import {motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import { FaUser } from 'react-icons/fa';




const NavBar = () =>{
  const {getTotalCartItems} = useContext(ShopContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  //toggle menu
  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  

  return (
    <div className="w-full inset-x-0 top-0 z-50 sticky">
    <nav className="w-full bg-gray-800 flex items-center justify-between p-6">
    <div className="hidden md:flex flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
        <p className="text-white text-xl">SHOPPERS PARADISE</p>
        </Link>
      </div>   
      <div className="flex lg:hidden">
         <CiMenuBurger className="h-6 w-6 cursor-pointer" onClick={() => setIsMenuOpen(true)} />
      </div>
      <ul className="hidden lg:flex items-center justify-center lg:gap-x-4 mr-14">
        <NavLink to="/" text="Shop"/>
        <NavLink to="/men" text="Men"/>
        <NavLink to="/women" text="Women"/>
        <NavLink to="/kids" text="Kids" />
      </ul>
      <div className="flex items-center gap-8 cart-items">
      <Link to="/dashboard">
       <FaUser className="text-white text-2xl" />  
       </Link> 
     <Link to="/cart">
    <MdOutlineShoppingCart className="text-white text-2xl" />
    </Link>
    <div className="w-5 h-5 flex justify-center items-center mt-[-35px] ml-[-55px] rounded bg-[#FF9900] text-white">
        {getTotalCartItems()}
    </div>
    </div>
    </nav> 
    {isMenuOpen && (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between" onClick={closeMenu}>
            <MdClose className="h-6 w-6 cursor-pointer text-black" onClick={() => setIsMenuOpen(false)} />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6" onClick={closeMenu}>
              <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
              <Link to="/workouts" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Workouts</Link>
              <Link to="/community" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Community</Link>
              <Link to="/nutrition" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Nutrition</Link>
              <Link to="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </div>

  )
};

const NavLink = ({ to, text }) => {
  const { pathname } = useLocation();
  
  return (
    <li className="relative px-10">
      <Link to={to} className="text-white hover:text-gray-300">
        {text}
        <motion.div
          className="h-1 bg-[#0ef] w-0 absolute bottom-[-80%] left-1/2 transform -translate-x-1/2 transition-all duration-750"
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: pathname === to ? "50%" : "0%" }}
        ></motion.div>
      </Link>
    </li>
  );
};



export default NavBar
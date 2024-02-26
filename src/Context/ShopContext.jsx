import React, { createContext,useState,useEffect } from 'react';
import axios from 'axios';


export const ShopContext = createContext(null)
const ShopContextProvider = (props) => {
const [cartItem, setCartItem] = useState({});
    
// get all products
    const getProducts = async () => {
        const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products`);
        
        return response.data.products;
        
    }

    useEffect(() => {
        const defaultCart = async () => {
            try {
              const products = await getProducts();
              let cart = {};
              for (let i = 0; i < products.length; i++) {
                cart[i] = 0;
              }
              
              setCartItem(cart);
            } catch (error) {
              console.error('Error fetching default cart:', error);
            }
          };
          defaultCart();
    },[])
   

    
// add items to cart
    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
// remove items from cart
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
// get total of cart items
    const totalCartItems = async () => {
        let total = 0;
        const products = await getProducts()
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
               let itemInfo = products.find((p) => p.id === Number(item)) 
               total += itemInfo.new_price * cartItem[item]
            }
            
        }
        return total;
    }

    //complete add to cart functionality
    const getTotalCartItems = () => {
      let totalItems = 0
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItems += cartItem[item]
            }
    
    }
    return totalItems;
}

    const contextValue = { getProducts, cartItem, addToCart, removeFromCart,totalCartItems,getTotalCartItems };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;

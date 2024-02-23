import React, { createContext,useState,useEffect } from 'react';
import axios from 'axios';


export const ShopContext = createContext(null)
const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});

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
   

    

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const contextValue = { getProducts, cartItem, addToCart, removeFromCart };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;

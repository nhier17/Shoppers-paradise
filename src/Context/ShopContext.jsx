import React, { createContext,useState,useEffect, useCallback } from 'react';
import axios from 'axios';
import { toast } from "sonner";


export const ShopContext = createContext(null)
const ShopContextProvider = (props) => {
const [cartItem, setCartItem] = useState({});
const [totalPrice, setTotalPrice] = useState(0)
 
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
              for (const product of products) {
                cart[product._id] = 0;
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
        toast.success('Item added successfully')
    }
// remove items from cart
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        toast.success('Item removed successfully')
    }
// get total of cart items
    const totalCartItems = useCallback(async () => {
        let total = 0;
        const products = await getProducts()
        for (const itemId in cartItem) {
            if (cartItem[itemId] > 0) {
               let itemInfo = products.find((p) => p._id === String(itemId)) 
               total += itemInfo.new_price * cartItem[itemId]
            }
            
        }
        return total;
    }, [cartItem])

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
//calculate total price
useEffect(() => {
    const calculateTotalPrice = async () => {
      const total = await totalCartItems()
      setTotalPrice(total)
    }
    calculateTotalPrice()
  }, [totalCartItems]);


    const contextValue = { getProducts, cartItem, addToCart, removeFromCart,totalCartItems,getTotalCartItems,totalPrice, setCartItem };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;

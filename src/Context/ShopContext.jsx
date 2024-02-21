import React, { createContext } from 'react';
import axios from 'axios';


export const ShopContext = createContext(null)
const ShopContextProvider = (props) => {
    const getProducts =  async () => {
        const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products`)
        console.log(response.data)
        return response.data
    }
    const contextValue =  {getProducts};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
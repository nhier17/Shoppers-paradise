import React, {useContext} from 'react'
import {ShopContext} from "../Context/ShopContext"

const ShopCategory = ({image,category}) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div>
      <img src={image} alt="banner" />
    </div>
  )
}

export default ShopCategory
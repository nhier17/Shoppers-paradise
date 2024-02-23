import React, {useContext,useState, useEffect} from 'react'
import { ShopContext } from "../Context/ShopContext"
import {useParams} from "react-router-dom"
import ProductDetails from "../Components/ProductDetails"
import RelatedProducts from "../Components/RelatedProducts"



const Product = () => {
  const {getProducts} = useContext(ShopContext)
  const [product, setProduct] = useState({})
  
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      const selectedProduct = data.find((p) => p.id === Number(params.id));
      setProduct(selectedProduct)
      
    }
    fetchData()
  } ,[getProducts, params.id])

  return (
    <div>
      <ProductDetails product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
import React, {useContext,useState, useEffect} from 'react';
import { ShopContext } from "../Context/ShopContext";
import {useParams} from "react-router-dom";
import { ProductDetails, RelatedProducts } from "../Components";



const Product = () => {
  const {getProducts} = useContext(ShopContext)
  const [product, setProduct] = useState({})
  const [category, setCategory] = useState("")
  
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      const selectedProduct = data.find((p) => p._id === String(params.id));
      
      if (selectedProduct) {
        setProduct(selectedProduct)
        setCategory(selectedProduct.category)
      }
      
      
    }
    fetchData()
  } ,[getProducts, params.id])

  return (
    <div>
      <ProductDetails product={product}/>
      <RelatedProducts category={category} productId={params.id}/>
    </div>
  )
}

export default Product
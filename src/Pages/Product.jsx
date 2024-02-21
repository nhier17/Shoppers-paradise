import React, {useContext,useState, useEffect} from 'react'
import { ShopContext } from "../Context/ShopContext"
import {useParams} from "react-router-dom"



const Product = () => {
  const {getProducts} = useContext(ShopContext)
  const [products, setProducts] = useState([])
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts(params.id)
      const selectedProduct = products.find((p) => p.id === params.id);
      setProducts(selectedProduct)
    }
    fetchData()
  } ,[getProducts,params.id])

  return (
    <div>
    {products ? (
        <>
          <h2>{products.name}</h2>
          <p>{products.description}</p>
          {/* Add more details based on your product object */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Product
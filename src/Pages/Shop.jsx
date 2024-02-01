import React,{ useState, useEffect } from 'react'
import Hero from '../Hero/Hero'
import axios from "axios"

 const Shop = () => {
   // const [data, setData] = useState()
    //const getData = async () => {
     //   const response = await axios.get('http:/localhost:5000/api/v1/products')
       // const api = await response.json()
       // setData(api.data)
  //  }
   // useEffect(() =>{
    //    getData()
 //   }, [])
  return (
    <div>
        <Hero/>
        
    </div>
  )
}

export default Shop

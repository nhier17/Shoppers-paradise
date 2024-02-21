import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers'
import NewCollections from '../Components/NewCollections'
import NewsLetter from '../Components/NewsLetter'

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
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
        
    </div>
  )
}

export default Shop

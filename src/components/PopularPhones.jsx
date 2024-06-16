import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { Items } from ".";
import { toast } from "sonner";
import { Bars } from "react-loader-spinner";

const PopularPhones = () => {
    const [popular, setPopular] = useState([])
    const [loading, setLoading] = useState(true)
    let image_url = "https://shoppers-paradise17.onrender.com"
    
    const getPhones = async () => {
      try {
        const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products?&category=smartphones`)
        setPopular(response.data.products)
      
      } catch (error) {
        toast.error("Error fetching products")
      } finally {
        setLoading(false)
      }
       
    }
    useEffect(()=>{
        getPhones()
    }, [])

    return (
      <div className="container max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Popular Phones</h1>
      {loading ? (
          <div className="flex justify-center items-center h-64">
              <Bars height="80" width="80" color="#4fa94d" ariaLabel="bars-loading" visible={true} />
          </div>
      ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {popular.map((item) => (
                  <Items
                      key={item._id}
                      id={item._id}
                      name={item.name}
                      image={image_url + item.image}
                      new_price={item.new_price}
                      old_price={item.old_price}
                  />
              ))}
          </div>
      )}
  </div>
      )
    }

export default PopularPhones
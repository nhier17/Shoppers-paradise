import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Items } from '.'
import { toast } from "sonner"
import { Bars } from "react-loader-spinner"

const TopSellers = () => {
    const [top, setTop] =  useState([])
    const [loading, setLoading] = useState(true)
    let image_url = "https://shoppers-paradise17.onrender.com"
    
    const getDetails = async () => {
        try {
         const response = await axios.get(`https://shoppers-paradise17.onrender.com/api/products?&category=mixed`)
          setTop(response.data.products)  
        } catch (error) {
            toast.error("Error fetching data")
        } finally {
            setLoading(false)
        }
        
    }
    useEffect(() => {
    getDetails()
    }, [])
    

    return (
      <div className="container max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Trending this week</h1>
      {loading ? (
          <div className="flex justify-center items-center h-64">
              <Bars height="50" width="50" color="#4fa94d" ariaLabel="bars-loading" visible={true} />
          </div>
      ) : (
          <div className="md:grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {top.map((item) => (
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


export default TopSellers

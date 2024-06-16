import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { Link } from "react-router-dom";
import { categoriesData } from "../Util";



const splideOptions = {
  type: 'loop',
  autoplay: true,
  interval: 4000, 
  pauseOnHover: true,
  resetProgress: false,
  arrows: false,
  pagination: false,
  perPage: 3, 
  gap: '1rem', 
  breakpoints: {
    640: {
      perPage: 2, 
    },
  },
};
const Categories = (props) => {
    return (
   <div className="container mx-auto mt-10 px-4 py-8">
     <h2 className="text-2xl mb-4 font-bold">Categories</h2>
     <Splide options={splideOptions}>
      {categoriesData.map((item) => (
        <SplideSlide key={item.id}>
        <div key={item.id}
        className="flex flex-col items-center text-center rounded-md"
        >
          <Link to={item.link} className="list-none">
            <img
            className="w-[160px] h-[160px] object-cover rounded-md overflow-hidden"
             src={item.image} 
             alt={item.name} />
            <h3 className="p-1 bg-white">{item.name}</h3>
          </Link>
        </div>
        </SplideSlide>
      ))}
      </Splide>
    </div>
    )
}


export default Categories
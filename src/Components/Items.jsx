import React from 'react';
import { Link } from "react-router-dom";

const Items = ({ name, image, new_price, old_price, id }) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const truncatedName = truncate(name, 20);

  return (
    <div className="p-4 cursor-pointer transition duration-300 transform hover:scale-105">
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <img crossOrigin="anonymous" src={image} alt="product" className="block rounded-md w-full h-[300px] object-cover" />
      </Link>
      <div>
        <p className="max-w-xs">{truncatedName}</p>
      </div>
      <div className="flex gap-4">
        <div className="font-bold text-xl text-gray-800">Ksh {new_price}</div>
        <div className="text-gray-500 line-through">Ksh {old_price}</div>
      </div>
    </div>
  );
}

export default Items;

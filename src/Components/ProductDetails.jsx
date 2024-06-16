import React, { useContext } from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

const ProductDetails = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  let image_url = "https://shoppers-paradise17.onrender.com";
  
  return (
    <div className="container flex flex-col md:flex-row mt-8 p-8">
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
        <div className="md:flex hidden flex-col gap-4">
          <img className="h-40 w-full object-cover rounded-lg" crossOrigin="anonymous" src={`${image_url}${product.image}`} alt={product.name} />
          <img className="h-40 w-full object-cover rounded-lg" crossOrigin="anonymous" src={`${image_url}${product.image}`} alt={product.name} />
          <img className="h-40 w-full object-cover rounded-lg" crossOrigin="anonymous" src={`${image_url}${product.image}`} alt={product.name} />
          <img className="h-40 w-full object-cover rounded-lg" crossOrigin="anonymous" src={`${image_url}${product.image}`} alt={product.name} />
        </div>
        <div className="flex-1">
          <img className="w-full  object-cover rounded-lg" crossOrigin="anonymous" src={`${image_url}${product.image}`} alt={product.name} />
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:ml-8 flex flex-col items-start w-full md:w-1/2">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <div className="flex items-center mt-2 mb-4">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStarHalf className="text-yellow-500" />
          <p className="ml-2 text-gray-600">(122)</p>
        </div>
        <div className="flex items-center space-x-4 text-lg mb-4">
          <span className="line-through text-gray-500">KSh {product.old_price}</span>
          <span className="font-bold text-gray-800">KSh {product.new_price}</span>
        </div>
        <p className="text-gray-700 mb-4">
          {product.description}
        </p>
        <div className="mt-4 w-full">
          <h1 className="text-lg font-semibold">Select Size</h1>
          <div className="flex gap-4 mt-2">
            <div className="px-4 py-2 bg-gray-200 rounded cursor-pointer">S</div>
            <div className="px-4 py-2 bg-gray-200 rounded cursor-pointer">M</div>
            <div className="px-4 py-2 bg-gray-200 rounded cursor-pointer">L</div>
            <div className="px-4 py-2 bg-gray-200 rounded cursor-pointer">XL</div>
            <div className="px-4 py-2 bg-gray-200 rounded cursor-pointer">XXL</div>
          </div>
        </div>
        <div className="mt-2">
              <div className="text-base font-medium text-gray-900 mt-2">Pick a color</div>
         <div className="mt-4 flex items-center space-x-3">
                <label aria-label="White" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                  <input type="radio" name="color-choice" value="White" className="sr-only" />
                  <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"></span>
                </label>
                <label aria-label="Gray" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                  <input type="radio" name="color-choice" value="Gray" className="sr-only" />
                  <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"></span>
                </label>
                <label aria-label="Black" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none">
                  <input type="radio" name="color-choice" value="Black" className="sr-only" />
                  <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
                </label>
              </div>
            </div>
        <button onClick={() => { addToCart(product._id) }} className="mt-4 py-2 px-6 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;

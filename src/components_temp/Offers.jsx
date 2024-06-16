import React from 'react';
import exclusive_image from '../images/exclusive_image.png';

const Offers = () => {
  return (
    <div className="container px-4 py-8 mx-auto bg-gradient-to-b from-purple-100 to-green-100">
    <div className="w-full flex items-center justify-center">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-gray-900 text-2xl font-semibold">Exclusive</h1>
        <h2 className="text-gray-900 text-2xl font-semibold">Offers for you</h2>
        <p className="text-gray-800 text-xl font-semibold">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="px-2 py-4 w-48 rounded-xl bg-yellow-500 text-white text-lg font-semibold mt-5">Check Now</button>
      </div>
      <div className="flex-1 flex items-center justify-end pt-12">
        <img src={exclusive_image} alt="Exclusive Offer" className="max-w-full" />
      </div>
    </div>
    </div>
  );
};

export default Offers;

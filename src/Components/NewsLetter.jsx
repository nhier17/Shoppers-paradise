import React from 'react';

const NewsLetter = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-100 to-green-100">
    <div className="w-full h-full flex flex-col items-center justify-center  gap-2">
      <h1 className="text-gray-900 text-2xl font-semibold">Get Exclusive Offers on your Email</h1>
      <p className="text-gray-900 text-xl">Subscribe to our newsletter and stay updated</p>
      <form className="flex  items-center gap-5 w-full max-w-4xl h-14">
        <input
          type="email"
          placeholder="Enter your email"
          className="text-gray-700 bg-gradient-to-r from-gray-200 to-gray-500 border-none py-4 px-12 text-base rounded-md outline-none"
        />
        <button
          type="submit"
          className="w-36 h-12 bg-yellow-500 text-white text-base rounded-lg py-4 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
    </div>
  );
};

export default NewsLetter;

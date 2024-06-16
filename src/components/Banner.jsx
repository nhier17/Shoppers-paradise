import React, { useState, useEffect } from 'react';
import { slide1, slide2, slide3, slide4, slide7, slide6 } from "../images";
import { FaSearch } from 'react-icons/fa';
import { motion } from "framer-motion";

const Banner = () => {
  const slides = [slide1, slide2, slide3, slide4, slide7, slide6];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative flex flex-col justify-center items-center h-[60vh] md:h-[50vh] overflow-hidden z-30">
      <div className="relative z-10 text-center text-white p-4">
        <motion.h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          All the assets you need in one place!!
        </motion.h1>
        <p className="max-w-lg mx-auto text-sm md:text-base lg:text-lg mb-4">
          Shop for clothes, phones, accessories and more from independent sellers around the world.
        </p>
        <form className="relative w-full max-w-md mx-auto">
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search for products"
            className="w-full pl-12 pr-4 py-2 border-none rounded-md bg-white text-gray-800 shadow focus:outline-none"
          />
        </form>
      </div>
      {slides.map((slide, index) => (
        <motion.img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          animate={
            index === currentSlideIndex
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: '100%' }
          }
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
};

export default Banner;

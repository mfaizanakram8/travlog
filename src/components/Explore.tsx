"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

const originalProducts = [
  {
    id: 1,
    name: 'Ocean with full of Colors',
    description: 'United Arab Emeries ',
    discount: '4.7 ',
    image: '/img1.png',
    price: '$150.99'
  },
  {
    id: 2,
    name: 'Paradise Beach, Bantayan Island',
    description: 'Maldives',
    discount: '4.7 ',
    image: '/img.png',
    price: '$550.99'
  },
  {
    id: 3,
    name: 'Mountain View, Above the cloud',
    description: 'Rome, Italy',
    discount: '4.7 ',
    image: '/img2.png',
    price: '$249.9'
  },
  {
    id: 4,
    name: 'Paradise Beach, Bantayan Island ',
    description: 'Maldives',
    discount: '4.7 ',
    image: '/img2.png',
    price: '$150.99'
  },
];

const products = [...originalProducts, ...originalProducts, ...originalProducts];

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsMoving(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setIsMoving(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className='bg-log'>
      <div className="py-16 px-4 md:px-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          {/* Text and Buttons Section */}
          <div className="flex flex-col md:items-center lg:flex-row lg:justify-between lg:items-center mb-8">
            {/* Text */}
            <div className='text-center md:text-center lg:text-left mb-6 md:mb-8 lg:mb-0'>
              <h2 className="text-2xl font-bold text-[#F85E9F] mb-2">TOP DESTINATION</h2>
              <h1 className='text-3xl md:text-4xl font-bold'>Explore top destination</h1>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mb-6 md:mb-8 lg:mb-0">
              <button
                onClick={handlePrev}
                className="focus:outline-none"
                aria-label="Previous"
              >
                <div className='p-7 bg-transparent border border-[#1918251A] rounded-full'>
                  <Image src='/ar1.png' alt="Previous" width={30} height={30} />
                </div>
              </button>
              <button
                onClick={handleNext}
                className="focus:outline-none"
                aria-label="Next"
              >
                <div className='p-5 bg-purple-500 rounded-full'>
                  <Image src='/ar.png' alt="Next" width={40} height={40} />
                </div>
              </button>
            </div>
          </div>

          {/* Products Display */}
          {/* Mobile View - 3 Cards in Column */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-6">
              {originalProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className='mt-4'>
                    <p className="text-[#F85E9F] font-bold mb-2">{product.price}</p>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500 mt-2">{product.description}</p>
                    <p className="text-orange-600 font-bold mt-2">{product.discount} ★</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet View - Moving Cards */}
          <div className="hidden md:block lg:hidden overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${
                isMoving ? 'transform' : ''
              }`}
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
              onTransitionEnd={() => setIsMoving(false)}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="min-w-[33.33%] px-2"
                >
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className='mt-4'>
                      <p className="text-[#F85E9F] font-bold mb-2">{product.price}</p>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-500 mt-2">{product.description}</p>
                      <p className="text-orange-600 font-bold mt-2">{product.discount} ★</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop View - Original Layout */}
          <div className="hidden lg:block overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${
                isMoving ? 'transform' : ''
              }`}
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
              onTransitionEnd={() => setIsMoving(false)}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="min-w-[25%] px-2"
                >
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className='flex justify-between items-center mt-4'>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-[#F85E9F] font-bold">{product.price}</p>
                    </div>
                    <p className="text-gray-500 mt-2">{product.description}</p>
                    <p className="text-orange-600 font-bold mt-2">{product.discount} ★</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
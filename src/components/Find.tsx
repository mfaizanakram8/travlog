import React from "react";
import Image from "next/image";

const Find = () => {
  const stats = [
    { number: "500+", text: "Holiday Package" },
    { number: "100", text: "Luxury Hotels" },
    { number: "7", text: "Premium Airlines" },
    { number: "2k+", text: "Happy Customers" },
  ];

  return (
    <section className="bg-log py-12 px-4 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="w-full md:w-[80%] lg:w-[80%]">
          <Image 
            src="/side.png" 
            alt="About Image" 
            width={700} 
            height={700} 
            className="w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center md:text-center lg:text-left">
          <h4 className="text-[#F85E9F] text-xl md:text-2xl font-semibold">
            TRAVEL POINT
          </h4>
          <h1 className="text-3xl md:text-4xl font-semibold my-5">
            We helping you find your dream location
          </h1>
          
          <div className="flex flex-col items-center lg:items-start">
            <div className="max-w-[500px] mx-auto lg:mx-0">
              <p className="text-[#00000080] text-base md:text-lg">
                <span className="inline-block">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                </span>
                <br className="hidden md:block lg:block" />
                <span className="block text-center lg:inline relative">
                  classical Latin literature from 45 BC.
                  <Image 
                    src="/tag.png" 
                    alt="" 
                    width={80} 
                    height={80} 
                    className="hidden lg:inline-block lg:ml-2 lg:-mt-2"
                  />
                </span>
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-transparent shadow-lg border border-gray-300 rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300"
              >
                <h2 className="text-[#FF5722] text-3xl font-bold mb-3">
                  {stat.number}
                </h2>
                <p className="text-gray-700 font-medium">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Find;
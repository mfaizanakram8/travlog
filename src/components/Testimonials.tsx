'use client';
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    image: "/eps.png",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    rating: 5,
  },
  {
    image: "/r3.png",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    rating: 5,
  },
  {
    image: "/tag.png",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    rating: 5,
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="bg-log">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
        {/* Subheading */}
        <p className="text-sm uppercase tracking-widest text-[#F85E9F] font-semibold mb-2">
          Testimonials
        </p>
        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Trust Our Clients
        </h2>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Card Content */}
          <div className="relative bg-transparent p-8 w-full md:w-[700px] mx-auto text-center mt-11">
            {/* Avatar */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <Image
                src={testimonials[current].image}
                alt={"hello"}
                className="w-20 h-20 rounded-full"
                width={80}
                height={80}
              />
            </div>
            
            {/* Name */}
            <p className="font-bold text-gray-800 text-2xl mt-6">
              <span className="text-[#FF5722]">Mark Smith</span> / Travel Enthusiast
            </p>
            
            {/* Rating */}
            <div className="flex justify-center mt-2 space-x-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-4xl">★</span>
              ))}
            </div>
            
            {/* Text */}
            <p className="text-gray-600 text-lg mt-4 mb-8">
              {testimonials[current].text}
            </p>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mb-8">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-4 w-4 rounded-full transition-all duration-300 cursor-pointer ${
                    current === index 
                      ? 'bg-[#F85E9F]' 
                      : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>

            {/* Navigation Buttons - Mobile View */}
            <div className="flex flex-row justify-center gap-6 md:hidden">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="focus:outline-none"
              >
                <div className='p-8 bg-transparent border border-[#1918251A] rounded-full'>
                  <Image src='/ar1.png' alt="Previous" width={35} height={35} />
                </div>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="focus:outline-none"
              >
                <div className='p-6 bg-purple-500 rounded-full'>
                  <Image src='/ar.png' alt="Next" width={45} height={45} />
                </div>
              </button>
            </div>

            {/* Navigation Buttons - Tablet/Desktop View */}
            <div className="hidden md:block">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="absolute md:left-4 lg:left-[-100px] top-1/2 -translate-y-1/2 focus:outline-none"
              >
                <div className='p-8 bg-transparent border border-[#1918251A] rounded-full'>
                  <Image src='/ar1.png' alt="Previous" width={35} height={35} />
                </div>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="absolute md:right-4 lg:right-[-100px] top-1/2 -translate-y-1/2 focus:outline-none"
              >
                <div className='p-6 bg-purple-500 rounded-full'>
                  <Image src='/ar.png' alt="Next" width={45} height={45} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

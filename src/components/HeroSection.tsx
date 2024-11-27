import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-log">
      <div className="w-full min-h-[768px] px-4 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full">
          {/* Left Side - Logo, Heading, Text, and Button */}
          <div className="flex items-center w-full lg:w-1/2">
            <div className="w-full text-center lg:text-left lg:ml-16 mt-8 lg:mt-0">
              <Link 
                href={"#"} 
                className="bg-transparent inline-flex border border-transparent shadow-lg rounded-3xl text-[#F85E9F] px-4 py-3 text-sm font-bold mx-auto lg:mx-0"
              >
                Explore The World 
                <Image src="/logo09.png" alt="message" width={20} height={10} className="ml-4" />
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold my-4 text-center lg:text-left">
                <span className="inline-block">Travel <span className="text-[#F85E9F]">top destination</span></span>
                <br />
                <span className="block">of the world</span>
              </h1>
              
              <p className="text-sm md:text-lg mb-8 lg:mb-14 text-[#19182580] text-center lg:text-left">
                We always make our customer happy by providing
                <br />
                as many choices as possible 
              </p>
              
              <div className="flex flex-row justify-center lg:justify-start space-x-4">
                <Link href={"#"} className="bg-purple-800 text-white px-5 py-2 rounded-3xl">
                  Get Started
                </Link>
                <Link 
                  href={"#"} 
                  className="bg-transparent text-black border border-gray-300 px-4 py-2 rounded-3xl flex items-center"
                >
                  <Image src="/logo08.png" alt="" width={30} height={30} className="mr-2"/>
                  Watch Video 
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Main Image with Label */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-24">
            <Image 
              src='/gr.png' 
              alt="Main image" 
              width={500} 
              height={500}
              className="w-[80%] md:w-[70%] lg:w-full max-w-[712px]"
            />
          </div>
        </div>
     
      {/* Logos Section */}
      <div className="mt-20 flex flex-col items-center">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:flex lg:flex-wrap gap-8 lg:gap-24">
          {/* First Row - 3 logos */}
          <div className="flex justify-center">
            <Image
              src="/logo01.png"
              alt="Logo 1"
              width={128}
              height={128}
              className="w-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/logo02.png"
              alt="Logo 2"
              width={128}
              height={128}
              className="w-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/logo03.png"
              alt="Logo 3"
              width={128}
              height={128}
              className="w-auto"
            />
          </div>
          
          {/* Second Row - 2 logos centered */}
          <div className="col-span-3 flex justify-center md:col-span-3">
            <div className="flex gap-8 justify-center">
              <Image
                src="/logo04.png"
                alt="Logo 4"
                width={128}
                height={128}
                className="w-auto"
              />
              <Image
                src="/logo05.png"
                alt="Logo 5"
                width={128}
                height={128}
                className="w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
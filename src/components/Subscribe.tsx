import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Subscribe = () => {
  return (
    <section className='bg-log flex justify-center items-center'>
      <div className='flex flex-col text-center items-center justify-center pt-20 md:pt-36 bg-pink-100 w-[90%] md:w-[80%]'>
        <p className='text-lg md:text-xl text-[#F85E9F] my-5 md:my-7'>
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold px-4 md:px-0'>
          Prepare yourself & lets explore the
          <br className='hidden md:block' /> beauty of the world
        </h1>

        {/* Input and Button Container */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 pb-20 md:pb-52 mt-8 md:mt-10 px-4 md:px-0'>
          {/* Input Container */}
          <div className="relative w-full md:w-auto">
            <Image
              src="/mes.png" 
              alt="Message Icon" 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8" 
              width={24}
              height={24}
            />
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full md:w-[400px] lg:w-[500px] pl-14 pr-4 py-4 bg-white shadow-xl text-start rounded-3xl outline-[#F85E9F] placeholder:pl-2"
            />
          </div>

          {/* Subscribe Button */}
          <Link 
            href={"#"} 
            className='w-full md:w-auto py-4 px-9 bg-[#5D50C6] font-semibold text-white text-center rounded-3xl md:ml-6 lg:ml-44 hover:bg-[#4d41b3] transition-colors'
          >
            Subscribe
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Subscribe

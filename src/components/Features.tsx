import React from 'react'
import Image from 'next/image'

const Features = () => {
  const features = [
    {
      icon: "/l1.png",
      title: "We offer best services",
      description: "Lorem Ipsum is not simply random text"
    },
    {
      icon: "/l2.png",
      title: "Schedule your trip",
      description: "It has roots in a piece of classical"
    },
    {
      icon: "/l3.png",
      title: "Get discounted coupons",
      description: "Lorem Ipsum is not simply random text"
    }
  ];

  return (
    <section className='bg-log'>
      {/* Mobile View */}
      <div className='md:hidden px-4 py-12'>
        <div className='flex flex-col'>
          {/* Image First */}
          <div className='w-full mb-8'>
            <Image 
              src="/r1.png" 
              alt="Features" 
              width={600} 
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Content Section */}
          <div className='text-center mb-8'>
            <p className='text-[#F85E9F] font-semibold'>KEY FEATURES</p>
            <h1 className='text-3xl font-bold my-5'>
              We offer best services
            </h1>
            <p className='text-[#19182580] mb-8'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </div>

          {/* Cards Section */}
          <div className='flex flex-col items-start gap-8 px-4'>
            {features.map((feature, index) => (
              <div key={index} className='flex flex-row items-start gap-4'>
                <div>
                  <Image src={feature.icon} alt={feature.title} width={70} height={70}/>
                </div>
                <div className='text-left'>
                  <h3 className='font-bold'>{feature.title}</h3>
                  <p className='text-[#19182580]'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div className='hidden md:block lg:hidden px-8 py-12'>
        <div className='flex flex-col items-center'>
          {/* Image First */}
          <div className='w-[80%] mb-12'>
            <Image 
              src="/r1.png" 
              alt="Features" 
              width={800} 
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Content Section */}
          <div className='w-full'>
            <div className='text-center mb-12'>
              <p className='text-[#F85E9F] font-semibold'>KEY FEATURES</p>
              <h1 className='text-4xl font-bold my-5'>
                We offer best services
              </h1>
              <p className='text-[#19182580]'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
              </p>
            </div>

            <div className='mt-9 ml-12'>
              <div className='flex flex-row mt-5'>
                <div><Image src="/l1.png" alt="k" width={70} height={70}/></div>
                <div className='flex flex-col ml-4 mt-2 space-y-1'>
                  <h3 className='font-bold'>We offer best services</h3>
                  <p className='text-[#19182580]'>Lorem Ipsum is not simply random text</p>
                </div>
              </div>
              <div className='flex flex-row my-14'>
                <div><Image src="/l2.png" alt="k" width={70} height={70}/></div>
                <div className='flex flex-col ml-4 mt-2 space-y-1'>
                  <h3 className='font-bold'>Schedule your trip</h3>
                  <p className='text-[#19182580]'>It has roots in a piece of classical</p>
                </div>
              </div>
              <div className='flex flex-row mt-5'>
                <div><Image src="/l3.png" alt="k" width={70} height={70}/></div>
                <div className='flex flex-col ml-4 mt-2 space-y-1'>
                  <h3 className='font-bold'>Get discounted coupons</h3>
                  <p className='text-[#19182580]'>Lorem Ipsum is not simply random text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View - Original Layout */}
      <div className='hidden lg:flex justify-center items-center'>
        <div className='flex flex-row w-[84%] ml-32 space-x-[89px]'>
          <div className='flex flex-col'>
            <p className='text-[#F85E9F] font-semibold'>KEY FEATURES</p>
            <h1 className='text-4xl font-bold my-5'>
              We offer best services
            </h1>
            <p className='text-[#19182580]'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className='mt-9 ml-12'>
              <div className='flex flex-row mt-5'>
                <div><Image src="/l1.png" alt="k" width={70} height={70}/></div>
                <div className='flex flex-col ml-4 mt-2 space-y-1'>
                  <h3 className='font-bold'>We offer best services</h3>
                  <p className='text-[#19182580]'>Lorem Ipsum is not simply random text</p>
                </div>
              </div>
              <div className='flex flex-row my-14'>
                <div><Image src="/l2.png" alt="k" width={70} height={70}/></div>
                <div className='flex flex-col ml-4 mt-2 space-y-1'>
                  <h3 className='font-bold'>Schedule your trip</h3>
                  <p className='text-[#19182580]'>It has roots in a piece of classical</p>
                </div>
              </div>
              <div className='flex flex-row mt-5'>
                <div><Image src="/l3.png" alt="k" width={70} height={70}/></div>
                <div className='flex flex-col ml-4 mt-2 space-y-1'>
                  <h3 className='font-bold'>Get discounted coupons</h3>
                  <p className='text-[#19182580]'>Lorem Ipsum is not simply random text</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src="/r1.png" alt="" width={800} height={800}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

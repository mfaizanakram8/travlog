import Image from 'next/image';
import React from 'react';

const Services = () => {
  const cards = [
    {
      icon: "/dest.png",
      title: "Best Tour Guide",
      description: "What looked like a small patch of purple grass, above five feet."
    },
    {
      icon: "/dest1.png",
      title: "Easy Booking",
      description: "Square, was moving across the sand in their direction."
    }
  ];

  return (
    <section className="bg-log py-12 px-4 md:px-8 lg:px-12">
      {/* Text Section */}
      <div className="text-center mb-8 md:mb-12">
        <p className="text-[#F85E9F] text-xl md:text-2xl mb-4">Services</p>
        <h1 className="text-3xl md:text-4xl font-bold">
          Our top value <br className="hidden md:block" /> categories for you
        </h1>
      </div>

      {/* Cards Section */}
      <div className="mt-8">
        {/* Mobile View - 3 Cards in Column */}
        <div className="flex flex-col gap-6 md:hidden">
          {[...cards, cards[0]].map((card, index) => (
            <div 
              key={index}
              className="w-full h-[350px] flex flex-col text-center justify-center items-center bg-white shadow-2xl rounded-3xl"
            >
              <Image src={card.icon} alt="" width={50} height={50} />
              <h1 className="text-xl font-semibold my-7">{card.title}</h1>
              <p className="font-extralight text-[#19182580] px-4">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet View - Moving Cards */}
        <div className="hidden md:block lg:hidden overflow-hidden">
          <div className="flex animate-cards">
            {[...cards, ...cards, ...cards].map((card, index) => (
              <div 
                key={index}
                className="w-[300px] h-[350px] flex-none flex flex-col text-center justify-center items-center bg-white shadow-2xl rounded-3xl mx-4"
              >
                <Image src={card.icon} alt="" width={50} height={50} />
                <h1 className="text-xl font-semibold my-7">{card.title}</h1>
                <p className="font-extralight text-[#19182580]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - Original Moving Cards with Text on Left */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="flex flex-col w-1/3">
            <p className="text-[#F85E9F] text-2xl mb-4">Services</p>
            <h1 className="text-4xl font-bold">
              Our top value <br /> categories for you
            </h1>
          </div>

          <div className="w-1/2 flex overflow-hidden">
            <div className="flex animate-cards">
              {[...cards, ...cards].map((card, index) => (
                <div 
                  key={index}
                  className="w-[300px] h-[350px] flex flex-col text-center justify-center items-center bg-white shadow-2xl rounded-3xl mx-4"
                >
                  <Image src={card.icon} alt="" width={50} height={50} />
                  <h1 className="text-xl font-semibold my-7">{card.title}</h1>
                  <p className="font-extralight text-[#19182580]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

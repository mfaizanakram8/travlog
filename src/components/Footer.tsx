'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <section className='bg-log'>
      {/* Mobile View */}
      <div className='md:hidden px-4 py-12'>
        <div className='flex flex-col space-y-8'>
          {/* Logo Section */}
          <div className="flex flex-col items-center text-center">
            <Link href="#" className="flex items-center space-x-2">
              <Image src="/logo10.png" alt="Travlog logo" className="h-8 w-auto" width={30} height={30} />
              <span className="text-xl font-bold text-black">Travlog</span>
            </Link>
            <p className='text-[#19182580] mt-4 mb-8 px-4'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className='flex space-x-4'>
              <Image src="/f1.png" alt="3" width={30} height={30} />
              <Image src="/e1.png" alt="3" width={30} height={30} />
              <Image src="/r3.png" alt="3" width={30} height={30} />
            </div>
          </div>

          {/* Company Section */}
          <div className='border-b'>
            <button 
              onClick={() => toggleSection('company')}
              className='w-full flex justify-between items-center py-4'
            >
              <h1 className='text-xl font-semibold text-black'>Company</h1>
              <span className={`transform transition-transform ${openSection === 'company' ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openSection === 'company' ? 'max-h-48' : 'max-h-0'}`}>
              <div className='flex flex-col space-y-4 pb-4 text-[#19182580]'>
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Career</Link>
                <Link href={"#"}>Mobile</Link>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className='border-b'>
            <button 
              onClick={() => toggleSection('contact')}
              className='w-full flex justify-between items-center py-4'
            >
              <h1 className='text-xl font-semibold text-black'>Contact</h1>
              <span className={`transform transition-transform ${openSection === 'contact' ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openSection === 'contact' ? 'max-h-48' : 'max-h-0'}`}>
              <div className='flex flex-col space-y-4 pb-4 text-[#19182580]'>
                <Link href={"#"}>Why Travlog?</Link>
                <Link href={"#"}>Partner with us</Link>
                <Link href={"#"}>FAQs</Link>
                <Link href={"#"}>Blog</Link>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className='border-b'>
            <button 
              onClick={() => toggleSection('touch')}
              className='w-full flex justify-between items-center py-4'
            >
              <h1 className='text-xl font-semibold text-black'>Get in Touch</h1>
              <span className={`transform transition-transform ${openSection === 'touch' ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openSection === 'touch' ? 'max-h-48' : 'max-h-0'}`}>
              <div className='flex flex-col space-y-4 pb-4 text-[#19182580]'>
                <Link href={"#"}>+00 92 1234 56789</Link>
                <Link href={"#"}>info@travlog.com</Link>
                <Link href={"#"}>205. R Street, New York</Link>
                <Link href={"#"}>BD23200</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div className='hidden md:flex lg:hidden flex-col py-16 px-24'>
        {/* Logo and Description Section */}
        <div className='flex flex-col  text-start mb-12'>
          <Link href="#" className="flex text-start space-x-2">
            <Image src="/logo10.png" alt="Travlog logo" className="h-8 w-auto" width={30} height={30} />
            <span className="text-xl font-bold text-black">Travlog</span>
          </Link>
          <p className='text-[#19182580] mt-4 mb-8 max-w-[600px]'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className='flex space-x-4'>
            <Image src="/f1.png" alt="3" width={30} height={30} />
            <Image src="/e1.png" alt="3" width={30} height={30} />
            <Image src="/r3.png" alt="3" width={30} height={30} />
          </div>
        </div>

        {/* Links Sections in Row */}
        <div className='flex flex-row  space-x-28 justify-center'>
          {/* Company Section */}
          <div className='flex flex-col space-y-6 text-[#19182580]'>
            <h1 className='text-xl font-semibold text-black'>Company</h1>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Career</Link>
            <Link href={"#"}>Mobile</Link>
          </div>

          {/* Contact Section */}
          <div className='flex flex-col space-y-6 text-[#19182580]'>
            <h1 className='text-xl font-semibold text-black'>Contact</h1>
            <Link href={"#"}>Why Travlog?</Link>
            <Link href={"#"}>Partner with us</Link>
            <Link href={"#"}>FAQs</Link>
            <Link href={"#"}>Blog</Link>
          </div>

          {/* Get in Touch Section */}
          <div className='flex flex-col space-y-6 text-[#19182580]'>
            <h1 className='text-xl font-semibold text-black'>Get in Touch</h1>
            <Link href={"#"}>+00 92 1234 56789</Link>
            <Link href={"#"}>info@travlog.com</Link>
            <Link href={"#"}>205. R Street, New York</Link>
            <Link href={"#"}>BD23200</Link>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className='hidden lg:flex flex-row justify-center items-center py-28'>
        <div className='flex flex-col'>
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="#" className="flex items-center space-x-2">
                <Image src="/logo10.png" alt="Travlog logo" className="h-8 w-auto" width={30} height={30} />
                <span className="text-xl font-bold text-black">Travlog</span>
              </Link>
            </div>
          </div>
          <p className='text-[#19182580] mt-4 mb-8'>Contrary to popular belief, Lorem Ipsum is not simply <br /> random text. It has roots in a piece of classical Latin <br /> literature from 45 BC.</p>
          <div className='flex flex-row space-x-4'>
            <Image src="/f1.png" alt="3" width={30} height={30} />
            <Image src="/e1.png" alt="3" width={30} height={30} />
            <Image src="/r3.png" alt="3" width={30} height={30} />
          </div>
        </div>
        <div className='flex flex-col ml-32 space-y-6 text-[#19182580]'>
          <h1 className='text-xl font-semibold text-black'>Company</h1>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Career</Link>
          <Link href={"#"}>Mobile</Link>
        </div>
        <div className='flex flex-col ml-32 mt-10 text-[#19182580]'>
          <h1 className='text-xl font-semibold text-black'>Contact</h1>
          <Link href={"#"} className='mb-7 mt-3'>Why Travlog?</Link>
          <Link href={"#"}>Partner with us</Link>
          <Link href={"#"} className='my-7'>FAQs</Link>
          <Link href={"#"}>Blog</Link>
        </div>
        <div className='flex flex-col ml-32 mt-10 text-[#19182580]'>
          <h1 className='text-xl font-semibold text-black'>Get in Touch</h1>
          <Link href={"#"} className='mb-7 mt-3'>+00 92 1234 56789</Link>
          <Link href={"#"}>info@travlog.com</Link>
          <Link href={"#"} className='my-7'>205. R Street, New York</Link>
          <Link href={"#"}>BD23200</Link>
        </div>
      </div>
    </section>
  )
}

export default Footer

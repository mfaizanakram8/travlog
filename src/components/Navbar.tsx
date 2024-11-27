'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-log relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[90%]">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with Left Hamburger for Tablet */}
          <div className="flex items-center">
            {/* Tablet Hamburger - Left Side */}
            <div className="hidden md:block lg:hidden mr-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 p-2"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image 
                  src="/logo10.png" 
                  alt="Travlog logo" 
                  className="h-8 w-auto" 
                  width={30} 
                  height={30} 
                />
                <span className="text-xl font-bold text-black">Travlog</span>
              </Link>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-purple-500 hover:font-semibold">
              Home
            </Link>
            <Link href="/discover" className="text-gray-600 hover:text-purple-500 hover:font-semibold">
              Discover
            </Link>
            <Link href="/special-deals" className="text-gray-600 hover:text-purple-500 hover:font-semibold">
              Special Deals
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-purple-500 hover:font-semibold">
              Contact Us
            </Link>
          </div>

          <div className="flex items-center">
            {/* Buttons - Always visible on tablet and desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-purple-500">
                Log In
              </Link>
              <Link href="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-3xl hover:bg-purple-700">
                Sign Up
              </Link>
            </div>

            {/* Mobile Hamburger - Right Side */}
            <div className="md:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 p-2"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - Right Side */}
      <div className={`fixed top-0 ${isSidebarOpen ? 'right-0' : '-right-64'} md:hidden h-full w-64 bg-white transform transition-all duration-300 ease-in-out z-50`}>
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-purple-500 focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Sidebar Links */}
          <div className="flex flex-col space-y-4 mt-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-purple-500 hover:font-semibold py-2"
              onClick={() => setIsSidebarOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/discover" 
              className="text-gray-600 hover:text-purple-500 hover:font-semibold py-2"
              onClick={() => setIsSidebarOpen(false)}
            >
              Discover
            </Link>
            <Link 
              href="/special-deals" 
              className="text-gray-600 hover:text-purple-500 hover:font-semibold py-2"
              onClick={() => setIsSidebarOpen(false)}
            >
              Special Deals
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-purple-500 hover:font-semibold py-2"
              onClick={() => setIsSidebarOpen(false)}
            >
              Contact Us
            </Link>

            {/* Mobile-only Buttons */}
            <div className="md:hidden pt-4 space-y-4">
              <Link 
                href="/login" 
                className="block text-gray-600 hover:text-purple-500 py-2"
                onClick={() => setIsSidebarOpen(false)}
              >
                Log In
              </Link>
              <Link 
                href="/signup" 
                className="block bg-purple-600 text-white px-4 py-2 rounded-3xl hover:bg-purple-700 text-center"
                onClick={() => setIsSidebarOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Sidebar - Left Side */}
      <div className={`fixed top-0 ${isSidebarOpen ? 'left-0' : '-left-64'} hidden md:block lg:hidden h-full w-64 bg-white transform transition-all duration-300 ease-in-out z-50`}>
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-purple-500 focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Tablet Sidebar Links */}
          <div className="flex flex-col space-y-4 mt-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-purple-500 hover:font-semibold py-2"
              onClick={() => setIsSidebarOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/discover" 
              className="text-gray-600 hover:text-purple-500 hover:font-semibold py-2"
              onClick={() => setIsSidebarOpen(false)}
            >
              Discover
            </Link>
            <Link 
              href="/special-deals" 
              className="text-gray-600 hover:text-purple-500 hover:font-semibold py-2"
              onClick={() => setIsSidebarOpen(false)}
            >
              Special Deals
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-purple-500 hover:font-semibold py-2"
              onClick={() => setIsSidebarOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </nav>
  );
}

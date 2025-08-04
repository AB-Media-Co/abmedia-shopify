import React, { useState } from 'react'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            {/* Top Banner */}
            <div className='bg-[#262626] border-b border-gray-700'>
                <div className="hidden max-w-7xl text-white mx-auto justify-end items-center py-2 sm:py-3 px-4 sm:px-6 md:flex">
                    <span className="text-xs sm:text-sm text-gray-300 mr-4 sm:mr-6 font-normal">
                        Are You Ready To Grow Your Business ?
                    </span>
                    <button className="bg-white text-gray-900 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-sm">
                        Get In Touch
                    </button>
                </div>
            </div>

            {/* Main Header */}
            <header className="px-4 sm:px-6 py-3 sm:py-4 lg:py-5 bg-black shadow-lg">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                        <span className="text-white">ab</span>
                        <span className="text-white ml-1 sm:ml-2">media</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center text-sm xl:text-base">
                        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium px-2 xl:px-4 py-2">
                            Home
                        </a>
                        <span className="text-gray-500 mx-1 xl:mx-2">|</span>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium px-2 xl:px-4 py-2">
                            About us
                        </a>
                        <span className="text-gray-500 mx-1 xl:mx-2">|</span>
                        <div className="relative group px-2 xl:px-4">
                            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium py-2 flex items-center">
                                Marketing
                                <svg className="ml-1 xl:ml-2 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <span className="text-gray-500 mx-1 xl:mx-2">|</span>
                        <div className="relative group px-2 xl:px-4">
                            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium py-2 flex items-center">
                                Strategy
                                <svg className="ml-1 xl:ml-2 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <span className="text-gray-500 mx-1 xl:mx-2">|</span>
                        <div className="relative group px-2 xl:px-4">
                            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium py-2 flex items-center">
                                Development
                                <svg className="ml-1 xl:ml-2 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <span className="text-gray-500 mx-1 xl:mx-2">|</span>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium px-2 xl:px-4 py-2">
                            Blogs
                        </a>
                        <span className="text-gray-500 mx-1 xl:mx-2">|</span>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium px-2 xl:px-4 py-2">
                            Contact Us
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMobileMenu}
                        className="lg:hidden text-white hover:text-gray-300 transition-colors duration-200 p-2"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                    <nav className="pt-4 pb-2 space-y-2">
                        <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-3 px-2 border-b border-gray-700">
                            Home
                        </a>
                        <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-3 px-2 border-b border-gray-700">
                            About us
                        </a>
                        
                        {/* Mobile Dropdown - Marketing */}
                        <div className="border-b border-gray-700">
                            <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-3 px-2 flex items-center justify-between">
                                Marketing
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        
                        {/* Mobile Dropdown - Strategy */}
                        <div className="border-b border-gray-700">
                            <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-3 px-2 flex items-center justify-between">
                                Strategy
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        
                        {/* Mobile Dropdown - Development */}
                        <div className="border-b border-gray-700">
                            <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-3 px-2 flex items-center justify-between">
                                Development
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        
                        <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-3 px-2 border-b border-gray-700">
                            Blogs
                        </a>
                        <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-3 px-2 border-b border-gray-700">
                            Contact Us
                        </a>
                        
                        {/* Mobile CTA Button */}
                        <div className="pt-4 px-2">
                            <button className="w-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-sm">
                                Get In Touch
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header

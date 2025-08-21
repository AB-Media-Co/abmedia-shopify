import React, { useState } from 'react'
import PopupButton from './PopupButton';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Navigation items with href links and dropdown items
    const navItems = [
        { name: 'Home', href: 'https://abmediaco.com/' },
        { name: 'About us', href: 'https://abmediaco.com/who-we-are/' },
        {
            name: 'Marketing',
            href: '#marketing',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Performance Marketing', href: 'https://abmediaco.com/top-performance-marketing-agency-in-gurugram/' },
                { name: 'E-Commerce Marketing', href: 'https://abmediaco.com/e-commerce-marketing/' },
                { name: 'PPC Advertising/Paid Media', href: 'https://abmediaco.com/ppc-advertising-paid-media/' },
                { name: 'Search Engine Optimization', href: 'https://abmediaco.com/seo-services-delhi-india/' },
                { name: 'Social Media Marketing', href: 'https://abmediaco.com/social-media-marketing-agency-delhi/' },
                { name: 'Content Marketing', href: 'https://abmediaco.com/content-marketing-agency-delhi/' },
                { name: 'Data and Analytics', href: 'https://abmediaco.com/data-and-analytics/' }
            ]
        },
        {
            name: 'Strategy',
            href: '#strategy',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Account Based Marketing', href: 'https://abmediaco.com/account-based-marketing-agency-in-india/' },
                { name: 'Inbound Marketing', href: 'https://abmediaco.com/inbound-marketing-agency-in-india/' },
                { name: 'Experiential Marketing', href: 'https://abmediaco.com/experiential-marketing-agency-in-india/' },
                { name: 'Programmatic Advertising', href: 'https://abmediaco.com/programmatic-advertising-agency-in-india/' }
            ]
        },
        {
            name: 'Development',
            href: '#development',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Mobile App Development', href: 'https://abmediaco.com/mobile-app-development/' },
                { name: 'Shopify Development', href: 'https://abmediaco.com/top-shopify-development-partners-india/' },
                { name: 'E-Commerce Development', href: 'https://abmediaco.com/e-commerce-development/' }
            ]
        },
        { name: 'Blogs', href: 'https://abmediaco.com/blogs/' },
        { name: 'Contact Us', href: 'https://abmediaco.com/contact-us/' }
    ];

    return (
        <div>
            {/* Top Banner */}
            <div className='bg-[#262626] border-b border-gray-700'>
                <div className="hidden max-w-7xl  mx-auto justify-end items-center py-2 sm:py-3 px-4 sm:px-6 md:flex">
                    <span className="text-xs sm:text-sm text-gray-300 mr-4 sm:mr-6 font-normal">
                        Are You Ready To Grow Your Business ?
                    </span>
                    {/* <button className="bg-white cursor-pointer text-gray-900 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-sm">
                        Get In Touch
                    </button> */}
                    <PopupButton
                        text="Get In Touch"
                        className='bg-white cursor-pointer text-gray-900 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-sm' />

                </div>
            </div>

            {/* Main Header */}
            <header className="px-4 sm:px-6 py-3 sm:py-4 lg:py-5 bg-black shadow-lg">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo */}
                    <a href="#" className="text-xl cursor-pointer sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                        <span className="text-white">ab</span>
                        <span className="text-white ml-1 sm:ml-2">media</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center text-sm xl:text-base">
                        {navItems.map((item, index) => (
                            <React.Fragment key={item.name}>
                                {item.hasDropdown ? (
                                    <div className="relative group px-2 xl:px-4">
                                        <a href={item.href} className="text-white hover:text-gray-300 transition-colors duration-200 font-medium py-2 flex items-center">
                                            {item.name}
                                            <svg className="ml-1 xl:ml-2 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </a>

                                        {/* Dropdown Menu */}
                                        <div className="absolute left-0 top-full mt-1 w-60 bg-white  shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                                            <div className="py-1">
                                                {item.dropdownItems.map((dropdownItem, dropIndex) => (
                                                    <a
                                                        key={dropIndex}
                                                        href={dropdownItem.href}
                                                        className="block px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                                                    >
                                                        {dropdownItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <a href={item.href} className="text-white hover:text-gray-300 transition-colors duration-200 font-medium px-2 xl:px-4 py-2">
                                        {item.name}
                                    </a>
                                )}
                                {index < navItems.length - 1 && (
                                    <span className="text-gray-500 mx-1 xl:mx-2">|</span>
                                )}
                            </React.Fragment>
                        ))}
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
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <nav className="pt-4 pb-2 space-y-2">
                        {navItems.map((item) => (
                            <div key={item.name} className="border-b border-gray-700">
                                <a href={item.href} className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-3 px-2 flex items-center justify-between">
                                    {item.name}
                                    {item.hasDropdown && (
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </a>
                            </div>
                        ))}

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

import React, { useState } from 'react';
import { Mail, User, Phone, Building, Hash, Briefcase } from 'lucide-react';

export default function ForgeBrilliancePage() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        workEmail: '',
        companyName: '',
        numberOfSKUs: '',
        industry: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background effects - adjusted for mobile */}
            <div className="absolute inset-0 bg-gradient-radial from-green-900/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-[40rem] lg:transform-none w-48 h-48 lg:w-96 lg:h-96 bg-[#BAFF39]/20 lg:bg-[#BAFF3970]/50 rounded-full blur-3xl"></div>

            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Section */}
                <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                            LETS FORGE
                            <br />
                            <span>BRILLIANCE</span> HAND
                            <br />
                            IN HAND.
                        </h1>
                    </div>

                    {/* Illustration Section - hidden on small mobile, shown on larger screens */}
                    <div className="relative  sm:flex items-center justify-center lg:justify-start">
                        <div className="relative">
                            <img src="/contact.svg" alt="" className="max-w-full hidden md:block h-auto" />
                            <img src="/contact-mob.svg" alt="" className="max-w-full md:hidden mx-auto" />
                        </div>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="bg-white rounded-2xl w-full max-w-[430px] mx-auto p-6 sm:p-8 shadow-2xl relative">
                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl sm:text-2xl text-center font-bold text-gray-800 mb-2">Let's Discuss!</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                            />
                        </div>

                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Your Number"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                name="workEmail"
                                placeholder="Work Email"
                                value={formData.workEmail}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                            />
                        </div>

                        <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Company Name"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                            />
                        </div>

                        <div className="relative">
                            <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                name="numberOfSKUs"
                                placeholder="Number of SKUs"
                                value={formData.numberOfSKUs}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                            />
                        </div>

                        <div className="relative">
                            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                name="industry"
                                placeholder="Industry"
                                value={formData.industry}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105 text-sm sm:text-base"
                        >
                            View Recent Work
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
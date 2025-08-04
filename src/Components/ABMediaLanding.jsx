import React, { useState } from 'react';

const ABMediaLanding = () => {
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
        <div className="min-h-screen text-white"
        style={{
            backgroundImage: "url('/HeroSectionBg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}
        >
            {/* Main Content */}
            <main className="px-6 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center">

                    {/* Left Column - Content (3/5 width) */}
                    <div className="lg:col-span-3 space-y-8">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                            YOUR ADS ARE GETTING SMARTER. IS YOUR SHOPIFY STORE STILL A DUMB TEMPLATE?
                        </h1>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                            2025, Performance Comes From The Post-Click Experience. We Build Conversion-Optimized Shopify Stores That Double ROAS, Increase Retention, And Actually Scale.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#D5FF3F] text-black px-8 py-2 font-semibold hover:bg-lime-300 transition-colors">
                                Boost Conversions
                            </button>
                            <button className="border border-white text-white px-8 py-2 font-semibold hover:bg-white hover:text-black transition-colors">
                                Audit My Store
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Form (2/5 width) */}
                    <div className="lg:col-span-2 mt-10 relative">

                        {/* Illustration */}
                        <div className="absolute -top-22 right-8 flex items-center justify-center">
  <img src="/formanim.gif" alt="" className="scale-x-[-1]" />
                        </div>
                        {/* Form Card */}
                        <div className="bg-white text-black rounded-lg p-6 shadow-2xl relative z-10">
                            <h3 className="text-2xl font-bold text-center mb-6">
                                Let's Discuss!
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                                />

                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Your Number"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                                />

                                <input
                                    type="email"
                                    name="workEmail"
                                    placeholder="Work Email"
                                    value={formData.workEmail}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                                />

                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Company Name"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                                />

                                <input
                                    type="text"
                                    name="numberOfSKUs"
                                    placeholder="Number of SKU's"
                                    value={formData.numberOfSKUs}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                                />

                                <input
                                    type="text"
                                    name="industry"
                                    placeholder="Industry"
                                    value={formData.industry}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition-colors mt-6"
                                >
                                    View Recent Work
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ABMediaLanding;

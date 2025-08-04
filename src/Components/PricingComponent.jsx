import React from 'react';

const PricingComponent = () => {
    return (
        <div className="min-h-screen bg-black relative flex items-center justify-center p-4">
            {/* Green radial gradient background */}
            <div className="absolute inset-0 bg-gradient-radial from-green-900/20 via-transparent to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#BAFF3970]/50 rounded-full blur-3xl"></div>
            <div className="max-w-7xl w-full relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide">
                        PRICING & <span className="font-normal">ENGAGEMENT MODELS</span>
                    </h1>
                </div>

                {/* Pricing Card */}
                <div className="bg-[#272727] rounded-lg p-8 md:p-12 relative overflow-hidden">
                    {/* Background decorative element */}
                    <div className="absolute top-8 right-8  opacity-20">
                        <img src="/pricingi-c.svg" alt="" />
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10">
                        <h2 className="text-white text-xl md:text-2xl font-normal mb-6 tracking-wide">
                            CUSTOM SHOPIFY BUILDS STARTING AT
                        </h2>

                        <div className="mb-6">
                            <span className="text-gray-400 text-sm mb-2 block">Starts From</span>
                            <div className="text-white text-5xl md:text-6xl font-medium">
                                ₹99,999
                            </div>
                        </div>

                        <button className="bg-[#D5FF3F] text-black px-8 py-2  font-medium hover:bg-lime-300 transition-colors duration-200 mb-8">
                            Get started →
                        </button>

                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
                            We Tailor Every Project To Your Brand Goals, Tech Needs, And Growth Stage. Whether It's
                            Theme-Based, Headless, Or Fully Custom. No Fixed Packages, Just High-Performance
                            Execution With Transparent Pricing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingComponent;
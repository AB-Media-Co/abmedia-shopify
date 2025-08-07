import React from 'react';
import { Download, Phone } from 'lucide-react';

export default function ShopifyStrategyLanding() {
    return (
        <div className=" text-white" style={{ background: 'linear-gradient(0.65deg, #232323 0.56%, #414141 66.58%, #696969 99.44%)' }}>
            <div className="container max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            LET'S BUILD YOUR STORE
                            <br />
                            <span className="">FOR THE NEXT ₹10CR</span>
                        </h1>

                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Get A Strategy Call + Our Shopify
                            <br />
                            CRO Checklist (PDF)
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#D5FF3F] cursor-pointer  text-black font-semibold px-8 py-2 transition-colors duration-200 flex items-center justify-center gap-2">
                                Book My Shopify Strategy Call
                                <Phone size={20} />
                            </button>

                            <button className="cursor-pointer  text-white font-semibold px-8 py-2 border border-white  transition-colors duration-200 flex items-center justify-center gap-2">
                                Download the Audit PDF
                            </button>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex-1 max-w-lg">
                        <div className="relative">
                            <img src="/rafiki.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
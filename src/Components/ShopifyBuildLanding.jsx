import React from 'react';
import { Zap, ShoppingCart, Sun, Clock, Brain, LifeBuoy } from 'lucide-react';

const ShopifyBuildLanding = () => {
    const features = [
        {
            id: 1,
            position: 'top',
            title: 'Built For Scale',
            description: 'Shopify Plus, Hydrogen, Headless, Or Custom Theme',
            icon: '/Build-Shopify/hydrogen.svg'
        },
        {
            id: 2,
            position: 'top-right',
            title: 'Conversion Engineered',
            description: 'CRO, Heatmaps, Funnel Mapping',
            icon: '/Build-Shopify/conversion.svg'
        },
        {
            id: 3,
            position: 'right',
            title: 'Hydrogen + Oxygen Specialists',
            description: 'React-Based Shopify Builds Hosted On Shopify\'s Native Edge Platform',
            icon: '/Build-Shopify/hyd2.svg'
        },
        {
            id: 4,
            position: 'bottom-right',
            title: 'Full Lifecycle Support',
            description: 'Design, Development, Launch, And Growth Retainers',
            icon: '/Build-Shopify/lifeC.svg'
        },
        {
            id: 5,
            position: 'bottom-left',
            title: 'Integrated Stack',
            description: 'Razorpay, Shiprocket, Klaviyo, ReCharge, Gorgias, Etc.',
            icon: '/Build-Shopify/stack.svg'
        },
        {
            id: 6,
            position: 'left',
            title: 'Speed-Obsessed',
            description: 'Pages Under 2s, Fully Optimized For Core Web Vitals',
            icon: '/Build-Shopify/lifecycle.svg'
        }
    ];

    const getPositionClasses = (position) => {
        const baseClasses = 'absolute w-86 p-4 bg-[#272727] text-white rounded-lg';

        switch (position) {
            case 'top':
                return `${baseClasses} -top-[2rem] left-[-10rem] transform -translate-x-1/2`;
            case 'top-right':
                return `${baseClasses} -top-[2rem] -right-[21rem] transform `;
            case 'right':
                return `${baseClasses} top-1/2 -right-[25rem] transform -translate-y-1/2`;
            case 'bottom-right':
                return `${baseClasses} -bottom-[3rem] -right-[21rem] transform `;
            case 'bottom-left':
                return `${baseClasses} -bottom-[25px] -left-[22rem] transform `;
            case 'left':
                return `${baseClasses} top-1/2 -left-[24rem] transform -translate-y-1/2`;
            default:
                return baseClasses;
        }
    };
    return (
        <div className="min-h-[100vh] bg-black flex flex-col items-center justify-center p-8">

            <div className="text-center mb-8 sm:mb-16">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
                    Why Hire Us for Your Shopify Build.
                </h1>
                <p className="text-gray-400 text-sm sm:text-lg max-w-3xl mx-auto">
                    More Than Just Development. We Engineer Growth.
                </p>
            </div>


            <div className="relative hidden md:block">

                {/* Central Circle Container */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                    <div className="absolute inset-0 -m-[46px] flex items-center justify-center pointer-events-none">


                        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#9CA3AF" stopOpacity="1" />
                                    <stop offset="50%" stopColor="#9CA3AF" stopOpacity="1" />
                                    <stop offset="60%" stopColor="#9CA3AF" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <circle
                                cx="100"
                                cy="100"
                                r="96"
                                fill="none"
                                stroke="url(#fadeGradient)"
                                strokeWidth="2"
                                strokeDasharray="16 8"
                            />
                        </svg>
                    </div>


                    {/* Gradient circles */}
                    <div className="absolute inset-4 m-[-25px] rounded-full bg-gradient-to-br from-[#393939] to-[#F5F5F5]"></div>
                    <div className="absolute inset-8 m-[-15px] rounded-full bg-gradient-to-br from-[#363636] to-[#E9E9E9]"></div>
                    <div className="absolute inset-12 rounded-full bg-gradient-to-b from-[#060606] from-60% to-[#BEBEBE]"></div>

                    {/* Center content */}
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl font-bold text-white mb-2">ab media</h1>
                    </div>

                    {/* Top indicator dot */}
                    <div className="absolute -top-[53px] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full ">
                        <div className="absolute inset-0 m-auto w-5 h-5 rounded-full bg-[#C8F528] shadow-md"></div>
                    </div>

                </div>

                {/* Feature Cards */}
                {features.map((feature) => (
                    <div key={feature.id} className={getPositionClasses(feature.position)}>
                        <div className="flex relative items-start space-x-3">
                            <div className={`flex-1 ${feature.position.includes('right') ? 'ml-10 text-left' : 'mr-10 text-right'
                                } `}>
                                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                            </div>
                            <div
                                className={`absolute ${feature.position.includes('right') ? 'left-[-3rem]' : 'right-[-41px]'} w-16 h-16 rounded-full flex items-center justify-center text-lg`}
                                style={{ background: 'linear-gradient(180deg, #000000 0%, #7A7A7A 100%)' }}
                            >
                                <img src={feature?.icon} alt="" className="w-8 h-8" />
                            </div>

                        </div>
                    </div>
                ))}


                {/* Pricing */}
            </div>

            <div className='md:hidden relative space-y-6'>
                {features.map((feature) => (
                    <div key={feature.id} className=" p-4 bg-[#272727] text-white ">
                        <div className="flex relative items-start space-x-3">
                            <div className={`flex-1  ml-6`}>
                                <h3 className="font-semibold text-md mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                            </div>
                            <div
                                className={`absolute left-[-45px]  w-16 h-16 rounded-full flex items-center justify-center text-lg`}
                                style={{ background: 'linear-gradient(180deg, #000000 0%, #7A7A7A 100%)' }}
                            >
                                <img src={feature?.icon} alt="" className="w-8 h-8" />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-14 md:block hidden">
                <p className="text-gray-400 text-lg">
                    Starting At <span className="text-white font-bold text-xl">$999 + GST For Full Shopify Builds </span>.
                </p>
            </div>
        </div>
    );
};



export default ShopifyBuildLanding;

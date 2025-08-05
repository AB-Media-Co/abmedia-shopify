import React from 'react';

const IconsLooper = () => {
    // Array of icon names based on the images you showed
    const iconNames = [
        'Google-Ads-Certified',
        'hydrogen', 
        'meta',
        'razorpay',
        'shiprocket',
        'shopify',
        'shopify-plus'
    ];

    return (
        <div className="w-full bg-[#D5FF3F]  py-2 sm:py-3 md:py-4 lg:py-6 overflow-hidden">
            <div className="flex animate-scroll overflow-hidden mx-auto">
                {/* First set of icons */}
                <div className="flex items-center gap-6 px-4 sm:px-6 md:px-8">
                    {iconNames.map((iconName, index) => (
                        <div key={`first-${index}`} className="flex-shrink-0">
                            <img 
                                src={`/Icons/${iconName}.svg`} 
                                alt={iconName}
                                className="w-auto 
                                       h-6 
                                         md:h-8 
                                         lg:h-10 
                                         xl:h-12 
                                        max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-[140px]
                                         object-contain 
                                         transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-6 px-4 sm:px-6 md:px-8">
                    {iconNames.map((iconName, index) => (
                        <div key={`second-${index}`} className="flex-shrink-0">
                            <img 
                                src={`/Icons/${iconName}.svg`} 
                                alt={iconName}
                                className=" w-auto 
                                    h-6 
                                         md:h-8 
                                         lg:h-10 
                                         xl:h-12 
                                        max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-[140px]
                                         object-contain 
                                         transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* Third set for mobile to ensure smooth loop */}
                <div className="flex items-center gap-6 px-4 sm:px-6 md:px-8 sm:hidden">
                    {iconNames.map((iconName, index) => (
                        <div key={`third-${index}`} className="flex-shrink-0">
                            <img 
                                src={`/Icons/${iconName}.svg`} 
                                alt={iconName}
                                className="h-4 w-auto 
                                         max-w-[60px]
                                         object-contain 
                                         transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 25s linear infinite;
                    white-space: nowrap;
                }

                /* Mobile-first responsive animation speeds */
                @media (max-width: 374px) {
                    .animate-scroll {
                        animation: scroll 15s linear infinite;
                    }
                }

                @media (min-width: 375px) and (max-width: 639px) {
                    .animate-scroll {
                        animation: scroll 18s linear infinite;
                    }
                }

                @media (min-width: 640px) and (max-width: 767px) {
                    .animate-scroll {
                        animation: scroll 22s linear infinite;
                    }
                }

                @media (min-width: 768px) and (max-width: 1023px) {
                    .animate-scroll {
                        animation: scroll 25s linear infinite;
                    }
                }

                @media (min-width: 1024px) {
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                }

                /* Pause on hover for better UX */
               
                /* Ensure smooth performance on mobile */
                .animate-scroll {
                    will-change: transform;
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
            `}</style>
        </div>
    );
};

export default IconsLooper;
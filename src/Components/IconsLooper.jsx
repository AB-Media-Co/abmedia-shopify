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

    // Create multiple sets for seamless infinite loop
    const IconSet = ({ keyPrefix }) => (
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-3 sm:px-4 md:px-6">
            {iconNames.map((iconName, index) => (
                <div key={`${keyPrefix}-${index}`} className="flex-shrink-0">
                    <img 
                        src={`/Icons/${iconName}.svg`} 
                        alt={iconName}
                        className="w-auto 
                                 h-8 lg:h-10 xl:h-12
                                 min-w-[80px] xs:min-w-[60px] sm:min-w-[70px] md:min-w-[80px] lg:min-w-[100px] xl:min-w-[120px]
                                 max-w-[100px] xs:max-w-[70px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-[140px]
                                 object-contain 
                                 transition-transform duration-300
                                "
                        onError={(e) => {
                            // Fallback for missing icons
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
            ))}
        </div>
    );

    return (
        <div className="w-full bg-[#D5FF3F] py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 overflow-hidden relative">
            {/* Gradient fade effects on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-[#D5FF3F] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-[#D5FF3F] to-transparent z-10"></div>
            
            <div className="flex animate-scroll">
                {/* Multiple sets for seamless infinite loop */}
                <IconSet keyPrefix="set1" />
                <IconSet keyPrefix="set2" />
                <IconSet keyPrefix="set3" />
                <IconSet keyPrefix="set4" />
                <IconSet keyPrefix="set1" />
                <IconSet keyPrefix="set2" />
                <IconSet keyPrefix="set3" />
                <IconSet keyPrefix="set4" />
                <IconSet keyPrefix="set1" />
                <IconSet keyPrefix="set2" />
                <IconSet keyPrefix="set3" />
                <IconSet keyPrefix="set4" />
                <IconSet keyPrefix="set1" />
                <IconSet keyPrefix="set2" />
                <IconSet keyPrefix="set3" />
                <IconSet keyPrefix="set4" />
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
                    animation: scroll var(--scroll-duration, 30s) linear infinite;
                    white-space: nowrap;
                    will-change: transform;
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }

                /* Pause animation on hover for better UX */
                
                /* Responsive animation speeds */
                @media (max-width: 320px) {
                    .animate-scroll {
                        --scroll-duration: 15s;
                    }
                }

                @media (min-width: 321px) and (max-width: 480px) {
                    .animate-scroll {
                        --scroll-duration: 18s;
                    }
                }

                @media (min-width: 481px) and (max-width: 640px) {
                    .animate-scroll {
                        --scroll-duration: 22s;
                    }
                }

                @media (min-width: 641px) and (max-width: 768px) {
                    .animate-scroll {
                        --scroll-duration: 25s;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .animate-scroll {
                        --scroll-duration: 28s;
                    }
                }

                @media (min-width: 1025px) and (max-width: 1440px) {
                    .animate-scroll {
                        --scroll-duration: 32s;
                    }
                }

                @media (min-width: 1441px) {
                    .animate-scroll {
                        --scroll-duration: 35s;
                    }
                }

                /* Smooth performance optimizations */
                .animate-scroll {
                    transform: translateZ(0);
                    -webkit-transform: translateZ(0);
                }

                /* Extra small screens custom breakpoint */
            `}</style>
        </div>
    );
};

export default IconsLooper;
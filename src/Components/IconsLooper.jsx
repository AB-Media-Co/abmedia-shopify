import React from 'react';


function MarqueeRow({ items, reverse = false, speed = 30, gap = 20, itemWidth = 150 }) {
    const trackClass = reverse ? "animate-marquee-rtl" : "animate-marquee";

    return (
        <div className="relative overflow-hidden">
            <div
                className={`flex gap-10 w-max [--marquee-duration:${speed}s] ${trackClass}`}
                style={{ gap: `${gap}px` }}
            >
                {/* one set */}
                {items.map((src, i) => (
                    <div key={`a-${i}`} className="shrink-0" style={{ width: itemWidth }}>
                        <img
                            src={`/Icons/${src}.svg`}
                            alt="logo"
                            className="h-16 w-full object-contain "
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                ))}
                {/* duplicated set (must match exactly) */}
                {items.map((src, i) => (
                    <div key={`b-${i}`} className="shrink-0" style={{ width: itemWidth }}>
                        <img
                                src={`/Icons/${src}.svg`}
                            alt="logo duplicate"
                            className="h-16 w-full object-contain "
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                ))}
                {items.map((src, i) => (
                    <div key={`b-${i}`} className="shrink-0" style={{ width: itemWidth }}>
                        <img
                                src={`/Icons/${src}.svg`}
                            alt="logo duplicate"
                            className="h-16 w-full object-contain "
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

const IconsLooper = () => {
    // Array of icon names based on the images you showed
    const iconNames = [
        'Google-Ads-Certified-min',
        'hydrogen-min',
        'meta-min',
        'razorpay-min',
        'shiprocket-min',
        'shopify-min',
        'shopify-plus-min'
    ];



    return (
        <div className="w-full bg-[#D5FF3F] py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 overflow-hidden relative">
            <MarqueeRow items={iconNames} reverse={false} speed={30} gap={20} itemWidth={150} />
        </div>
    );
};

export default IconsLooper;
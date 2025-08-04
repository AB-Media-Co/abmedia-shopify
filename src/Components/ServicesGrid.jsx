import React from 'react';

const services = [
    {
        key: 'shopify',
        title: 'SHOPIFY BUILDS',
        subtitle: 'Shopify 2.0, Plus, Hydrogen + Oxygen',
        icon: '/Services/shopify.svg',
    },
    {
        key: 'integrations',
        title: 'INTEGRATIONS',
        subtitle: 'Razorpay, Shiprocket, Klaviyo, Yotpo',
        icon: '/Services/integrations.svg',
    },
    {
        key: 'subscription',
        title: 'SUBSCRIPTIONS',
        subtitle: 'Recharge, Bold Subscriptions',
        icon: '/Services/subscription.svg',
    },
    {
        key: 'whatsapp-email',
        title: 'WHATSAPP & EMAIL',
        subtitle: 'Interakt, Zoko, Maimodo, Klaviyo',
        icon: '/Services/whatsap-email.svg',
    },
    {
        key: 'cro',
        title: 'ANALYTICS & CRO',
        subtitle: 'GA4, Hotjar, Meta Pixel, A/B Testing',
        icon: '/Services/cro.svg',
    },
    {
        key: 'hosting',
        title: 'SUPPORT & HOSTING',
        subtitle: 'Shopify 2.0, Plus, Hydrogen + Oxygen',
        icon: '/Services/hosting.svg',
    },
];

const ServiceCard = ({ title, subtitle, icon }) => (
    <div className="relative bg-[#1f1f23] shadow-xl flex flex-col pt-8 pb-6 px-4 sm:px-6 min-h-[180px] sm:min-h-[200px]">
        {/* top overlapping circle with icon */}
        <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#27272d] rounded-full flex items-center justify-center shadow-md">
                <img 
                    src={icon} 
                    alt={`${title} icon`} 
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain" 
                />
            </div>
        </div>

        {/* content */}
        <div className="flex-1 flex flex-col items-center justify-center mt-6 sm:mt-8 mb-4">
            <h3 className="text-white text-lg sm:text-xl font-semibold tracking-wide text-center leading-tight">
                {title}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 text-center leading-relaxed px-2">
                {subtitle}
            </p>
        </div>

        {/* gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-8 sm:h-12 bg-gradient-to-t from-[#A8FF00]/30 to-transparent pointer-events-none" />
    </div>
);

const ServicesGrid = () => (
    <section className="py-12 sm:py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <h2 className="text-center text-white text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide sm:tracking-widest mb-8 sm:mb-12 px-4">
                <span className="opacity-60 block sm:inline"> FULL TECH STACK & </span>{' '}
                <span className="font-bold block sm:inline mt-1 sm:mt-0">SERVICES</span>
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                {services.map(s => (
                    <ServiceCard 
                        key={s.key} 
                        title={s.title} 
                        subtitle={s.subtitle} 
                        icon={s.icon} 
                    />
                ))}
            </div>

            {/* Call to Action Button */}
            <div className="mt-8 sm:mt-12 flex justify-center px-4">
                <button className="bg-[#D5FF3F] text-black font-semibold px-4 sm:px-6 py-3 text-sm sm:text-base tracking-wide shadow-md transition-all duration-200 hover:bg-[#c4ef2f] hover:shadow-lg w-full sm:w-auto max-w-sm sm:max-w-none text-center">
                    Transform Your Business Today &gt;
                </button>
            </div>
        </div>
    </section>
);

export default ServicesGrid;

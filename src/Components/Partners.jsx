import React from 'react';

const partners = [
  { id: 1, name: 'Shopify Partners',       logo: '/Icons/shopify.svg' },
  { id: 2, name: 'Razorpay',               logo: '/Icons/razorpay.svg' },
  { id: 3, name: 'Shiprocket',             logo: '/Icons/shiprocket.svg' },
  { id: 4, name: 'Google Ads Certified',   logo: '/Icons/Google-Ads-Certified.svg' },
  { id: 5, name: 'Meta Business Partner',  logo: '/Icons/meta.svg' },
  { id: 6, name: 'Shopify Plus Partner',   logo: '/Icons/shopify-plus.svg' },
];

export default function Partners() {
  return (
    <section className="bg-black py-16">
      <h2 className="text-center text-white text-4xl font-light">
        <span className="opacity-60">OUR</span>{' '}
        <span className="font-bold">PARTNERS</span>
      </h2>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-4xl mx-auto">
        {partners.map(({ id, name, logo }) => (
          <div
            key={id}
            className="bg-white p-6 flex items-center justify-center shadow-lg"
          >
            <img
              src={logo}
              alt={name}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

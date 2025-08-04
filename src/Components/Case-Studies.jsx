import React from 'react';

const caseStudies = [
  {
    id: 1,
    image: '/case-studies/1.png',
    title: 'SKINCARE D2C BRAND',
    desc:`Rebuilt store using Shopify 2.0 + Klaviyo + UGC integration CR ↑ 42% | AOV ↑ 21% | Bounce ↓ 36%`,
    button: 'View Case Study',
  },
  {
    id: 2,
    image: '/case-studies/2.png',
    title: 'ELECTRONICS RETAILER',
    desc: `Migrated from Magento to Hydrogen + Oxygen Load time ↓ from 6.3s to 1.9s | Revenue doubled in 90 days`,
    button: 'View Case Study',
  },
  {
    id: 3,
    image: '/case-studies/3.png',
    title: 'COFFEE SUBSCRIPTION BRAND',
    desc: `Shopify Plus + Recharge + WhatsApp Flows Subscription CR ↑ 56% | COD failure ↓ 31%`,
    button: 'View Case Study',
  },
  {
    id: 4,
    image: '/case-studies/4.png',
    title: 'INTERIOR DÉCOR B2B SITE',
    desc:`Built quote-based portal using Shopify + custom apps → 3x faster product inquiry handling, sales ↑ 2.1x in Q2`,
    button: 'View Case Study',
  },
];

const CaseStudies = () => (
  <section
    className="py-16 px-4"
    style={{
      backgroundImage: "url('/Case-studies.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-white text-4xl font-light tracking-widest mb-12">
        <span className="opacity-60">CASE</span>{' '}
        <span className="font-bold">STUDIES</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {caseStudies.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden shadow-xl group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
            {/* overlay gradient for readability */}

            <div className=" py-6 text-white flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{item.desc}</p>
              <div>
                <button className="inline-block border border-white px-5 py-2  text-sm font-medium transition-all hover:bg-white hover:text-black">
                  {item.button}
                </button>
              </div>
            </div>

            {/* subtle hover lift */}
            <div className="absolute inset-0 transition-transform duration-300 group-hover:-translate-y-1.5" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;

import React from 'react';

const caseStudies = [
  {
    id: 1,
    image: '/case-studies/kisa.jpg',
    title: 'Kisa Candles',
    desc: `Migrated to Shopify, built conversion-focused funnel → Result: 7X ROAS with Shopify + Meta + WhatsApp in < 90 days`,
    button: 'View Case Study',
  },
  {
    id: 2,
    image: '/case-studies/bythenature.jpg',
    title: 'By The Nature',
    desc: `Shopify theme + UGC integration + WhatsApp COD flows → Result: 42% CR improvement within 6 weeks of relaunch`,
    button: 'View Case Study',
  },
  {
    id: 3,
    image: '/case-studies/mahajan.jpg',
    title: 'Mahajan Electronics',
    desc: `Full redesign + Razorpay/Shiprocket integration + retargeting setup + ZipCode Validator → Result: ₹10 Lakh+ generated in a single month, Meta ROAS scaled 15X`,
    button: 'View Case Study',
  },
  {
    id: 4,
    image: '/case-studies/juhi-nanda.jpg',
    title: 'Juhi Nanda',
    desc: `Shopify + Interakt + bundled offers + checkout optimization → Result: 5.6X blended ROAS, COD failure reduced by 27%`,
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
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-white text-4xl font-light tracking-widest mb-12">
        <span className="opacity-60">CASE</span>{' '}
        <span className="font-bold">STUDIES</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 md:gap-y-8">
        {caseStudies.map((item, index) => (
          <div
            key={item.id}
            className={`relative rounded-lg overflow-hidden shadow-xl group transition-transform duration-300 hover:-translate-y-2 ${
              // Desktop mein alternating pattern - odd cards upar, even cards neeche
              index % 2 === 0 ? 'md:mt-0' : 'md:mt-28'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[480px] md:h-[520px] object-cover"
              loading="lazy"
            />

            <div className="py-6 text-white flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{item.desc}</p>
              <div>
                <button className="inline-block border border-white px-5 py-2 text-sm font-medium transition-all hover:bg-white hover:text-black">
                  {item.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;

import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

const cards = [
  { id: 1, icon: '/e-com/elect.svg', title: 'ELECTRONICS' },
  { id: 2, icon: '/e-com/fcmg.svg', title: 'FMCG' },
  { id: 3, icon: '/e-com/heatlh.svg', title: 'HEALTH & WELLNESS' },
  { id: 4, icon: '/e-com/home.svg', title: 'HOME & LIVING' },
  { id: 5, icon: '/e-com/subsciption.svg', title: 'Subscription & Loyalty Brands' },
  { id: 6, icon: '/e-com/fashion.svg', title: 'Fashion & Apparel' },
  { id: 7, icon: '/e-com/stores.svg', title: 'Specialty Stores' },
  { id: 8, icon: '/e-com/b2b.svg', title: 'B2B & D2C Commerce' }
];

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const EcommerceCarousel = () => {
  const width = useWindowWidth();
  const isMobile = width < 640; // Tailwind's sm breakpoint

  // Carousel logic only applies when not mobile
  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(cards.length / cardsPerSlide);
  const [slide, setSlide] = useState(0);
  const goNext = () => setSlide((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Determine visible cards
  const visibleCards = isMobile
    ? cards // show all on mobile
    : cards.slice(slide * cardsPerSlide, slide * cardsPerSlide + cardsPerSlide);

  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center p-3 sm:p-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/e-com.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-full max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
            BUILT FOR SCALE ACROSS EVERY{' '}
            <span className="font-bold">E-COMMERCE VERTICAL</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg max-w-3xl mx-auto">
            Our Shopify apps is built-finest across Fast-growing High-volume businesses.
          </p>
        </div>

        {/* Arrows (hidden on mobile) */}
        {!isMobile && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-lime-400 text-black p-2 sm:p-3 rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-110 shadow-lg z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={28} />
            </button>
          </>
        )}

        <div
          className={`
            w-full max-w-6xl flex mx-auto ${isMobile ? 'justify-center' : ''}
          `}
        >
          <div
            className={`
              grid
              ${isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-4 gap-6'}
              justify-items-center
              w-full
              px-2 sm:px-4
            `}
          >
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="relative w-full justify-evenly max-w-xs md:max-w-[275px] min-w-[160px] h-auto  gap-8 bg-[#1f1f1f] flex flex-col items-center pt-6 pb-8 px-4 cursor-pointer transition-transform duration-300 shadow-lg overflow-hidden"
              >
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t  from-[#A8FF00]/30 from-[-112%] to-transparent pointer-events-none" />
                <h3 className="text-white text-center leading-tight text-md md:text-2xl">
                  {card.title}
                </h3>
                <div className="mb-4">
                  <img src={card.icon} alt={card.title} className="h-[50px] md:h-24" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <button
            onClick={goNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-lime-400 text-black p-2 sm:p-3 rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Next Slide"
          >
            <ChevronRight size={28} />
          </button>
        )}

        {/* Dots Indicator (hidden on mobile) */}
        {!isMobile && (
          <div className="flex justify-center gap-3 mt-8 sm:mt-12">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`
                  h-1  transition-all duration-300
                  ${idx === slide
                    ? 'w-8 md:w-16 bg-lime-400 shadow-lg shadow-lime-400/50'
                    : 'w-2 md:w-10 bg-gray-600 hover:bg-gray-500'
                  }
                `}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EcommerceCarousel;

import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Star
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Lana Steiner',
    role: 'Deputy General Manager',
    company: 'Shopify Plus',
    rating: 5,
    text: `'"We've worked with 3 agencies before this — no one matched AB Moeller clarity on conversion design."'`,
    avatar: 'LS'
  },
  {
    id: 2,
    name: 'Ben Van Heurmann',
    role: 'Managing Director',
    company: 'Shopify Plus',
    rating: 5,
    text: '"Hardtimes + Shopify Plus setup from them helped us bring CR from 1.8% to 3.7%. Worth every rupee."',
    avatar: 'BH'
  },
  {
    id: 3,
    name: 'Philip Debbono',
    role: 'Senior Vice President',
    company: 'Shopify Plus',
    rating: 5,
    text: '"AB Media doesn\'t just build stores. They build sales machines."',
    avatar: 'PD'
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'E-commerce Pro',
    rating: 5,
    text: '"The team delivered beyond expectations. Our conversion rates improved by 250% within the first month."',
    avatar: 'SJ'
  },
  {
    id: 5,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'Tech Solutions',
    rating: 5,
    text: '"Professional, efficient, and results-driven. They transformed our online presence completely."',
    avatar: 'MC'
  },
  {
    id: 6,
    name: 'Emma Williams',
    role: 'Head of Operations',
    company: 'Digital Commerce',
    rating: 5,
    text: '"Outstanding work quality and attention to detail. Highly recommend their services."',
    avatar: 'EW'
  }
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

const TestimonialsCarousel = () => {
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  
  const cardsPerSlide = isMobile ? 1 : isTablet ? 2 : 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const [slide, setSlide] = useState(0);

  const goNext = () => setSlide((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${i < rating ? 'fill-blue-500 text-blue-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  const Avatar = ({ name, avatar }) => (
    <img 
      src={`https://picsum.photos/48/48?random=${avatar}`}
      alt={name}
      className="w-12 h-12 rounded-full object-cover"
    />
  );

  return (
    <div className="md:mt-80 mt-20 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
            TESTIMONIALS
          </h1>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          className="md:block absolute hidden left-2 sm:left-6 top-[16rem] -translate-y-1/2 bg-white text-black p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-lg z-10"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goNext}
          className="md:block absolute hidden right-2 sm:right-6 top-[16rem] -translate-y-1/2 bg-white text-black p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-lg z-10"
          aria-label="Next testimonials"
        >
          <ChevronRight size={24} />
        </button>

        {/* Testimonials Carousel Container */}
        <div className="flex justify-center px-4 sm:px-16">
          <div className="w-full max-w-6xl overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${slide * 100}%)`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className={`w-full flex-shrink-0 grid gap-6 ${
                    isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
                  }`}
                >
                  {testimonials
                    .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 min-h-[280px] flex flex-col"
                      >
                        <StarRating rating={testimonial.rating} />
                        
                        <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 flex-grow font-medium">
                          {testimonial.text}
                        </p>
                        
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                          <Avatar name={testimonial.name} avatar={testimonial.avatar} />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 text-xs">
                              {testimonial.role}
                            </p>
                            <p className="text-blue-600 text-xs font-medium">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`
                h-1 transition-all duration-300
                ${idx === slide
                  ? 'w-8 md:w-16 bg-white shadow-lg'
                  : 'w-2 md:w-10 bg-gray-600 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

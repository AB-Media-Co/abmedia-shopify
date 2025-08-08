import React, { useRef, useEffect, useState } from 'react';

const caseStudies = [
  {
    id: 1,
    video: '/case-studies/arahul.mp4',
    title: 'Arohul',
    desc: `Migrated to Shopify, built conversion-focused funnel → Result: 7X ROAS with Shopify + Meta + WhatsApp in < 90 days`,
  },
  {
    id: 2,
    video: '/case-studies/bythenature.mp4',
    title: 'By The Nature',
    desc: `Shopify theme + UGC integration + WhatsApp COD flows → Result: 42% CR improvement within 6 weeks of relaunch`,
  },
  {
    id: 3,
    video: '/case-studies/mahajan.mp4',
    title: 'Mahajan Electronics',
    desc: `Full redesign + Razorpay/Shiprocket integration + retargeting setup + ZipCode Validator → Result: ₹10 Lakh+ generated in a single month, Meta ROAS scaled 15X`,
  },
  {
    id: 4,
    video: '/case-studies/juhi-nanda.mp4',
    title: 'Juhi Nanda',
    desc: `Shopify + Interakt + bundled offers + checkout optimization → Result: 5.6X blended ROAS, COD failure reduced by 27%`,
  },
];

const LazyVideo = ({ src, onVideoLoad, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Play/pause based on viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: '200px' } // pre-play a bit early
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Attach listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoading(false);
      // default speed 1x
      video.playbackRate = 2;
      video.play().catch(() => {});
      onVideoLoad?.(video);
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      console.error('Video loading failed:', src);
    };

    // more reliable than 'canplay' for stalling
    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('error', handleError);
    // NOTE: don't call video.load() here; let browser manage buffering

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [src, onVideoLoad]);

  // React to visibility
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isInView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] bg-gray-900 rounded overflow-hidden"
    >
      {hasError ? (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center text-red-400">
            <div className="text-2xl mb-2">⚠️</div>
            <span className="text-sm">Video failed to load</span>
          </div>
        </div>
      ) : null}

      <video
        ref={videoRef}
        src={src}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        autoPlay
        muted
        loop
        playsInline
        // More buffering to avoid stalls
        preload="auto"
        // Optional: avoid AirPlay dialog on iOS
        disableRemotePlayback
        {...props}
      />
    </div>
  );
};

const CaseStudies = () => {
  const videoRefs = useRef([]);

  // make sure base speed is 1x when video registers
  const handleVideoLoad = (videoElement, index) => {
    if (videoElement) {
      videoElement.playbackRate = 1;
      videoRefs.current[index] = videoElement;
    }
  };

  // helper to safely set speed
  const setSpeed = (video, rate) => {
    if (!video) return;
    // clamp a bit for mobile Safari stability
    const target = Math.min(rate, 2);
    if (video.readyState >= 3) {
      video.playbackRate = target;
    }
  };

  // ensure only the hovered one speeds up
  const accelerateOnly = (idx) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      v.playbackRate = i === idx ? Math.min(1.75, 2) : 1;
    });
  };

  return (
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
              className={`relative group transition-transform duration-300 hover:-translate-y-2 ${
                index % 2 === 0 ? 'md:mt-0' : 'md:mt-28'
              }`}
            >
              {/* Laptop Container */}
              <div className="relative">
                {/* Laptop Frame */}
                <div className="relative bg-gray-800 rounded-t-lg p-3 shadow-2xl">
                  {/* Laptop Screen Bezel */}
                  <div className="bg-black rounded-lg p-2 relative overflow-hidden">
                    {/* Video Content with Hover Effects */}
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        const video = videoRefs.current[index];
                        setSpeed(video, 1.75); // ~1.75x on hover (stable)
                        accelerateOnly(index);
                      }}
                      onMouseLeave={() => {
                        const video = videoRefs.current[index];
                        setSpeed(video, 1); // back to normal
                      }}
                    >
                      <LazyVideo
                        src={item.video}
                        onVideoLoad={(video) => handleVideoLoad(video, index)}
                      />
                    </div>
                  </div>

                  {/* Laptop Bottom */}
                  <div className="h-2 bg-gray-700 rounded-b-lg relative">
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-b"></div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="relative">
                  <div className="w-full h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl shadow-lg"></div>
                  <div className="absolute inset-x-0 bottom-0 h-2 bg-gray-900 rounded-b-2xl transform scale-95"></div>
                </div>
              </div>

              {/* Content */}
              <div className="py-6 text-white flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

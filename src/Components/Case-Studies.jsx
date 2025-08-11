import { useRef, useEffect, useState } from 'react';

const caseStudies = [
  {
    id: 1,
    video: '/case-studies/arahul.mp4',
    poster: '/case-studies/arahul.png',
    title: 'Arohul',
    desc: `Migrated to Shopify, built conversion-focused funnel → Result: 7X ROAS with Shopify + Meta + WhatsApp in < 90 days`,
  },
  {
    id: 2,
    video: '/case-studies/bythenature.mp4',
    poster: '/case-studies/bythenature.png',
    title: 'By The Nature',
    desc: `Shopify theme + UGC integration + WhatsApp COD flows → Result: 42% CR improvement within 6 weeks of relaunch`,
  },
  {
    id: 3,
    video: '/case-studies/mahajan.mp4',
    poster: '/case-studies/mahajan.png',
    title: 'Mahajan Electronics',
    desc: `Full redesign + Razorpay/Shiprocket integration + retargeting setup + ZipCode Validator → Result: ₹10 Lakh+ generated in a single month, Meta ROAS scaled 15X`,
  },
  {
    id: 4,
    video: '/case-studies/juhi-nanda.mp4',
    poster: '/case-studies/juhi-nanda.png',
    title: 'Juhi Nanda',
    desc: `Shopify + Interakt + bundled offers + checkout optimization → Result: 5.6X blended ROAS, COD failure reduced by 27%`,
  },
];

function toPoster(videoSrc, ext = 'png') {
  if (!videoSrc) return '';
  const [path] = String(videoSrc).split('?');
  return path.replace(/\.[^/.]+$/, `.${ext}`);
}

const LazyVideo = ({ src, poster, onVideoLoad, alt = 'Case study preview', isMobile = false, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [posterSrc, setPosterSrc] = useState(() => poster || toPoster(src));
  const triedJpgRef = useRef(false);
  const videoRef = useRef(null);

  // reset when src/poster changes
  useEffect(() => {
    setPosterSrc(poster || toPoster(src));
    setIsLoading(true);
    setHasError(false);
  }, [src, poster]);





  // mark ready when video can actually play
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => {
      setIsLoading(false);
      video.playbackRate = 1;
      onVideoLoad && onVideoLoad(video);

      // Auto-play on mobile when video is ready
      if (isMobile) {
        video.muted = true;
        video.play().catch(() => { });
      }
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      console.error('Video loading failed:', src);
    };

    video.addEventListener('loadeddata', handleReady);
    video.addEventListener('canplaythrough', handleReady);
    video.addEventListener('playing', handleReady);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleReady);
      video.removeEventListener('canplaythrough', handleReady);
      video.removeEventListener('playing', handleReady);
      video.removeEventListener('error', handleError);
    };
  }, [src, onVideoLoad, isMobile]);





  return (
    <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] bg-gray-900 rounded overflow-hidden">
      {/* Poster until video ready */}
      <img
        src={posterSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${isMobile ? 'hidden' : ''} transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0'

          }`}
        loading="lazy"
        decoding="async"
        onError={() => {
          // try .jpg if .png missing
          if (!triedJpgRef.current) {
            triedJpgRef.current = true;
            setPosterSrc(poster ? poster.replace(/\.[^/.]+$/, '.jpg') : toPoster(src, 'jpg'));
          }
        }}
        aria-hidden={isLoading ? 'false' : 'true'}
      />

      {/* Actual video */}
      <video
        ref={videoRef}
        src={src}
        poster={posterSrc}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        // Auto-play only on mobile
        autoPlay={isMobile}
        muted
        loop
        playsInline
        preload="auto"
        disableRemotePlayback
        {...props}
      />

      {/* Optional tiny error badge */}
      {hasError && (
        <div className="absolute bottom-2 right-2 px-2 py-1 text-xs rounded bg-black/60 text-red-300">
          Video failed to load
        </div>
      )}
    </div>
  );
};

const CaseStudies = () => {
  const videoRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(window.innerWidth < 768 || isTouch);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const handleVideoLoad = (videoElement, index) => {
    if (videoElement) {
      videoElement.playbackRate = 1;
      videoRefs.current[index] = videoElement;
    }
  };

  const setSpeed = (video, rate) => {
    if (!video) return;
    const target = Math.min(Math.max(rate, 0.25), 2); // clamp
    // apply even if not fully ready; browser will respect once ready
    video.playbackRate = target;
  };

  // pause others, keep only one active
  const focusOne = (idx) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i !== idx) {
        v.pause();
        v.playbackRate = 1;
      }
    });
  };

  const playOn = (index) => {
    const v = videoRefs.current[index];
    if (!v) return;
    focusOne(index);
    v.muted = true; // instant play
    v.play().catch(() => { });
    setSpeed(v, 6); // a bit faster on hover
  };

  const pauseOff = (index) => {
    const v = videoRefs.current[index];
    if (!v) return;
    v.pause();
    setSpeed(v, 1);
  };

  return (
    <section
      className="py-8 sm:py-12 md:py-16 px-4"
      style={{
        backgroundImage: "url('/Case-studies.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-8 sm:mb-10 md:mb-12">
          <span className="opacity-60">CASE</span>{' '}
          <span className="font-bold">STUDIES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 md:gap-y-8">
          {caseStudies.map((item, index) => (
            <div
              key={item.id}
              className={`relative group transition-transform duration-300 hover:-translate-y-2 ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-28'
                }`}
            >
              {/* Laptop Container */}
              <div className="relative">
                {/* Laptop Frame */}
                <div className="relative bg-gray-800 rounded-t-lg p-2 sm:p-3 shadow-2xl">
                  {/* Laptop Screen Bezel */}
                  <div className="bg-black rounded-lg p-1 sm:p-2 relative overflow-hidden">
                    {/* Video Content */}
                    <div
                      className="relative"
                      // Desktop / pointer (ignore touch for these) - only apply on non-mobile
                      onPointerEnter={(e) => {
                        if (e.pointerType === 'touch' || isMobile) return;
                        playOn(index);
                      }}
                      onPointerLeave={(e) => {
                        if (e.pointerType === 'touch' || isMobile) return;
                        pauseOff(index);
                      }}
                      // Touch devices - only apply on non-mobile
                      onTouchStart={() => !isMobile && playOn(index)}
                      onTouchEnd={() => !isMobile && pauseOff(index)}
                      onTouchCancel={() => !isMobile && pauseOff(index)}
                    >
                      <LazyVideo
                        src={item.video}
                        poster={item.poster}
                        onVideoLoad={(video) => handleVideoLoad(video, index)}
                        isMobile={isMobile}
                      />
                    </div>
                  </div>

                  {/* Laptop Bottom */}
                  <div className="h-1.5 sm:h-2 bg-gray-700 rounded-b-lg relative">
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-gray-600 rounded-b"></div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="relative">
                  <div className="w-full h-3 sm:h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl shadow-lg"></div>
                  <div className="absolute inset-x-0 bottom-0 h-1.5 sm:h-2 bg-gray-900 rounded-b-2xl transform scale-95"></div>
                </div>
              </div>

              {/* Content */}
              <div className="py-4 sm:py-5 md:py-6 text-white flex flex-col gap-2 sm:gap-3">
                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

import { useEffect, useMemo, useState } from "react";
import imgSvg from "../assets/img2.png";

const TestimonialsCarousel = ({ testimonials = [] }) => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Determine visible cards by screen size: 3 on lg+, else 2
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setVisibleCount(mq.matches ? 3 : 2);
    update();
    mq.addEventListener
      ? mq.addEventListener("change", update)
      : mq.addListener(update);
    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", update)
        : mq.removeListener(update);
    };
  }, []);

  // Auto-advance every 10s with a smooth crossfade
  useEffect(() => {
    if (testimonials.length <= 1) return; // nothing to rotate
    let fadeTimeout;
    const intervalId = setInterval(() => {
      // Trigger a brief fade-out, switch, then fade-in
      setIsFading(true);
      fadeTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setIsFading(false);
      }, 300); // keep in sync with duration-300
    }, 10000);

    return () => {
      clearInterval(intervalId);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, [testimonials.length]);

  const itemsToShow = useMemo(() => {
    if (testimonials.length === 0) return [];
    const n = Math.min(visibleCount, testimonials.length);
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(testimonials[(index + i) % testimonials.length]);
    }
    return arr;
  }, [index, testimonials, visibleCount]);

  return (
    <section className="relative bg-background">
      {/* Illustration fills the whole section */}
      <img
        src={imgSvg}
        alt=""
        className="w-full h-auto select-none pointer-events-none"
      />

      {/* Carousel overlays the illustration, positioned up by mt */}
      <div className="absolute inset-x-0 top-0 -mt-10 flex justify-center z-10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div
            className={`flex justify-center gap-4 sm:gap-6 lg:gap-8 transition-opacity duration-300 ease-in-out ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            {itemsToShow.map((t, i) => (
              <div
                key={`${index}-${i}`}
                className="bg-white rounded-2xl border-t-4 border-primary shadow-lg p-4 sm:p-5 md:p-6 lg:p-8 flex-none w-[140px] sm:w-[200px] md:w-[260px] lg:w-[340px] xl:w-[380px] max-h-[230px] sm:max-h-[200px] md:max-h-[350px] lg:max-h-[400px] overflow-y-auto"
              >
                <p className="text-xs sm:text-sm lg:text-base text-black font-primary leading-tight sm:leading-relaxed">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

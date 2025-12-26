import { useState, useEffect, useMemo } from "react";
import commentsImg from "../assets/commentsImg.png";
import narekovaji from "../assets/narekovaji.svg";

const CommentsSection = ({ comments = [] }) => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Auto-advance every 10s with a smooth crossfade
  useEffect(() => {
    if (comments.length <= 1) return;
    let fadeTimeout;
    const intervalId = setInterval(() => {
      setIsFading(true);
      fadeTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % comments.length);
        setIsFading(false);
      }, 300);
    }, 10000);

    return () => {
      clearInterval(intervalId);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, [comments.length]);

  const currentComment = useMemo(() => {
    return comments.length > 0 ? comments[index] : null;
  }, [index, comments]);

  return (
    <section className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 min-h-[400px] md:min-h-[500px]">
          {/* Left Side - Comment Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div
              className={`transition-opacity duration-300 ease-in-out ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {currentComment && (
                <div>
                  <img
                    src={narekovaji}
                    alt="Quote"
                    className="h-16 md:h-20 mb-6"
                  />
                  <p className="lg:text-2xl md:text-xl sm:text-xl text-black leading-relaxed mb-8 font-serif italic">
                    {currentComment.text}
                  </p>
                  <p className="text-center md:text-left text-xl font-bold text-primary">
                    {currentComment.company}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <img
                src={commentsImg}
                alt="Customer testimonial"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;

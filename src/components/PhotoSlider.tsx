import React, { useState, useEffect, useRef } from "react";

interface PhotoSliderProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch swipe refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    timerRef.current = setInterval(next, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, interval, isHovered, images.length]);

  // Swipe Detection
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 40) next();       // swipe left
    if (distance < -40) prev();      // swipe right
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-xl bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full object-contain md:object-cover"
              style={{
                height: "auto",
                maxHeight: "400px", // desktop height
              }}
            />
          </div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full backdrop-blur-md hover:bg-black/70 transition"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full backdrop-blur-md hover:bg-black/70 transition"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              idx === currentIndex ? "bg-white scale-110" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;

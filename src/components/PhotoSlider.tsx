import React, { useState, useEffect, useRef } from "react";

interface PhotoSliderProps {
  images: string[];
  autoPlay?: boolean;   // auto-slide on/off
  interval?: number;    // time gap between slides (in ms)
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Go to next image
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Go to previous image
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide logic (with hover pause)
  useEffect(() => {
    if (!autoPlay || isHovered) return;

    timerRef.current = setInterval(() => {
      next();
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, interval, isHovered, images.length]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setIsHovered(true)}   // pause when hover
      onMouseLeave={() => setIsHovered(false)}  // resume when leave
    >
      {/* Slider Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="w-full flex-shrink-0 object-cover"
              style={{ height: "350px" }}
          />
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full opacity-70 hover:opacity-100 transition"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full opacity-70 hover:opacity-100 transition"
      >
        ▶
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
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

import React, { useState } from "react";

interface PhotoSliderProps {
  images: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider Images */}
      <div className="flex transition-transform duration-500"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="w-full flex-shrink-0 h-96 object-cover" // full width, fixed height
          />
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-700 text-white px-3 py-2 rounded opacity-70 hover:opacity-100"
      >
        Prev
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-700 text-white px-3 py-2 rounded opacity-70 hover:opacity-100"
      >
        Next
      </button>
    </div>
  );
};

export default PhotoSlider;

import React from "react";

// ✅ Import all your gallery images here
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import img1 from "@/assets/gallery1.jpg";
import img2 from "@/assets/gallery2.jpg";
import img3 from "@/assets/gallery3.jpg";
import img4 from "@/assets/gallery4.jpg";
// add as many as you want

const images = [g1, g2, g3, img1, img2, img3, img4]; // keep adding your images

const GalleryPage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-amber-800 text-center mb-12">
          Gallery
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;

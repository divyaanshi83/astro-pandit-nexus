import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import FestivalsSection from "@/components/FestivalsSection";
import Testimonials from "@/components/Testimonials";
import FloatingButtons from "@/components/FloatingButtons";
import ConsultationPopup from "@/components/ConsultationPopup";
import PhotoSlider from "@/components/PhotoSlider";
import AstrologyServices from "@/components/AstrologyServices";
import AboutPandit from "@/components/AboutPandit";
import FAQ from "@/components/FAQ";
import GuruSection from "@/components/GuruSection";
import StatsCounter from "@/components/StatsCounter";


// 🖼️ Import your own photos (placed inside src/assets)
import img1 from "@/assets/photo1.jpg";
import img2 from "@/assets/photo2.jpg";
import img3 from "@/assets/photo3.jpg";
import img4 from "@/assets/photo4.jpg";
import img5 from "@/assets/photo5.jpg";
import img6 from "@/assets/photo6.jpg";
import img7 from "@/assets/photo7.jpg";
import img8 from "@/assets/photo8.jpg";
import img9 from "@/assets/photo9.jpg";
import img10 from "@/assets/photo10.jpg";

// ✅ Local photo array (instead of random links)
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutPandit />
      <ServicesGrid />

      <GuruSection />
      <FestivalsSection />

      {/* 📸 Full-width Auto Photo Slider */}
      <div className="my-8">
        <PhotoSlider images={images} autoPlay={true} interval={4000} />
      </div>

      <AstrologyServices />
      <Testimonials />
      <StatsCounter />
      <FAQ />
      <FloatingButtons />
      <ConsultationPopup />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import FestivalsSection from "@/components/FestivalsSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ConsultationPopup from "@/components/ConsultationPopup";
import PhotoSlider from "@/components/PhotoSlider";
import AstrologyServices from "@/components/AstrologyServices";
import AboutPandit from "@/components/AboutPandit";// <-- import it

// 10 photos, full-width style
const images = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/1200/500?random=${i + 1}`);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutPandit />
      <ServicesGrid />
      {/* Full-width Photo Slider */}
      <div className="my-8">
        <PhotoSlider images={images} />
      </div>

      <FestivalsSection />
      <AstrologyServices />
      <Testimonials />
      <Footer />
      <FloatingButtons />
      <ConsultationPopup />
    </div>
  );
};

export default Index;

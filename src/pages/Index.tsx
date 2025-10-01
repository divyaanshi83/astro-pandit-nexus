import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import FestivalsSection from "@/components/FestivalsSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ConsultationPopup from "@/components/ConsultationPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <FestivalsSection />
      <Testimonials />
      <Footer />
      <FloatingButtons />
      <ConsultationPopup />
    </div>
  );
};

export default Index;

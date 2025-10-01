import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-astrology.jpg";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-accent fill-accent" />
            <span className="text-primary font-semibold text-lg">Expert Astrologer</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
            Pandit Ashu Bahuguna
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            35+ Years of Vedic Astrology Experience
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Guiding 50,000+ satisfied clients towards prosperity, peace, and spiritual growth through authentic Vedic wisdom and personalized consultations.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/horoscope">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold">
                Daily Horoscope
              </Button>
            </Link>
            <Link to="/kundli-milan">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Kundli Milan
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-foreground font-medium">35+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-foreground font-medium">50,000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-foreground font-medium">Authentic Vedic Guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

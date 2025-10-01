import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, ShoppingBag, Sparkles, BookOpen, Sun } from "lucide-react";

const services = [
  {
    title: "Daily Horoscope",
    description: "Get your daily predictions",
    icon: Sun,
    link: "/horoscope",
    color: "text-primary"
  },
  {
    title: "Kundli Milan",
    description: "Marriage compatibility check",
    icon: Heart,
    link: "/kundli-milan",
    color: "text-secondary"
  },
  {
    title: "Festivals",
    description: "Puja dates & significance",
    icon: Sparkles,
    link: "/festivals",
    color: "text-accent"
  },
  {
    title: "Panchang",
    description: "Daily Hindu calendar",
    icon: Calendar,
    link: "/panchang",
    color: "text-primary"
  },
  {
    title: "Yantras Store",
    description: "Authentic spiritual products",
    icon: ShoppingBag,
    link: "/store",
    color: "text-secondary"
  },
  {
    title: "About Me",
    description: "Know your astrologer",
    icon: BookOpen,
    link: "/about",
    color: "text-accent"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive astrology services and spiritual guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.title} to={service.link}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`${service.color} mb-4`}>
                    <service.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

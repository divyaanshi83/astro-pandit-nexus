import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import diwaliImage from "@/assets/diwali.jpg";
import dussehraImage from "@/assets/dussehra.jpg";
import navratriImage from "@/assets/navratri.jpg";
import holiImage from "@/assets/holi.jpg";

const festivals = [
  {
    name: "Diwali 2025",
    date: "October 20, 2025",
    image: diwaliImage,
    description: "Festival of Lights celebrating victory of light over darkness"
  },
  {
    name: "Dussehra 2025",
    date: "October 2, 2025",
    image: dussehraImage,
    description: "Victory of good over evil, Lord Rama's triumph over Ravana"
  },
  {
    name: "Navratri 2025",
    date: "September 28 - October 2, 2025",
    image: navratriImage,
    description: "Nine nights of Goddess Durga worship and celebration"
  },
  {
    name: "Holi 2026",
    date: "March 2026",
    image: holiImage,
    description: "Festival of colors celebrating the arrival of spring"
  }
];

const FestivalsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            Upcoming Festivals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover auspicious dates, rituals, and book puja services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {festivals.map((festival) => (
            <Card key={festival.name} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={festival.image} 
                  alt={festival.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {festival.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {festival.date}
                </p>
                <p className="text-muted-foreground text-sm">
                  {festival.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/festivals">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Festivals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FestivalsSection;

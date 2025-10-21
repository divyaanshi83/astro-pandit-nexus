import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Service {
  name: string;
  description: string;
  link: string; // link to detailed page
}

const services: Service[] = [
  { name: "Mangalik Dosh", description: "Know your Mangalik Dosh effects", link: "/services/mangalik-dosh" },
  { name: "Kaal Sarp Dosh", description: "Understand Kaal Sarp Dosh impact", link: "/services/kaal-sarp-dosh" },
  { name: "Love Marriage??", description: "Guidance for love marriage issues", link: "/services/love-marriage" },
  { name: "Career Path", description: "Discover your ideal career path", link: "/services/career-path" },
  { name: "Share Market", description: "Astrological insights for investments", link: "/services/share-market" },
  { name: "Child Happiness", description: "Predictions related to children", link: "/services/child-happiness" },
  { name: "Pitra Dosh", description: "Know about Pitra Dosh remedies", link: "/services/pitra-dosh" },
  { name: "Evil Eye", description: "Protection from evil eye", link: "/services/evil-eye" },
  { name: "Bussiness Problem", description: "Update your Bussiness in correct Pathway", link: "/services/bussiness-problem" },
  { name: "Service Problem", description: "Protection from service problem", link: "/services/service-problem" }, 
  { name: ".", description: "Update your Bussiness in correct Pathway", link: "/services/bussiness-problem" },
  { name: ".", description: "Protection from service problem", link: "/services/service-problem" },
];

const AstrologyServices = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            Astrology Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore various astrology services and get detailed guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service) => (
            <Card key={service.name} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Placeholder for image */}
              <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                Image coming soon
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>

              <div className="text-center mb-4">
                <Link to={service.link}>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AstrologyServices;

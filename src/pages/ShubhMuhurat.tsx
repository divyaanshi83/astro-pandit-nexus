import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const muhurats = [
  {
    name: "Annaprashan Muhurat 2025",
    path: "/muhurat/annaprashan",
    description: "Auspicious dates for baby's first rice ceremony",
    dates: "Multiple dates throughout 2025"
  },
  {
    name: "Naamkaran Muhurat 2025",
    path: "/muhurat/naamkaran",
    description: "Best timings for baby naming ceremony",
    dates: "Multiple dates throughout 2025"
  },
  {
    name: "Car/Bike Purchase Muhurat 2025",
    path: "/muhurat/vehicle",
    description: "Lucky dates for buying new vehicles",
    dates: "Multiple dates throughout 2025"
  },
  {
    name: "Marriage Muhurat 2025",
    path: "/muhurat/marriage",
    description: "Auspicious dates for weddings",
    dates: "Multiple dates throughout 2025"
  },
  {
    name: "Gold Buying Muhurat 2025",
    path: "/muhurat/gold",
    description: "Best dates for purchasing gold and jewelry",
    dates: "Multiple dates throughout 2025"
  },
  {
    name: "Bhoomi Pujan Muhurat 2025",
    path: "/muhurat/bhoomi-pujan",
    description: "Auspicious timings for land worship ceremony",
    dates: "Multiple dates throughout 2025"
  },
  {
    name: "Griha Pravesh Muhurat 2025",
    path: "/muhurat/griha-pravesh",
    description: "Best dates for house warming ceremony",
    dates: "Multiple dates throughout 2025"
  },
  {
    name: "Mundan Muhurat 2025",
    path: "/muhurat/mundan",
    description: "Auspicious dates for baby's first haircut",
    dates: "Multiple dates throughout 2025"
  }
];

const ShubhMuhurat = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Shubh Muhurat 2025
            </h1>
            <p className="text-muted-foreground text-lg">
              Find auspicious dates and timings for all important life events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {muhurats.map((muhurat) => (
              <Link key={muhurat.path} to={muhurat.path}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                      {muhurat.name}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {muhurat.description}
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      📅 {muhurat.dates}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4 text-center">
                Personalized Muhurat Consultation
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Get customized auspicious timings based on your specific birth details and requirements. 
                Our expert astrologers will analyze your horoscope and suggest the most favorable dates.
              </p>
              <div className="text-center">
                <p className="text-foreground font-semibold mb-4">
                  📞 Call: +91 9760924411
                </p>
                <p className="text-sm text-muted-foreground">
                  35+ years of expertise • 50,000+ satisfied clients
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ShubhMuhurat;

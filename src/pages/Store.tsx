import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const yantras = [
  { name: "Sri Yantra", description: "For wealth, prosperity and spiritual growth", price: "₹1,999" },
  { name: "Kuber Yantra", description: "For financial abundance and success", price: "₹999" },
  { name: "Lakshmi Yantra", description: "For goddess Lakshmi's blessings", price: "₹899" },
  { name: "Ganesh Yantra", description: "For removing obstacles", price: "₹799" },
  { name: "Hanuman Yantra", description: "For strength and protection", price: "₹799" },
  { name: "Durga Yantra", description: "For protection and victory", price: "₹999" },
  { name: "Mahamrityunjaya Yantra", description: "For health and longevity", price: "₹1,299" },
  { name: "Saraswati Yantra", description: "For knowledge and wisdom", price: "₹799" },
  { name: "Shiva Yantra", description: "For spiritual awakening", price: "₹1,199" },
  { name: "Navagraha Yantra", description: "For planetary harmony", price: "₹1,499" }
];

const Store = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Authentic Yantras Store
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Energized and consecrated yantras for spiritual and material well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yantras.map((yantra) => (
              <Card key={yantra.name} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-6xl">🕉️</div>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                    {yantra.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 min-h-[48px]">
                    {yantra.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {yantra.price}
                    </span>
                    <Button 
                      onClick={() => window.open(`https://wa.me/919760924411?text=I want to purchase ${yantra.name}`, '_blank')}
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">
                All Yantras are Energized by Pandit Ashu Bahuguna
              </h2>
              <p className="text-muted-foreground mb-6">
                Each yantra is personally consecrated and energized according to Vedic rituals 
                to ensure maximum spiritual effectiveness. We provide detailed instructions for 
                installation and daily worship.
              </p>
              <p className="text-foreground font-semibold">
                For bulk orders or custom requirements, please contact us directly
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Store;

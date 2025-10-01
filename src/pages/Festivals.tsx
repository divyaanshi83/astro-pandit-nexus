import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import diwaliImage from "@/assets/diwali.jpg";
import dussehraImage from "@/assets/dussehra.jpg";
import navratriImage from "@/assets/navratri.jpg";
import holiImage from "@/assets/holi.jpg";

const festivals = [
  {
    name: "Diwali 2025",
    date: "October 20, 2025",
    image: diwaliImage,
    significance: "Festival of Lights celebrating the return of Lord Rama to Ayodhya and the victory of light over darkness, prosperity, and inner illumination.",
    rituals: [
      "Lighting diyas and lamps throughout the home",
      "Lakshmi Puja for wealth and prosperity",
      "Decorating homes with rangoli",
      "Fireworks and celebrations",
      "Exchange of sweets and gifts"
    ]
  },
  {
    name: "Dussehra 2025",
    date: "October 2, 2025",
    image: dussehraImage,
    significance: "Marks the victory of good over evil - Lord Rama's victory over Ravana and Goddess Durga's triumph over Mahishasura.",
    rituals: [
      "Effigy burning of Ravana",
      "Reading and enacting Ramlila plays",
      "Worship of divine weapons",
      "Processions and celebrations",
      "Seeking blessings for new ventures"
    ]
  },
  {
    name: "Navratri/Durga Puja 2025",
    date: "September 28 - October 2, 2025",
    image: navratriImage,
    significance: "Nine nights dedicated to worshipping Goddess Durga in her nine forms, celebrating the victory of Shakti over demonic forces.",
    rituals: [
      "Day 1: Shailaputri puja and Ghatasthapana",
      "Day 2: Brahmacharini worship",
      "Day 3: Chandraghanta puja",
      "Day 4: Kushmanda worship",
      "Day 5: Skandamata puja",
      "Day 6: Katyayani worship",
      "Day 7: Kalaratri puja",
      "Day 8: Mahagauri worship",
      "Day 9: Siddhidatri puja and Havan"
    ]
  },
  {
    name: "Holi 2026",
    date: "March 2026",
    image: holiImage,
    significance: "Festival of colors celebrating the arrival of spring, the victory of good over evil, and the divine love of Radha and Krishna.",
    rituals: [
      "Holika Dahan (bonfire) on the eve",
      "Playing with colored powders",
      "Water celebrations",
      "Sharing sweets and festive foods",
      "Visiting friends and family"
    ]
  }
];

const Festivals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Hindu Festivals & Pujas
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete guide to festival dates, significance, and puja rituals
            </p>
          </div>

          <div className="space-y-8">
            {festivals.map((festival) => (
              <Card key={festival.name} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img 
                      src={festival.image} 
                      alt={festival.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:col-span-2 p-8">
                    <h2 className="text-3xl font-playfair font-bold text-foreground mb-2">
                      {festival.name}
                    </h2>
                    <p className="text-lg text-primary font-semibold mb-4">
                      📅 {festival.date}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Significance</h3>
                      <p className="text-muted-foreground">
                        {festival.significance}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Puja Rituals</h3>
                      <ul className="space-y-2">
                        {festival.rituals.map((ritual, index) => (
                          <li key={index} className="flex items-start text-muted-foreground">
                            <span className="text-primary mr-2">•</span>
                            <span>{ritual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm text-foreground font-medium">
                        📞 Book puja services with Pandit Ashu Bahuguna
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Call: +91 9760924411 or WhatsApp for booking
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Festivals;

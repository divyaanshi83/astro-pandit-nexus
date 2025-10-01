import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              About Pandit Ashu Bahuguna
            </h1>
            <p className="text-muted-foreground text-lg">
              Your trusted guide in Vedic astrology for over three decades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">35+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">50,000+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">Expert</div>
                <p className="text-muted-foreground">Vedic Scholar</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">5.0</div>
                <p className="text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">Biography</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pandit Ashu Bahuguna is a renowned Vedic astrologer with over 35 years of dedicated practice 
                  in the ancient science of Jyotish. Born into a family of learned scholars, he inherited 
                  the profound knowledge of Vedic astrology and has devoted his life to helping people find 
                  clarity, peace, and prosperity through authentic astrological guidance.
                </p>
                <p>
                  Throughout his illustrious career, Pandit Ashu Bahuguna has guided more than 50,000 satisfied 
                  clients across India and abroad. His expertise spans all aspects of Vedic astrology including 
                  horoscope reading, Kundli matching, gemstone recommendations, and performing various pujas 
                  and rituals according to ancient traditions.
                </p>
                <p>
                  Known for his accurate predictions and practical remedies, he combines traditional wisdom 
                  with a compassionate approach to help individuals navigate life's challenges. His deep 
                  understanding of planetary influences and their effects on human life has made him a 
                  trusted advisor for matters related to career, relationships, health, and spiritual growth.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">Areas of Expertise</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Comprehensive horoscope analysis and predictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Kundli matching for marriage compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Gemstone consultation and recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Vedic puja services and rituals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Career and business guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Relationship and family counseling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Health and wellness predictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Muhurat selection for auspicious occasions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;

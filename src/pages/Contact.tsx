import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
  const phoneNumber = "+919760924411";
  const email = "shriramjyotishsadan16@gmail.com";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Reach out for personalized astrology consultations and guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  Call Us
                </h3>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  {phoneNumber}
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Available 9 AM - 8 PM (IST)
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-[#25D366] mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  WhatsApp
                </h3>
                <a 
                  href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-muted-foreground hover:text-[#25D366] transition-colors"
                >
                  Chat with us
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Quick response guaranteed
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  Email
                </h3>
                <a 
                  href={`mailto:${email}`}
                  className="text-lg text-muted-foreground hover:text-secondary transition-colors break-all"
                >
                  {email}
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  Location
                </h3>
                <p className="text-lg text-muted-foreground">
                  Serving clients across India
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Online & in-person consultations
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">
                Book Your Consultation Today
              </h2>
              <p className="text-muted-foreground mb-6">
                Experience authentic Vedic astrology guidance from Pandit Ashu Bahuguna. 
                Whether you need horoscope analysis, Kundli matching, or puja services, 
                we're here to help you find clarity and peace.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={`tel:${phoneNumber}`}>
                  <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                    Call Now
                  </button>
                </a>
                <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20bd5a] transition-colors font-semibold">
                    WhatsApp Us
                  </button>
                </a>
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

export default Contact;

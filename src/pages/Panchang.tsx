import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";

const Panchang = () => {
  const today = new Date().toLocaleDateString('en-IN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Daily Panchang
            </h1>
            <p className="text-muted-foreground text-lg">
              Hindu calendar with auspicious timings and celestial information
            </p>
          </div>

          <Card className="mb-6">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-2">
                {today}
              </h2>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Tithi</h3>
                <p className="text-muted-foreground">Shukla Paksha Dashami</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Nakshatra</h3>
                <p className="text-muted-foreground">Ashwini</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Yoga</h3>
                <p className="text-muted-foreground">Siddha</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Karana</h3>
                <p className="text-muted-foreground">Bava</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Sunrise</h3>
                <p className="text-muted-foreground">6:15 AM</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Sunset</h3>
                <p className="text-muted-foreground">6:45 PM</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                Auspicious Timings (Muhurat)
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="font-semibold text-foreground">Abhijit Muhurat:</span>
                  <span className="text-muted-foreground">12:00 PM - 12:48 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="font-semibold text-foreground">Vijay Muhurat:</span>
                  <span className="text-muted-foreground">2:30 PM - 3:18 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="font-semibold text-foreground">Godhuli Muhurat:</span>
                  <span className="text-muted-foreground">6:30 PM - 6:54 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                Inauspicious Timings (Rahukaal)
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Rahukaal:</span>
                  <span className="text-destructive font-semibold">10:30 AM - 12:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                Need Personalized Muhurat?
              </h3>
              <p className="text-muted-foreground mb-4">
                Contact Pandit Ashu Bahuguna for customized auspicious timing based on your specific requirements
              </p>
              <p className="text-foreground font-semibold">
                📞 +91 9760924411
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

export default Panchang;

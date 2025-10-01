import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Eclipse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Solar & Lunar Eclipse 2025
            </h1>
            <p className="text-muted-foreground text-lg">
              Timings, phases, rituals, and remedies for your location
            </p>
          </div>

          <Tabs defaultValue="solar" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="solar">Solar Eclipse</TabsTrigger>
              <TabsTrigger value="lunar">Lunar Eclipse</TabsTrigger>
            </TabsList>
            
            <TabsContent value="solar">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">
                      Solar Eclipse - March 29, 2025
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Timings</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Eclipse Begins: 8:30 AM</li>
                          <li>• Maximum Eclipse: 10:15 AM</li>
                          <li>• Eclipse Ends: 12:00 PM</li>
                          <li>• Duration: 3 hours 30 minutes</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Visibility</h3>
                        <p className="text-muted-foreground mb-2">
                          Visible in Northern India, parts of Europe, and Arctic regions
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          *Timings may vary based on your location
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Phases of Solar Eclipse</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">1.</span>
                        <p className="text-muted-foreground">Partial Eclipse Begins - Moon starts covering the Sun</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">2.</span>
                        <p className="text-muted-foreground">Total Eclipse - Moon completely covers the Sun</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">3.</span>
                        <p className="text-muted-foreground">Maximum Eclipse - Peak of totality</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">4.</span>
                        <p className="text-muted-foreground">Partial Eclipse Ends - Sun becomes fully visible again</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Do's and Don'ts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Do's ✓</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Take bath after eclipse ends</li>
                          <li>• Chant mantras during eclipse</li>
                          <li>• Donate to the needy</li>
                          <li>• Keep tulsi leaves in food items</li>
                          <li>• Meditate and pray</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-destructive mb-3">Don'ts ✗</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Avoid eating during eclipse</li>
                          <li>• Don't look directly at the sun</li>
                          <li>• Avoid cooking food</li>
                          <li>• Don't start new work</li>
                          <li>• Pregnant women should stay indoors</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
                      Eclipse Remedies & Rituals
                    </h3>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Perform Surya Mantra Jaap (Sun deity worship)</li>
                      <li>• Donate wheat, jaggery, and copper items</li>
                      <li>• Take holy dip in sacred river after eclipse</li>
                      <li>• Offer water to Sun God after eclipse ends</li>
                    </ul>
                    <p className="text-center text-foreground font-semibold mt-6">
                      📞 Book Eclipse Remedy Puja: +91 9760924411
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="lunar">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">
                      Lunar Eclipse - September 7, 2025
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Timings</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Eclipse Begins: 10:45 PM</li>
                          <li>• Maximum Eclipse: 12:30 AM</li>
                          <li>• Eclipse Ends: 2:15 AM</li>
                          <li>• Duration: 3 hours 30 minutes</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Visibility</h3>
                        <p className="text-muted-foreground mb-2">
                          Visible across India, Asia, Australia, and Pacific regions
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          *Timings may vary based on your location
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Phases of Lunar Eclipse</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">1.</span>
                        <p className="text-muted-foreground">Penumbral Eclipse - Earth's shadow starts covering Moon</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">2.</span>
                        <p className="text-muted-foreground">Partial Eclipse - Moon enters Earth's umbra</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">3.</span>
                        <p className="text-muted-foreground">Total Eclipse - Moon completely covered (Blood Moon)</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">4.</span>
                        <p className="text-muted-foreground">Eclipse Ends - Moon becomes fully visible again</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Do's and Don'ts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Do's ✓</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Chant Chandra mantras</li>
                          <li>• Take bath after eclipse</li>
                          <li>• Donate white items (milk, rice)</li>
                          <li>• Perform charity</li>
                          <li>• Meditate during eclipse</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-destructive mb-3">Don'ts ✗</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Avoid eating during eclipse</li>
                          <li>• Don't sleep during eclipse</li>
                          <li>• Avoid drinking water</li>
                          <li>• Don't use sharp objects</li>
                          <li>• Pregnant women should be cautious</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
                      Eclipse Remedies & Rituals
                    </h3>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Perform Chandra Mantra Jaap (Moon deity worship)</li>
                      <li>• Donate white clothes, rice, and silver items</li>
                      <li>• Offer milk and water to Moon God</li>
                      <li>• Light camphor and perform aarti after eclipse</li>
                    </ul>
                    <p className="text-center text-foreground font-semibold mt-6">
                      📞 Book Eclipse Remedy Puja: +91 9760924411
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Eclipse;

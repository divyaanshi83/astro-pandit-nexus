import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const NameCorrection = () => {
  const [formData, setFormData] = useState({
    currentName: "",
    dateOfBirth: "",
    placeOfBirth: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.currentName || !formData.dateOfBirth) {
      toast.error("Please fill in all required fields");
      return;
    }
    // Placeholder - will integrate with AI/API later
    toast.success("Request submitted! We'll contact you shortly with name correction suggestions.");
  };

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "After name correction, my business grew 3x! Thank you Pandit ji!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      text: "Got my dream job after name correction. Highly recommend!",
      rating: 5
    },
    {
      name: "Amit Patel",
      text: "My luck completely changed. Best decision ever!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Name Correction Service
            </h1>
            <p className="text-muted-foreground text-lg">
              Align your name with numerology & astrology for success, prosperity, and good fortune
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">
                How Name Correction Works
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your name carries specific vibrations based on numerology and astrology. An incorrect or imbalanced name can create obstacles in life, career, relationships, and health.
                </p>
                <p>
                  Our expert astrologers analyze your current name with your birth details (date, time, place) and suggest corrected name options that align with your destiny number, ruling planet, and birth chart.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">✓ Benefits</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Improved career prospects</li>
                      <li>• Better relationships</li>
                      <li>• Enhanced luck & fortune</li>
                      <li>• Health improvements</li>
                      <li>• Business growth</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">✓ What You Get</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Detailed name analysis</li>
                      <li>• 3-5 corrected name options</li>
                      <li>• Numerology report</li>
                      <li>• Spelling variations</li>
                      <li>• Lucky letters & numbers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Request Name Correction
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="currentName">Current Name *</Label>
                  <Input
                    id="currentName"
                    value={formData.currentName}
                    onChange={(e) => setFormData({ ...formData, currentName: e.target.value })}
                    placeholder="Enter your current name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="placeOfBirth">Place of Birth</Label>
                  <Input
                    id="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                    placeholder="Enter your birth place"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Submit Request
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Our expert will contact you within 24 hours with personalized name suggestions
                </p>
              </form>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Pricing Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Basic Plan</h3>
                  <p className="text-3xl font-bold text-primary mb-4">₹999</p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>✓ Name analysis</li>
                    <li>✓ 3 corrected name options</li>
                    <li>✓ Basic numerology report</li>
                    <li>✓ Email support</li>
                  </ul>
                  <Button className="w-full" onClick={() => window.open("https://wa.me/919760924411?text=I want to book Basic Name Correction Plan", "_blank")}>
                    Choose Basic
                  </Button>
                </div>
                <div className="border-2 border-primary rounded-lg p-6 bg-primary/5">
                  <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-2">
                    RECOMMENDED
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Premium Plan</h3>
                  <p className="text-3xl font-bold text-primary mb-4">₹2,499</p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>✓ Detailed name analysis</li>
                    <li>✓ 5 corrected name options</li>
                    <li>✓ Complete numerology report</li>
                    <li>✓ Lucky letters & numbers</li>
                    <li>✓ Signature analysis</li>
                    <li>✓ Phone consultation</li>
                    <li>✓ 30-day support</li>
                  </ul>
                  <Button className="w-full" onClick={() => window.open("https://wa.me/919760924411?text=I want to book Premium Name Correction Plan", "_blank")}>
                    Choose Premium
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Happy Customers
              </h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="ml-3 font-semibold text-foreground">{testimonial.name}</span>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                Ready to Transform Your Life?
              </h3>
              <p className="text-muted-foreground mb-4">
                Contact us today for personalized name correction consultation
              </p>
              <p className="text-foreground font-semibold">
                📞 +91 9760924411 | 📧 shriramjyotishsadan16@gmail.com
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

export default NameCorrection;

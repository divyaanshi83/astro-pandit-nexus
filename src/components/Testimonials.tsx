import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Pandit Ashu Bahuguna's guidance helped me make the right career decision. His predictions are amazingly accurate!"
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The kundli matching service was excellent. We are happily married now. Thank you Pandit ji!"
  },
  {
    name: "Amit Verma",
    location: "Bangalore",
    rating: 5,
    text: "Very knowledgeable and helpful. The puja recommendations brought positive changes in my life."
  },
  {
    name: "Sunita Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Authentic astrologer with deep knowledge. His remedies are simple yet very effective."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by 50,000+ satisfied clients across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

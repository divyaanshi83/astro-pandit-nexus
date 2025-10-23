import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const ConsultationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 1 minute, then every 1 minute
    const timer = setInterval(() => {
      setIsOpen(true);
    }, 500000); // 5 minute

    return () => clearInterval(timer);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919760924411";
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919760924411?text=Hello, I would like to book a consultation", "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-center">Book Your Consultation</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Get personalized astrological guidance from Pandit Ashu Bahuguna
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-4">
          <Button onClick={handleCall} size="lg" className="w-full">
            <Phone className="mr-2 h-5 w-5" />
            Call Now: +91 9760924411
          </Button>
          <Button onClick={handleWhatsApp} variant="secondary" size="lg" className="w-full">
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Chat
          </Button>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          35+ years experience • 50,000+ satisfied clients
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationPopup;

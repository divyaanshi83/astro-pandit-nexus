import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const phoneNumber = "+919760924411";
  
  return (
    <>
      <Button
        variant="default"
        size="lg"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all animate-pulse bg-secondary hover:bg-secondary/90"
        onClick={() => window.location.href = `tel:${phoneNumber}`}
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </Button>
      
      <Button
        variant="default"
        size="lg"
        className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all bg-[#25D366] hover:bg-[#20bd5a]"
        onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}`, '_blank')}
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
};

export default FloatingButtons;

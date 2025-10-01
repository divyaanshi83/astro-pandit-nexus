import { Link } from "react-router-dom";
import { Facebook, Youtube, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-playfair font-bold text-primary mb-4">
              Pandit Ashu Bahuguna
            </h3>
            <p className="text-muted-foreground mb-4">
              Expert Vedic Astrologer with 35+ years of experience, serving 50,000+ satisfied clients.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/horoscope" className="text-muted-foreground hover:text-primary transition-colors">
                  Daily Horoscope
                </Link>
              </li>
              <li>
                <Link to="/kundli-milan" className="text-muted-foreground hover:text-primary transition-colors">
                  Kundli Milan
                </Link>
              </li>
              <li>
                <Link to="/festivals" className="text-muted-foreground hover:text-primary transition-colors">
                  Festivals
                </Link>
              </li>
              <li>
                <Link to="/panchang" className="text-muted-foreground hover:text-primary transition-colors">
                  Panchang
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/store" className="text-muted-foreground hover:text-primary transition-colors">
                  Yantras Store
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+919760924411" className="hover:text-primary transition-colors">
                  +91 9760924411
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:shriramjyotishsadan16@gmail.com" className="hover:text-primary transition-colors break-all">
                  shriramjyotishsadan16@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pandit Ashu Bahuguna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

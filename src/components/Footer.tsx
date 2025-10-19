import { Link } from "react-router-dom";
import { Shield, Lock, CheckCircle } from "lucide-react";

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
                href="https://facebook.com/PanditAshuBahuguna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@AstroAshuPandit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/astro_pandit_ashu_bahuguna/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://in.pinterest.com/panditashubahuguna/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.372 0 12c0 4.938 3.045 9.144 7.376 10.937-.102-.929-.195-2.355.04-3.369.213-.91 1.369-5.804 1.369-5.804s-.349-.698-.349-1.731c0-1.622.941-2.834 2.112-2.834 1 0 1.48.751 1.48 1.652 0 1.007-.642 2.511-.973 3.905-.277 1.176.587 2.136 1.741 2.136 2.09 0 3.698-2.205 3.698-5.382 0-2.811-2.021-4.782-4.905-4.782-3.341 0-5.307 2.507-5.307 5.097 0 1.009.388 2.095.873 2.685a.35.35 0 0 1 .08.336c-.088.372-.286 1.176-.325 1.339-.05.209-.163.255-.378.153-1.406-.654-2.282-2.705-2.282-4.353 0-3.55 2.583-6.814 7.452-6.814 3.914 0 6.952 2.79 6.952 6.514 0 3.888-2.448 7.015-5.841 7.015-1.14 0-2.212-.592-2.58-1.291l-.701 2.664c-.253.963-.936 2.168-1.396 2.906A11.998 11.998 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/panditashubahug" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195a4.516 4.516 0 0 0-7.691 4.117A12.826 12.826 0 0 1 1.671 3.149a4.505 4.505 0 0 0 1.398 6.031 4.48 4.48 0 0 1-2.045-.566v.056a4.523 4.523 0 0 0 3.622 4.429 4.51 4.51 0 0 1-2.04.078 4.523 4.523 0 0 0 4.218 3.132A9.06 9.06 0 0 1 0 19.54a12.784 12.784 0 0 0 6.92 2.03c8.303 0 12.844-6.877 12.844-12.844 0-.195-.004-.39-.013-.583a9.216 9.216 0 0 0 2.203-2.353z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-lg">
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
                <Link to="/calculators" className="text-muted-foreground hover:text-primary transition-colors">
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/panchang" className="text-muted-foreground hover:text-primary transition-colors">
                  Panchang
                </Link>
              </li>
              <li>
                <Link to="/eclipse" className="text-muted-foreground hover:text-primary transition-colors">
                  Eclipse
                </Link>
              </li>
              <li>
                <Link to="/festivals" className="text-muted-foreground hover:text-primary transition-colors">
                  Festivals
                </Link>
              </li>
              <li>
                <Link to="/shubh-muhurat" className="text-muted-foreground hover:text-primary transition-colors">
                  Shubh Muhurat
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-lg">
              <li>
                <Link to="/name-correction" className="text-muted-foreground hover:text-primary transition-colors">
                  Name Correction
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-muted-foreground hover:text-primary transition-colors">
                  Yantras & Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact & Trust</h4>
            <ul className="space-y-3 mb-4 text-lg">
              <li className="text-muted-foreground">📞 +91 9760924411</li>
              <li className="text-muted-foreground text-lg break-all">📧 shriramjyotishsadan16@gmail.com</li>
            </ul>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-lg">
                <Lock className="h-3 w-3 text-primary" />
                <span className="text-muted-foreground">Private & Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span className="text-muted-foreground">Verified Astrologer</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Shield className="h-3 w-3 text-primary" />
                <span className="text-muted-foreground">Secure Payments</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg font-semibold text-foreground">Download App</p>
              <div className="flex gap-2">
                <a href="#" className="inline-block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
                </a>
                <a href="#" className="inline-block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                </a>
              </div>
            </div>
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

import { NavLink } from "./NavLink";
import { Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Black Bar */}
      <div className="bg-[#2d2d2d] text-white">
        <div className="container mx-auto px-6 lg:px-12 py-2">
          <div className="flex justify-between items-center">
            {/* Social Icons - Left */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-teal"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-teal"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-teal"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>

            {/* Navigation Links - Right */}
            <div className="flex items-center space-x-6">
              <NavLink 
                to="/projects" 
                className="text-xs tracking-wide transition-colors hover:text-brand-teal"
              >
                Portfolio
              </NavLink>
              <NavLink 
                to="/pricing" 
                className="text-xs tracking-wide transition-colors hover:text-brand-teal"
              >
                Pricing & Guide
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Main White Navigation */}
      <nav className="bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="text-2xl font-serif tracking-tight">
              Novalé
            </NavLink>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/about" 
                className="text-sm tracking-wide transition-colors hover:text-brand-teal"
                activeClassName="text-primary"
              >
                About Us
              </NavLink>
              <NavLink 
                to="/services" 
                className="text-sm tracking-wide transition-colors hover:text-brand-teal"
                activeClassName="text-primary"
              >
                Services
              </NavLink>
              <NavLink 
                to="/services#process" 
                className="text-sm tracking-wide transition-colors hover:text-brand-teal"
              >
                Our Process
              </NavLink>
              <NavLink 
                to="/contact" 
                className="text-sm tracking-wide px-6 py-2 bg-brand-teal text-white hover:bg-brand-teal-dark transition-colors"
              >
                Get a Quote
              </NavLink>
              <a 
                href="tel:+61299999999" 
                className="text-sm tracking-wide px-6 py-2 border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

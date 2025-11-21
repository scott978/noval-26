import { NavLink } from "./NavLink";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif mb-6 text-white">Novalé</h3>
            <p className="text-white mb-6 leading-relaxed">
              Sydney's leading bathroom, kitchen & laundry renovation specialists. For over 22 years, we've been delivering dream spaces on time, within budget, and to specification.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">Sydney, NSW</p>
                  <p className="text-sm text-white/70">Servicing Greater Sydney</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-teal flex-shrink-0" />
                <a href="tel:1300668253" className="text-white hover:text-brand-teal transition-colors">
                  1300 NOVALE (1300 668 253)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-teal flex-shrink-0" />
                <a href="mailto:info@novale.com.au" className="text-white hover:text-brand-teal transition-colors">
                  info@novale.com.au
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">Mon - Fri: 8:00am - 5:00pm</p>
                  <p className="text-sm text-white/70">Appointments by Request</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wider text-white uppercase">Company</h4>
            <nav className="flex flex-col space-y-3">
              <NavLink to="/" className="text-white hover:text-brand-teal transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="text-white hover:text-brand-teal transition-colors">
                About Us
              </NavLink>
              <NavLink to="/why-choose-us" className="text-white hover:text-brand-teal transition-colors">
                Why Choose Us
              </NavLink>
              <NavLink to="/who-is-novale" className="text-white hover:text-brand-teal transition-colors">
                Who is Novalé
              </NavLink>
              <NavLink to="/team" className="text-white hover:text-brand-teal transition-colors">
                Our Team
              </NavLink>
              <NavLink to="/projects" className="text-white hover:text-brand-teal transition-colors">
                Our Projects
              </NavLink>
              <NavLink to="/contact" className="text-white hover:text-brand-teal transition-colors">
                Contact Us
              </NavLink>
            </nav>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wider text-white uppercase">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-white hover:text-brand-teal transition-colors">
                Finance Options
              </a>
              <a href="#" className="text-white hover:text-brand-teal transition-colors">
                Promotions
              </a>
              <a href="#" className="text-white hover:text-brand-teal transition-colors">
                Referral Program
              </a>
              <a href="#" className="text-white hover:text-brand-teal transition-colors">
                Careers
              </a>
            </nav>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wider text-white uppercase">Our Services</h4>
            <nav className="flex flex-col space-y-3">
              <NavLink to="/services/bathroom" className="text-white hover:text-brand-teal transition-colors">
                Bathroom Renovations
              </NavLink>
              <NavLink to="/services/kitchen" className="text-white hover:text-brand-teal transition-colors">
                Kitchen Renovations
              </NavLink>
              <NavLink to="/services/laundry" className="text-white hover:text-brand-teal transition-colors">
                Laundry Renovations
              </NavLink>
              <NavLink to="/bathroom-projects" className="text-white hover:text-brand-teal transition-colors">
                Bathroom Projects
              </NavLink>
            </nav>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wider text-white uppercase">Resources</h4>
            <nav className="flex flex-col space-y-3 mb-8">
              <a href="#" className="text-white hover:text-brand-teal transition-colors">
                Pricing & Guides
              </a>
              <a href="#" className="text-white hover:text-brand-teal transition-colors">
                Podcast
              </a>
              <a href="#" className="text-white hover:text-brand-teal transition-colors">
                Novalé TV
              </a>
              <a href="#" className="text-white hover:text-brand-teal transition-colors">
                FAQs
              </a>
              <a href="#" className="text-white hover:text-brand-teal transition-colors">
                Blog & News
              </a>
            </nav>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-4 tracking-wider text-white uppercase">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-teal flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-teal flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-teal flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations Bar */}
        <div className="py-8 mb-12 border-t border-b border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="text-white">
              <p className="text-sm font-semibold text-white mb-1">ISO 9001</p>
              <p className="text-xs text-white/70">Quality Certified</p>
            </div>
            <div className="text-white">
              <p className="text-sm font-semibold text-white mb-1">MBA Member</p>
              <p className="text-xs text-white/70">Master Builders</p>
            </div>
            <div className="text-white">
              <p className="text-sm font-semibold text-white mb-1">HIA Member</p>
              <p className="text-xs text-white/70">Housing Industry</p>
            </div>
            <div className="text-white">
              <p className="text-sm font-semibold text-white mb-1">Fully Licensed</p>
              <p className="text-xs text-white/70">NSW Licensed Builder</p>
            </div>
            <div className="text-white">
              <p className="text-sm font-semibold text-white mb-1">10 Year Warranty</p>
              <p className="text-xs text-white/70">Waterproofing Guarantee</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Novalé. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-teal transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-teal transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-brand-teal transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

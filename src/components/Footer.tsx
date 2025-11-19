import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-4">Artisan</h3>
            <p className="text-sm text-muted-foreground">
              Premium residential renovations for discerning homeowners.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </NavLink>
              <NavLink to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </NavLink>
              <NavLink to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </NavLink>
            </nav>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide">Services</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/services/kitchen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Kitchen Renovations
              </NavLink>
              <NavLink to="/services/bathroom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Bathroom Renovations
              </NavLink>
              <NavLink to="/services/laundry" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Laundry Renovations
              </NavLink>
            </nav>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide">Contact</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="mailto:hello@artisan.com" className="hover:text-foreground transition-colors">
                hello@artisan.com
              </a>
              <a href="tel:+1234567890" className="hover:text-foreground transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Artisan Renovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

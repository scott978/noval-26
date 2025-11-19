import { NavLink } from "./NavLink";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-serif tracking-tight">
            Novalé
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className="text-sm tracking-wide transition-colors hover:text-accent"
              activeClassName="text-primary"
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-sm tracking-wide transition-colors hover:text-accent"
              activeClassName="text-primary"
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className="text-sm tracking-wide transition-colors hover:text-accent"
              activeClassName="text-primary"
            >
              Projects
            </NavLink>
            <NavLink 
              to="/services" 
              className="text-sm tracking-wide transition-colors hover:text-accent"
              activeClassName="text-primary"
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-sm tracking-wide px-6 py-2 bg-primary text-primary-foreground hover:bg-brand-teal-dark transition-colors"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

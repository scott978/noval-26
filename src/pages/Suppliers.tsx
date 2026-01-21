import { NavLink } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import heroImage from "@/assets/about-hero.jpg";

const Suppliers = () => {
  const suppliers = [
    { name: "Reece", url: "https://www.reece.com.au/", category: "Plumbing & Bathroom" },
    { name: "Amber Tiles", url: "https://www.ambertiles.com.au/", category: "Tiles" },
    { name: "Di Lorenzo", url: "https://dilorenzo.com.au/", category: "Tiles" },
    { name: "Beaumont Tiles", url: "https://www.beaumont-tiles.com.au/", category: "Tiles" },
    { name: "Laminex", url: "https://www.laminex.com.au/", category: "Surfaces" },
    { name: "Earp Bros", url: "https://earp.com.au/", category: "Tiles" },
    { name: "Bathroom Collective", url: "https://www.bathroomcollective.com.au/", category: "Bathroom" },
    { name: "Living Tiles", url: "https://livingtiles.com.au/", category: "Tiles" },
    { name: "Studio XOX", url: "https://studioxox.com.au/", category: "Design" },
    { name: "Tera Nova", url: "https://teranova.com.au/", category: "Tiles" },
    { name: "The Blue Space", url: "https://www.thebluespace.com.au/", category: "Bathroom" },
    { name: "Marquis", url: "https://marquis.com.au/", category: "Vanities" },
    { name: "Tiles by Kate", url: "https://www.tilesbykate.com.au/", category: "Tiles" },
    { name: "Cosentino", url: "https://www.cosentino.com/en-au/", category: "Surfaces" },
    { name: "About Space Lighting", url: "https://www.aboutspace.net.au/", category: "Lighting" },
    { name: "Winning Appliances", url: "https://www.winnings.com.au/", category: "Appliances" },
    { name: "Common Wood Co", url: "https://www.commonwoodco.com/", category: "Timber" },
    { name: "Touch Handles", url: "https://www.touchhandles.com.au/", category: "Hardware" },
    { name: "Artedomus", url: "https://www.artedomus.com/", category: "Tiles & Stone" },
    { name: "Cass Brothers", url: "https://www.cassbrothers.com.au/", category: "Bathroom" },
    { name: "Vanity by Design", url: "https://www.vanitybydesign.com.au/", category: "Vanities" },
    { name: "ADP Australia", url: "https://www.adpaustralia.com.au/", category: "Bathroom" },
    { name: "Beacon Lighting", url: "https://www.beaconlighting.com.au/", category: "Lighting" },
    { name: "Brodware", url: "https://www.brodware.com.au/", category: "Tapware" },
    { name: "Caesarstone", url: "https://www.caesarstone.com.au/", category: "Surfaces" },
    { name: "Caroma", url: "https://www.caroma.com.au/", category: "Bathroom" },
    { name: "Clark", url: "https://www.clark.com.au/", category: "Sinks" },
    { name: "Dorf", url: "https://www.dorf.com.au/", category: "Tapware" },
    { name: "Sussex Taps", url: "https://www.sussextaps.com.au/", category: "Tapware" },
  ];

  const categories = [...new Set(suppliers.map(s => s.category))].sort();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Our Preferred Suppliers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="text-3xl font-serif mb-4 fade-in">
              Our Preferred Suppliers
            </h1>
            <p className="text-lg max-w-2xl mx-auto px-6 fade-in">
              Premium quality products from industry-leading brands
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed fade-in">
            The team at Novalé are experienced Bathroom, Kitchen and Laundry renovators, who support 
            their high quality workmanship with only the finest materials and products. We are proud to 
            work with numerous suppliers who provide premium quality products and service, to ensure that 
            your dream space can be enjoyed for years to come.
          </p>
        </div>
      </section>

      {/* Suppliers by Category */}
      {categories.map((category, catIndex) => (
        <section key={catIndex} className={`py-16 px-6 ${catIndex % 2 === 0 ? 'bg-secondary/30' : ''}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif mb-10 text-center">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {suppliers
                .filter(s => s.category === category)
                .map((supplier, index) => (
                  <a
                    key={index}
                    href={supplier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-background border border-border p-6 text-center hover:border-brand-teal transition-colors fade-in"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-xl font-serif text-primary">
                        {supplier.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-base font-medium mb-2 group-hover:text-brand-teal transition-colors">
                      {supplier.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      Visit <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            Starting on Your Journey
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch with the friendly team at Novalé Bathrooms today, to see how we can 
            turn your renovation dream into reality using only the finest materials and products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 bg-background text-foreground hover:bg-background/90 transition-colors"
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Suppliers;

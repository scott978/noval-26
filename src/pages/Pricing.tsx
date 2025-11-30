import { NavLink } from "react-router-dom";
import { Check, Palette, ClipboardList, Users, ShieldCheck, Bell, Award, MessageSquare, FileText, Hammer, Wrench, Sparkles } from "lucide-react";
import bathroomHero from "@/assets/project-bathroom.jpg";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="bg-black py-3 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-sm text-center">Transparent Pricing for Your Dream Bathroom</p>
        </div>
      </section>

      {/* Image Header Banner */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <img 
          src={bathroomHero} 
          alt="Luxury bathroom renovation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl lg:text-6xl font-serif mb-6 fade-in">
                Bathroom Pricing
              </h1>
            </div>
            <div className="fade-in">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Transparent pricing for your bathroom renovation. We believe in complete honesty 
                throughout your journey, starting with clear pricing guides to help you plan your 
                dream renovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential */}
            <div className="border border-border p-8 fade-in relative group hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif mb-4">Essential</h3>
              <div className="mb-6">
                <span className="text-4xl font-serif">$18,000</span>
                <span className="text-muted-foreground"> - $25,000</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Perfect for small bathrooms or those on a tighter budget seeking quality craftsmanship.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Quality fixtures and fittings",
                  "Professional waterproofing",
                  "Standard tile selection",
                  "Basic lighting package",
                  "Full project management",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <NavLink 
                to="/contact"
                className="absolute inset-x-8 bottom-8 bg-primary text-primary-foreground py-3 text-center text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/90"
              >
                GET A QUOTE
              </NavLink>
            </div>

            {/* Premium */}
            <div className="border-2 border-primary p-8 relative fade-in group hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground px-4 py-1 text-xs tracking-wide">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-serif mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-serif">$25,000</span>
                <span className="text-muted-foreground"> - $35,000</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Our most popular package, combining quality materials with sophisticated design.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Premium fixtures and fittings",
                  "Designer tile selection",
                  "Feature lighting package",
                  "Custom cabinetry options",
                  "Heated towel rail",
                  "Full project management",
                  "Online project tracking",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <NavLink 
                to="/contact"
                className="absolute inset-x-8 bottom-8 bg-primary text-primary-foreground py-3 text-center text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/90"
              >
                GET A QUOTE
              </NavLink>
            </div>

            {/* Luxury */}
            <div className="border border-border p-8 fade-in relative group hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-serif mb-4">Luxury</h3>
              <div className="mb-6">
                <span className="text-4xl font-serif">$35,000</span>
                <span className="text-muted-foreground"> +</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                The ultimate bathroom experience with high-end finishes and custom design.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Luxury fixtures and fittings",
                  "Designer tile and stone selection",
                  "Architectural lighting design",
                  "Fully custom cabinetry",
                  "Underfloor heating",
                  "Smart bathroom technology",
                  "Dedicated project manager",
                  "Online project tracking",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <NavLink 
                to="/contact"
                className="absolute inset-x-8 bottom-8 bg-primary text-primary-foreground py-3 text-center text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/90"
              >
                GET A QUOTE
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-16 text-center fade-in">Your Renovation Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-border hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {[
                {
                  icon: MessageSquare,
                  title: "Consultation",
                  duration: "Week 1",
                  description: "Initial meeting and design planning"
                },
                {
                  icon: FileText,
                  title: "Quote & Contract",
                  duration: "Week 1-2",
                  description: "Detailed quote and documentation"
                },
                {
                  icon: Hammer,
                  title: "Demolition",
                  duration: "Week 3",
                  description: "Removal of old fixtures"
                },
                {
                  icon: Wrench,
                  title: "Installation",
                  duration: "Week 4-6",
                  description: "Construction and fitting"
                },
                {
                  icon: Sparkles,
                  title: "Completion",
                  duration: "Week 7",
                  description: "Final touches and handover"
                },
              ].map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <div key={index} className="relative fade-in flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative z-10 border-4 border-background">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif mb-2">{stage.title}</h3>
                    <p className="text-sm font-semibold text-primary mb-2">{stage.duration}</p>
                    <p className="text-sm text-muted-foreground">{stage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 fade-in">What's Always Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Palette,
                title: "Design Consultation",
                description: "Work with our experienced designers to create your perfect bathroom layout and style.",
              },
              {
                icon: ClipboardList,
                title: "Project Management",
                description: "Dedicated project manager overseeing every aspect of your renovation from start to finish.",
              },
              {
                icon: Users,
                title: "Quality Tradespeople",
                description: "Licensed, insured, and experienced tradespeople committed to exceptional workmanship.",
              },
              {
                icon: ShieldCheck,
                title: "Waterproofing Guarantee",
                description: "Professional waterproofing with comprehensive warranties for your peace of mind.",
              },
              {
                icon: Bell,
                title: "Progress Updates",
                description: "Stay informed with regular updates through our online project management system.",
              },
              {
                icon: Award,
                title: "ISO 9001 Certified",
                description: "Quality management system ensuring consistent excellence in every project.",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="fade-in flex gap-4">
                  <IconComponent className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-4xl font-serif mb-6">
            Get Your Free Online Estimate
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey with a free, no-obligation online estimate. Our team will work with 
            you to understand your vision and provide a detailed quote.
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-brand-teal-dark transition-colors"
          >
            TRY OUR ESTIMATOR TOOL
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

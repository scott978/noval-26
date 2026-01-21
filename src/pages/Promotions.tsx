import { NavLink } from "react-router-dom";
import { Gift, Star, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/about-hero.jpg";

const Promotions = () => {
  const promotions = [
    {
      title: "Loyalty Program",
      subtitle: "Earn up to $20K off Your Next Reno",
      description: "Be a part of Novalé's Loyalty Program and earn points every time you successfully refer or renovate with Novalé!",
      features: [
        "Earn points for every successful referral",
        "Accumulate rewards with each renovation",
        "Redeem up to $20,000 off your next project",
        "Exclusive member benefits and early access"
      ],
      icon: Star,
      active: true
    },
    {
      title: "Refer a Friend",
      subtitle: "Share the Novalé Experience",
      description: "Know someone planning a renovation? Refer them to Novalé and you'll both benefit from our referral rewards program.",
      features: [
        "Receive a reward when your referral completes",
        "Your friend gets a special welcome offer",
        "No limit on the number of referrals",
        "Stack rewards for maximum savings"
      ],
      icon: Users,
      active: true
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Novalé Promotions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="text-3xl font-serif mb-4 fade-in">
              Current Promotions
            </h1>
            <p className="text-lg max-w-2xl mx-auto px-6 fade-in">
              Exclusive offers and rewards for our valued clients
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Gift className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-serif mb-6 fade-in">Rewarding Your Trust</h2>
          <p className="text-lg text-muted-foreground leading-relaxed fade-in">
            At Novalé, we believe in rewarding our loyal clients and those who spread the word 
            about our exceptional renovation services. Explore our current promotions below and 
            discover how you can save on your next dream renovation.
          </p>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <div 
                key={index} 
                className="bg-background border border-border overflow-hidden fade-in"
              >
                <div className="bg-primary p-8 text-primary-foreground">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6">
                    <promo.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{promo.title}</h3>
                  <p className="text-2xl font-serif">{promo.subtitle}</p>
                </div>
                <div className="p-8">
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {promo.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {promo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-brand-teal mt-1">✓</span>
                        <span className="text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink 
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm text-brand-teal hover:underline"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Notice */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            * Terms and conditions apply to all promotions. Contact our team for full details and eligibility requirements.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            Ready to Take Advantage?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            Contact our team today to learn more about our current promotions and how you 
            can maximize your savings on your next renovation project.
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

export default Promotions;

import { NavLink } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <img 
            src={aboutHero} 
            alt="Novalé craftsmanship" 
            className="w-full h-[70vh] object-cover fade-in mb-16"
          />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif mb-12 fade-in">
              Enhancing lives for over 22 years
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 fade-in">
                At Novalé, we aim to lead the bathroom, kitchen and laundry renovation space 
                by being refreshingly open, design-driven, knowledgeable, and professional. 
                We are proud of pairing old school values with a new school approach.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed fade-in">
                For over 22 years, we've been enhancing lives with stunning installations 
                that are as functional as they are beautiful. Whether it's compact or large, 
                our team expertly blends premium materials, quality craftsmanship, and timeless 
                style to deliver dream spaces on time, within budget, and to specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-serif mb-16 text-center">Discover More About Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <NavLink 
              to="/why-choose-us"
              className="group bg-background p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-serif mb-4 group-hover:text-brand-teal transition-colors">
                Why Choose Us
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discover what sets Novalé apart—from our ISO 9001 certification to our stress-free 
                renovation process.
              </p>
              <span className="text-sm text-brand-teal group-hover:underline">Learn More →</span>
            </NavLink>
            
            <NavLink 
              to="/who-is-novale"
              className="group bg-background p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-serif mb-4 group-hover:text-brand-teal transition-colors">
                Who is Novalé
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Learn about our story, our values, and the family-driven approach that guides 
                everything we do.
              </p>
              <span className="text-sm text-brand-teal group-hover:underline">Learn More →</span>
            </NavLink>
            
            <NavLink 
              to="/team"
              className="group bg-background p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-serif mb-4 group-hover:text-brand-teal transition-colors">
                Our Team
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Meet the dedicated professionals who bring your renovation dreams to life with 
                expertise and care.
              </p>
              <span className="text-sm text-brand-teal group-hover:underline">Learn More →</span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-serif mb-16">Our approach</h2>
          
          <div className="space-y-12">
            {[
              {
                title: "Design-Driven",
                description: "Every project begins with thoughtful design. We create 3D renders so you can visualize your space before construction begins, ensuring the final result matches your vision perfectly."
              },
              {
                title: "Transparent Communication",
                description: "Being refreshingly open means keeping you informed at every stage. You'll always know what's happening, when it's happening, and why. No surprises, just honest, clear communication."
              },
              {
                title: "On Time, On Budget",
                description: "We deliver what we promise. Your free online estimate gives you accurate expectations from day one, and we're committed to meeting both your timeline and budget."
              },
              {
                title: "Quality Craftsmanship",
                description: "We only work with premium materials and skilled tradespeople. Our attention to detail and high standards ensure your renovation will look beautiful and perform flawlessly for years to come."
              },
              {
                title: "Complete Service",
                description: "From concept to completion, we handle everything. Design, permits, construction, project management—we're your single point of contact throughout the entire journey."
              },
            ].map((value, index) => (
              <div key={index} className="border-b border-border pb-8 fade-in">
                <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations CTA */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl font-serif mb-8">Our Accreditations</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Our commitment to excellence has been recognized with multiple industry certifications 
            and awards. We're the first bathroom renovation company in Australia to receive ISO 9001 
            certification, alongside recognition from Houzz and HIA.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-brand-teal/10 p-6 border border-brand-teal/20">
              <div className="text-xl font-serif mb-2 text-brand-teal">ISO 9001</div>
              <p className="text-xs text-muted-foreground">Quality Certified</p>
            </div>
            <div className="bg-brand-teal/10 p-6 border border-brand-teal/20">
              <div className="text-xl font-serif mb-2 text-brand-teal">Houzz</div>
              <p className="text-xs text-muted-foreground">2021-2025 Awards</p>
            </div>
            <div className="bg-brand-teal/10 p-6 border border-brand-teal/20">
              <div className="text-xl font-serif mb-2 text-brand-teal">HIA</div>
              <p className="text-xs text-muted-foreground">NSW Finalist</p>
            </div>
            <div className="bg-brand-teal/10 p-6 border border-brand-teal/20">
              <div className="text-xl font-serif mb-2 text-brand-teal">MBA</div>
              <p className="text-xs text-muted-foreground">Member</p>
            </div>
          </div>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-brand-teal-dark transition-colors"
          >
            Work With a Certified Team
          </NavLink>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl font-serif mb-6">Experience the Novalé difference</h2>
          <p className="text-lg mb-10 opacity-90">
            Discover why thousands of Sydney homeowners have trusted us with their dream renovations
          </p>
          <a 
            href="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

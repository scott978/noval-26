import { NavLink } from "@/components/NavLink";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";
import aboutHero from "@/assets/about-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Full Width Hero Banner */}
      <section className="relative h-[90vh] w-full bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-7xl lg:text-8xl font-serif leading-tight text-background fade-in mb-12">
              We Deliver<br />Dreams
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                { label: "Bathroom Renovations", link: "/services/bathroom" },
                { label: "Kitchen Renovations", link: "/services/kitchen" },
                { label: "Laundry Renovations", link: "/services/laundry" },
                { label: "Multi-room Renovations", link: "/services" },
                { label: "Apartment Renovations", link: "/services" },
              ].map((service, index) => (
                <NavLink
                  key={index}
                  to={service.link}
                  className="px-6 py-3 bg-background/10 backdrop-blur-sm border border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-300 text-sm tracking-wide"
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Text */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed fade-in">
              For over 22 years, Novalé has been Sydney's trusted choice for stunning 
              bathroom, kitchen and laundry renovations. We blend premium materials, 
              quality craftsmanship, and timeless style to deliver dream spaces on time, 
              within budget, and to specification.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed fade-in">
              We're refreshingly open, design-driven, knowledgeable, and professional—pairing 
              old school values with a new school approach.
            </p>
          </div>
          
          {/* Reviews */}
          <div className="text-center pt-8">
            <div className="flex justify-center items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-10 h-10 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              <div className="flex items-center gap-2">
                <span className="text-[#4285F4] text-2xl font-bold">G</span>
                <span className="text-[#EA4335] text-2xl font-bold">o</span>
                <span className="text-[#FBBC04] text-2xl font-bold">o</span>
                <span className="text-[#4285F4] text-2xl font-bold">g</span>
                <span className="text-[#34A853] text-2xl font-bold">l</span>
                <span className="text-[#EA4335] text-2xl font-bold">e</span>
              </div>
              <div className="text-[#1877F2] text-2xl font-bold">
                facebook
              </div>
              <div className="text-[#7AC142] text-2xl font-bold">
                houzz
              </div>
              <div className="text-2xl font-bold">
                <span className="text-[#FF6B35]">Product</span>
                <span className="text-foreground">Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-16 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              {
                title: "Bathroom Renovations",
                description: "Transform your bathroom into a stunning sanctuary. From compact ensuites to luxurious master bathrooms, we expertly blend premium materials and quality craftsmanship.",
                link: "/services/bathroom",
                image: projectBathroom
              },
              {
                title: "Kitchen Renovations",
                description: "Create the kitchen of your dreams. Whether contemporary or classic, our team delivers functional, beautiful spaces that become the heart of your home.",
                link: "/services/kitchen",
                image: projectKitchen
              },
              {
                title: "Laundry Renovations",
                description: "Elevate your laundry space with clever design and premium finishes. We maximize functionality while maintaining the sophisticated aesthetic throughout your home.",
                link: "/services/laundry",
                image: projectLaundry
              },
              {
                title: "Multi-room Renovations",
                description: "Seamlessly transform multiple spaces with our comprehensive renovation approach. We coordinate every detail to ensure consistent quality and design throughout your home.",
                link: "/services",
                image: projectKitchen
              },
              {
                title: "Apartment Renovations",
                description: "Specializing in apartment renovations with expert coordination of strata requirements, building access, and council approvals for a stress-free experience.",
                link: "/services",
                image: projectBathroom
              },
            ].map((service, index) => (
              <div key={index} className="fade-in">
                <div className="relative overflow-hidden mb-6 group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <NavLink 
                  to={service.link}
                  className="text-sm tracking-wide underline hover:no-underline transition-all"
                >
                  Learn More
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-16">Our Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: projectBathroom, title: "Vaucluse Bathroom", location: "Vaucluse, Sydney", category: "bathroom" },
              { image: projectKitchen, title: "Mosman Kitchen", location: "Mosman, Sydney", category: "kitchen" },
              { image: projectLaundry, title: "Double Bay Laundry", location: "Double Bay, Sydney", category: "laundry" },
            ].map((project, index) => (
              <NavLink 
                key={index}
                to={`/projects/${project.category}`}
                className="group block"
              >
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif mb-1">{project.title}</h3>
                <p className="text-base text-muted-foreground">{project.location}</p>
              </NavLink>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <NavLink 
              to="/projects" 
              className="inline-block text-sm tracking-wide px-8 py-3 border border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View All Projects
            </NavLink>
          </div>
        </div>
      </section>

      {/* The Journey / Process */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-16 text-center">The Journey</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { number: "01", title: "Discovery", description: "Share your vision with us in a free consultation. We'll discuss your needs, timeline, and budget." },
                { number: "02", title: "Design & Quote", description: "Receive your detailed quote and 3D renders within days. Get accurate cost and timeline expectations." },
                { number: "03", title: "Documentation", description: "We handle all permits, plans, and approvals so you don't have to worry about the paperwork." },
                { number: "04", title: "Transformation", description: "Our expert team brings your dream space to life, keeping you informed every step of the way." },
              ].map((step, index) => (
                <div key={index} className="fade-in">
                  <div className="text-6xl font-serif text-brand-teal mb-4">{step.number}</div>
                  <h3 className="text-2xl font-serif mb-3">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="fade-in">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster={heroImage}
                >
                  <source src="https://example.com/renovation-journey.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="py-24 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-5xl font-serif text-center max-w-4xl mx-auto leading-relaxed text-brand-teal">
            Our highly satisfied clients enjoy a stress-free renovation experience, 
            guided from start to finish by experts committed to bringing their vision to life
          </p>
        </div>
      </section>

      {/* Pricing & Guide CTA */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Pricing & Guide</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our transparent pricing guides to understand what your renovation will cost. 
              Each guide includes detailed breakdowns, timelines, and what's included.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Bathroom Renovations", link: "/pricing#bathroom" },
              { title: "Kitchen Renovations", link: "/pricing#kitchen" },
              { title: "Laundry Renovations", link: "/pricing#laundry" },
              { title: "Multi-room Renovations", link: "/pricing#multiroom" },
              { title: "Apartment Renovations", link: "/pricing#apartment" },
            ].map((guide, index) => (
              <NavLink
                key={index}
                to={guide.link}
                className="group block p-8 border-2 border-border hover:border-brand-teal bg-background hover:bg-brand-teal/5 transition-all duration-300"
              >
                <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-teal transition-colors">
                  {guide.title}
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  View detailed pricing guide
                </p>
                <span className="text-sm text-brand-teal underline group-hover:no-underline">
                  View Guide →
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-16 text-center">About Novalé</h2>
          
          <div className="mb-16">
            <img 
              src={aboutHero} 
              alt="Novalé team and showroom" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <NavLink 
              to="/about/who-is-novale"
              className="group block p-8 border border-border hover:border-brand-teal transition-all duration-300"
            >
              <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-teal transition-colors">
                Who is Novalé
              </h3>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Discover our story, values, and the passionate team behind Sydney's most trusted renovation company.
              </p>
              <span className="text-sm text-brand-teal underline group-hover:no-underline">
                Learn Our Story →
              </span>
            </NavLink>

            <NavLink 
              to="/about/why-choose-us"
              className="group block p-8 border border-border hover:border-brand-teal transition-all duration-300"
            >
              <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-teal transition-colors">
                Why Choose Us
              </h3>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Learn what sets us apart: design-driven excellence, transparent communication, and 22 years of expertise.
              </p>
              <span className="text-sm text-brand-teal underline group-hover:no-underline">
                See What Makes Us Different →
              </span>
            </NavLink>

            <NavLink 
              to="/about"
              className="group block p-8 border border-border hover:border-brand-teal transition-all duration-300"
            >
              <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-teal transition-colors">
                Accreditations
              </h3>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                First bathroom renovator with ISO 9001 certification. Award-winning members of Master Builders and HIA.
              </p>
              <span className="text-sm text-brand-teal underline group-hover:no-underline">
                View Our Credentials →
              </span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-serif mb-6">Ready to create your dream space?</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Let's bring your vision to life with a stress-free renovation experience
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Start Your Journey
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;

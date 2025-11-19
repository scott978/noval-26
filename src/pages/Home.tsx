import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-kitchen.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h1 className="text-6xl lg:text-7xl font-serif leading-tight mb-8">
                We Deliver<br />Dreams
              </h1>
            </div>
            <div className="fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For over 22 years, Novalé has been Sydney's trusted choice for stunning 
                bathroom, kitchen and laundry renovations. We blend premium materials, 
                quality craftsmanship, and timeless style to deliver dream spaces on time, 
                within budget, and to specification.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're refreshingly open, design-driven, knowledgeable, and professional—pairing 
                old school values with a new school approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <img 
            src={heroImage} 
            alt="Premium kitchen renovation Sydney" 
            className="w-full h-[70vh] object-cover fade-in"
          />
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="py-24 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-3xl lg:text-4xl font-serif text-center max-w-4xl mx-auto leading-relaxed">
            Our highly satisfied clients enjoy a stress-free renovation experience, 
            guided from start to finish by experts committed to bringing their vision to life
          </p>
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
                <h3 className="text-xl font-serif mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.location}</p>
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

      {/* Services Overview */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-16 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Bathroom Renovations",
                description: "Transform your bathroom into a stunning sanctuary. From compact ensuites to luxurious master bathrooms, we expertly blend premium materials and quality craftsmanship.",
                link: "/services/bathroom"
              },
              {
                title: "Kitchen Renovations",
                description: "Create the kitchen of your dreams. Whether contemporary or classic, our team delivers functional, beautiful spaces that become the heart of your home.",
                link: "/services/kitchen"
              },
              {
                title: "Laundry Renovations",
                description: "Elevate your laundry space with clever design and premium finishes. We maximize functionality while maintaining the sophisticated aesthetic throughout your home.",
                link: "/services/laundry"
              },
            ].map((service, index) => (
              <div key={index} className="fade-in">
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
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

      {/* The Journey / Process */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-16 text-center">The Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { number: "01", title: "Discovery", description: "Share your vision with us in a free consultation. We'll discuss your needs, timeline, and budget." },
              { number: "02", title: "Design & Quote", description: "Receive your detailed quote and 3D renders within days. Get accurate cost and timeline expectations." },
              { number: "03", title: "Documentation", description: "We handle all permits, plans, and approvals so you don't have to worry about the paperwork." },
              { number: "04", title: "Transformation", description: "Our expert team brings your dream space to life, keeping you informed every step of the way." },
            ].map((step, index) => (
              <div key={index} className="fade-in">
                <div className="text-6xl font-serif text-accent mb-4">{step.number}</div>
                <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Estimate CTA */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-serif mb-6">Get a Free Online Estimate</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Want to know how much your renovation will cost and how long it will take? 
            Complete our free online estimate to get accurate expectations. It only takes 2 minutes!
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mr-4"
          >
            Get Your Free Quote
          </NavLink>
          <NavLink 
            to="/projects"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Our Work
          </NavLink>
        </div>
      </section>

      {/* Awards & Credentials */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-serif mb-8">Awards & Qualifications</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Novalé is proud to be the first bathroom renovation company to receive ISO 9001 certification. 
            We're also award-winning members of Master Builders and HIA.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-center">
              <div className="text-4xl font-serif mb-2">ISO 9001</div>
              <p className="text-sm text-muted-foreground">Certified</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif mb-2">Houzz</div>
              <p className="text-sm text-muted-foreground">2021-2025</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif mb-2">HIA</div>
              <p className="text-sm text-muted-foreground">Finalist</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif mb-2">MBA</div>
              <p className="text-sm text-muted-foreground">Member</p>
            </div>
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

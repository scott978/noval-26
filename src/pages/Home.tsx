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
                Refined spaces,<br />thoughtfully designed
              </h1>
            </div>
            <div className="fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialise in creating exceptional kitchen, bathroom and laundry spaces 
                that embody timeless design and meticulous craftsmanship. Each project is 
                approached with architectural precision and an unwavering commitment to quality.
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
            alt="Premium kitchen renovation" 
            className="w-full h-[70vh] object-cover fade-in"
          />
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="py-24 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-3xl lg:text-4xl font-serif text-center max-w-4xl mx-auto leading-relaxed">
            We believe exceptional design emerges from the careful balance of beauty, 
            functionality, and enduring quality
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-16">Selected Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: projectKitchen, title: "Toorak Residence", location: "Kitchen Renovation", category: "kitchen" },
              { image: projectBathroom, title: "Brighton Manor", location: "Bathroom Renovation", category: "bathroom" },
              { image: projectLaundry, title: "South Yarra Terrace", location: "Laundry Renovation", category: "laundry" },
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
                title: "Kitchen Renovations",
                description: "Crafting culinary spaces that seamlessly blend form and function, where every detail serves both aesthetic and practical purpose.",
                link: "/services/kitchen"
              },
              {
                title: "Bathroom Renovations",
                description: "Transforming bathrooms into sanctuaries of tranquility, combining luxurious materials with thoughtful spatial design.",
                link: "/services/bathroom"
              },
              {
                title: "Laundry Renovations",
                description: "Elevating utility spaces through intelligent design, creating efficient environments that don't compromise on style.",
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

      {/* Process Snapshot */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-16 text-center">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { number: "01", title: "Consultation", description: "Understanding your vision, lifestyle and aspirations for the space" },
              { number: "02", title: "Design", description: "Developing concepts that balance aesthetics with functional excellence" },
              { number: "03", title: "Refinement", description: "Perfecting every detail through collaborative iteration" },
              { number: "04", title: "Execution", description: "Bringing the design to life with precision and care" },
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

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-serif mb-6">Begin your renovation journey</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can transform your space into something extraordinary
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Get in Touch
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;

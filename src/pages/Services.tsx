import { NavLink } from "@/components/NavLink";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";

const Services = () => {
  const services = [
    {
      title: "Kitchen Renovations",
      description: "The heart of the home deserves exceptional design. Our kitchen renovations combine sophisticated aesthetics with practical functionality, creating spaces that inspire culinary creativity and social connection.",
      image: projectKitchen,
      link: "/services/kitchen",
      features: [
        "Custom cabinetry and joinery",
        "Premium stone benchtops",
        "Integrated appliances",
        "Bespoke storage solutions",
        "Designer lighting schemes"
      ]
    },
    {
      title: "Bathroom Renovations",
      description: "Transform your bathroom into a personal sanctuary. We craft serene spaces that balance luxury with functionality, using premium materials and refined design principles.",
      image: projectBathroom,
      link: "/services/bathroom",
      features: [
        "Natural stone and tile selections",
        "Custom vanities and storage",
        "Luxurious fixtures and fittings",
        "Elegant lighting design",
        "Heated floors and towel rails"
      ]
    },
    {
      title: "Laundry Renovations",
      description: "Elevate your utility spaces. Our laundry renovations prove that practical spaces can be beautiful, combining efficient layouts with considered design.",
      image: projectLaundry,
      link: "/services/laundry",
      features: [
        "Efficient spatial planning",
        "Custom storage solutions",
        "Quality fixtures and fittings",
        "Integrated drying systems",
        "Durable, easy-care finishes"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-24">
          <h1 className="text-6xl lg:text-7xl font-serif mb-8 fade-in">Our Services</h1>
          <p className="text-xl text-muted-foreground fade-in">
            We specialise in high-end residential renovations, focusing on the three spaces 
            that define modern living: kitchens, bathrooms and laundries. Each service is 
            delivered with the same commitment to design excellence and meticulous craftsmanship.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-[600px] object-cover"
                />
              </div>
              
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h2 className="text-4xl font-serif mb-6">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground text-sm">
                        — {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <NavLink 
                  to={service.link}
                  className="inline-block text-sm tracking-wide px-6 py-3 border border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <section className="mt-32 pt-32 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif mb-8">How We Work</h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Every project follows our refined process, ensuring clarity, collaboration and 
              exceptional results from initial consultation through to final installation.
            </p>
            
            <div className="space-y-8">
              {[
                { 
                  phase: "Discovery", 
                  description: "We begin by understanding your vision, lifestyle and practical requirements. This foundation shapes every decision that follows." 
                },
                { 
                  phase: "Design Development", 
                  description: "Our team develops detailed designs that balance aesthetic aspiration with functional excellence. You'll see your space come to life through renders and material selections." 
                },
                { 
                  phase: "Documentation", 
                  description: "Comprehensive documentation ensures nothing is left to chance. Every detail is specified, approved and ready for construction." 
                },
                { 
                  phase: "Construction", 
                  description: "Our skilled craftspeople bring the design to reality, maintaining the highest standards throughout. You'll have regular updates and transparent communication." 
                },
                { 
                  phase: "Completion", 
                  description: "A thorough handover ensures you understand every aspect of your new space. We stand behind our work with comprehensive warranties." 
                }
              ].map((step, index) => (
                <div key={index} className="border-b border-border pb-6">
                  <h3 className="text-xl font-serif mb-2">{step.phase}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 pt-32 border-t border-border text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to begin?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can create something exceptional together
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Get in Touch
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default Services;

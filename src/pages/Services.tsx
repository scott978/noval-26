import { NavLink } from "@/components/NavLink";
import { CheckCircle2, ClipboardCheck, HardHat, Home, Sparkles } from "lucide-react";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";
import aboutHero from "@/assets/about-hero.jpg";

const Services = () => {
  const services = [
    {
      title: "Bathroom Renovations",
      description: "Transform your bathroom into a stunning sanctuary that enhances your daily routine. Whether it's a compact ensuite or a luxurious master bathroom, Novalé expertly blends premium materials, quality craftsmanship, and timeless style to create functional, beautiful spaces.",
      image: projectBathroom,
      link: "/services/bathroom",
      features: [
        "Custom vanities and storage solutions",
        "Premium tiles and natural stone",
        "High-quality fixtures and fittings",
        "Frameless shower screens",
        "Underfloor heating",
        "Smart storage design"
      ]
    },
    {
      title: "Kitchen Renovations",
      description: "Create the kitchen of your dreams—the heart of your home where memories are made. Our team delivers functional, beautiful kitchens that combine sophisticated design with practical layouts, all completed on time and within budget.",
      image: projectKitchen,
      link: "/services/kitchen",
      features: [
        "Custom cabinetry and joinery",
        "Stone benchtops (marble, granite, engineered)",
        "Premium appliance integration",
        "Designer lighting solutions",
        "Innovative storage systems",
        "Quality hardware and fixtures"
      ]
    },
    {
      title: "Laundry Renovations",
      description: "Elevate your laundry space with clever design and premium finishes. We maximize functionality while maintaining the sophisticated aesthetic throughout your home, creating organized, efficient spaces you'll actually enjoy using.",
      image: projectLaundry,
      link: "/services/laundry",
      features: [
        "Efficient spatial planning",
        "Custom cabinetry and benchtops",
        "Integrated drying solutions",
        "Quality tapware and fittings",
        "Durable, easy-care finishes",
        "Smart storage integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-24">
          <h1 className="text-3xl font-serif mb-8 fade-in">Our Services</h1>
          <p className="text-xl text-muted-foreground fade-in">
            For over 22 years, Novalé has been delivering exceptional bathroom, kitchen and 
            laundry renovations across Sydney. We handle everything from design to installation, 
            ensuring a stress-free experience and stunning results.
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
                <h2 className="text-2xl font-serif mb-6">{service.title}</h2>
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

        {/* The Journey Section */}
        <section className="mt-32 pt-32 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif mb-8">The Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Our proven process ensures your renovation runs smoothly from start to finish. 
              You'll be guided by experts every step of the way, with clear communication and 
              transparent timelines.
            </p>
            
            <div className="space-y-8">
              {[
                { 
                  phase: "Free Consultation",
                  icon: Home,
                  description: "Share your vision in a no-obligation consultation. We'll discuss your needs, timeline, and budget, and provide initial advice." 
                },
                { 
                  phase: "Design & Quote",
                  icon: ClipboardCheck,
                  description: "Receive your detailed quote and stunning 3D renders within days. Our free online estimate gives you accurate cost and timeline expectations—it only takes 2 minutes!" 
                },
                { 
                  phase: "Planning & Approvals",
                  icon: CheckCircle2,
                  description: "We handle all the paperwork, permits, and council approvals. You won't need to worry about any administrative tasks." 
                },
                { 
                  phase: "Construction",
                  icon: HardHat,
                  description: "Our experienced team transforms your space with meticulous attention to detail. We keep you informed with regular updates throughout the build." 
                },
                { 
                  phase: "Final Handover",
                  icon: Sparkles,
                  description: "Walk through your completed renovation with our team. We ensure everything meets your expectations and provide care instructions for your new space." 
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="border-l-2 border-brand-teal pl-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-teal/10 p-3 rounded-full">
                        <Icon className="w-6 h-6 text-brand-teal" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-serif mb-2">{step.phase}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Novalé */}
        <section className="mt-32 pt-32 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-serif mb-12">Why Choose Novalé?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={aboutHero} 
                  alt="Novalé craftsmanship" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "ISO 9001 Certified", desc: "First bathroom renovation company in Australia to achieve this certification" },
                  { title: "22+ Years Experience", desc: "Thousands of successful renovations across Sydney" },
                  { title: "Free Online Estimates", desc: "Get accurate cost and time expectations in just 2 minutes" },
                  { title: "Stress-Free Process", desc: "We handle everything from design to final installation" },
                  { title: "On Time, On Budget", desc: "We deliver what we promise, every time" },
                  { title: "Award-Winning", desc: "Multiple Houzz and HIA awards for excellence" },
                ].map((item, index) => (
                  <div key={index} className="fade-in">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 pt-32 border-t border-border text-center">
          <h2 className="text-2xl font-serif mb-6">Ready to start your renovation?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a free online estimate and discover how Novalé can create your dream space
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Your Free Quote
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default Services;

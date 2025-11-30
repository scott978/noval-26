import { NavLink } from "@/components/NavLink";
import { CheckCircle2, ArrowRight } from "lucide-react";
import consultationImg from "@/assets/process/consultation.jpg";
import planningImg from "@/assets/process/planning.jpg";
import designSelectionImg from "@/assets/process/design-selection.jpg";
import constructionImg from "@/assets/process/construction.jpg";
import completionImg from "@/assets/process/completion.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive consultation to understand your vision, needs, and budget. Our expert team visits your home to assess the space and discuss your renovation goals.",
      image: consultationImg,
      features: [
        "In-home consultation",
        "Project scope discussion",
        "Budget planning",
        "Timeline overview"
      ]
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our design team creates detailed plans and 3D renders of your new space. We ensure every detail aligns with your vision while meeting all building standards and regulations.",
      image: planningImg,
      features: [
        "3D design renders",
        "Detailed floor plans",
        "Material specifications",
        "Council approvals"
      ]
    },
    {
      number: "03",
      title: "Design Selection",
      description: "Visit our showroom to select from premium materials, finishes, and fixtures. Our interior design team guides you through options that match your style and budget.",
      image: designSelectionImg,
      features: [
        "Showroom appointment",
        "Material selection",
        "Color consultation",
        "Fixture choices"
      ]
    },
    {
      number: "04",
      title: "Construction",
      description: "Our skilled tradespeople bring your vision to life with meticulous attention to detail. We maintain open communication throughout, keeping you updated on progress at every stage.",
      image: constructionImg,
      features: [
        "Licensed tradespeople",
        "Quality materials",
        "Regular updates",
        "Site management"
      ]
    },
    {
      number: "05",
      title: "Final Walkthrough",
      description: "We conduct a thorough walkthrough to ensure every detail meets our high standards and your expectations. Your complete satisfaction is our priority before project completion.",
      image: completionImg,
      features: [
        "Quality inspection",
        "Final adjustments",
        "Project handover",
        "Warranty documentation"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 mb-24">
        <h1 className="text-3xl font-serif mb-8 fade-in">
          Our Process
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl fade-in">
          From initial consultation to final walkthrough, we guide you through every step of your renovation journey with transparency, expertise, and unwavering attention to detail.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="space-y-32">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center fade-in ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group overflow-hidden">
                  <div className="absolute top-6 left-6 z-10 bg-primary text-primary-foreground px-6 py-3 font-serif text-2xl">
                    {step.number}
                  </div>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-2xl font-serif mb-6">
                  {step.title}
                </h2>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-4">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Process Section */}
      <section className="bg-brand-teal py-24 mt-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-serif mb-8 text-white">
              Why Our Process Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="p-6">
                <div className="text-white text-3xl font-serif mb-4">15+</div>
                <h3 className="font-semibold mb-2 text-white">Years Experience</h3>
                <p className="text-sm text-white/80">
                  Refined process perfected over thousands of projects
                </p>
              </div>
              <div className="p-6">
                <div className="text-white text-3xl font-serif mb-4">100%</div>
                <h3 className="font-semibold mb-2 text-white">Quality Guaranteed</h3>
                <p className="text-sm text-white/80">
                  Comprehensive warranties on all work completed
                </p>
              </div>
              <div className="p-6">
                <div className="text-white text-3xl font-serif mb-4">5★</div>
                <h3 className="font-semibold mb-2 text-white">Client Satisfaction</h3>
                <p className="text-sm text-white/80">
                  Consistently rated excellent by our clients
                </p>
              </div>
              <div className="p-6">
                <div className="text-white text-3xl font-serif mb-4">24/7</div>
                <h3 className="font-semibold mb-2 text-white">Support Available</h3>
                <p className="text-sm text-white/80">
                  Dedicated project manager throughout your renovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-6 lg:px-12 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-serif mb-6">
            See Our Process in Action
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Discover how our proven process delivers exceptional results across bathrooms, kitchens, and laundries throughout Sydney.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <NavLink to="/projects" className="group block">
            <div className="relative overflow-hidden mb-4">
              <img 
                src={projectBathroom} 
                alt="Vaucluse Bathroom Renovation"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <h3 className="text-lg font-serif mb-2 group-hover:text-brand-teal transition-colors">
              Vaucluse Bathroom
            </h3>
            <p className="text-sm text-muted-foreground">Luxury spa-like retreat</p>
          </NavLink>

          <NavLink to="/projects" className="group block">
            <div className="relative overflow-hidden mb-4">
              <img 
                src={projectKitchen} 
                alt="Mosman Kitchen Renovation"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <h3 className="text-lg font-serif mb-2 group-hover:text-brand-teal transition-colors">
              Mosman Kitchen
            </h3>
            <p className="text-sm text-muted-foreground">Modern family hub</p>
          </NavLink>

          <NavLink to="/projects" className="group block">
            <div className="relative overflow-hidden mb-4">
              <img 
                src={projectLaundry} 
                alt="Double Bay Laundry Renovation"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <h3 className="text-lg font-serif mb-2 group-hover:text-brand-teal transition-colors">
              Double Bay Laundry
            </h3>
            <p className="text-sm text-muted-foreground">Practical elegance</p>
          </NavLink>
        </div>

        <div className="text-center">
          <NavLink
            to="/projects"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-border hover:border-brand-teal hover:bg-brand-teal/5 transition-all"
          >
            View All Projects
          </NavLink>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24 mt-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-serif mb-6">
            Ready to Start Your Renovation Journey?
          </h2>
          <p className="text-base max-w-2xl mx-auto mb-10 opacity-90">
            Experience the Novalé difference. Our proven process ensures your renovation is completed on time, on budget, and exceeds your expectations at every stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm tracking-wide px-8 py-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors"
            >
              Get Started Today
              <ArrowRight size={16} />
            </NavLink>
            <NavLink
              to="/projects"
              className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              View Our Projects
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;

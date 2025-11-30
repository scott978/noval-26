import { NavLink } from "@/components/NavLink";
import { Star, CheckCircle2, Award, Shield, Clock, Paintbrush, FileCheck, Users, Phone, MapPin, ChevronDown, LayoutGrid, Sparkles, ClipboardCheck, Pencil, Hammer, Sparkle, Key } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const KitchenRenovations = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Banner with Pricing & CTA */}
      <section className="relative h-[90vh] w-full bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-6xl lg:text-7xl font-serif leading-tight text-background fade-in mb-6">
              Kitchen Renovations<br />Sydney
            </h1>
            <p className="text-xl lg:text-2xl text-background/90 mb-8 max-w-3xl mx-auto">
              Transform your kitchen into a stunning, functional space with Sydney's most trusted renovation specialists
            </p>
            
            {/* Price Range & Timeframe */}
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 max-w-2xl mx-auto">
              <div className="bg-background/95 backdrop-blur-sm px-8 py-6 rounded-md">
                <p className="text-sm text-muted-foreground mb-2">Price Range</p>
                <p className="text-3xl font-bold text-brand-teal">$35,000 - $80,000+</p>
              </div>
              <div className="bg-background/95 backdrop-blur-sm px-8 py-6 rounded-md">
                <p className="text-sm text-muted-foreground mb-2">Project Timeframe</p>
                <p className="text-3xl font-bold text-brand-teal">4-8 weeks</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NavLink
                to="/pricing"
                className="inline-block px-10 py-4 bg-brand-teal text-white hover:bg-brand-teal-dark transition-all duration-300 text-lg tracking-wide"
              >
                Use Online Estimator
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-block px-10 py-4 bg-background text-foreground hover:bg-secondary transition-all duration-300 text-lg tracking-wide"
              >
                Request a Quote
              </NavLink>
            </div>

            {/* Location Note */}
            <p className="text-sm text-background/80 mt-8 max-w-2xl mx-auto">
              * Pricing and timeframes vary based on your location, kitchen size, and selected finishes. Get an accurate estimate with our online tool.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Novale */}
      <section className="py-32 px-6 lg:px-12 bg-background">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">Why Choose Novalé</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Industry-leading standards and service excellence
          </p>

          {/* USPs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {[
              { icon: <Award className="w-8 h-8" />, label: "ISO Certified" },
              { icon: <FileCheck className="w-8 h-8" />, label: "Transparent Pricing" },
              { icon: <Paintbrush className="w-8 h-8" />, label: "Design Services" },
              { icon: <Shield className="w-8 h-8" />, label: "10 Year Waterproofing" },
              { icon: <CheckCircle2 className="w-8 h-8" />, label: "Licensed & Insured" },
            ].map((usp, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 fade-in">
                <div className="text-brand-teal mb-3">
                  {usp.icon}
                </div>
                <p className="text-base font-serif font-medium">{usp.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emma & James R.",
                location: "Mosman",
                text: "Novalé transformed our dated kitchen into a stunning modern space perfect for our family. The craftsmanship is outstanding and the team was incredibly professional throughout.",
                rating: 5
              },
              {
                name: "Catherine L.",
                location: "Double Bay",
                text: "From the initial design consultation to the final reveal, the entire process exceeded our expectations. Our new kitchen is not just beautiful, it's so much more functional. Worth every dollar!",
                rating: 5
              },
              {
                name: "Robert & Sophie H.",
                location: "Bondi",
                text: "As apartment owners, we were concerned about noise and access. Novalé handled everything professionally, kept disruption minimal, and delivered an absolutely gorgeous kitchen. Highly recommend!",
                rating: 5
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-8 bg-background border border-border fade-in">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="text-base mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-serif text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">Our Process</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            A streamlined approach to transforming your kitchen
          </p>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-border hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {[
                {
                  icon: <ClipboardCheck className="w-8 h-8" />,
                  step: "01",
                  title: "Consultation",
                  description: "Initial meeting to discuss your vision, budget, and timeline"
                },
                {
                  icon: <Pencil className="w-8 h-8" />,
                  step: "02",
                  title: "Design",
                  description: "Detailed plans and 3D renders of your new kitchen"
                },
                {
                  icon: <FileCheck className="w-8 h-8" />,
                  step: "03",
                  title: "Approval",
                  description: "Quote finalization and project scheduling"
                },
                {
                  icon: <Hammer className="w-8 h-8" />,
                  step: "04",
                  title: "Renovation",
                  description: "Expert construction with regular progress updates"
                },
                {
                  icon: <Key className="w-8 h-8" />,
                  step: "05",
                  title: "Handover",
                  description: "Final inspection and enjoy your new kitchen"
                }
              ].map((process, index) => (
                <div key={index} className="relative flex flex-col items-center text-center fade-in">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-brand-teal flex items-center justify-center mb-6">
                    <div className="text-white">
                      {process.icon}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-sm font-bold text-brand-teal">{process.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Projects */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">Recent Kitchen Projects</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            See how we've transformed kitchens across Sydney
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Vaucluse Kitchen", location: "Vaucluse", type: "House", budget: "$65,000" },
              { title: "Bondi Apartment", location: "Bondi Beach", type: "Apartment", budget: "$45,000" },
              { title: "Mosman Family Kitchen", location: "Mosman", type: "House", budget: "$78,000" },
            ].map((project, index) => (
              <div key={index} className="group fade-in">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={projectKitchen}
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                <p className="text-base text-muted-foreground mb-1">{project.location} • {project.type}</p>
                <p className="text-base text-brand-teal">{project.budget}</p>
              </div>
            ))}
          </div>

          {/* Find Your Style Banner */}
          <div className="mt-16 bg-brand-teal py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <h3 className="text-3xl font-serif text-white">Find Your Style</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink
                  to="/projects"
                  className="inline-block px-8 py-3 bg-white text-brand-teal hover:bg-background transition-colors text-sm tracking-wide"
                >
                  <span className="flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4" />
                    Projects
                  </span>
                </NavLink>
                <NavLink
                  to="/pricing"
                  className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-brand-teal transition-colors text-sm tracking-wide"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Style Quiz
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What Impacts Kitchen Renovation Costs */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">What Impacts Your Kitchen Renovation Cost?</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Understanding the key factors that influence your kitchen renovation budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Paintbrush className="w-8 h-8" />,
                title: "Finishes & Materials",
                description: "Your choice of benchtops, cabinetry, and flooring significantly impacts cost. Laminate vs stone benchtops, polyurethane vs timber cabinets—each material tier adds value and cost."
              },
              {
                icon: <FileCheck className="w-8 h-8" />,
                title: "Fixtures & Appliances",
                description: "Quality appliances and fixtures vary widely. A basic cooktop vs an induction cooktop, standard sink vs undermount with quality tapware—these choices shape your budget."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Location & Access",
                description: "Apartment renovations in high-rise buildings require special access arrangements. Strata approvals, lift bookings, and parking permits add time and cost to the project."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Layout Changes",
                description: "Moving plumbing and electrical significantly increases costs. Keeping the existing layout and upgrading in-place is the most cost-effective approach."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Size & Complexity",
                description: "Larger kitchens require more materials and labor. Adding features like islands, butler's pantries, or custom storage solutions increases both cost and timeframe."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Custom Features",
                description: "Bespoke joinery, integrated appliances, smart home technology, and specialty lighting all add to the final investment but create a truly unique space."
              },
            ].map((factor, index) => (
              <div key={index} className="p-8 bg-background border border-border hover:border-brand-teal transition-all duration-300 fade-in">
                <div className="text-brand-teal mb-4">
                  {factor.icon}
                </div>
                <h3 className="text-xl font-serif mb-3">{factor.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing & Timeframe */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">Kitchen Renovation Pricing Guide</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Transparent pricing guides for every kitchen renovation type
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative h-[500px] overflow-hidden mb-12">
                <img
                  src={projectKitchen}
                  alt="Luxury kitchen renovation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif mb-6">Common Questions</h3>
                {[
                  {
                    question: "What's included in the price?",
                    answer: "Our pricing includes all labor, materials, project management, and cleanup. This covers demolition, cabinetry, benchtops, plumbing, electrical, tiling, painting, and appliance installation."
                  },
                  {
                    question: "How long does a kitchen renovation take?",
                    answer: "Most kitchen renovations take 4-8 weeks depending on the scope. Standard kitchens typically take 4-5 weeks, while premium and luxury kitchens with custom features may take 6-8 weeks."
                  },
                  {
                    question: "Do you handle council approvals?",
                    answer: "Yes, we manage all necessary approvals including council permits and strata applications. For apartment renovations, we coordinate with building management to ensure compliance with all regulations."
                  }
                ].map((faq, index) => (
                  <Collapsible key={index}>
                    <div className="border border-border bg-background">
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors">
                          <h4 className="text-left text-base font-medium">{faq.question}</h4>
                          <ChevronDown className="w-5 h-5 text-brand-teal transition-transform" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="px-4 pb-4 text-sm text-muted-foreground">
                          {faq.answer}
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ))}
              </div>
            </div>

            <div className="space-y-8">
            {[
              {
                title: "Standard Kitchen",
                price: "$35,000 - $50,000",
                timeframe: "4-5 weeks",
                features: [
                  "Quality laminate or stone benchtops",
                  "Polyurethane or melamine cabinets",
                  "Standard appliance package",
                  "Quality tapware & sink",
                  "LED downlighting",
                ]
              },
              {
                title: "Premium Kitchen",
                price: "$50,000 - $70,000",
                timeframe: "5-6 weeks",
                features: [
                  "Premium stone benchtops (Caesarstone/Quantum)",
                  "2-pac painted or timber veneer cabinets",
                  "Premium appliance package",
                  "Designer tapware & undermount sink",
                  "Feature lighting & splashback",
                ]
              },
              {
                title: "Luxury Kitchen",
                price: "$70,000 - $100,000+",
                timeframe: "6-8 weeks",
                features: [
                  "Natural stone or engineered benchtops",
                  "Custom timber or 2-pac joinery",
                  "High-end integrated appliances",
                  "Kitchen island & butler's pantry",
                  "Smart home integration & automation",
                ]
              },
            ].map((tier, index) => (
              <Collapsible key={index}>
                <div className="p-6 border-2 border-border hover:border-brand-teal bg-background transition-all duration-300 fade-in">
                  <h3 className="text-xl font-serif mb-3">{tier.title}</h3>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-brand-teal mb-1">{tier.price}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {tier.timeframe}
                    </p>
                  </div>
                  <CollapsibleTrigger className="w-full mb-4">
                    <button className="w-full px-4 py-2 border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-colors text-sm">
                      View Details
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
            </div>
          </div>

          <div className="text-center">
            <NavLink
              to="/pricing"
              className="inline-block text-sm tracking-wide px-8 py-3 bg-brand-teal text-white hover:bg-brand-teal-dark transition-colors"
            >
              Download Full Kitchen Renovation Guide
            </NavLink>
          </div>
        </div>
      </section>

      {/* Related Blog Section */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">Kitchen Renovation Insights</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Expert tips and inspiration for your kitchen transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Top Kitchen Trends for 2024",
                excerpt: "Discover the latest design trends shaping modern Sydney kitchens, from sustainable materials to smart appliances.",
                readTime: "5 min read"
              },
              {
                title: "Maximizing Storage in Small Kitchens",
                excerpt: "Expert tips on clever storage solutions that make the most of compact kitchen spaces without compromising style.",
                readTime: "4 min read"
              },
              {
                title: "Choosing the Right Benchtop Material",
                excerpt: "A comprehensive guide to benchtop materials—from stone to laminate—to help you make the best choice for your lifestyle.",
                readTime: "6 min read"
              }
            ].map((article, index) => (
              <div key={index} className="bg-background border border-border hover:border-brand-teal transition-all duration-300 fade-in">
                <div className="h-[200px] bg-secondary/50"></div>
                <div className="p-6">
                  <p className="text-xs text-brand-teal mb-3 uppercase tracking-wide">{article.readTime}</p>
                  <h3 className="text-xl font-serif mb-3">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <NavLink
                    to="/contact"
                    className="text-sm text-brand-teal hover:underline inline-flex items-center gap-2"
                  >
                    Read More
                    <span>→</span>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-serif mb-6">Ready to Transform Your Kitchen?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Get started with a free consultation and detailed quote for your kitchen renovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NavLink
              to="/contact"
              className="inline-block text-sm tracking-wide px-10 py-4 bg-background text-foreground hover:bg-secondary transition-colors"
            >
              Request a Quote
            </NavLink>
            <NavLink
              to="/pricing"
              className="inline-block text-sm tracking-wide px-10 py-4 border-2 border-background text-primary-foreground hover:bg-background hover:text-foreground transition-colors"
            >
              Use Online Estimator
            </NavLink>
          </div>
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Free Design Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Fixed Price Quotes</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenRenovations;
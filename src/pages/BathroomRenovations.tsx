import { NavLink } from "@/components/NavLink";
import { Star, CheckCircle2, Award, Shield, Clock, Paintbrush, FileCheck, Users, Phone, MapPin, ChevronDown } from "lucide-react";
import projectBathroom from "@/assets/project-bathroom.jpg";
import { useState } from "react";

const BathroomRenovations = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner with CTA */}
      <section className="relative h-[80vh] w-full bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${projectBathroom})` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-6xl lg:text-7xl font-serif leading-tight text-background fade-in mb-6">
              Bathroom Renovations<br />Sydney
            </h1>
            <p className="text-xl lg:text-2xl text-background/90 mb-12 max-w-3xl mx-auto">
              Transform your bathroom into a stunning sanctuary with Sydney's most trusted renovation specialists
            </p>
            <NavLink
              to="/contact"
              className="inline-block px-10 py-4 bg-brand-teal text-white hover:bg-brand-teal-dark transition-all duration-300 text-lg tracking-wide"
            >
              Get a Free Quote
            </NavLink>
          </div>
        </div>
      </section>

      {/* Social Proofing - Awards/Reviews */}
      <section className="py-20 px-6 lg:px-12 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-10 h-10 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <p className="text-2xl font-serif mb-8">Rated 5 Stars by Over 500 Happy Clients</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              <div className="flex items-center gap-2">
                <span className="text-[#4285F4] text-2xl font-bold">G</span>
                <span className="text-[#EA4335] text-2xl font-bold">o</span>
                <span className="text-[#FBBC04] text-2xl font-bold">o</span>
                <span className="text-[#4285F4] text-2xl font-bold">g</span>
                <span className="text-[#34A853] text-2xl font-bold">l</span>
                <span className="text-[#EA4335] text-2xl font-bold">e</span>
              </div>
              <div className="text-[#1877F2] text-2xl font-bold">facebook</div>
              <div className="text-[#7AC142] text-2xl font-bold">houzz</div>
              <div className="text-2xl font-bold">
                <span className="text-[#FF6B35]">Product</span>
                <span className="text-foreground">Review</span>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { year: "2023", title: "Best Bathroom Renovator" },
              { year: "2022", title: "Excellence in Design" },
              { year: "2021", title: "Customer Choice Award" },
              { year: "2020", title: "Innovation Award" },
            ].map((award, index) => (
              <div key={index} className="text-center p-6 border border-border">
                <Award className="w-12 h-12 mx-auto mb-4 text-brand-teal" />
                <p className="text-sm text-muted-foreground mb-2">{award.year}</p>
                <p className="font-serif text-sm">{award.title}</p>
              </div>
            ))}
          </div>
      </div>
    </section>

    {/* Social Proof - Testimonials */}
    <section className="py-32 px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-5xl font-serif mb-16 text-center">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah M.",
              location: "Mosman",
              text: "Novalé transformed our dated bathroom into a stunning modern space. The team was professional, punctual, and the quality is exceptional. Highly recommend!",
              rating: 5
            },
            {
              name: "David & Lisa K.",
              location: "Double Bay",
              text: "From design to completion, the entire process was seamless. The BuilderTrend app kept us informed every step of the way. Our bathroom is beyond our expectations!",
              rating: 5
            },
            {
              name: "Michael T.",
              location: "Bondi",
              text: "As an apartment owner, I was worried about the renovation process. Novalé handled all strata approvals and completed the work with minimal disruption. Fantastic result!",
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

    {/* Why Novale */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">Why Choose Novalé</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Sydney's leading bathroom renovation specialists for houses and apartments across Greater Sydney
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Award,
                title: "ISO 9001 Certified",
                description: "First bathroom renovator in Australia to achieve ISO 9001 certification for quality management systems."
              },
              {
                icon: FileCheck,
                title: "Transparent Pricing",
                description: "No hidden costs. Detailed quotes with clear breakdowns so you know exactly what you're paying for."
              },
              {
                icon: Paintbrush,
                title: "Complimentary Design Services",
                description: "Work with our expert designers to create your perfect bathroom. 3D renders included at no extra cost."
              },
              {
                icon: CheckCircle2,
                title: "BuilderTrend Technology",
                description: "Track your renovation progress in real-time with our advanced project management platform."
              },
              {
                icon: Shield,
                title: "10 Year Waterproofing Warranty",
                description: "Industry-leading 10-year warranty on all waterproofing. Your investment is protected."
              },
              {
                icon: Users,
                title: "Fully Licensed & Insured",
                description: "NSW licensed builder with comprehensive insurance. Member of Master Builders Association and HIA."
              },
            ].map((usp, index) => (
              <div key={index} className="fade-in">
                <usp.icon className="w-12 h-12 text-brand-teal mb-6" />
                <h3 className="text-2xl font-serif mb-4">{usp.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">Our Process</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            A seamless, stress-free renovation journey from start to finish
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                number: "01",
                title: "Initial Consultation & Design",
                description: "Meet with our team to discuss your vision, needs, and budget. We'll provide expert advice and design concepts tailored to your space."
              },
              {
                number: "02",
                title: "Quote & Planning",
                description: "Receive a detailed, transparent quote with 3D renders. We'll refine the design until it's perfect and plan every detail of your renovation."
              },
              {
                number: "03",
                title: "Approvals & Documentation",
                description: "We handle all council approvals, strata coordination, and necessary permits. Sit back while we take care of the paperwork."
              },
              {
                number: "04",
                title: "Construction & Completion",
                description: "Our expert team transforms your bathroom with minimal disruption. Track progress via BuilderTrend and enjoy your stunning new space."
              },
            ].map((step, index) => (
              <div key={index} className="fade-in">
                <div className="text-6xl font-serif text-brand-teal mb-6">{step.number}</div>
                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to start the process */}
      <section className="py-20 px-6 lg:px-12 bg-brand-teal text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to Start Your Bathroom Renovation?</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote. No obligation, just expert advice and transparent pricing.
          </p>
          <NavLink
            to="/contact"
            className="inline-block text-sm tracking-wide px-10 py-4 border-2 border-white hover:bg-white hover:text-brand-teal transition-colors"
          >
            Get a Free Quote
          </NavLink>
        </div>
      </section>

      {/* Projects */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">Recent Projects</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            See how we've transformed bathrooms across Sydney
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Vaucluse Bathroom", location: "Vaucluse", type: "House", budget: "$35,000" },
              { title: "Bondi Apartment", location: "Bondi Beach", type: "Apartment", budget: "$28,000" },
              { title: "Mosman Ensuite", location: "Mosman", type: "House", budget: "$42,000" },
              { title: "Double Bay Renovation", location: "Double Bay", type: "Apartment", budget: "$38,000" },
              { title: "Paddington Heritage", location: "Paddington", type: "House", budget: "$45,000" },
              { title: "North Sydney Modern", location: "North Sydney", type: "Apartment", budget: "$32,000" },
            ].map((project, index) => (
              <div key={index} className="group fade-in">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={projectBathroom}
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
        </div>
      </section>

      {/* Pricing & Timeframe */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">Pricing & Timeframe</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Transparent pricing guides for every bathroom renovation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                title: "Standard Bathroom",
                price: "$25,000 - $35,000",
                timeframe: "3-4 weeks",
                features: [
                  "Quality fixtures & fittings",
                  "Standard tile selection",
                  "Frameless shower screen",
                  "LED mirror with demister",
                  "Waterproofing with 10yr warranty",
                ]
              },
              {
                title: "Premium Bathroom",
                price: "$35,000 - $50,000",
                timeframe: "4-5 weeks",
                features: [
                  "Premium fixtures & fittings",
                  "Designer tile selection",
                  "Underfloor heating",
                  "Rain shower & hand shower",
                  "Custom cabinetry",
                ]
              },
              {
                title: "Luxury Bathroom",
                price: "$50,000+",
                timeframe: "5-6 weeks",
                features: [
                  "High-end designer fixtures",
                  "Natural stone surfaces",
                  "Freestanding bath",
                  "Smart technology integration",
                  "Bespoke joinery & design",
                ]
              },
            ].map((tier, index) => (
              <div key={index} className="p-8 border-2 border-border hover:border-brand-teal bg-background transition-all duration-300 fade-in">
                <h3 className="text-2xl font-serif mb-4">{tier.title}</h3>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-brand-teal mb-2">{tier.price}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {tier.timeframe}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <NavLink
              to="/pricing"
              className="inline-block text-sm tracking-wide px-8 py-3 bg-brand-teal text-white hover:bg-brand-teal-dark transition-colors"
            >
              Download Full Bathroom Renovation Guide
            </NavLink>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-6 text-center">Areas We Service</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Proudly serving bathroom renovations across Greater Sydney
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto mb-12">
            {[
              "Mosman", "Vaucluse", "Double Bay", "Bondi", "Paddington", "Woollahra",
              "North Sydney", "Cremorne", "Neutral Bay", "Manly", "Balmain", "Rozelle",
              "Newtown", "Surry Hills", "Darlinghurst", "Potts Point", "Eastern Suburbs", "North Shore"
            ].map((area, index) => (
              <div key={index} className="text-center p-4 border border-border hover:border-brand-teal transition-colors">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-brand-teal" />
                <p className="text-sm">{area}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">Don't see your area? Contact us to confirm service availability</p>
            <NavLink
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 border border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif mb-6 text-center">Frequently Asked Questions</h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Everything you need to know about bathroom renovations
          </p>

          <div className="space-y-4">
            {[
              {
                question: "How long does a bathroom renovation take?",
                answer: "A standard bathroom renovation typically takes 3-4 weeks from start to finish. Premium and luxury renovations may take 4-6 weeks depending on complexity and custom features. We provide a detailed timeline in your quote."
              },
              {
                question: "What does your bathroom renovation include?",
                answer: "Our full bathroom renovations include demolition, waterproofing, plumbing, tiling, electrical work, fixtures and fittings installation, painting, and final cleaning. All work comes with our 10-year waterproofing warranty."
              },
              {
                question: "Do you handle strata approvals for apartments?",
                answer: "Yes! We have extensive experience with apartment renovations and handle all strata approvals, building access coordination, and compliance requirements. This is all included in our service."
              },
              {
                question: "What's included in the free design service?",
                answer: "Our complimentary design service includes an initial consultation, space planning, fixture selection advice, and 3D renders of your new bathroom. You'll see exactly what your renovation will look like before work begins."
              },
              {
                question: "How much does a bathroom renovation cost?",
                answer: "Bathroom renovations typically range from $25,000 to $50,000+ depending on size, materials, and features. We provide transparent, itemized quotes with no hidden costs so you know exactly what you're paying for."
              },
              {
                question: "Do I need to be home during the renovation?",
                answer: "No, you don't need to be home during the renovation. Our team will have secure access and you can track progress remotely via our BuilderTrend app. We'll coordinate key handover and ensure your home is secure."
              },
              {
                question: "What warranty do you provide?",
                answer: "We provide a comprehensive 10-year waterproofing warranty and all work is covered by our insurance. We're fully licensed NSW builders and members of Master Builders Association and HIA."
              },
            ].map((faq, index) => (
              <div key={index} className="border border-border bg-background fade-in">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-secondary/30 transition-colors"
                >
                  <h3 className="text-lg font-serif pr-8">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-serif mb-6">Start Your Bathroom Renovation Today</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Book your free consultation and receive a transparent quote with 3D renders. No obligation, just expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/contact"
              className="inline-block text-sm tracking-wide px-10 py-4 border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Get a Free Quote
            </NavLink>
            <a
              href="tel:1300668253"
              className="inline-flex items-center justify-center gap-2 text-sm tracking-wide px-10 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call 1300 NOVALE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BathroomRenovations;

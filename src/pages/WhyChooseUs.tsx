import { NavLink } from "react-router-dom";
import heroImage from "@/assets/about-hero.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import { Shield, DollarSign, Monitor, Award, CheckCircle, Users } from "lucide-react";

const WhyChooseUs = () => {
  const stats = [
    { value: "22+", label: "Years of Excellence" },
    { value: "236+", label: "5 Star Reviews on Google" },
    { value: "1000s", label: "Bathrooms, Kitchens & Laundries Delivered" },
  ];

  const valuePropositions = [
    {
      icon: Shield,
      title: "Quality Assured Process",
      description: "Our processes are designed and audited to ISO9001 standards. This means we consistently deliver the highest quality service to exceed expectations."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Our quotes are fixed, upfront with no hidden fees. We provide a detailed Scope of Works so you know exactly what to expect and we can work to your budget."
    },
    {
      icon: Users,
      title: "Interior Design Services",
      description: "Get expert advice and service from our Novalé Interior Designers who do over 200 bathroom, kitchen and laundry renovations per year."
    },
    {
      icon: Monitor,
      title: "Track Your Project Online",
      description: "Get daily updates from your phone, tablet or computer through our app so you know how your project is going and everything is in one place."
    },
    {
      icon: Award,
      title: "10 Year Waterproofing Guarantee",
      description: "We use a premium waterproofing system that provides a guarantee that exceeds the standard 7 years."
    },
    {
      icon: CheckCircle,
      title: "Fully Licensed & Insured",
      description: "Our trades are all fully qualified and experienced. We hire from the top % of applicants and induct them to Novalé standards."
    },
  ];

  const processSteps = [
    { number: "1", title: "Planning & Details" },
    { number: "2", title: "Design & Concept" },
    { number: "3", title: "Construction & Testing" },
    { number: "4", title: "Completion & Handover" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Why Choose Novalé" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="text-3xl font-serif mb-4 fade-in">
              Why Choose Novalé
            </h1>
            <p className="text-lg max-w-2xl mx-auto px-6 fade-in">
              Bathroom, Kitchen & Laundry renovations on time, on budget and stress-free
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">Numbers We're Proud Of</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in">
                <div className="text-3xl font-serif mb-2">{stat.value}</div>
                <p className="text-base opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-serif mb-6 fade-in">
                Our Approach
              </h2>
            </div>
            <div className="space-y-6 fade-in">
              <p className="text-lg leading-relaxed text-muted-foreground">
                We set out to be leaders in the bathroom renovation space by being refreshingly open, 
                design driven, knowledgeable and professional. Old school values with a new school approach.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our aim is to make it easy for you by joining the dots throughout your journey, from 
                design, layout and materials to quotation and installation; demystifying all the 
                stumbling blocks along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get with Novalé */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif mb-16 text-center">What You Get with Novalé</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {valuePropositions.map((item, index) => (
              <div key={index} className="fade-in">
                <item.icon className="w-10 h-10 text-brand-teal mb-4" />
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif mb-16 text-center">Our Process is 4 Steps</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center fade-in">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-teal text-background flex items-center justify-center text-2xl font-serif">
                  {step.number}
                </div>
                <h3 className="text-lg font-serif">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in">
            <div>
              <img 
                src={projectBathroom} 
                alt="Design Excellence" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-serif mb-6">Design-Driven Excellence</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                It's our dream to deliver your dream, and we are committed to getting every detail right, 
                starting with design. A Novalé designer will ensure that every detail is accounted for, 
                customising your bathroom design to satisfy your needs, budget and style.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Led by an experienced Project Manager, our skilled and insured tradesmen will fulfil your 
                dream with precision, keeping you up-to-date along the way with online project management software.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in">
            <div className="lg:order-2">
              <img 
                src={projectKitchen} 
                alt="Quality Craftsmanship" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-2xl font-serif mb-6">Quality in Every Detail</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Novalé is committed to achieving quality in every respect, from operational processes to 
                workmanship and customer service. For this reason, we have sought out to achieve an ISO 9001 
                Quality Certification—a global quality management system standard.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We are the only bathroom renovation company to hold a certification of this kind, 
                demonstrating our commitment to delivering the highest quality workmanship and service at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            Ready to Experience the Novalé Difference?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            Let us show you why thousands of Sydney homeowners have trusted us with their renovation dreams.
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Get Your Free Quote
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;

import { NavLink } from "react-router-dom";
import { Briefcase, Users, Heart, Star } from "lucide-react";
import heroImage from "@/assets/about-hero.jpg";

const Careers = () => {
  const benefits = [
    {
      icon: Users,
      title: "Supportive Team",
      description: "Work alongside experienced professionals who are passionate about what they do and eager to help you grow."
    },
    {
      icon: Heart,
      title: "Employee Growth",
      description: "We invest in our team's development with training, mentorship, and opportunities for career advancement."
    },
    {
      icon: Star,
      title: "Quality Focus",
      description: "Be part of a company that takes pride in delivering exceptional results for every client, every time."
    },
    {
      icon: Briefcase,
      title: "Rewarding Work",
      description: "Experience the satisfaction of transforming spaces and making clients' renovation dreams come true."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Join the Novalé Team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="text-3xl font-serif mb-4 fade-in">
              Join the Novalé Team
            </h1>
            <p className="text-lg max-w-2xl mx-auto px-6 fade-in">
              Build your career with Sydney's trusted renovation specialists
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-serif mb-6 fade-in">
                A Brilliant Place to Work
              </h2>
            </div>
            <div className="space-y-6 fade-in">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Novalé Bathrooms are committed to making dreams come true for both our clients and 
                employees. With most of our time spent at work, it's imperative that we receive 
                enjoyment and fulfilment from our career.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                For this reason, we aim to make Novalé a brilliant place to work; one that supports 
                employee growth and fosters success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif mb-4">{benefit.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="job-application" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif mb-6 text-center">Submit Your Application</h2>
          <p className="text-base text-muted-foreground text-center mb-12">
            If you are just as passionate about bathroom renovations and design as we are, 
            then send us your CV and tell us a bit about the skills and experience you can 
            offer our team and our clients.
          </p>
          
          <form className="space-y-6 fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full px-4 py-3 border border-border bg-background focus:border-brand-teal focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="w-full px-4 py-3 border border-border bg-background focus:border-brand-teal focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 border border-border bg-background focus:border-brand-teal focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-3 border border-border bg-background focus:border-brand-teal focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium mb-2">
                Position of Interest
              </label>
              <select
                id="position"
                className="w-full px-4 py-3 border border-border bg-background focus:border-brand-teal focus:outline-none transition-colors"
              >
                <option value="">Select a position...</option>
                <option value="site-manager">Site Manager</option>
                <option value="interior-designer">Interior Designer</option>
                <option value="project-coordinator">Project Coordinator</option>
                <option value="sales-consultant">Sales Consultant</option>
                <option value="trades">Trades (Tiler, Carpenter, Plumber)</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Tell us about yourself *
              </label>
              <textarea
                id="message"
                rows={6}
                required
                placeholder="Share your skills, experience, and why you'd like to join the Novalé team..."
                className="w-full px-4 py-3 border border-border bg-background focus:border-brand-teal focus:outline-none transition-colors resize-none"
              />
            </div>

            <div>
              <label htmlFor="cv" className="block text-sm font-medium mb-2">
                Upload CV (PDF or Word)
              </label>
              <input
                type="file"
                id="cv"
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 border border-border bg-background focus:border-brand-teal focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            Questions About Working With Us?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            We'd love to hear from you. Reach out to learn more about opportunities at Novalé.
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Contact Us
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Careers;

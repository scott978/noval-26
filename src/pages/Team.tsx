import { NavLink } from "react-router-dom";
import { Award, Heart, Sparkles, User } from "lucide-react";
import heroImage from "@/assets/about-hero.jpg";

const Team = () => {
  const getInitials = (name: string) => name.charAt(0);
  const leadership = [
    {
      name: "Steve",
      role: "Director",
      description: "One of the founders of Novalé Bathrooms. He started his career on the tools, working alongside his Father. Being constantly called out to jobs to fix inferior work, finish jobs where contractors hadn't turned up, or start from scratch because customers just weren't happy with the work. An endless task it seemed, but one that became the catalyst for him and Marina to launch Novalé Bathrooms."
    },
    {
      name: "Marina",
      role: "Director, Head of Brand & Design",
      description: "Growing up in the Construction business, building is in Marina's blood. She's never happier than when chatting to clients and ensuring their dreams are being realised. She can proudly say she oversees all the designs that are sent from our office to our clients and makes sure the customer experience is being upheld throughout the entire journey with Novalé Bathrooms."
    },
    {
      name: "Bryan",
      role: "Head of Operational Enablement",
      description: "Bryan has worked for 20+ years in the construction industry, starting as an apprentice carpenter, working with small and large businesses in estimating, sales estimating, project management, team leader and management roles. At Novalé Bathrooms he manages Operations and looks after QA and Compliance to make sure we are performing as we should be and delivering what we promise!"
    },
    {
      name: "Sophie",
      role: "Finance Manager",
      description: "Sophie has a Bachelor of Business and Commerce majoring in Accounting and is a qualified CPA. She is a finance all-rounder and has worked in various industries as a Finance Manager. Growing up around the construction industry, she has great appreciation of the work that Novalé does for its clients."
    },
  ];

  const designTeam = [
    {
      name: "Jamie",
      role: "Interior Designer",
      description: "Jamie has a Bachelor Degree in Interior Design – Residential, with proficiency in CAD, graphic design and architectural drawings. She is a highly driven designer, who has a strong knowledge of the end to end process of Bathroom renovations."
    },
    {
      name: "Catherine",
      role: "Freelance Interior Designer",
      description: "Catherine is a highly skilled and creative Interior Designer and Stylist, renowned for her exceptional work in residential spaces. With a keen eye for detail and a passion for transforming everyday bathrooms into luxurious sanctuaries."
    },
    {
      name: "Anna",
      role: "Custom Design Specialist",
      description: "Anna is our Custom Design Specialist, holding a Bachelor in Interior Design and bringing over a decade of experience to the team. Since 2012, she has specialised in kitchen and renovation design, driven by a genuine passion for helping clients reimagine and transform their spaces."
    },
    {
      name: "Julia",
      role: "Interior Designer",
      description: "Julia brings over three years of interior design experience to every project, paired with a keen eye for aesthetics and a passion for creative solutions. Her five years in the bathroom industry as a Sales Consultant gives her strong product knowledge."
    },
    {
      name: "Ireland",
      role: "Interior Designer",
      description: "Ireland focuses on the selections process, guiding clients through finishes and fixtures, and prepares detailed documentation for site managers to ensure seamless project execution."
    },
    {
      name: "Tahlia",
      role: "Design Administrator",
      description: "Tahlia assists with design tasks and daily administration, ensuring smooth operations across the design team."
    },
    {
      name: "Krystal",
      role: "Marketing Co-Ordinator & Stylist",
      description: "Krystal looks after Novalé Bathrooms social media accounts and developing brand awareness. As an interior stylist with a passion for photography, Krystal also co-ordinates, styles and photographs our completed bathrooms."
    },
  ];

  const projectDelivery = [
    {
      name: "Kristian",
      role: "Head of Project Delivery",
      description: "Carpenter by trade with 17+ years experience, Kristian oversees all Sydney projects ensuring quality and timely delivery across all renovations."
    },
    {
      name: "Marc",
      role: "Site Manager",
      description: "Tiler with 20+ years experience, Marc has worked with the director since the company's inception and brings unparalleled expertise to every project."
    },
    {
      name: "Andrew",
      role: "Site Manager",
      description: "Carpenter with 15+ years experience in residential construction and furniture business leadership, Andrew ensures every project meets Novalé's high standards."
    },
    {
      name: "Wayne",
      role: "Site Manager",
      description: "Veteran professional with over 50 years of experience as a carpenter and joiner, Wayne brings decades of craftsmanship to every renovation."
    },
    {
      name: "Zach",
      role: "Site Manager",
      description: "Carpenter by trade focused on the Hills District, Zach is passionate about end-to-end project satisfaction and client communication."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Novalé Team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="text-3xl font-serif mb-4 fade-in">
              Our Team
            </h1>
            <p className="text-lg max-w-2xl mx-auto px-6 fade-in">
              Meet the passionate professionals behind your dream renovations
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-serif mb-6 fade-in">
                The Novalé Family
              </h2>
            </div>
            <div className="space-y-6 fade-in">
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Novalé, our team is our greatest asset. Founded by husband and wife duo Steve and Marina 
                Novkovic, we've grown into an extended family of skilled professionals who share a passion 
                for delivering exceptional renovations.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Each member brings unique expertise and dedication to ensuring your renovation journey 
                is seamless from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">Leadership & Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((member, index) => (
              <div key={index} className="bg-background p-8 fade-in">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-primary">{getInitials(member.name)}</span>
                </div>
                <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                <p className="text-sm text-brand-teal mb-4">{member.role}</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">Design & Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designTeam.map((member, index) => (
              <div key={index} className="border border-border p-6 fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-serif text-primary">{getInitials(member.name)}</span>
                </div>
                <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                <p className="text-sm text-brand-teal mb-4">{member.role}</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Delivery */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">Project Delivery & Site Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectDelivery.map((member, index) => (
              <div key={index} className="bg-background p-6 fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-serif text-primary">{getInitials(member.name)}</span>
                </div>
                <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                <p className="text-sm text-brand-teal mb-4">{member.role}</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-4">Excellence</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We're committed to delivering the highest quality workmanship in every project, 
                backed by our ISO 9001 certification.
              </p>
            </div>
            <div className="text-center fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-4">Integrity</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Honest communication and transparent processes are at the heart of how we work 
                with every client.
              </p>
            </div>
            <div className="text-center fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-4">Passion</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We love what we do, and it shows in every detail of your renovation. Your dream 
                becomes our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your renovation project and see how we can bring your vision to life.
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

export default Team;

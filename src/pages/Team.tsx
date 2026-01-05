import { NavLink } from "react-router-dom";
import heroImage from "@/assets/about-hero.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Steve Novkovic",
      role: "Co-Founder & Master Craftsman",
      description: "With over 22 years of experience, Steve brings exceptional craftsmanship and attention to detail to every project. His commitment to quality has made Novalé a leader in the renovation industry."
    },
    {
      name: "Marina Novkovic",
      role: "Co-Founder & Design Director",
      description: "Marina's design flair and eye for aesthetics ensure every Novalé project is both beautiful and functional. She works closely with clients to bring their vision to life."
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
        <div className="absolute inset-0 bg-foreground/20"></div>
      </section>

      {/* Team Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-3xl font-serif mb-6 fade-in">
                Meet Our Team
              </h1>
            </div>
            <div className="space-y-6 fade-in">
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Novalé, our team is our greatest asset. Founded by husband and wife duo Steve and Marina 
                Novkovic, we've grown into an extended family of skilled professionals who share a passion 
                for delivering exceptional renovations.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The passionate professionals behind your dream renovations, dedicated to bringing your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-background p-8 fade-in">
                <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                <p className="text-brand-teal mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">
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
              <h3 className="text-xl font-serif mb-4">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to delivering the highest quality workmanship in every project, 
                backed by our ISO 9001 certification.
              </p>
            </div>
            <div className="text-center fade-in">
              <h3 className="text-xl font-serif mb-4">Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Honest communication and transparent processes are at the heart of how we work 
                with every client.
              </p>
            </div>
            <div className="text-center fade-in">
              <h3 className="text-xl font-serif mb-4">Passion</h3>
              <p className="text-muted-foreground leading-relaxed">
                We love what we do, and it shows in every detail of your renovation. Your dream 
                becomes our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your renovation project and see how we can bring your vision to life.
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-brand-teal-dark transition-colors"
          >
            Get Your Free Quote
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Team;

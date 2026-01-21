import { NavLink } from "react-router-dom";
import heroImage from "@/assets/about-hero.jpg";
import { Award, Shield, Star, Trophy } from "lucide-react";

const Accreditations = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Novalé Accreditations" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="text-3xl font-serif mb-4 fade-in">
              Accreditations
            </h1>
            <p className="text-lg max-w-2xl mx-auto px-6 fade-in">
              Industry-leading certifications and award-winning service
            </p>
          </div>
        </div>
      </section>

      {/* ISO 9001 Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-brand-teal" />
                <h2 className="text-2xl font-serif">ISO 9001 Quality Certification</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Novalé is the first and only bathroom renovation company in Australia to hold 
                the prestigious ISO 9001 Award. ISO is an Independent Global Body that assesses 
                your work on every level, to ensure you deliver to the highest quality standards.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                ISO 9001 is a quality management system standard that is recognised worldwide. 
                It confirms that Novalé Bathrooms have put the effort and procedures in place 
                to enhance our operation system, in order to meet this high standard.
              </p>
            </div>
            <div className="bg-secondary/30 p-12 fade-in">
              <h3 className="text-xl font-serif mb-6">What does this mean for our customers?</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Novalé will continuously supply the highest level of service that will always 
                meet and exceed our customers' requirements and expectations. It ensures our 
                customers will have their renovation executed by industry leaders with 
                professionalism and care, resulting in complete customer satisfaction. We work 
                on each project with dedication and high quality workmanship is always guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Houzz Awards */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <div className="flex justify-center mb-6">
              <Star className="w-12 h-12 text-brand-teal" />
            </div>
            <h2 className="text-2xl font-serif mb-6">Novalé Wins Houzz Awards</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Best of Houzz awards are given annually, in three categories: Design, Customer Service 
              and Photography. Design awards honor professionals whose work was the most popular among 
              the Houzz community. Customer Service honors are based on several factors, including a 
              pro's overall rating on Houzz and client reviews submitted in that year.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 text-center fade-in">
              <Award className="w-10 h-10 text-brand-teal mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-2">Best of Design</h3>
              <p className="text-base text-muted-foreground">
                Recognized for exceptional design work that inspires the Houzz community
              </p>
            </div>
            <div className="bg-background p-8 text-center fade-in">
              <Award className="w-10 h-10 text-brand-teal mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-2">Best of Service</h3>
              <p className="text-base text-muted-foreground">
                Honored for outstanding customer service and client satisfaction
              </p>
            </div>
            <div className="bg-background p-8 text-center fade-in">
              <Award className="w-10 h-10 text-brand-teal mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-2">Multiple Years</h3>
              <p className="text-base text-muted-foreground">
                Consistent excellence recognized year after year
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIA Awards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="fade-in">
              <div className="flex items-center gap-4 mb-6">
                <Trophy className="w-10 h-10 text-brand-teal" />
                <h2 className="text-2xl font-serif">HIA NSW Region Professional Small Builder/Renovator</h2>
              </div>
              <p className="text-sm text-brand-teal mb-4">2023 Finalists</p>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                At Novalé, we take pride in our dedication to crafting exceptional spaces that 
                reflect the unique vision and lifestyle of our clients. Being named a finalist 
                in the HIA NSW Region Professional Small Builder/Renovator Awards is a testament 
                to our team's expertise, creativity, and passion for delivering outstanding results.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We extend our gratitude to the HIA for this honour, and we look forward to 
                continuing our mission of transforming dreams into reality.
              </p>
            </div>
            <div className="fade-in">
              <div className="flex items-center gap-4 mb-6">
                <Trophy className="w-10 h-10 text-brand-teal" />
                <h2 className="text-2xl font-serif">HIA-CSR Hunter Region Bathroom Design</h2>
              </div>
              <p className="text-sm text-brand-teal mb-4">2023 Finalists</p>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                At Novalé, we are thrilled that our team was selected as a finalist in the 
                prestigious 2023 HIA-CSR Hunter Housing and Kitchen and Bathroom Awards for 
                Bathroom Design for our Woy Woy Bay project.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                This recognition highlights our dedication to innovative bathroom design, 
                attention to detail, and commitment to creating spaces that truly elevate 
                the art of living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Memberships */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-12 fade-in">Industry Memberships</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="fade-in">
              <div className="h-20 flex items-center justify-center mb-4">
                <span className="text-xl font-serif text-muted-foreground">ISO 9001</span>
              </div>
              <p className="text-sm text-muted-foreground">Quality Certified</p>
            </div>
            <div className="fade-in">
              <div className="h-20 flex items-center justify-center mb-4">
                <span className="text-xl font-serif text-muted-foreground">HIA</span>
              </div>
              <p className="text-sm text-muted-foreground">Housing Industry Association</p>
            </div>
            <div className="fade-in">
              <div className="h-20 flex items-center justify-center mb-4">
                <span className="text-xl font-serif text-muted-foreground">MBA</span>
              </div>
              <p className="text-sm text-muted-foreground">Master Builders Association</p>
            </div>
            <div className="fade-in">
              <div className="h-20 flex items-center justify-center mb-4">
                <span className="text-xl font-serif text-muted-foreground">Houzz</span>
              </div>
              <p className="text-sm text-muted-foreground">Best of Houzz Winner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            Experience Award-Winning Service
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            Trust your renovation to Sydney's most accredited bathroom, kitchen, and laundry 
            renovation company.
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

export default Accreditations;

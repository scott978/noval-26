import { NavLink } from "react-router-dom";
import heroImage from "@/assets/about-hero.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Why Choose Novalé" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20"></div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl lg:text-6xl font-serif mb-6 fade-in">
                Why Choose Novalé
              </h1>
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

      {/* Key Benefits */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">ISO 9001 Certified</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are the only bathroom renovation company to hold ISO 9001 Quality Certification, 
                demonstrating our unwavering commitment to delivering the highest quality workmanship 
                and service at all times.
              </p>
            </div>
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">22+ Years Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Masters of our trade with over two decades of experience in bathroom installations. 
                We've refined our craft to perfection, ensuring every project benefits from our 
                extensive knowledge.
              </p>
            </div>
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">Stress-Free Process</h3>
              <p className="text-muted-foreground leading-relaxed">
                We join the dots throughout your journey, from design and layout to materials, 
                quotation and installation—demystifying all the stumbling blocks along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 px-6">
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
              <h2 className="text-4xl font-serif mb-6">Design-Driven Excellence</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                It's our dream to deliver your dream, and we are committed to getting every detail right, 
                starting with design. A Novalé designer will ensure that every detail is accounted for, 
                customising your bathroom design to satisfy your needs, budget and style.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
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
              <h2 className="text-4xl font-serif mb-6">Quality in Every Detail</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Novalé is committed to achieving quality in every respect, from operational processes to 
                workmanship and customer service. For this reason, we have sought out to achieve an ISO 9001 
                Quality Certification—a global quality management system standard.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                This certification demonstrates our commitment to delivering the highest quality workmanship 
                and service at all times. We don't just meet standards; we set them.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="text-4xl font-serif mb-6">Family Values</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded by husband and wife duo Steve and Marina Novkovic, Novalé was established to bring 
              positivity to an industry that was riddled with issues. Steve's high quality workmanship 
              coupled with Marina's design flair work together seamlessly. Now with an extended family, 
              the Novalé team work together to deliver dreams that are built from cutting-edge design, 
              quality workmanship and superb service.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-4xl font-serif mb-6">
            Ready to Experience the Novalé Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us show you why thousands of Sydney homeowners have trusted us with their renovation dreams.
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

export default WhyChooseUs;

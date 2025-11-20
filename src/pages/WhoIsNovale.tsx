import { NavLink } from "react-router-dom";
import heroImage from "@/assets/about-hero.jpg";

const WhoIsNovale = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Novalé Story" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20"></div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl lg:text-6xl font-serif mb-6 fade-in">
                Who is Novalé
              </h1>
            </div>
            <div className="space-y-6 fade-in">
              <h2 className="text-3xl font-serif">Our Story</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Novalé we set out to be the leaders in the bathroom renovation space by being 
                refreshingly open, design driven, knowledgeable and professional. Old school values 
                with a new school approach.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our aim is to make it easy for you by joining the dots throughout your journey, from 
                design, layout and materials to quotation and installation; demystifying all the 
                stumbling blocks along the way.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We are Masters of our trade, with over 21 years experience in bathroom installations. 
                We love what we do and do what we love; after all, "We Deliver Dreams" for a living!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">Detail</h3>
              <p className="text-muted-foreground leading-relaxed">
                Here at Novalé, it's our dream to deliver your dream, and we are committed to getting 
                every detail right, starting with design. A Novalé designer will ensure that every 
                detail is accounted for, customising your bathroom design to satisfy your needs, budget 
                and style. Led by an experienced Project Manager, our skilled and insured tradesmen will 
                fulfil your dream with precision, keeping you up-to-date along the way with online project 
                management software.
              </p>
            </div>
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Novalé is committed to achieving quality in every respect, from operational processes to 
                workmanship and customer service. For this reason, we have sought out to achieve an ISO 9001 
                Quality Certification (a global quality management system standard). We are the only bathroom 
                renovation company to hold a certification of this kind, demonstrating our commitment to 
                delivering the highest quality workmanship and service at all times.
              </p>
            </div>
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">Family</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded by husband and wife duo Steve and Marina Novkovic, Novalé was established to bring 
                positivity to an industry that was riddled with issues, such as inadequate and incomplete work. 
                Steve's high quality workmanship coupled with Marina's design flair work together seamlessly. 
                Now with an extended family, the Novalé team work together to deliver dreams that are built 
                from cutting-edge design, quality workmanship and superb service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-4xl font-serif mb-6">
            Meet the Novalé Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Behind every successful renovation is a dedicated team of professionals. Learn more about 
            the people who make your dream spaces a reality.
          </p>
          <NavLink 
            to="/team"
            className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-brand-teal-dark transition-colors"
          >
            Meet Our Team
          </NavLink>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-4xl font-serif mb-6">
            Starting on Your Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with the friendly team at Novalé Bathrooms today, to see how we can turn 
            your bathroom renovation dream into reality.
          </p>
          <div className="flex gap-4 justify-center">
            <NavLink 
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 border border-input hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-brand-teal-dark transition-colors"
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoIsNovale;

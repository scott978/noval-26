import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <img 
            src={aboutHero} 
            alt="Novalé craftsmanship" 
            className="w-full h-[70vh] object-cover fade-in mb-16"
          />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-7xl font-serif mb-12 fade-in">
              Enhancing lives for over 22 years
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 fade-in">
                At Novalé, we aim to lead the bathroom, kitchen and laundry renovation space 
                by being refreshingly open, design-driven, knowledgeable, and professional. 
                We are proud of pairing old school values with a new school approach.
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed fade-in">
                For over 22 years, we've been enhancing lives with stunning installations 
                that are as functional as they are beautiful. Whether it's compact or large, 
                our team expertly blends premium materials, quality craftsmanship, and timeless 
                style to deliver dream spaces on time, within budget, and to specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif mb-16 text-center">What sets us apart</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">ISO 9001 Certified</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're the first bathroom renovation company in Australia to receive ISO 9001 
                certification, demonstrating our commitment to quality management systems and 
                consistent, reliable service delivery.
              </p>
            </div>
            
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">22+ Years Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over two decades of experience, we've completed thousands of successful 
                renovations across Sydney. Our expertise ensures your project runs smoothly 
                from start to finish.
              </p>
            </div>
            
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">Stress-Free Process</h3>
              <p className="text-muted-foreground leading-relaxed">
                We handle everything—from initial design to final installation. Our dedicated 
                team manages permits, approvals, and all the details so you can enjoy a 
                hassle-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif mb-16">Our approach</h2>
          
          <div className="space-y-12">
            {[
              {
                title: "Design-Driven",
                description: "Every project begins with thoughtful design. We create 3D renders so you can visualize your space before construction begins, ensuring the final result matches your vision perfectly."
              },
              {
                title: "Transparent Communication",
                description: "Being refreshingly open means keeping you informed at every stage. You'll always know what's happening, when it's happening, and why. No surprises, just honest, clear communication."
              },
              {
                title: "On Time, On Budget",
                description: "We deliver what we promise. Your free online estimate gives you accurate expectations from day one, and we're committed to meeting both your timeline and budget."
              },
              {
                title: "Quality Craftsmanship",
                description: "We only work with premium materials and skilled tradespeople. Our attention to detail and high standards ensure your renovation will look beautiful and perform flawlessly for years to come."
              },
              {
                title: "Complete Service",
                description: "From concept to completion, we handle everything. Design, permits, construction, project management—we're your single point of contact throughout the entire journey."
              },
            ].map((value, index) => (
              <div key={index} className="border-b border-border pb-8 fade-in">
                <h3 className="text-2xl font-serif mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-serif mb-8">Awards & Recognition</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized with multiple industry awards 
            and certifications, including Houzz Service Awards and HIA finalist honors.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-background rounded">
              <div className="text-3xl font-serif mb-2">ISO 9001</div>
              <p className="text-sm text-muted-foreground">First in Australia</p>
            </div>
            <div className="text-center p-6 bg-background rounded">
              <div className="text-3xl font-serif mb-2">Houzz</div>
              <p className="text-sm text-muted-foreground">2021-2025 Awards</p>
            </div>
            <div className="text-center p-6 bg-background rounded">
              <div className="text-3xl font-serif mb-2">HIA</div>
              <p className="text-sm text-muted-foreground">NSW Finalist</p>
            </div>
            <div className="text-center p-6 bg-background rounded">
              <div className="text-3xl font-serif mb-2">MBA</div>
              <p className="text-sm text-muted-foreground">Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-5xl font-serif mb-6">Experience the Novalé difference</h2>
          <p className="text-lg mb-10 opacity-90">
            Discover why thousands of Sydney homeowners have trusted us with their dream renovations
          </p>
          <a 
            href="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <img 
            src={aboutHero} 
            alt="Artisan Renovations craftsmanship" 
            className="w-full h-[70vh] object-cover fade-in mb-16"
          />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-7xl font-serif mb-12 fade-in">
              Crafting spaces that endure
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 fade-in">
                Artisan Renovations was founded on a simple belief: that the spaces we inhabit 
                profoundly shape our daily lives. For over a decade, we've been dedicated to 
                creating kitchens, bathrooms and laundries that transcend trends and embody 
                timeless sophistication.
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed fade-in">
                Our approach is rooted in architectural principles and refined through meticulous 
                attention to detail. We collaborate closely with each client, translating their 
                vision into spaces that are both beautiful and deeply functional.
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
              <h3 className="text-2xl font-serif mb-4">Architectural Rigour</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every project begins with careful spatial analysis and thoughtful design development. 
                We consider how light, proportion and materiality work together to create harmonious 
                environments.
              </p>
            </div>
            
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">Material Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We source premium materials that age gracefully and perform beautifully. Natural 
                stone, solid timber and refined finishes form the foundation of our work.
              </p>
            </div>
            
            <div className="fade-in">
              <h3 className="text-2xl font-serif mb-4">Enduring Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our renovations are built to last. Through careful craftsmanship and rigorous 
                attention to construction detail, we create spaces that will serve you beautifully 
                for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif mb-16">Our values</h2>
          
          <div className="space-y-12">
            {[
              {
                title: "Design Integrity",
                description: "We believe in honest, considered design that respects both the architecture and the lives of those who inhabit it."
              },
              {
                title: "Collaborative Process",
                description: "Your input shapes every decision. We work closely with you to ensure the final result reflects your vision and lifestyle."
              },
              {
                title: "Sustainable Practice",
                description: "We prioritise materials and methods that minimise environmental impact while maximising longevity and performance."
              },
              {
                title: "Attention to Detail",
                description: "Excellence lies in the details. From joinery to hardware, every element is carefully considered and expertly executed."
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

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-5xl font-serif mb-6">Let's create something exceptional</h2>
          <p className="text-lg mb-10 opacity-90">
            We'd love to discuss your renovation and explore how we can bring your vision to life
          </p>
          <a 
            href="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

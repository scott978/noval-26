import { NavLink } from "react-router-dom";
import { Quote, Star } from "lucide-react";
import heroImage from "@/assets/about-hero.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Karen",
      location: "Killarney Heights",
      quote: "It was really important for me to have a company that was reliable, really well established and had a really good reputation.",
      featured: true
    },
    {
      name: "Slav & Kay",
      location: "Glenwood",
      quote: "Every trades person we had onsite was a very personable, very likeable, very respectable kind of guy and they were very fun to have around to be honest.",
      featured: true
    },
    {
      name: "Elle",
      location: "Kellyville Ridge",
      quote: "We are ecstatic, it's amazing! The detail they went to, the way it was constructed, we couldn't be happier.",
      featured: true
    },
    {
      name: "Candace",
      location: "Mosman NSW",
      quote: "Out of 10 I'm going to say 11. We're stoked, we couldn't be happier. I walk in there every morning and I feel like I live in a hotel.",
      featured: false
    },
    {
      name: "Jen",
      location: "Hills District NSW",
      quote: "The tradesmen were highly skilled. I can't rate Steve and his whole team highly enough. They showed great respect for our home.",
      featured: false
    },
    {
      name: "Tim & Julie",
      location: "Roseville Chase",
      quote: "We love it. We're extremely happy with it. It came out much better than we thought it would.",
      featured: false
    },
    {
      name: "Rhonda",
      location: "Double Bay NSW",
      quote: "Besides doing a great job, they were lovely people to work with. The team are nice, honest, diligent. When they said they'd do something, it got done.",
      featured: false
    },
    {
      name: "Bill & Robyn Raeside",
      location: "Castle Hill NSW",
      quote: "5 Stars. We were very satisfied from the initial visit right through to the final handover. The quality of workmanship is excellent.",
      featured: false
    },
    {
      name: "Diana",
      location: "Drummoyne NSW",
      quote: "We were so impressed with Novalé. Everything was well planned and well executed with a refined finish.",
      featured: false
    },
    {
      name: "Michael",
      location: "Neutral Bay NSW",
      quote: "From start to finish, the Novalé team was professional and communicative. The end result exceeded our expectations.",
      featured: false
    },
    {
      name: "Sarah & James",
      location: "Willoughby NSW",
      quote: "The attention to detail was incredible. Every aspect of our bathroom renovation was handled with care and expertise.",
      featured: false
    },
    {
      name: "Robert",
      location: "Pymble NSW",
      quote: "Highly recommend Novalé Bathrooms. Their project management was seamless and the quality of work is outstanding.",
      featured: false
    },
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Client Testimonials" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="text-3xl font-serif mb-4 fade-in">
              Client Testimonials
            </h1>
            <p className="text-lg max-w-2xl mx-auto px-6 fade-in">
              Hear from our satisfied clients about their renovation experience
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed fade-in">
            At Novalé Bathrooms, we pride ourselves on the quality of our workmanship and the 
            transparent communication we share throughout the entire bathroom renovation process. 
            Our client testimonials are an extension of our company values, providing a Stress-Free 
            Bathroom Renovation Experience for our very satisfied clients.
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-background p-8 border-l-4 border-brand-teal fade-in"
              >
                <Quote className="w-10 h-10 text-brand-teal/30 mb-4" />
                <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-teal text-brand-teal" />
                  ))}
                </div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">More Happy Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-8 border border-border bg-background hover:border-brand-teal transition-colors fade-in"
              >
                <p className="text-base text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-teal text-brand-teal" />
                  ))}
                </div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects CTA */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            See Our Work
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse through our recent bathroom renovation projects to see the quality 
            of work our clients are talking about.
          </p>
          <NavLink 
            to="/projects"
            className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Projects
          </NavLink>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch with the friendly team at Novalé Bathrooms today, to see how 
            we can turn your bathroom renovation dream into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 bg-background text-foreground hover:bg-background/90 transition-colors"
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

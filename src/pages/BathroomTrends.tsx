import { NavLink } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/about-hero.jpg";

const BathroomTrends = () => {
  const blogPosts = [
    {
      date: "10 December 2025",
      title: "How To Start Planning For Your Bathroom Renovation",
      excerpt: "Renovating a bathroom is one of the most impactful upgrades you can make to your home, shaping both daily comfort and long-term value. Bathrooms are used constantly, so every choice, from layout and waterproofing to lighting, ventilation, and material selection, needs to be carefully considered.",
      slug: "how-to-start-planning-for-your-bathroom-renovation"
    },
    {
      date: "22 September 2025",
      title: "How Long Does A Bathroom Renovation Take?",
      excerpt: "Understanding the timeline for your bathroom renovation helps you plan around disruptions and set realistic expectations. Several factors influence how long the project will take, from the scope of work to material availability.",
      slug: "how-long-does-a-bathroom-renovation-take"
    },
    {
      date: "15 August 2025",
      title: "Bathroom Design Trends for 2025",
      excerpt: "Stay ahead of the curve with the latest bathroom design trends. From natural materials and earthy tones to smart technology integration, discover what's shaping modern bathroom aesthetics this year.",
      slug: "bathroom-design-trends-2025"
    },
    {
      date: "3 July 2025",
      title: "Small Bathroom Ideas That Maximise Space",
      excerpt: "Don't let a compact bathroom limit your design ambitions. Learn clever tricks and design strategies to make the most of every square metre, creating a space that feels open and functional.",
      slug: "small-bathroom-ideas"
    },
    {
      date: "18 May 2025",
      title: "Choosing The Right Tiles For Your Bathroom",
      excerpt: "Tiles set the foundation for your bathroom's aesthetic and functionality. Explore the different types, finishes, and patterns available to help you make the perfect choice for your renovation.",
      slug: "choosing-the-right-tiles"
    },
    {
      date: "2 April 2025",
      title: "The Benefits Of A Walk-In Shower",
      excerpt: "Walk-in showers have become a popular choice for modern bathrooms. Discover the practical benefits, design options, and considerations for incorporating one into your renovation.",
      slug: "benefits-of-walk-in-shower"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Bathroom Trends" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="text-3xl font-serif mb-4 fade-in">
              Bathroom Trends
            </h1>
            <p className="text-lg max-w-2xl mx-auto px-6 fade-in">
              Explore the latest trends in bathroom design and get inspired for your dream renovation
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed fade-in">
            To start you off on your bathroom renovation journey, explore the latest trends in 
            bathroom design and get inspired for your dream bathroom renovation. Our expert team 
            shares insights, tips, and inspiration to help you create a space you'll love.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="bg-background p-8 border border-border hover:border-brand-teal transition-colors fade-in"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <time>{post.date}</time>
                </div>
                <h2 className="text-xl font-serif mb-4 hover:text-brand-teal transition-colors">
                  <NavLink to={`/blog/${post.slug}`}>
                    {post.title}
                  </NavLink>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <NavLink 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-brand-teal hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </NavLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            Ready to Start Your Renovation?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            Let our expert team help you bring the latest trends to life in your own bathroom.
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

export default BathroomTrends;

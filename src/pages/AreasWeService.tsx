import { NavLink } from "@/components/NavLink";
import { MapPin, Phone } from "lucide-react";

const AreasWeService = () => {
  const serviceAreas = [
    { name: "South Sydney", slug: "south-sydney" },
    { name: "Kellyville & Richmond", slug: "kellyville-richmond" },
    { name: "Eastern Suburbs", slug: "eastern-suburbs" },
    { name: "Northern Beaches", slug: "northern-beaches" },
    { name: "Sutherland Shire", slug: "sutherland-shire" },
    { name: "Hills District", slug: "hills-district" },
    { name: "St George", slug: "st-george" },
    { name: "Inner West", slug: "inner-west" },
    { name: "Upper North Shore", slug: "upper-north-shore" },
    { name: "Lower North Shore", slug: "lower-north-shore" },
    { name: "Western Sydney", slug: "western-sydney" },
  ];

  const testimonials = [
    {
      name: "Karen",
      location: "Killarney Heights",
      quote: "It was really important for me to have a company that was reliable, really well established and had a really good reputation."
    },
    {
      name: "Slav & Kay",
      location: "Glenwood",
      quote: "Every trades person we had onsite was a very personable, very likeable, very respectable kind of guy and they were very fun to have around to be honest."
    },
    {
      name: "Elle",
      location: "Kellyville Ridge",
      quote: "We are ecstatic, it's amazing! The detail they went to, they way it was constructed, we couldn't be happier."
    },
    {
      name: "Candace",
      location: "Mosman NSW",
      quote: "Out of 10 I'm going to say 11. We're stoked, we couldn't be happier. I walk in there every morning and I feel like I live in a hotel."
    },
    {
      name: "Bill & Robyn Raeside",
      location: "Castle Hill NSW",
      quote: "5 Stars. We were very satisfied from the initial visit right through to the final handover. The quality of workmanship is excellent."
    },
    {
      name: "Diana",
      location: "Drummoyne NSW",
      quote: "We were so impressed with Novalé. Everything was well planned and well executed with a refined finish."
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 mb-24">
        <h1 className="text-3xl font-serif mb-8 fade-in">
          Areas We Service
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl fade-in">
          Novalé has a talented team of renovators servicing clients throughout all of Sydney. 
          To find out more about the areas we service, simply click on your location below.
        </p>
      </section>

      {/* Service Areas Grid */}
      <section className="container mx-auto px-6 lg:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area, index) => (
            <NavLink
              key={index}
              to={`/areas/${area.slug}`}
              className="group p-8 border border-border hover:border-brand-teal bg-background hover:bg-brand-teal/5 transition-all duration-300 fade-in"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-serif mb-2 group-hover:text-brand-teal transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    View renovation services in this area
                  </p>
                  <span className="text-sm text-brand-teal mt-3 inline-block group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-serif mb-6">
            Not sure if you're within our coverage area?
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-8">
            We're happy to check your area and talk to you about how we can help transform 
            your bathroom, kitchen or laundry into a comfortable and beautiful space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NavLink
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              General Enquiries
            </NavLink>
            <a
              href="tel:1800668253"
              className="inline-flex items-center gap-2 text-sm tracking-wide px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone size={16} />
              Call 1800 NOVALÉ
            </a>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="container mx-auto px-6 lg:px-12 py-32">
        <h2 className="text-2xl font-serif mb-16 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 border border-border bg-background fade-in"
            >
              <p className="text-base text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-serif mb-6">Let's Begin...</h2>
          <div className="max-w-2xl mx-auto mb-10">
            <ul className="text-base space-y-2 opacity-90">
              <li>✓ Online Estimate</li>
              <li>✓ Review your Quote</li>
              <li>✓ Work with our Interior Design Team</li>
              <li>✓ Novalé Delivers your Dream</li>
            </ul>
          </div>
          <NavLink
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Get a Quote
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default AreasWeService;

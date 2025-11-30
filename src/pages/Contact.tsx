import { NavLink } from "@/components/NavLink";

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-serif mb-12 fade-in">
            Let's create your dream space
          </h1>
          
          <p className="text-xl text-muted-foreground mb-16 fade-in">
            Ready to transform your bathroom, kitchen or laundry? Get in touch for a free 
            consultation and online estimate. We'll provide accurate cost and timeline 
            expectations—it only takes 2 minutes!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="fade-in">
              <h2 className="text-2xl font-serif mb-6">Contact Details</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a href="mailto:info@novale.com.au" className="hover:text-foreground transition-colors">
                    info@novale.com.au
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a href="tel:1300668253" className="hover:text-foreground transition-colors">
                    1300 NOVALE (1300 668 253)
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Service Area</p>
                  <p>Greater Sydney, NSW</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Office Hours</p>
                  <p>Monday – Friday<br />8:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <h2 className="text-2xl font-serif mb-6">Why Get a Free Estimate?</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>✓ Accurate cost expectations</p>
                <p>✓ Realistic timeline projections</p>
                <p>✓ No obligation consultation</p>
                <p>✓ Expert advice included</p>
                <p>✓ Takes only 2 minutes</p>
                <p className="mt-6 text-foreground font-medium">
                  22+ years of experience | ISO 9001 Certified | Award-winning service
                </p>
                <NavLink
                  to="/pricing"
                  className="inline-block mt-6 text-sm tracking-wide px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Try our Online Estimation Tool
                </NavLink>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="my-16 fade-in">
            <div className="w-full h-[400px] bg-secondary/30 border border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p className="text-lg mb-2">Sydney Service Area Map</p>
                <p className="text-sm">Google Maps integration coming soon</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-16 fade-in">
            <h2 className="text-2xl font-serif mb-6">Get Your Free Online Estimate</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="suburb" className="block text-sm mb-2">Suburb *</label>
                  <input 
                    type="text" 
                    id="suburb"
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. Mosman, Vaucluse"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2">Renovation Type *</label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                >
                  <option value="">Please select</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="kitchen">Kitchen Renovation</option>
                  <option value="laundry">Laundry Renovation</option>
                  <option value="multiple">Multiple Spaces</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm mb-2">When are you looking to start?</label>
                <select 
                  id="timeline"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Please select</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6plus">6+ months</option>
                  <option value="planning">Just planning</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">Tell us about your project</label>
                <textarea 
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Share your vision, any specific requirements, or questions you have..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="consent"
                  className="mt-1"
                  required
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I agree to receive communication from Novalé regarding my renovation enquiry *
                </label>
              </div>

              <button 
                type="submit"
                className="text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get My Free Estimate
              </button>

              <p className="text-xs text-muted-foreground">
                * Required fields. Your information is kept confidential and will only be used 
                to contact you about your renovation enquiry.
              </p>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-brand-teal/10 p-8 border border-brand-teal/20">
                <div className="text-3xl font-serif mb-2 text-brand-teal">22+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-brand-teal/10 p-8 border border-brand-teal/20">
                <div className="text-3xl font-serif mb-2 text-brand-teal">ISO</div>
                <p className="text-sm text-muted-foreground">9001 Certified</p>
              </div>
              <div className="bg-brand-teal/10 p-8 border border-brand-teal/20">
                <div className="text-3xl font-serif mb-2 text-brand-teal">1000+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-brand-teal/10 p-8 border border-brand-teal/20">
                <div className="text-3xl font-serif mb-2 text-brand-teal">5★</div>
                <p className="text-sm text-muted-foreground">Award Winning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

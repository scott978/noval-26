import { NavLink } from "@/components/NavLink";
import { ChevronRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
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

          <div className="fade-in p-8 border border-border">
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
                className="inline-block mt-12 text-sm tracking-wide px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Try our Online Estimation Tool
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Areas We Service - Full Width */}
      <div className="my-16 fade-in bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-serif mb-6 text-center">Areas We Service</h2>
          <p className="text-center opacity-90 mb-8">
            Novalé has a talented team of renovators servicing clients throughout all of Sydney
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 text-sm max-w-4xl mx-auto">
            {[
              "South Sydney",
              "Kellyville & Richmond",
              "Eastern Suburbs",
              "Northern Beaches",
              "Sutherland Shire",
              "Hills District",
              "St George",
              "Inner West",
              "Upper North Shore",
              "Lower North Shore",
              "Western Sydney"
            ].map((area, index, array) => (
              <div key={index} className="flex items-center gap-2">
                <a href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  {area}
                </a>
                {index < array.length - 1 && (
                  <ChevronRight className="w-4 h-4 opacity-50" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm opacity-90 mt-8">
            Not sure if you're within our coverage area? Give us a call on{" "}
            <a href="tel:1800668253" className="underline hover:no-underline">
              1800 NOVALÉ
            </a>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Map Placeholder */}
        <div className="my-16 fade-in">
          <div className="w-full h-[400px] bg-secondary/30 border border-border flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p className="text-lg mb-2">Sydney Service Area Map</p>
              <p className="text-sm">Google Maps integration coming soon</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-16 fade-in max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-2">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            For general enquiries, please use the form below and one of our admin staff will be in contact
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-2">Your First Name *</label>
                <input 
                  type="text" 
                  id="firstName"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="surname" className="block text-sm mb-2">Your Surname *</label>
                <input 
                  type="text" 
                  id="surname"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm mb-2">Your Contact Number *</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Your Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="postcode" className="block text-sm mb-2">Your Suburb Postcode *</label>
              <input 
                type="text" 
                id="postcode"
                className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="e.g. 2088"
                required
              />
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm mb-2">Additional comments/Notes</label>
              <textarea 
                id="comments"
                rows={6}
                className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Share your enquiry or any questions you have..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="consent"
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground">
                By completing this form, and providing your details, you will be eligible to receive brand updates. I am happy to receive email updates.
              </label>
            </div>

            <button 
              type="submit"
              className="text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>

            <p className="text-xs text-muted-foreground">
              * Required fields. Your information is kept confidential.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

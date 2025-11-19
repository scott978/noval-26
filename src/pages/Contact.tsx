const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-serif mb-12 fade-in">
            Let's talk about your project
          </h1>
          
          <p className="text-xl text-muted-foreground mb-16 fade-in">
            We'd love to hear about your renovation plans. Get in touch to arrange 
            an initial consultation where we can discuss your vision and how we can 
            help bring it to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="fade-in">
              <h2 className="text-2xl font-serif mb-6">Contact Details</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a href="mailto:hello@artisan.com" className="hover:text-foreground transition-colors">
                    hello@artisan.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-foreground transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Office Hours</p>
                  <p>Monday – Friday<br />9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <h2 className="text-2xl font-serif mb-6">Office Location</h2>
              <div className="text-muted-foreground">
                <p>
                  123 Design Street<br />
                  Melbourne VIC 3000<br />
                  Australia
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-16 fade-in">
            <h2 className="text-2xl font-serif mb-6">Start a Conversation</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm mb-2">Phone</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2">Service of Interest</label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Please select</option>
                  <option value="kitchen">Kitchen Renovation</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="laundry">Laundry Renovation</option>
                  <option value="multiple">Multiple Spaces</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit"
                className="text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

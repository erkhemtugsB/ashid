import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/80 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                CONTACT <span className="text-accent">US</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Ready to start your construction project? Get in touch with our team for a free consultation 
                and detailed quote. We're here to help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  GET A FREE <span className="text-primary">QUOTE</span>
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        First Name *
                      </label>
                      <Input 
                        type="text" 
                        placeholder="John"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Smith"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="(555) 123-4567"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                      <option>Residential Construction</option>
                      <option>Commercial Construction</option>
                      <option>Renovation & Remodeling</option>
                      <option>General Contracting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Project Description *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6">
                    SEND MESSAGE
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  GET IN <span className="text-primary">TOUCH</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Office Location</h3>
                      <p className="text-muted-foreground">
                        123 Construction Ave<br />
                        Building City, BC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Phone Numbers</h3>
                      <p className="text-muted-foreground">
                        Main: (555) 123-4567<br />
                        Emergency: (555) 987-6543
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Email Addresses</h3>
                      <p className="text-muted-foreground">
                        info@powerconstruction.com<br />
                        quotes@powerconstruction.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 7:00 AM - 6:00 PM<br />
                        Saturday: 8:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Emergency Contact */}
                <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <h3 className="font-bold text-foreground mb-2">24/7 Emergency Service</h3>
                  <p className="text-muted-foreground mb-4">
                    For construction emergencies and urgent repairs, call our emergency hotline.
                  </p>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Call Emergency Line
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                FIND <span className="text-primary">US</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Visit our office or project sites to see our work firsthand.
              </p>
            </div>
            
            {/* Placeholder for map */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">Map integration would be placed here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
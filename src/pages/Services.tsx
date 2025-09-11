import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Building, Wrench, Hammer, PaintBucket, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: PaintBucket,
      title: "Soffit & Fascia",
      description: "Installation and repair of decorative roof edge panels and fascia boards.",
      features: ["Soffit Installation", "Fascia Installation", "Repairs & Maintenance", "Custom Solutions"]
    },
    {
      icon: Zap,
      title: "Gutter",
      description: "Professional installation and replacement of rainwater drainage systems.",
      features: ["Gutter Installation", "Gutter Replacement", "Gutter Cleaning", "Downspout Solutions"]
    },
    {
      icon: Home,
      title: "Window",
      description: "Expert window installation and replacement services.",
      features: ["Window Installation", "Window Replacement", "Energy Efficient Options", "Custom Sizes"]
    },
    {
      icon: Building,
      title: "Vinyl Siding (CraneBoard, Mastic)",
      description: "High-quality, energy-efficient vinyl siding installation and repair.",
      features: ["CraneBoard Siding", "Mastic Siding", "Insulated Siding", "Siding Repairs"]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/80 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                OUR <span className="text-accent">SERVICES</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Comprehensive construction solutions for residential, commercial, and industrial projects. 
                We bring your vision to life with quality craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={index} className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="flex items-start space-x-6">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                OUR <span className="text-primary">PROCESS</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach that ensures your project is completed on time, on budget, and to your exact specifications.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "CONSULTATION", desc: "We discuss your vision and requirements" },
                { step: "02", title: "PLANNING", desc: "Detailed design and project planning phase" },
                { step: "03", title: "CONSTRUCTION", desc: "Expert execution with quality control" },
                { step: "04", title: "COMPLETION", desc: "Final inspection and project handover" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              READY TO START YOUR <span className="text-accent">PROJECT?</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your construction project. 
              Let's bring your vision to life together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
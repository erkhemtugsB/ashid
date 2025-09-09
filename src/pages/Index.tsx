import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        
        {/* Services Preview Section */}
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                CONSTRUCTION <span className="text-primary">EXCELLENCE</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From residential homes to commercial buildings, we deliver quality construction services that stand the test of time.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "RESIDENTIAL",
                  description: "Custom homes and renovations built to your exact specifications"
                },
                {
                  title: "COMMERCIAL", 
                  description: "Office buildings, retail spaces, and industrial facilities"
                },
                {
                  title: "RENOVATION",
                  description: "Transforming existing spaces with modern design and functionality"
                }
              ].map((service, index) => (
                <div key={index} className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;

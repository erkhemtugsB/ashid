import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        
        {/* Services Preview Section */}
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                CONSTRUCTION <span className="text-primary">EXCELLENCE</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                From residential homes to commercial buildings, we deliver quality construction services that stand the test of time.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                <div key={index} className="bg-card p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3 lg:mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-sm lg:text-base">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;

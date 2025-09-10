import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        
        {/* About Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
                  BUILDING <span className="text-primary">DREAMS</span> SINCE 1995
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 lg:mb-6">
                  With over 25 years of experience in the construction industry, we have built a reputation for delivering exceptional quality and innovative solutions. Our team of skilled professionals is committed to turning your vision into reality.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8">
                  From residential homes to large commercial projects, we approach every job with the same dedication to excellence, safety, and customer satisfaction.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 lg:mb-2">500+</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 lg:mb-2">25+</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center col-span-2 sm:col-span-1">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 lg:mb-2">100%</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                      <img src="src/assets/about.png" alt="Construction" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 bg-accent rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 lg:w-16 lg:h-16 bg-primary/60 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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

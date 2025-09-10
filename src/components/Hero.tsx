import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/construction-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-primary/80 overflow-hidden">
      {/* Background Image */}
      <div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
  style={{ backgroundImage: `url(https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg)` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/35 via-primary/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-wide">
                OUR WORK
                <br />
                <span className="text-accent">SHOWS</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 max-w-lg leading-relaxed">
                Over 10 years of experience improving everything we touch.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/services">
                <Button 
                  size="lg"
                  className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold tracking-wide px-8 py-6 text-lg"
                >
                  EXPLORE SERVICES
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="tel:7202175641">
                <Button 
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold tracking-wide px-8 py-6 text-lg"
                >
                  Call Us
                </Button>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">10+</div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm tracking-wide">YEARS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">100+</div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm tracking-wide">PROJECTS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">100%</div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm tracking-wide">SATISFACTION</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Construction worker silhouette will be handled by the background image */}
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
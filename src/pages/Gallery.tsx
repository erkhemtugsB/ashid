import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  
  const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "RENOVATION"];
  
  const projects = [
    { id: 1, title: "Modern Family Home", category: "RESIDENTIAL", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop" },
    { id: 2, title: "Office Complex", category: "COMMERCIAL", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" },
    { id: 3, title: "Kitchen Renovation", category: "RENOVATION", image: "https://images.unsplash.com/photo-1556912998-c57cc0f46c8c?w=800&h=600&fit=crop" },
    { id: 4, title: "Luxury Villa", category: "RESIDENTIAL", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop" },
    { id: 5, title: "Retail Store", category: "COMMERCIAL", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" },
    { id: 6, title: "Bathroom Remodel", category: "RENOVATION", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop" },
    { id: 7, title: "Custom Home", category: "RESIDENTIAL", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop" },
    { id: 8, title: "Corporate Headquarters", category: "COMMERCIAL", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" },
    { id: 9, title: "Historic Restoration", category: "RENOVATION", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop" }
  ];

  const filteredProjects = selectedCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/80 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                PROJECT <span className="text-accent">GALLERY</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Explore our portfolio of completed projects. From custom homes to commercial buildings, 
                see the quality and craftsmanship that defines our work.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-background border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-accent text-sm font-semibold">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                PROJECT <span className="text-primary">STATISTICS</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "PROJECTS COMPLETED" },
                { number: "30+", label: "YEARS EXPERIENCE" },
                { number: "100%", label: "CLIENT SATISFACTION" },
                { number: "50+", label: "AWARDS WON" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-primary mb-4">{stat.number}</div>
                  <div className="text-muted-foreground font-semibold tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              READY TO START YOUR <span className="text-accent">NEXT PROJECT?</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your construction vision to life. 
              Contact us today for a free consultation and quote.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6">
              START YOUR PROJECT
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
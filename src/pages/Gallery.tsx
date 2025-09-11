import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Gallery = () => {
  const projects = [
    { id: 1, title: "", category: "", image: "/about.png" },
    { id: 2, title: "", category: "", image: "/gallery1.png" },
    { id: 3, title: "", category: "", image: "/gallery2.png" },
    { id: 4, title: "", category: "", image: "/gallery9.png" },
    { id: 5, title: "", category: "", image: "/gallery4.png" },
    { id: 6, title: "", category: "", image: "/gallery5.png" },
    { id: 7, title: "", category: "", image: "/gallery6.png" },
    { id: 8, title: "", category: "", image: "/gallery7.png" },
    { id: 9, title: "", category: "", image: "/gallery8.png" }
  ];

  // No filtering, just show all projects

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
  {/* Filter Section removed for static gallery */}

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
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
                { number: "100+", label: "PROJECTS COMPLETED" },
                { number: "10+", label: "YEARS EXPERIENCE" },
                { number: "100%", label: "CLIENT SATISFACTION" },
                { number: "5+", label: "AWARDS WON" }
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
            <a href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6">
                START YOUR PROJECT
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
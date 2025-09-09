import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Shield } from "lucide-react";

const About = () => {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/80 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                ABOUT <span className="text-accent">POWER</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Building the future, one project at a time. With over three decades of experience, 
                we've established ourselves as leaders in the construction industry.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  OUR <span className="text-primary">STORY</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Founded in 1993, Power Construction began as a small family business with a simple mission: 
                    to deliver exceptional construction services that exceed client expectations.
                  </p>
                  <p>
                    Over the years, we've grown from a local contractor to a regional leader, completing 
                    hundreds of residential, commercial, and industrial projects. Our success is built on 
                    a foundation of quality craftsmanship, integrity, and customer satisfaction.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of what's possible in construction, 
                    embracing new technologies and sustainable practices while maintaining the 
                    traditional values that made us who we are.
                  </p>
                </div>
                <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn More About Our Projects
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: Users, title: "Expert Team", desc: "Skilled professionals" },
                    { icon: Award, title: "Quality Work", desc: "Award-winning projects" },
                    { icon: Clock, title: "On Time", desc: "Always delivered on schedule" },
                    { icon: Shield, title: "Safety First", desc: "Zero-accident record" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                MEET OUR <span className="text-primary">TEAM</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The experienced professionals who make every project a success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "John Smith", role: "CEO & Founder", experience: "30+ years" },
                { name: "Sarah Johnson", role: "Project Manager", experience: "15+ years" },
                { name: "Mike Davis", role: "Lead Engineer", experience: "20+ years" }
              ].map((member, index) => (
                <div key={index} className="bg-card p-8 rounded-lg shadow-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6"></div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.experience} experience</p>
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

export default About;
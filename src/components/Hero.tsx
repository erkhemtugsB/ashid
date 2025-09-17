import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from 'emailjs-com';
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/construction-hero.jpg";

const Hero = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_5tyc3fo',
      'template_wvsmsb2',
      e.currentTarget,
      'fgVFzSd2VinKlUcmw'
    )
    .then(() => {
      alert('Message sent successfully!');
    })
    .catch(() => {
      alert('Failed to send message.');
    });
  };
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
          {/* Left: Text & Stats */}
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
          {/* Right: Contact Form */}
          <div>
            <form className="space-y-4 bg-white/80 rounded-lg p-6 shadow-lg" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">First Name *</label>
                  <Input type="text" placeholder="John" name="first_name" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Last Name *</label>
                  <Input type="text" placeholder="Smith" name="last_name" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Email Address *</label>
                <Input type="email" placeholder="john@example.com" name="email" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Phone Number *</label>
                <Input type="tel" placeholder="(555) 123-4567" name="phone" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">ZIP Code *</label>
                <Input type="text" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} placeholder="e.g. 80231" name="zip" required />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4">SEND MESSAGE</Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
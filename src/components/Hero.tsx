import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import emailjs from 'emailjs-com';
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/construction-hero.jpg";

const formSteps = [
  {
    label: "Free Cost Estimate\nZIP Code *",
    name: "zip",
    type: "text",
    placeholder: "e.g. 80231",
    required: true,
    inputMode: "numeric" as const,
    pattern: "[0-9]{5}",
    maxLength: 5
  },
  {
    label: "Free Cost Estimate\nWhat type of service are you interested in for your project?",
    name: "service",
    type: "select",
    options: ["Soffit & Fascia", "Gutter", "Window", "Vinyl Siding (CraneBoard, Mastic)"],
    required: true
  },
  {
    label: "Free Cost Estimate\nDo you own or rent your home?",
    name: "ownership",
    type: "select",
    options: ["Own", "Rent"],
    required: true
  },
  {
    label: "Free Cost Estimate\nWhen do you need this work done?",
    name: "timeline",
    type: "select",
    options: ["Urgent", "Less than 2 weeks", "More than 2 weeks", "Not sure/still planning"],
    required: true
  },
  {
    label: "Free Cost Estimate\nName *",
    name: "name",
    type: "text",
    placeholder: "John Smith",
    required: true
  },
  {
    label: "Free Cost Estimate\nAddress *",
    name: "address",
    type: "text",
    placeholder: "123 Main St, Denver, CO",
    required: true
  },
  {
    label: "Free Cost Estimate\nEmail *",
    name: "email",
    type: "email",
    placeholder: "john@example.com",
    required: true
  },
  {
    label: "Free Cost Estimate\nPhone Number *",
    name: "phone",
    type: "tel",
    placeholder: "(555) 123-4567",
    required: true
  }
];

const Hero = () => {
  const [step, setStep] = React.useState(0);
  const [formData, setFormData] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [formSteps[step].name]: e.target.value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [formSteps[step].name]: e.target.value });
  };

  // Use for radio buttons as well
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [formSteps[step].name]: e.target.value });
  };

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < formSteps.length - 1) {
      setStep(step + 1);
    } else {
      // Final submit
      setSubmitted(true);
      // Optionally send emailjs here
      emailjs.send(
        'service_5tyc3fo',
        'template_wvsmsb2',
        formData,
        'fgVFzSd2VinKlUcmw'
      );
    }
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
            <div className="bg-white/80 rounded-lg p-6 shadow-lg">
              {!submitted ? (
                <form onSubmit={handleContinue} className="space-y-4">
                  <label className="block text-2xl font-bold text-primary mb-4 whitespace-pre-line">
                    {formSteps[step].label}
                  </label>
                  {formSteps[step].type === "select" ? (
                    <div className="space-y-2">
                      {formSteps[step].options.map((opt: string) => (
                        <label key={opt} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name={formSteps[step].name}
                            value={opt}
                            checked={formData[formSteps[step].name] === opt}
                            onChange={handleRadioChange}
                            required={formSteps[step].required}
                            className="appearance-none w-7 h-7 border-2 border-primary rounded-md checked:bg-primary checked:border-primary checked:ring-2 checked:ring-primary transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <span className="text-lg text-foreground font-medium">{opt}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <Input
                      type={formSteps[step].type}
                      name={formSteps[step].name}
                      placeholder={formSteps[step].placeholder}
                      value={formData[formSteps[step].name] || ""}
                      required={formSteps[step].required}
                      inputMode={formSteps[step].inputMode}
                      pattern={formSteps[step].pattern}
                      maxLength={formSteps[step].maxLength}
                      onChange={handleChange}
                    />
                  )}
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4">
                    {step < formSteps.length - 1 ? "Continue" : "Get Quote"}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold text-primary mb-4">We will reach out back ASAP!</h2>
                  <p className="text-muted-foreground">Thank you for your interest. Our team will contact you soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
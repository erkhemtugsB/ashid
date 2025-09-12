import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Todashid Logo" className="w-10 h-10 rounded-lg object-cover" />
              <span className="text-primary-foreground font-bold text-xl">Todashid</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium tracking-wider transition-colors ${
                    isActive(item.href)
                      ? "text-accent border-b-2 border-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold tracking-wide"
            >
              GET A FREE QUOTE
            </Button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:text-accent p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/98">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium tracking-wider transition-colors ${
                    isActive(item.href)
                      ? "text-accent bg-primary/50"
                      : "text-primary-foreground hover:text-accent hover:bg-primary/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* <div className="px-3 py-2">
                <Button 
                  variant="default" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold tracking-wide"
                >
                  GET A FREE QUOTE
                </Button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
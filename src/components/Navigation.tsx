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
    <>
      <div className="fixed top-0 left-0 w-full z-[100] bg-[#0a174e] text-white text-center font-bold leading-none h-8 flex items-center justify-center">
        Veterans Discount: All veterans receive 10% off! Thank you for your service.
      </div>
      <nav className="fixed top-8 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-white">
                <img src="/logo.png" alt="Todashid Logo" className="w-12 h-12 object-contain" />
              </div>
              <span className="font-bold text-xl text-blue-700">TOD Exteriors</span>
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
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-blue-700 hover:text-green-600"
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
              className="text-blue-700 hover:text-green-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium tracking-wider transition-colors ${
                    isActive(item.href)
                      ? "text-green-600 bg-blue-100"
                      : "text-blue-700 hover:text-green-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;
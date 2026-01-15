import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-slate-800" : "text-white"
          }`}>
            <span className="font-extrabold">Fiesta</span>
            <span className="font-light ml-1">IT Services</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-slate-600 hover:text-slate-900" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-slate-600 hover:text-slate-900" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-slate-600 hover:text-slate-900" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className={`transition-all ${
                isScrolled 
                  ? "bg-slate-800 hover:bg-slate-700 text-white" 
                  : "bg-white text-slate-800 hover:bg-slate-100"
              }`}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-slate-800" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors py-2 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors py-2 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors py-2 font-medium"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white"
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            Creative AI Studios
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button variant="default" className="bg-accent hover:bg-accent/90 w-full">
                Book Consultation
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
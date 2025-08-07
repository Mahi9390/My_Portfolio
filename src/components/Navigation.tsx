import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-medium' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
              }`}
            >
              Mahesh Mangali
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white hover:text-blue-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <Button
              size="sm"
              className={`${
                isScrolled 
                  ? 'bg-gradient-primary text-white' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume-mahesh-mangali.pdf';
                link.download = 'Mahesh_Mangali_Resume.pdf';
                link.click();
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className={`p-2 transition-colors ${
                isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-medium rounded-lg mt-2 py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 pt-2">
              <Button
                size="sm"
                className="w-full bg-gradient-primary text-white"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume-mahesh-mangali.pdf';
                  link.download = 'Mahesh_Mangali_Resume.pdf';
                  link.click();
                  setIsMobileMenuOpen(false);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
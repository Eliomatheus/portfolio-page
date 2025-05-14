
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Update header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold gradient-text">
          Elio Matheus
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-portfolio-green transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-700 hover:text-portfolio-green transition-colors"
          >
            Habilidades
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-gray-700 hover:text-portfolio-green transition-colors"
          >
            Experiência
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-portfolio-green transition-colors"
          >
            Projetos
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-portfolio-green hover:bg-portfolio-green/90"
          >
            Contato
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-portfolio-green py-2 transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-portfolio-green py-2 transition-colors"
            >
              Habilidades
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-portfolio-green py-2 transition-colors"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-portfolio-green py-2 transition-colors"
            >
              Projetos
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-portfolio-green hover:bg-portfolio-green/90 w-full"
            >
              Contato
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

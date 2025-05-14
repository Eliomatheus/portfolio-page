
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center hero-gradient pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <div className="bg-portfolio-green/20 rounded-full px-4 py-1 text-sm text-portfolio-green font-medium">
              Desenvolvedor Full Stack
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Olá seja bem vindo(a), sou Elio Matheus, um Desenvolvedor Full Stack apaixonado!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Transformando ideias em interfaces digitais dinâmicas e impactantes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={scrollToProjects} 
              className="bg-portfolio-green hover:bg-portfolio-green/90 text-white px-6 py-6 text-lg"
            >
              Explore Meus Projetos
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10 px-6 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-500 mb-2">Rolar para baixo</span>
          <ArrowDown className="text-portfolio-green" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;


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
    <section className="relative min-h-screen flex items-center bg-black pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="w-full h-full opacity-30">
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-green-700/20 blur-3xl"></div>
          <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-green-500/20 blur-3xl"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block p-2 rounded-full bg-green-900/20 backdrop-blur-sm">
            <div className="bg-green-500/20 rounded-full px-4 py-1 text-sm text-green-400 font-medium">
              Desenvolvedor Full Stack
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="gradient-text">Olá seja bem vindo(a), sou Elio Matheus, um Desenvolvedor Full Stack apaixonado!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Transformando ideias em interfaces digitais dinâmicas e impactantes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={scrollToProjects} 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-6 text-lg"
            >
              Explore Meus Projetos
            </Button>
            <Button 
              variant="outline" 
              className="border-green-600 text-green-400 hover:bg-green-600/10 px-6 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-400 mb-2">Rolar para baixo</span>
          <ArrowDown className="text-green-500" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground py-12 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text">Elio Matheus</h2>
            <p className="text-muted-foreground mt-2">Desenvolvedor Full Stack</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-primary/20 hover:bg-primary/30 text-primary p-3 rounded-full transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Elio Matheus. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/eliomatheus/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Eliomatheus" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:eliomatheus8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

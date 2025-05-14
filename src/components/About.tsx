
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-sm font-semibold text-portfolio-green mb-2 uppercase tracking-wider">
            Sobre Mim
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Desenvolvedor Apaixonado por Criar Experiências Excepcionais
          </h2>
          <p className="text-gray-600">
            Sou Elio Matheus, um desenvolvedor com paixão por transformar ideias em interfaces digitais dinâmicas e impactantes. 
            Sou apaixonado por resolver problemas com tecnologia e estou sempre em busca de aprender e evoluir. 
            Meu objetivo é levar meu trabalho a um novo patamar e fazer parte de projetos inspiradores.
          </p>
          <p className="text-gray-600 mt-4">
            Me atualizo constantemente para expandir meu conjunto de habilidades e elevar a qualidade do meu trabalho como desenvolvedor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 bg-portfolio-green/10 w-12 h-12 flex items-center justify-center rounded-lg">
                <User className="text-portfolio-green" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Profissional</h3>
              <p className="text-gray-600">
                Experiência em desenvolvimento de aplicações web e mobile, trabalhando com clientes 
                desde startups até empresas de grande porte.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 bg-portfolio-green/10 w-12 h-12 flex items-center justify-center rounded-lg">
                <Briefcase className="text-portfolio-green" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiente</h3>
              <p className="text-gray-600">
                Trabalho com diversas equipes e clientes para entregar soluções de alta qualidade que
                atendam aos objetivos de negócios e excedam as expectativas dos usuários.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 bg-portfolio-green/10 w-12 h-12 flex items-center justify-center rounded-lg">
                <GraduationCap className="text-portfolio-green" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Educado</h3>
              <p className="text-gray-600">
                Formação em Desenvolvimento Web, com aprendizado contínuo através de cursos 
                profissionais e certificações para estar sempre atualizado.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

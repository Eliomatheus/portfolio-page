
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  github?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  demo,
  github
}) => (
  <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
    <div className="h-52 overflow-hidden bg-gray-100">
      <div className={`w-full h-full bg-gradient-to-br ${image} flex items-center justify-center`}>
        <span className="text-3xl font-bold text-white opacity-30">{title}</span>
      </div>
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="bg-gray-100">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        {demo && (
          <Button 
            variant="default" 
            className="gap-2 bg-portfolio-green hover:bg-portfolio-green/90"
            asChild
          >
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Ver Demo <ArrowUpRight size={16} />
            </a>
          </Button>
        )}
        {github && (
          <Button 
            variant="outline" 
            className="gap-2 border-gray-300"
            asChild
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "FSW Barber",
      description: "Aplicação para agendamento de serviços de barbearia. Site otimizado para versão mobile, com otimização para desktop em desenvolvimento.",
      image: "from-portfolio-green/20 to-portfolio-black/20",
      tags: ["Next.js", "React.js", "PostgreSQL", "Tailwind CSS", "Prisma", "Node.js", "ShadCN", "TypeScript", "JavaScript"],
      demo: "https://fsw-barber-inky.vercel.app/",
      github: "https://github.com/Eliomatheus/fsw-barber"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-sm font-semibold text-portfolio-green mb-2 uppercase tracking-wider">
            Portfólio
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-600">
            Explore uma seleção dos meus projetos recentes de desenvolvimento web e mobile.
            Cada projeto demonstra diferentes habilidades e tecnologias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

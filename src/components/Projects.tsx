
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
            className="gap-2 bg-portfolio-purple hover:bg-portfolio-purple/90"
            asChild
          >
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo <ArrowUpRight size={16} />
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
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment processing, user accounts, and an admin dashboard.",
      image: "from-blue-500/20 to-purple-500/20",
      tags: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      github: "#"
    },
    {
      title: "Social Media App",
      description: "A modern social media application with real-time messaging, user profiles, and content sharing.",
      image: "from-green-500/20 to-emerald-500/20",
      tags: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
      demo: "#",
      github: "#"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management system with team workspaces and progress tracking.",
      image: "from-amber-500/20 to-orange-500/20",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
      demo: "#",
      github: "#"
    },
    {
      title: "Real Estate Listing Portal",
      description: "A comprehensive real estate application with property listings, search, and user accounts.",
      image: "from-cyan-500/20 to-blue-500/20",
      tags: ["React", "Redux", "Express", "MongoDB", "Google Maps API"],
      demo: "#",
      github: "#"
    },
    {
      title: "Portfolio Website Generator",
      description: "A tool that helps developers create personalized portfolio websites with minimal effort.",
      image: "from-purple-500/20 to-pink-500/20",
      tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      demo: "#",
      github: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-responsive fitness tracking application with workout plans and progress visualization.",
      image: "from-red-500/20 to-rose-500/20",
      tags: ["React Native", "Firebase", "Redux", "Chart.js"],
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-sm font-semibold text-portfolio-purple mb-2 uppercase tracking-wider">
            Portfolio
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            Explore a selection of my recent web and mobile development projects.
            Each project showcases different skills and technologies.
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

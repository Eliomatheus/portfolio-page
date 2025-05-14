import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Database, Settings, Cloud, Globe } from 'lucide-react';

const SkillCategory: React.FC<{
  icon: React.ReactNode;
  title: string;
  skills: string[];
  iconBgColor: string;
  iconColor: string;
}> = ({
  icon,
  title,
  skills,
  iconBgColor,
  iconColor
}) => (
  <Card className="overflow-hidden border-muted bg-card hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className={`mb-4 ${iconBgColor} w-12 h-12 flex items-center justify-center rounded-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="bg-muted text-foreground border-muted-foreground py-1">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills: React.FC = () => {
  const skillCategories = [{
    icon: <Code className="text-blue-500" size={24} />,
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind", "Redux"],
    iconBgColor: "bg-blue-500/10",
    iconColor: "text-blue-500"
  }, {
    icon: <Server className="text-green-500" size={24} />,
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST API"],
    iconBgColor: "bg-green-500/10",
    iconColor: "text-green-500"
  }, {
    icon: <Database className="text-amber-500" size={24} />,
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    iconBgColor: "bg-amber-500/10",
    iconColor: "text-amber-500"
  }, {
    icon: <Settings className="text-purple-500" size={24} />,
    title: "DevOps",
    skills: ["Docker", "CI/CD", "Git", "GitHub Actions", "Kubernetes"],
    iconBgColor: "bg-purple-500/10",
    iconColor: "text-purple-500"
  }, {
    icon: <Cloud className="text-cyan-500" size={24} />,
    title: "Cloud",
    skills: ["AWS", "Google Cloud", "Heroku", "Netlify", "Vercel"],
    iconBgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-500"
  }, {
    icon: <Globe className="text-rose-500" size={24} />,
    title: "Others",
    skills: ["Agile", "Scrum", "UI/UX", "Testing", "Responsive Design"],
    iconBgColor: "bg-rose-500/10",
    iconColor: "text-rose-500"
  }];
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Minhas Tecnologias</h2>
          <p className="text-muted-foreground">Com um conjunto abrangente de habilidades que abrange tecnologias front-end e back-end, trago recursos full-stack para cada projeto.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              icon={category.icon} 
              title={category.title} 
              skills={category.skills} 
              iconBgColor={category.iconBgColor} 
              iconColor={category.iconColor} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

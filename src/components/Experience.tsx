
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  organization,
  description,
  icon
}) => (
  <Card className="relative border-muted bg-card hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg shrink-0">
          {icon}
        </div>
        <div>
          <span className="text-sm font-medium text-primary">{year}</span>
          <h3 className="text-xl font-semibold mt-1 text-foreground">{title}</h3>
          <p className="text-foreground/80 font-medium">{organization}</p>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Experience: React.FC = () => {
  const workExperience = [
    {
      year: "Dez de 2021 - Presente (3 anos 6 meses)",
      title: "Técnico de Suporte em TI",
      organization: "Forno Mania - Tempo integral",
      description: "Atendimento a usuários presencialmente e remotamente. Monitoramento do sistema ERP TOTVS PROTHEUS e sistema SFA/CRM. Criação de customizações para agilizar processos, manutenção de hardware e software, e análise da infraestrutura para futuras melhorias.",
      icon: <Briefcase className="text-green-500" size={24} />
    },
    {
      year: "Jul de 2017 - Jul de 2021 (4 anos 1 mês)",
      title: "Operador de Loja 2",
      organization: "Villefort Atacarejo - Tempo integral",
      description: "Abastecimento de mercadorias e controle de validades (PEPS). Acompanhamento de relatórios de vendas e planejamento de estratégias para aumentar a venda de produtos com baixa performance semanal.",
      icon: <Briefcase className="text-green-500" size={24} />
    }
  ];

  const education = [
    {
      year: "16/05/2021 - 21/06/2023",
      title: "Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
      organization: "Universidade Pitágoras Unopar Anhanguera",
      description: "Formação completa em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web e soluções digitais.",
      icon: <GraduationCap className="text-green-500" size={24} />
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Currículo
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Experiência & Formação
          </h2>
          <p className="text-muted-foreground">
            Uma linha do tempo da minha jornada profissional e formação
            acadêmica na área de tecnologia e desenvolvimento de software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
              <Briefcase className="mr-2 text-primary" size={20} />
              Experiência Profissional
            </h3>
            <div className="space-y-6">
              {workExperience.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
              <GraduationCap className="mr-2 text-primary" size={20} />
              Formação Acadêmica
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

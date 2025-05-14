
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
  <Card className="relative border border-gray-100 hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="bg-portfolio-purple/10 w-12 h-12 flex items-center justify-center rounded-lg shrink-0">
          {icon}
        </div>
        <div>
          <span className="text-sm font-medium text-portfolio-purple">{year}</span>
          <h3 className="text-xl font-semibold mt-1">{title}</h3>
          <p className="text-gray-700 font-medium">{organization}</p>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Experience: React.FC = () => {
  const workExperience = [
    {
      year: "2021 - Present",
      title: "Senior Full Stack Developer",
      organization: "Company XYZ",
      description: "Led the development of a scalable e-commerce platform handling thousands of daily transactions. Implemented CI/CD pipelines and mentored junior developers.",
      icon: <Briefcase className="text-portfolio-purple" size={24} />
    },
    {
      year: "2019 - 2021",
      title: "Full Stack Developer",
      organization: "Startup ABC",
      description: "Built a real-time chat application using React, Node.js, and Socket.io. Improved website performance by 40% through code optimization.",
      icon: <Briefcase className="text-portfolio-purple" size={24} />
    },
    {
      year: "2017 - 2019",
      title: "Frontend Developer",
      organization: "Tech Solutions Inc.",
      description: "Developed responsive web applications using React and Redux. Collaborated with design team to implement UI/UX improvements.",
      icon: <Briefcase className="text-portfolio-purple" size={24} />
    }
  ];

  const education = [
    {
      year: "2013 - 2017",
      title: "Bachelor's Degree in Computer Science",
      organization: "Top University",
      description: "Graduated with honors. Specialized in web development and algorithms. Completed capstone project on AI-powered web applications.",
      icon: <GraduationCap className="text-portfolio-purple" size={24} />
    },
    {
      year: "2020",
      title: "Advanced Web Development Certification",
      organization: "Web Academy",
      description: "Mastered advanced concepts in modern web development including React, Node.js, and cloud deployment strategies.",
      icon: <GraduationCap className="text-portfolio-purple" size={24} />
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-sm font-semibold text-portfolio-purple mb-2 uppercase tracking-wider">
            Resume
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-600">
            A timeline of my professional journey and educational background
            in the field of web development and software engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 text-portfolio-purple" size={20} />
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-portfolio-purple" size={20} />
              Education
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

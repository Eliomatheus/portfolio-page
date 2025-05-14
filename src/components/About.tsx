
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-sm font-semibold text-portfolio-purple mb-2 uppercase tracking-wider">
            About Me
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate About Creating Exceptional Web Experiences
          </h2>
          <p className="text-gray-600">
            I'm an experienced Full Stack Developer specializing in modern web and mobile technologies.
            Passionate about innovation and creating efficient solutions, I'm committed to delivering
            robust and scalable applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 bg-portfolio-purple/10 w-12 h-12 flex items-center justify-center rounded-lg">
                <User className="text-portfolio-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-gray-600">
                Over 5 years of experience in developing web and mobile applications for clients
                ranging from startups to enterprise companies.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 bg-portfolio-purple/10 w-12 h-12 flex items-center justify-center rounded-lg">
                <Briefcase className="text-portfolio-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced</h3>
              <p className="text-gray-600">
                Worked with diverse teams and clients to deliver high-quality solutions that 
                meet business objectives and exceed user expectations.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 bg-portfolio-purple/10 w-12 h-12 flex items-center justify-center rounded-lg">
                <GraduationCap className="text-portfolio-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Educated</h3>
              <p className="text-gray-600">
                Bachelor's Degree in Computer Science from Top University, with continuous 
                learning through professional courses and certifications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

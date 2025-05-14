
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { 
      icon: <Mail className="text-portfolio-green" size={24} />, 
      title: "Email", 
      value: "eliomatheus8@gmail.com",
      link: "mailto:eliomatheus8@gmail.com" 
    },
    { 
      icon: <Phone className="text-portfolio-green" size={24} />, 
      title: "Telefone", 
      value: "(+55) 1234-5678",
      link: "tel:+551234-5678" 
    },
    { 
      icon: <MapPin className="text-portfolio-green" size={24} />, 
      title: "Localização", 
      value: "São Paulo, SP",
      link: "https://maps.google.com/?q=São+Paulo,+SP" 
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-sm font-semibold text-portfolio-green mb-2 uppercase tracking-wider">
            Entre em Contato
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Conversar
          </h2>
          <p className="text-gray-600">
            Interessado em trabalharmos juntos? Preencha o formulário abaixo com algumas informações
            sobre seu projeto, e entrarei em contato o mais breve possível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Seu Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="Consulta de Projeto"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Conte-me sobre seu projeto..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-portfolio-green hover:bg-portfolio-green/90 gap-2 w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'} <Send size={16} />
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-gray-50 p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    href={info.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:text-portfolio-green transition-colors"
                  >
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Conecte-se Comigo</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/eliomatheus/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow-sm hover:bg-portfolio-green/10 transition-colors"
                  >
                    <Linkedin className="text-portfolio-green" size={20} />
                  </a>
                  <a 
                    href="https://github.com/Eliomatheus" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow-sm hover:bg-portfolio-green/10 transition-colors"
                  >
                    <Github className="text-portfolio-green" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

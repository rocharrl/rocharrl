import React, { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { CTAButton } from './ui/cta-button';
import { toast } from './ui/use-toast';
export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    agreeTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formState.name || !formState.email || !formState.phone || !formState.company || !formState.position || !formState.agreeTerms) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios e aceite os termos.",
        variant: "destructive"
      });
      return;
    }

    // Simulação de envio de formulário
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Obrigado pelo seu interesse. Em breve entraremos em contato."
      });
    }, 1500);
  };
  return <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-naturalCloud-green mb-4">Conheça mais sobre a NaturalCloud</h2>
            <p className="text-lg font-bold text-teal-700">Cadastre-se agora e receba contato da nossa equipe.</p>
          </div>
          
          {!isSubmitted ? <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input id="name" name="name" value={formState.name} onChange={handleChange} placeholder="Seu nome completo" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Corporativo *</Label>
                  <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} placeholder="seu.email@empresa.com.br" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Celular *</Label>
                  <Input id="phone" name="phone" value={formState.phone} onChange={handleChange} placeholder="(00) 00000-0000" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa *</Label>
                  <Input id="company" name="company" value={formState.company} onChange={handleChange} placeholder="Nome da sua empresa" required />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="position">Cargo *</Label>
                  <Input id="position" name="position" value={formState.position} onChange={handleChange} placeholder="Seu cargo na empresa" required />
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <input id="agreeTerms" name="agreeTerms" type="checkbox" className="mr-3 mt-1" checked={formState.agreeTerms} onChange={handleChange} required />
                <Label htmlFor="agreeTerms" className="text-sm text-gray-600">
                  Concordo em receber comunicações da Newsupri e declaro que li e aceito a{' '}
                  <a href="#" className="text-naturalCloud-turquoise hover:underline">
                    Política de Privacidade
                  </a> conforme a LGPD.
                </Label>
              </div>
              
              <div className="text-center">
                <CTAButton variant="primary" size="lg" className="w-full md:w-auto" disabled={isSubmitting} type="submit">
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </CTAButton>
              </div>
              
              <p className="mt-6 text-center text-sm text-gray-500">
                Venha conhecer mais sobre a NATURALCLOUD e como a Newsupri te apoia na jornada 
                para uma infraestrutura híbrida e distribuída
              </p>
            </form> : <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-naturalCloud-green mb-4">
                Obrigado pelo seu interesse!
              </h3>
              
              <p className="text-gray-600 mb-6">
                Recebemos seu cadastro com sucesso. Em breve nossa equipe entrará em contato 
                para apresentar como o NaturalCloud pode transformar sua infraestrutura de TI.
              </p>
              
              <CTAButton variant="secondary" onClick={() => setIsSubmitted(false)}>
                Enviar outro formulário
              </CTAButton>
            </div>}
        </div>
      </div>
    </section>;
}
import React from 'react';
import { CTAButton } from './ui/cta-button';
import { FileText } from 'lucide-react';
export function DHISection() {
  return <section id="dhi" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="/lovable-uploads/e613da41-764d-4428-b826-f8f00c9b5aad.png" alt="Exploradores na trilha" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl text-white mb-6 md:text-4xl font-bold">
            Infraestrutura Híbrida Distribuída (DHI)
          </h2>
          
          <div className="w-20 h-1 bg-naturalCloud-turquoise mx-auto mb-6"></div>
          
          <p className="text-lg text-white/90 mb-8">
            O DHI é o conceito central do NaturalCloud, permitindo que você enxergue além das árvores para ver toda a floresta do seu ecossistema digital, com controle, governança e flexibilidade sem igual.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-white">
            <h3 className="text-xl font-semibold mb-4 text-naturalCloud-turquoise">Visão Integrada</h3>
            <p>
              O DHI oferece uma visão completa e unificada de todos os ambientes de nuvem, permitindo gestão centralizada e eficiente.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-white">
            <h3 className="text-xl font-semibold mb-4 text-naturalCloud-turquoise">Flexibilidade Estratégica</h3>
            <p>
              Combine diferentes tipos de infraestrutura conforme suas necessidades específicas de negócio, otimizando custo e desempenho.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-white">
            <h3 className="text-xl font-semibold mb-4 text-naturalCloud-turquoise">Governança Unificada</h3>
            <p>
              Mantenha controle centralizado de segurança, compliance e custos em todos os ambientes distribuídos.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <CTAButton variant="primary" size="lg" className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Baixe o whitepaper completo sobre DHI
          </CTAButton>
        </div>
      </div>
    </section>;
}
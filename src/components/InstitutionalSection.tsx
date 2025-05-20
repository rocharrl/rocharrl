
import React from 'react';
import { CTAButton } from './ui/cta-button';

export function InstitutionalSection() {
  return (
    <section id="institutional" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-naturalCloud-green mb-6">
              Conheça a Newsupri
            </h2>
            
            <div className="w-20 h-1 bg-naturalCloud-orange mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Há 40 anos, a Newsupri tem sido pioneira em soluções de tecnologia, 
              integrando o que há de mais avançado para gerar resultados concretos 
              para nossos clientes.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Com o NaturalCloud, levamos nossa expertise em infraestrutura 
              para o próximo nível, oferecendo uma solução completa de DHI 
              (Infraestrutura Híbrida Distribuída) que transforma a maneira 
              como empresas gerenciam seus recursos de TI.
            </p>
            
            <div className="mb-8">
              <img 
                src="/lovable-uploads/1c736ba0-e092-4612-910b-4ebaa7cd3a86.png" 
                alt="Newsupri - Integrando tecnologias. Gerando resultados." 
                className="h-16"
              />
            </div>
            
            <CTAButton variant="primary">
              Assista ao vídeo institucional
            </CTAButton>
          </div>
          
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/d_HFzXaH-Hs" 
              title="Vídeo Institucional Newsupri"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

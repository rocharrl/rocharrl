import React from 'react';
import { Car, Ship, Plane } from 'lucide-react';
import { Icon } from 'lucide-react';
import { Card, CardContent } from './ui/card';
export function ContractTypes() {
  return <section id="contract-types" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-naturalCloud-green mb-4">
            Flexibilidade de Contratação como uma Locadora de Transportes
          </h2>
          <p className="text-lg max-w-3xl mx-auto font-bold text-teal-700">Acesse todos os tipos de transporte conforme sua necessidade e utilize o melhor de toda a floresta.</p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 mb-8">
            Assim como uma locadora de transportes oferece diferentes veículos para cada tipo de jornada, 
            o NaturalCloud permite que você escolha a infraestrutura ideal para cada workload, sem amarrar 
            capital em ativos ociosos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 border-2 border-naturalCloud-green/20">
            <div className="h-48 relative">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/lovable-uploads/ab482655-7e66-4ef6-a480-b1ae2c8ec2fd.png" alt="Helicóptero sobrevoando floresta" className="w-full h-full object-cover object-center" loading="eager" />
                <div className="absolute inset-0 bg-naturalCloud-turquoise/20 backdrop-blur-[2px]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 group transition-all duration-500 z-10">
                  <Plane className="w-24 h-24 text-white drop-shadow-lg group-hover:text-naturalCloud-green transition-colors duration-300" />
                </div>
              </div>
            </div>
            <CardContent className="p-6 bg-white">
              <h3 className="text-xl font-bold text-naturalCloud-green mb-3 flex items-center">
                <span className="mr-2">Aéreo</span>
                <span className="bg-naturalCloud-turquoise text-white text-xs py-1 px-2 rounded-full">Nuvem  Pública</span>
              </h3>
              <p className="text-gray-600">
                Para jornadas que exigem alta elasticidade e escalabilidade. Ideal para cargas de trabalho 
                com demandas variáveis e necessidade de disponibilidade global.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-naturalCloud-green mr-2">✓</span>
                  <span>Escalabilidade sob demanda</span>
                </li>
                <li className="flex items-start">
                  <span className="text-naturalCloud-green mr-2">✓</span>
                  <span>Global reach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-naturalCloud-green mr-2">✓</span>
                  <span>Alta resiliência</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 border-2 border-naturalCloud-green/20">
            <div className="h-48 relative">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/lovable-uploads/d548ccf6-c876-4470-a7d0-d3092bc4bc2d.png" alt="Jipe na floresta" className="w-full h-full object-cover object-center" loading="eager" />
                <div className="absolute inset-0 bg-naturalCloud-turquoise/20 backdrop-blur-[2px]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 group transition-all duration-500 z-10">
                  <Car className="w-24 h-24 text-white drop-shadow-lg group-hover:text-naturalCloud-green transition-colors duration-300" />
                </div>
              </div>
            </div>
            <CardContent className="p-6 bg-white">
              <h3 className="text-xl font-bold text-naturalCloud-green mb-3 flex items-center">
                <span className="mr-2">Terrestre</span>
                <span className="bg-naturalCloud-turquoise text-white text-xs py-1 px-2 rounded-full">Nuvem  Privada</span>
              </h3>
              <p className="text-gray-600">
                Para trajetos contínuos e previsíveis. Perfeita para workloads estáveis, com uso contínuo 
                e requisitos específicos de controle e personalização.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-naturalCloud-green mr-2">✓</span>
                  <span>Desempenho previsível</span>
                </li>
                <li className="flex items-start">
                  <span className="text-naturalCloud-green mr-2">✓</span>
                  <span>Controle total dos recursos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-naturalCloud-green mr-2">✓</span>
                  <span>Segurança personalizada</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 border-2 border-naturalCloud-green/20">
            <div className="h-48 relative">
              <div className="absolute inset-0 overflow-hidden">
                <img src="/lovable-uploads/6e0f6a81-9b72-4f8c-989e-ef3e79d85dfe.png" alt="Lancha em rio entre florestas" className="w-full h-full object-cover object-center" loading="eager" />
                <div className="absolute inset-0 bg-naturalCloud-turquoise/20 backdrop-blur-[2px]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 group transition-all duration-500 z-10">
                  <Ship className="w-24 h-24 text-white drop-shadow-lg group-hover:text-naturalCloud-green transition-colors duration-300" />
                </div>
              </div>
            </div>
            <CardContent className="p-6 bg-white">
              <h3 className="text-xl font-bold text-naturalCloud-green mb-3 flex items-center">
                <span className="mr-2">Marítimo</span>
                <span className="bg-naturalCloud-turquoise text-white text-xs py-1 px-2 rounded-full">Edge  Computing</span>
              </h3>
              <p className="text-gray-600">
                Para processamento próximo à fonte dos dados. Ideal para aplicações que exigem baixa latência, 
                alta disponibilidade local e processamento de dados na origem.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-naturalCloud-green mr-2">✓</span>
                  <span>Baixa latência</span>
                </li>
                <li className="flex items-start">
                  <span className="text-naturalCloud-green mr-2">✓</span>
                  <span>Processamento local</span>
                </li>
                <li className="flex items-start">
                  <span className="text-naturalCloud-green mr-2">✓</span>
                  <span>Resiliência a falhas de rede</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}
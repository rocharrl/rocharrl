
import React, { useState } from 'react';
import { 
  Building2, 
  Sliders, 
  BarChart, 
  Repeat, 
  Shield, 
  CircleDollarSign 
} from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export function Pillars() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const pillars: Pillar[] = [
    {
      id: 'architecture',
      title: 'Arquitetura',
      icon: <Building2 className="h-10 w-10 text-naturalCloud-turquoise" />,
      description: 'Design de infraestrutura híbrida otimizada para cada workload, combinando nuvem pública, privada e edge computing conforme necessidades específicas.'
    },
    {
      id: 'control',
      title: 'Controle',
      icon: <Sliders className="h-10 w-10 text-naturalCloud-turquoise" />,
      description: 'Gestão centralizada de todos os ambientes, com visibilidade em tempo real de custo, risco e desempenho através de um portal unificado.'
    },
    {
      id: 'consumption',
      title: 'Consumo',
      icon: <BarChart className="h-10 w-10 text-naturalCloud-turquoise" />,
      description: 'Modelo baseado no consumo real de recursos, permitindo completa transparência e otimização de custos sem compromissos de longo prazo.'
    },
    {
      id: 'lifecycle',
      title: 'Ciclo de Vida',
      icon: <Repeat className="h-10 w-10 text-naturalCloud-turquoise" />,
      description: 'Gestão completa do ciclo de vida de infraestrutura, desde implantação até atualização, com evolução contínua sem interrupções de serviço.'
    },
    {
      id: 'governance',
      title: 'Governança',
      icon: <Shield className="h-10 w-10 text-naturalCloud-turquoise" />,
      description: 'Estrutura unificada de governança para segurança, LGPD, auditoria e compliance, garantindo conformidade em todos os ambientes.'
    },
    {
      id: 'economic',
      title: 'Modelo Econômico',
      icon: <CircleDollarSign className="h-10 w-10 text-naturalCloud-turquoise" />,
      description: 'Transformação de CAPEX em OPEX, com custos previsíveis por 5 anos e eliminação de despesas com over-provisioning.'
    }
  ];

  const togglePillar = (id: string) => {
    if (activePillar === id) {
      setActivePillar(null);
    } else {
      setActivePillar(id);
    }
  };

  return (
    <section id="pillars" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/lovable-uploads/1b543ebf-20d7-4a7c-af43-e6ee62c93f59.png" 
          alt="Floresta com trilha digital" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Os 6 Pilares do NaturalCloud
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Fundamentos que garantem a excelência e eficiência da nossa solução
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="relative">
              <button
                onClick={() => togglePillar(pillar.id)}
                className={`
                  w-full h-full p-6 rounded-xl text-left transition-all duration-300
                  ${activePillar === pillar.id 
                    ? 'bg-naturalCloud-turquoise text-white' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'}
                `}
              >
                <div className="flex items-center mb-4">
                  <div className={`
                    rounded-full p-3 mr-4 transition-colors
                    ${activePillar === pillar.id
                      ? 'bg-white/20' 
                      : 'bg-naturalCloud-turquoise/20'}
                  `}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                </div>
                
                {activePillar === pillar.id && (
                  <p className="text-white/90 animate-fade-in">
                    {pillar.description}
                  </p>
                )}
                
                {activePillar !== pillar.id && (
                  <p className="text-white/60 text-sm">
                    Clique para saber mais
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

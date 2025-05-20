import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { TrendingDown, RotateCw, DollarSign, Shield, Rocket, BarChart, Lock, LockKeyhole, Zap, Repeat } from 'lucide-react';
interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
export function Advantages() {
  const [activeAdvantage, setActiveAdvantage] = useState<number | null>(null);
  const advantages: Advantage[] = [{
    id: 1,
    title: "Fim do over-provisioning",
    description: "Elimine o excesso de recursos não utilizados, otimizando custos e evitando desperdícios com provisionamento desnecessário.",
    icon: <TrendingDown className="h-10 w-10 text-white filter drop-shadow-md" />
  }, {
    id: 2,
    title: "Hardware sempre atualizado",
    description: "Mantenha-se na vanguarda tecnológica com infraestrutura constantemente atualizada, sem necessidade de grandes investimentos em atualização.",
    icon: <RotateCw className="h-10 w-10 text-white filter drop-shadow-md" />
  }, {
    id: 3,
    title: "Pague só pelo que usar",
    description: "Modelo de cobrança flexível baseado no consumo real, permitindo melhor controle financeiro e previsibilidade de custos.",
    icon: <DollarSign className="h-10 w-10 text-white filter drop-shadow-md" />
  }, {
    id: 4,
    title: "Governança, sustentação e suporte incluídos",
    description: "Pacote completo de serviços que garantem segurança, conformidade e suporte técnico especializado para sua infraestrutura.",
    icon: <Shield className="h-10 w-10 text-white filter drop-shadow-md" />
  }, {
    id: 5,
    title: "Evolua e inove rápido",
    description: "Agilidade para implementar novas soluções e adaptar-se rapidamente às mudanças do mercado, acelerando a transformação digital.",
    icon: <Rocket className="h-10 w-10 text-white filter drop-shadow-md" />
  }, {
    id: 6,
    title: "Custos previsíveis por 5 anos",
    description: "Planejamento financeiro facilitado com previsibilidade de custos a longo prazo, permitindo melhor gestão orçamentária.",
    icon: <BarChart className="h-10 w-10 text-white filter drop-shadow-md" />
  }, {
    id: 7,
    title: "Plataforma portável - zero vendor-lock-in",
    description: "Liberdade para migrar seus workloads entre diferentes ambientes sem ficar preso a um único fornecedor.",
    icon: <Lock className="h-10 w-10 text-white filter drop-shadow-md" />
  }, {
    id: 8,
    title: "Controle total & dados privados",
    description: "Mantenha o controle completo sobre seus dados e aplicações, garantindo privacidade e segurança em conformidade com a LGPD.",
    icon: <LockKeyhole className="h-10 w-10 text-white filter drop-shadow-md" />
  }, {
    id: 9,
    title: "Capacidade extra on-demand",
    description: "Flexibilidade para escalar recursos rapidamente conforme a demanda, sem comprometer o desempenho em momentos de pico.",
    icon: <Zap className="h-10 w-10 text-white filter drop-shadow-md" />
  }, {
    id: 10,
    title: "Interoperabilidade garantida",
    description: "Integração perfeita entre diferentes ambientes de nuvem e sistemas legados, eliminando silos tecnológicos.",
    icon: <Repeat className="h-10 w-10 text-white filter drop-shadow-md" />
  }];
  const toggleAdvantage = (id: number) => {
    if (activeAdvantage === id) {
      setActiveAdvantage(null);
    } else {
      setActiveAdvantage(id);
    }
  };
  return <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-naturalCloud-green mb-4">
            10 Vantagens que Transformam sua Infraestrutura
          </h2>
          <p className="max-w-3xl mx-auto text-lg font-bold text-teal-700">
            Descubra como o NaturalCloud oferece benefícios incomparáveis para a modernização da sua infraestrutura digital
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {advantages.map(advantage => <div key={advantage.id} className="flex flex-col">
              <button className={`
                  relative rounded-2xl p-5 text-center transition-all duration-300
                  ${activeAdvantage === advantage.id ? 'bg-naturalCloud-turquoise text-white shadow-lg animate-glow z-10' : 'bg-white shadow border border-naturalCloud-turquoise/20 hover:bg-naturalCloud-turquoise/10'}
                  ${advantage.id <= 5 ? 'sm:col-span-1' : 'sm:col-span-1'}
                  cursor-pointer transform hover:scale-105 min-h-[160px]
                `} onClick={() => toggleAdvantage(advantage.id)}>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="bg-gradient-to-br from-naturalCloud-green to-naturalCloud-turquoise w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(0,121,127,0.4)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,174,219,0.6)]">
                    {advantage.icon}
                  </div>
                  <h3 className={`font-semibold ${activeAdvantage === advantage.id ? 'text-white' : 'text-naturalCloud-green'}`}>
                    {advantage.title}
                  </h3>
                </div>
              </button>
              
              {activeAdvantage === advantage.id && <Card className="mt-2 cloud-shadow animate-fade-in">
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>}
            </div>)}
        </div>
      </div>
    </section>;
}
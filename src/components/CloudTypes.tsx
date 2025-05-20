import React from 'react';
import { Cloud, Database, Shield, FileText, CircleDollarSign, Rocket, Lock, Cpu, Network } from 'lucide-react';
export function CloudTypes() {
  return <section id="cloud-types" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-naturalCloud-green mb-4">
            A Combinação Perfeita para Cada Necessidade
          </h2>
          <p className="text-lg max-w-3xl mx-auto font-bold text-teal-700">
            Entrega de recursos de TI como serviços gerenciados, viabilizando a jornada de evolução 
            da infraestrutura para um ambiente híbrido e distribuído
          </p>
        </div>

        {/* Modified grid to 2 columns with responsive adjustments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Cloud card */}
          <div className="bg-naturalCloud-green/5 rounded-2xl overflow-hidden p-6 border border-naturalCloud-green/20 shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
            <div className="flex items-start">
              <div className="bg-gradient-to-br from-naturalCloud-green to-naturalCloud-turquoise w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mr-4 shadow-[0_0_15px_rgba(0,121,127,0.4)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,174,219,0.6)]">
                <Cloud className="h-8 w-8 text-white filter drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-naturalCloud-green mb-2">
                  Nuvem PÚBLICA
                </h3>
                <p className="text-gray-700 mb-2">
                  Workloads de alta elasticidade
                </p>
                <p className="text-sm text-gray-600">Ideal para cargas de trabalho que exigem escalabilidade rápida e recursos sob demanda. </p>
              </div>
            </div>
          </div>

          {/* Database card */}
          <div className="bg-naturalCloud-green/5 rounded-2xl overflow-hidden p-6 border border-naturalCloud-green/20 shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
            <div className="flex items-start">
              <div className="bg-gradient-to-br from-naturalCloud-green to-naturalCloud-turquoise w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mr-4 shadow-[0_0_15px_rgba(0,121,127,0.4)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,174,219,0.6)]">
                <Database className="h-8 w-8 text-white filter drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-naturalCloud-green mb-2">
                  Nuvem PRIVADA
                </h3>
                <p className="text-gray-700 mb-2">
                  Workloads com utilização contínua
                </p>
                <p className="text-sm text-gray-600">
                  Perfeita para cargas de trabalho estáveis e previsíveis, com uso contínuo e 
                  requisitos específicos de controle e personalização.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Four Pillars - With updated technological icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="bg-gradient-to-br from-naturalCloud-green/20 to-naturalCloud-turquoise/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-naturalCloud-green/30 shadow-[0_0_10px_rgba(0,121,127,0.2)]">
              <Shield className="w-10 h-10 text-naturalCloud-green filter drop-shadow-sm" />
            </div>
            <h3 className="text-xl font-semibold text-naturalCloud-green mb-2">Governança</h3>
            <p className="text-gray-600">
              Sistema unificado de governança de segurança, LGPD e auditoria para ambientes multi-cloud.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="bg-gradient-to-br from-naturalCloud-green/20 to-naturalCloud-turquoise/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-naturalCloud-green/30 shadow-[0_0_10px_rgba(0,121,127,0.2)]">
              <Cpu className="w-10 h-10 text-naturalCloud-green filter drop-shadow-sm" />
            </div>
            <h3 className="text-xl font-semibold text-naturalCloud-green mb-2">Sustentação</h3>
            <p className="text-gray-600">
              Monitoração, operação e administração integradas para gestão eficiente de recursos.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="bg-gradient-to-br from-naturalCloud-green/20 to-naturalCloud-turquoise/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-naturalCloud-green/30 shadow-[0_0_10px_rgba(0,121,127,0.2)]">
              <Network className="w-10 h-10 text-naturalCloud-green filter drop-shadow-sm" />
            </div>
            <h3 className="text-xl font-semibold text-naturalCloud-green mb-2">Suporte Técnico</h3>
            <p className="text-gray-600">
              Equipe especializada para garantir o funcionamento contínuo e otimizado da sua infraestrutura.
            </p>
          </div>
          
          {/* Keeping the Modelo de Contratação card in the bottom section with updated icon */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="bg-gradient-to-br from-naturalCloud-green/20 to-naturalCloud-turquoise/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-naturalCloud-green/30 shadow-[0_0_10px_rgba(0,121,127,0.2)]">
              <CircleDollarSign className="w-10 h-10 text-naturalCloud-green filter drop-shadow-sm" />
            </div>
            <h3 className="text-xl font-semibold text-naturalCloud-green mb-2">Modelo de Contratação</h3>
            <p className="text-gray-600">
              Capacidade reservada + consumo variável, sem lock-in, SLAs 99,999 %, FinOps e governança, custos previsíveis.
            </p>
          </div>
        </div>
      </div>
    </section>;
}
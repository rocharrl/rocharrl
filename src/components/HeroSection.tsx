import React from 'react';
import { CTAButton } from './ui/cta-button';
export function HeroSection() {
  return <section id="home" className="relative min-h-screen pt-20 flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src="/lovable-uploads/c4efc426-5c04-43f3-bcca-f0ff265d49a9.png" alt="Floresta vista de baixo com rede digital" className="w-full h-full object-cover" />
        {/* Animated digital network overlay */}
        <div className="absolute inset-0 z-20 opacity-70 bg-[url('/lovable-uploads/c4efc426-5c04-43f3-bcca-f0ff265d49a9.png')] bg-cover mix-blend-screen animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-30 relative">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Logo in hero - usando a imagem enviada */}
          <img src="/lovable-uploads/e59e9a83-e0dd-489a-a658-07d2507a7c73.png" alt="NaturalCloud by Newsupri" className="w-80 sm:w-96 md:w-[450px] mb-10 digital-glow" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-medium text-white mb-4 drop-shadow-lg">
            A Floresta Inteira ao Seu Alcance
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl drop-shadow-md">Da nuvem pública à privada: gestão híbrida sob medida com a NEWSUPRI.
        </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton variant="primary" size="lg">Descubra o NaturalCloud</CTAButton>
            <CTAButton variant="outline" className="text-white border-white">Converse com nosso time</CTAButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>;
}
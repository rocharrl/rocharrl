import React, { useState, useRef, useEffect } from 'react';
import { Headphones, Download, Share2, Play, Pause, Volume2 } from 'lucide-react';
import { CTAButton } from './ui/cta-button';
import { toast } from "@/components/ui/use-toast";
export function Podcast() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const audioRef = useRef<HTMLVideoElement>(null);

  // Link do Google Drive para o arquivo de podcast
  const podcastUrl = "https://drive.google.com/uc?export=download&id=SEU_ID_DO_ARQUIVO";
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;

      // Update progress percentage
      setProgress(current / total * 100);

      // Format time displays
      setCurrentTime(formatTime(current));
      setDuration(formatTime(total));
    }
  };
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const percentageClicked = clickPosition / progressBar.offsetWidth;
      const newTime = percentageClicked * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };
  const handleDownload = () => {
    // Redireciona para o link de download do Google Drive
    window.open(podcastUrl, '_blank');
    toast({
      title: "Download iniciado",
      description: "Seu podcast começará a baixar em instantes."
    });
  };
  const handleShare = () => {
    // This would typically open share options
    if (navigator.share) {
      navigator.share({
        title: 'NaturalCloud Podcast',
        text: 'DHI: O Futuro da Infraestrutura Corporativa',
        url: window.location.href
      }).catch(() => {
        toast({
          title: "Compartilhamento",
          description: "Link do podcast copiado para sua área de transferência!"
        });
      });
    } else {
      // Fallback for browsers that don't support navigator.share
      toast({
        title: "Compartilhamento",
        description: "Link do podcast copiado para sua área de transferência!"
      });
    }
  };
  return <section id="podcast" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-naturalCloud-green mb-4">
              Ouça o Podcast Especial NaturalCloud
            </h2>
            <p className="text-lg font-bold text-teal-700">
              Aprofunde seu conhecimento sobre infraestrutura híbrida distribuída e as soluções NaturalCloud
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-8">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-naturalCloud-green">
                  <img src="/lovable-uploads/c43749d9-634f-4495-8dd3-d17b263c18c9.png" alt="NaturalCloud Podcast" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                    <Headphones className="h-16 w-16 text-white opacity-90" />
                  </div>
                </div>

                {/* Hidden video element to play the podcast */}
                <video ref={audioRef} className="hidden" onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)} onLoadedMetadata={handleTimeUpdate}>
                  <source src={podcastUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-naturalCloud-green mb-3">
                  DHI: O Futuro da Infraestrutura Corporativa
                </h3>
                <p className="text-gray-600 mb-6">
                  Neste episódio especial, nossos especialistas discutem como a Infraestrutura Híbrida Distribuída 
                  está transformando o mercado corporativo e como empresas podem se beneficiar desta abordagem inovadora.
                </p>
                
                <div className="mb-8">
                  <div className="h-12 bg-gray-100 rounded-full relative overflow-hidden flex items-center cursor-pointer" onClick={handleProgressClick}>
                    <div className="h-full bg-naturalCloud-turquoise rounded-full transition-all duration-300" style={{
                    width: `${progress}%`
                  }}></div>
                    <div className="absolute left-0 top-0 h-full w-full px-4 flex items-center justify-between text-sm">
                      <span className="text-white font-medium z-10">{currentTime}</span>
                      <span className="text-gray-500">{duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-2">
                      <button className="w-10 h-10 rounded-full bg-naturalCloud-green flex items-center justify-center text-white" onClick={() => {
                      if (audioRef.current && audioRef.current.currentTime > 10) {
                        audioRef.current.currentTime -= 10;
                      } else if (audioRef.current) {
                        audioRef.current.currentTime = 0;
                      }
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                      <button className="w-12 h-12 rounded-full bg-naturalCloud-green flex items-center justify-center text-white" onClick={togglePlayPause}>
                        {isPlaying ? <Pause className="h-8 w-8" /> : <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>}
                      </button>
                      <button className="w-10 h-10 rounded-full bg-naturalCloud-green flex items-center justify-center text-white" onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.currentTime += 10;
                      }
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex items-center text-naturalCloud-green hover:text-naturalCloud-green/80 transition-colors" onClick={handleDownload}>
                        <Download className="h-5 w-5 mr-1" />
                        <span className="text-sm">Download</span>
                      </button>
                      <button className="flex items-center text-naturalCloud-green hover:text-naturalCloud-green/80 transition-colors ml-4" onClick={handleShare}>
                        <Share2 className="h-5 w-5 mr-1" />
                        <span className="text-sm">Compartilhar</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <CTAButton variant="secondary" onClick={togglePlayPause}>
                    {isPlaying ? 'Pausar podcast' : 'Ouça o podcast especial'}
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
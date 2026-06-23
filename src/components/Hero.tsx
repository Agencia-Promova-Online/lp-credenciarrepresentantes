import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import LogoEixoBranca from '../assets/img/logo-eixo-branca.png';
import Vsl from '../assets/videos/vsl.mp4';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  };
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setHasPlayed(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#b8974c] via-[#8f7336] to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <img src={LogoEixoBranca} alt="Logo Eixo Consórcios" className="mx-auto w-32 md:w-60 mb-8" />
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white text-sm font-medium tracking-wide">
              ESTRUTURA PROFISSIONAL PARA REPRESENTANTES
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Representantes de Consórcio Que Querem Escalar o Faturamento Precisam de{' '}
            <span className="text-[#f1dfb0]">Estrutura</span> — Não de Sorte.
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto">
            A única administradora do Brasil que entrega tráfego pago, marketing e suporte estratégico para quem quer
            previsibilidade de leads e crescimento real.
          </p>

          <button
            onClick={scrollToForm}
            className="inline-block px-12 py-5 bg-white text-[#8f7336] text-lg font-bold rounded-lg hover:bg-[#f8f4ea] transform hover:scale-105 transition-all duration-200 shadow-2xl mb-16"
          >
            Quero Fazer Parte da Estrutura
          </button>

          <div className="max-w-4xl mx-auto mt-16">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
              <video
                ref={videoRef}
                src={Vsl}
                controls={hasPlayed}
                className="w-full h-full object-cover"
              />
              {!hasPlayed && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <button
                      onClick={handlePlay}
                      className="w-24 h-24 md:w-28 md:h-28 bg-[#b8974c] rounded-full flex items-center justify-center mx-auto shadow-2xl hover:bg-[#c9a05a] active:scale-95 transition-transform"
                      aria-label="Assistir ao vídeo"
                    >
                      <Play className="w-12 h-12 md:w-14 md:h-14 text-white ml-1" />
                    </button>
                    <p className="mt-4 text-white text-lg md:text-xl font-semibold">
                      Assista ao vídeo e conheça a estrutura
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          {hasPlayed && (
            <div className="flex flex-col items-center justify-center mt-6">
              <button onClick={scrollToForm} className="group relative" aria-label="Rolar para continuar">
                <div className="w-10 h-16 rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm flex items-start justify-center hover:border-white/50 transition-colors">
                  <span className="mt-2 w-1 h-3 bg-white rounded-full animate-bounce"></span>
                </div>
                <span className="mt-2 block text-white/70 text-xs tracking-wide group-hover:text-white">
                  Role
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

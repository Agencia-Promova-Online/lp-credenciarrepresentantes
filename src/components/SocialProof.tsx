import { useState, useRef } from 'react';
import { Play, Quote, TrendingUp, Star, Pause } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import videos
import videoFernanda from '../assets/videos/Video-Fernanda.mp4';
import videoIsabela from '../assets/videos/Video-Isabela.mp4';
import videoEzequias from '../assets/videos/video-ezequias.mp4';
import videoWilliams from '../assets/videos/Video-Williams.mp4';
import videoEvellyn from '../assets/videos/video-evellyn.mp4';
import videoCesar from '../assets/videos/video-cesar.mp4';

interface VideoSlideProps {
  src: string;
  name: string;
  role: string;
}

const VideoSlide = ({ src, name, role }: VideoSlideProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Pause all other videos
        const allVideos = document.querySelectorAll('video');
        allVideos.forEach(v => {
          if (v !== videoRef.current) {
            v.pause();
            // We can't easily access the state of other components here without a global context or lifting state,
            // but the 'ended' or 'pause' event listeners on those components would handle the UI update if we had them.
            // For now, simple pause is good.
          }
        });
        
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 h-full flex flex-col group">
      <div className="relative aspect-[9/16] bg-black cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        >
          <source src={src} type="video/mp4" />
          <source src={src} type="video/quicktime" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        
        {/* Overlay with Play Button */}
        <div 
          className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
            isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
          }`}
        >
          <div className="w-16 h-16 bg-[#b8974c]/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform transition-transform duration-300 hover:scale-110">
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white fill-white" />
            ) : (
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            )}
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-900">
        <div className="flex items-center gap-2 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <h4 className="font-bold text-lg text-white">{name}</h4>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default function SocialProof() {
  const testimonials = [
    {
      name: 'Ricardo Ferreira',
      location: 'São Paulo, SP',
      result: 'De 2 vendas/mês para 15 vendas/mês',
      quote: 'Sempre trabalhei com portais de imóveis e marketplaces e nunca consegui escalar. Com a estrutura da Eixo Consórcios, os leads qualificados chegam todos os dias. Meu faturamento triplicou em 4 meses.',
      increase: '+650%',
    },
    {
      name: 'Juliana Santos',
      location: 'Curitiba, PR',
      result: 'Passou de R$ 8k para R$ 35k/mês',
      quote: 'A diferença é ter uma equipe cuidando do marketing enquanto eu foco em fechar negócios. Os criativos são profissionais e o CRM organiza tudo. Mudou completamente meu jogo.',
      increase: '+337%',
    },
    {
      name: 'Carlos Eduardo',
      location: 'Belo Horizonte, MG',
      result: 'Expandiu para vendas internacionais',
      quote: 'Com o treinamento de vendas para o exterior, abri um mercado totalmente novo. Hoje atendo brasileiros em Portugal, EUA e Canadá. A estrutura me deu essa possibilidade.',
      increase: '+280%',
    },
  ];

  const results = [
    { value: '+R$ 90mi', label: 'Em Vendas por Mês' },
    { value: '+R$ 1bi', label: 'Em Vendas Processadas' },
     { value: '22', label: 'Representantes Ativos' },
    { value: '4.8/5', label: 'Avaliação Média' },
  ];

  const videos = [
    { src: videoIsabela, name: 'Isabela Martins', role: 'Representante' },
    { src: videoWilliams, name: 'Cesar', role: 'Representante' },
    { src: videoEzequias, name: 'Ezequias', role: 'Representante' },
    { src: videoEvellyn, name: 'Evellyn', role: 'Representante' },
    { src: videoCesar, name: 'Williams', role: 'Representante' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resultados <span className="text-[#c9a05a]">Reais</span> de Quem Usa Nossa Estrutura.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Representantes que estavam travados agora têm previsibilidade e crescimento consistente
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#c9a05a] to-[#b8974c] rounded-xl p-6 text-center shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{result.value}</div>
                <div className="text-sm text-[#f3e7c7]">{result.label}</div>
              </div>
            ))}
          </div>

          {/* Video Carousel Section */}
          <div className="mb-24">
            <div className="flex items-center justify-center gap-2 mb-10">
              <Play className="w-8 h-8 text-[#c9a05a] fill-[#c9a05a]" />
              <h3 className="text-3xl font-bold text-center">Assista aos Depoimentos em Vídeo</h3>
            </div>
            
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="w-full py-12"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index} className="w-full max-w-sm">
                  <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 h-full flex flex-col">
                    <div className="relative aspect-[9/16] bg-black">
                      <video
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover"
                        playsInline
                      >
                        <source src={video.src} type="video/mp4" />
                        <source src={video.src} type="video/quicktime" />
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                    </div>
                    <div className="p-4 bg-gray-900">
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      </div>
                      <h4 className="font-bold text-lg text-white">{video.name}</h4>
                      <p className="text-gray-400 text-sm">{video.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                * Clique no play para assistir aos depoimentos completos
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-[#b8974c] transition-all duration-300 hover:shadow-[#6e5524]/20 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#b8974c] rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{testimonial.increase}</div>
                    <div className="text-xs text-gray-400">
                      <TrendingUp className="w-4 h-4 inline mr-1" />
                      Crescimento
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-300 leading-relaxed italic mb-4">"{testimonial.quote}"</p>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="font-bold text-white mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-400 mb-2">{testimonial.location}</div>
                  <div className="text-sm text-[#d8be86] font-semibold">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-4">
              <span className="font-bold text-white">Depoimentos reais</span> de representantes que
              saíram da instabilidade e agora têm fluxo constante de leads e vendas.
            </p>
            <p className="text-gray-400">
              Os resultados individuais podem variar de acordo com dedicação, mercado e aplicação da estrutura.
            </p>
          </div>
        </div>
      </div>
      
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #b8974c;
        }
        .swiper-pagination-bullet-active {
          background: #b8974c;
        }
      `}</style>
    </section>
  );
}

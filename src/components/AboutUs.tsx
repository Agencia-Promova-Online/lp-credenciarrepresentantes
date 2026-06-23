import { ArrowRight, CheckCircle2 } from 'lucide-react';
import teamImage from '../assets/img/foto-equipe.webp';
import LogoEixoPreta from '../assets/img/logo-eixo-preta.png'
export default function AboutUs() {
  const benefits = [
    'Suporte contínuo de especialistas',
    'Ambiente focado em resultados',
    'Tecnologia de ponta para vendas',
    'Crescimento acelerado de carreira'
  ];

  const handleCtaClick = () => {
    const formSection = document.getElementById('form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f7f1e3] rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#b8974c] rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-[#b8974c] rounded-2xl rotate-3 group-hover:rotate-2 transition-transform duration-300 opacity-20"></div>
              <img 
                src={teamImage} 
                alt="Equipe Eixo" 
                className="relative rounded-2xl shadow-2xl w-full object-cover transform transition-transform duration-500 hover:scale-[1.01]"
              />
              
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Time de Alta Performance</p>
                    <p className="text-sm font-bold text-gray-900">100% Comprometidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f7f1e3] rounded-full text-[#8f7336] font-semibold text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d6b674] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b8974c]"></span>
              </span>
              Sobre Nós
            </div>
             <img src={LogoEixoPreta} alt="Logo Eixo Consórcios" className=" w-32 md:w-60 mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Venha fazer parte do time que <span className="text-[#b8974c] relative">
                mais cresce
                <svg className="absolute w-full h-2 bottom-1 left-0 text-[#e9d6ac] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> no Brasil
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Não somos apenas uma empresa, somos uma comunidade dedicada a transformar o mercado de representação comercial. 
              Aqui, você encontra a estrutura, o apoio e as ferramentas necessárias para alavancar seus resultados e construir uma história de sucesso.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f7f1e3] flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8974c]" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={handleCtaClick}
              className="group bg-[#b8974c] hover:bg-[#a7863d] text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-[#b8974c]/30 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Quero Fazer Parte
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

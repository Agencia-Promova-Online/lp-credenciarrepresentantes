import React from 'react';
import { Check, Shield, TrendingUp, Users, Zap, Award, Star, Trophy } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: "Representante Iniciante",
      icon: <Award className="w-8 h-8 text-amber-700" />, // Bronze
      price: "1.395",
      description: "Porta de entrada para validar operação.",
      features: [
        "Tráfego pago até 1 segmento",
        "4 criativos",
        "Processo comercial estruturado",
        "Integração Google Sheets"
      ],
      positioning: "Aqui você recebe o essencial para sair da informalidade e começar com organização: tráfego ativo, criativos estratégicos e um processo comercial estruturado.",
      highlight: false,
      color: "border-amber-700/50 shadow-amber-900/20"
    },
    {
      name: "Representante Profissional",
      icon: <Shield className="w-8 h-8 text-gray-300" />, // Prata/Metálico
      price: "2.500",
      description: "Estrutura profissional para gerar previsibilidade.",
      features: [
        "Tráfego pago até 2 segmentos",
        "6 criativos",
        "CRM (+ gestão e relatórios)",
        "Organização de funil profissional"
      ],
      positioning: "É ideal para quem já entendeu que vender consórcio exige processo, não improviso.Aqui você não apenas gera leads — mais previsibilidade e menor perda de Leads.",
      highlight: true,
      color: "border-gray-300/50 shadow-gray-400/20"
    },
    {
      name: "Representante Especialista",
      icon: <Star className="w-8 h-8 text-yellow-500" />, // Ouro
      price: "4.500",
      description: "Plano de autoridade e expansão.",
      features: [
        "Tráfego pago até 3 segmentos",
        "8 criativos",
        "CRM (+automação de cadência)",
        "Site estruturado",
        "Treinamento vendas exterior"
      ],
      positioning: "Aqui você começa a sair da posição de “vendedor” e passa a construir autoridade no mercado.",
      highlight: false,
      color: "border-yellow-500/50 shadow-yellow-600/20"
    },
    {
      name: "Representante Elite",
      icon: <Trophy className="w-8 h-8 text-purple-500" />, // Troféu/Elite
      price: "7.500",
      description: "Estrutura empresarial e expansão de operação.",
      features: [
        "Tráfego com segmentos preferenciais",
        "Captação de representantes",
        "10 criativos avançados",
        "CRM + Agente de IA",
        "Site + Suporte estratégico individual"
      ],
      positioning: "Esse nível é para quem quer operar como estrutura empresarial.Aqui você não apenas vende — você escala.",
      highlight: false,
      color: "border-purple-500/50 shadow-purple-600/20"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden" id="planos">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#b8974c]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Escolha o Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6b674] to-[#8f7336]">Nível de Jogo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estruturas validadas para cada momento da sua jornada no mercado de consórcios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col group
                ${plan.highlight ? 'border-[#c9a05a] ring-2 ring-[#c9a05a]/20 shadow-[#6e5524]/20 scale-105 z-10' : `border-gray-700 hover:border-gray-500 ${plan.color}`}
              `}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-b ${plan.highlight ? 'from-[#c9a05a]/10 to-transparent' : 'from-gray-500/10 to-transparent'} pointer-events-none`}></div>

              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#c9a05a] to-[#8f7336] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap animate-pulse">
                  MAIS POPULAR
                </div>
              )}

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gray-900/80 rounded-xl border border-gray-700 shadow-inner">
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-sm text-gray-500 font-medium">Investimento mensal</span>
                  <div className="flex items-baseline">
                    <span className="text-sm text-gray-400 mr-1">R$</span>
                    <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="mt-1 min-w-[20px]">
                        <Check className={`w-4 h-4 ${plan.highlight ? 'text-[#c9a05a]' : 'text-gray-500'}`} />
                      </div>
                      <span className="ml-3 text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-700/50">
                   <div className="mb-6 p-3 bg-gray-900/50 rounded-lg border border-gray-700/30">
                      <p className="text-xs text-gray-400 italic">
                        "{plan.positioning}"
                      </p>
                   </div>
                   
                   <a 
                     href="#contact" 
                     className={`
                       block w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 active:scale-95
                       ${plan.highlight 
                         ? 'bg-gradient-to-r from-[#c9a05a] to-[#8f7336] hover:from-[#d6b674] hover:to-[#a7863d] text-white shadow-lg shadow-[#6e5524]/30 hover:shadow-[#6e5524]/50' 
                         : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500'}
                     `}
                   >
                     Selecionar Plano
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            * Todos os planos incluem acesso à plataforma e suporte inicial. Valores sujeitos a alteração sem aviso prévio.
          </p>
        </div>
      </div>
    </section>
  );
}

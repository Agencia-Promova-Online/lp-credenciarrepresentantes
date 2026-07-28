import { Check, AlertCircle } from 'lucide-react';

export default function Investment() {
  const includes = [
    'Gestão completa de tráfego pago',
    'Até 4 criativos profissionais por mês',
    'Um Site de alta conversão',
    'CRM de atendimento',
    'Treinamento financeiro para consórcio',
    'Treinamento de gestão de time',
    'Treinamento comercial para vendas no exterior',
    'Suporte estratégico contínuo de marketing e branding',
    'Suporte para video de vendas',

  ];

  const scrollToForm = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-[#b8974c]">Investimento</span> na Sua Estrutura
            </h2>
            <p className="text-xl text-gray-600">
              Valores transparentes para uma estrutura profissional completa
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200">
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#1C1C1C] text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Estrutura Premium</h3>
              <p className="text-[#f3e7c7]">Tudo que você precisa para iniciar no processo de escala com previsibilidade</p>
            </div>

            <div className="p-10">

                {/* <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-2xl">
                  <div className="text-sm text-gray-600 font-semibold mb-2">MENSALIDADE</div>
                  <div className="text-md text-gray-500 mb-1">
                    De <span className="line-through">R$ 1.997</span> por:
                  </div>
                  <div className="text-6xl font-bold text-gray-900 mb-2">
                    R$ 1.395
                  </div>
                  <div className="text-gray-600">Fidelidade de 6 meses</div>
                </div> */}

              <div className="mb-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">O Que Está Incluso</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-[#b8974c] flex-shrink-0 mt-1" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-yellow-900 mb-2">Investimento em Anúncios Separado</h5>
                  <p className="text-yellow-800 leading-relaxed">
                    O investimento em anúncios (mídia paga) é feito diretamente pelo representante
                    na sua própria conta. Você controla quanto investir para gerar seus leads.
                    A Eixo cuida da gestão e otimização das campanhas.
                  </p>
                </div>
              </div>

              <button
                onClick={scrollToForm}
                className="w-full py-5 bg-gradient-to-r from-[#c9a05a] to-[#b8974c] text-white text-xl font-bold rounded-xl hover:from-[#d3ad66] hover:to-[#a7863d] transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Quero Garantir Minha Vaga na Estrutura
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Vagas limitadas para garantir qualidade no atendimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

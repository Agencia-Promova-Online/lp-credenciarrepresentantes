import { Sparkles, Bot, Zap } from 'lucide-react';

export default function OrderBump() {
  const features = [
    'Treinamento gravado exclusivo com estratégias avançadas',
    'Acesso a um Agente de IA para automação de atendimento',
    'Respostas automáticas e qualificação inteligente de leads',
    'Integração com WhatsApp e outras plataformas',
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30 mb-6">
              <span className="text-yellow-400 text-sm font-bold tracking-wide flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                OFERTA EXCLUSIVA
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turbine Sua Estrutura com <span className="text-yellow-400">IA</span>
            </h2>
            <p className="text-xl text-gray-300">
              Leve sua operação para o próximo nível com automação inteligente
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-500/30 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 flex items-center justify-center gap-3">
              <Bot className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Pacote IA Avançado</h3>
            </div>

            <div className="p-10">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Além da estrutura completa, você pode adicionar um pacote especial com treinamento
                exclusivo e um <span className="font-bold text-yellow-400">Agente de IA</span> que
                automatiza parte do seu atendimento e qualificação de leads.
              </p>

              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 bg-gray-800/50 rounded-lg p-4">
                    <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-yellow-400 mb-3">Como Funciona</h4>
                <p className="text-gray-300 leading-relaxed">
                  Este pacote é <span className="font-bold">vendido separadamente</span> após o
                  pagamento da estrutura principal. Você receberá todos os detalhes e poderá decidir
                  se quer adicionar a automação com IA ao seu sistema.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl px-8 py-4">
                  <div className="text-sm font-semibold mb-1">VALOR DO PACOTE IA</div>
                  <div className="text-3xl font-bold">Consulte Após Adesão</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              A IA não está incluída no pacote base, mas pode ser adicionada para
              maximizar sua eficiência operacional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

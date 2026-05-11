import { CheckCircle, AlertCircle } from 'lucide-react';

export default function TargetAudience() {
  const benefits = [
    'Você já atua como representante de consórcio',
    'Quer escalar o faturamento com estrutura profissional',
    'Busca previsibilidade de leads qualificados',
    'Deseja campanhas de marketing que realmente convertem',
    'Quer suporte estratégico de especialistas',
    'Precisa de ferramentas profissionais (site, CRM, criativos)',
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Para Quem é Essa <span className="text-red-600">Estrutura</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nossa estrutura foi desenhada especialmente para representantes que já atuam no mercado
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 mb-8">
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-2">
                Estrutura Exclusiva para Representantes de Consórcio
              </h3>
              <p className="text-red-800 leading-relaxed">
                Este não é um programa para iniciantes.
                É uma estrutura premium desenvolvida exclusivamente para profissinais que atua em algum setor como representante de consórcio
                e querem obter um crescimento sustentável e previsível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

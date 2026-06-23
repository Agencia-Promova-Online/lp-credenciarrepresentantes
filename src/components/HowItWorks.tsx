import { FileText, Search, CreditCard, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Preenche o Formulário',
      description: 'Responda às perguntas de qualificação para entendermos seu perfil e objetivos como representante.',
    },
    {
      icon: Search,
      number: '02',
      title: 'Perfil Analisado',
      description: 'Nossa equipe analisa seu perfil para garantir o seu credenciamento como representante de consórcio.',
    },
    {
      icon: CreditCard,
      number: '03',
      title: 'Pagamento Realizado',
      description: 'Após aprovação, você efetua o investimento e garante sua vaga na estrutura premium.',
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Estrutura Ativada',
      description: 'Site, CRM, campanhas, criativos e treinamentos são implementados. Você começa a receber leads qualificados.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Como <span className="text-[#b8974c]">Funciona</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo simples e transparente para você começar a receber leads qualificados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#b8974c] to-[#e2cf9d] -ml-4 z-0"></div>
                )}
                <div className="relative z-10 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#b8974c] transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-[#b8974c] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-[#efe2c1] mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#c9a05a] to-[#b8974c] text-white rounded-2xl p-10 text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Implementação Rápida e Suporte Contínuo</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Em poucos dias sua estrutura estará 100% operacional, com campanhas rodando e leads chegando.
              Nossa equipe acompanha você do início ao crescimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

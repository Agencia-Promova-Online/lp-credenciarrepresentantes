import { Megaphone, Image, GraduationCap, Globe, Monitor, Database, Mail, Users } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: Megaphone,
      title: 'Gestão de Tráfego Pago',
      description: 'Campanhas otimizadas no Facebook e Instagram para gerar leads qualificados todos os dias.',
    },
    {
      icon: Image,
      title: 'Até 4 Criativos por Mês',
      description: 'Peças publicitárias profissionais, persuasivas e alinhadas com as melhores práticas de conversão.',
    },
    {
      icon: GraduationCap,
      title: 'Treinamento Financeiro',
      description: 'Domine os aspectos financeiros do consórcio e apresente soluções com autoridade.',
    },
    {
      icon: Globe,
      title: 'Treinamento Comercial Internacional',
      description: 'Aprenda a vender consórcio para brasileiros no exterior e expanda seu mercado.',
    },
    {
      icon: Monitor,
      title: 'Site de Alta Conversão',
      description: 'Landing page profissional desenvolvida para transformar visitantes em leads qualificados.',
    },
    {
      icon: Database,
      title: 'CRM de Atendimento',
      description: 'Sistema completo para organizar, nutrir e fechar negócios com seus leads.',
    },
    {
      icon: Mail,
      title: 'Templates de Remarketing',
      description: 'Sequências prontas de e-mail e WhatsApp para reativar leads e aumentar conversão.',
    },
    {
      icon: Users,
      title: 'Acompanhamento Estratégico',
      description: 'Suporte direto do Marcelo e equipe de marketing para ajustar estratégias e maximizar resultados.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O Que a Eixo Consórcios <span className="text-[#b8974c]">Entrega</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma estrutura completa e profissional para você focar no que faz de melhor: vender
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#b8974c] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#b8974c] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#a7863d] transition-colors shadow-lg">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-[#1C1C1C] to-[#1A1A1A] text-white rounded-xl px-10 py-8 max-w-3xl shadow-2xl">
              <p className="text-2xl font-bold mb-2">Tudo Pronto Para Você Escalar</p>
              <p className="text-lg opacity-90">
                Enquanto você vende, nossa equipe cuida do marketing, tráfego e otimizações
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { X } from 'lucide-react';
import LogoEixoBranca from '../assets/img/logo-eixo-branca.png';

export default function Problems() {
  const problems = [
    {
      title: 'Falta de Leads Qualificados',
      description: 'Dependência de OLX, Canal Pro e indicações que não são escaláveis nem previsíveis.',
    },
    {
      title: 'Campanhas Que Não Convertem',
      description: 'Investimento em anúncios sem retorno por falta de estratégia e criativos profissionais.',
    },
    {
      title: 'Sem Previsibilidade de Faturamento',
      description: 'Mês bom, mês ruim. Impossível planejar crescimento sem fluxo constante de oportunidades.',
    },
    {
      title: 'Falta de Estrutura Profissional',
      description: 'Sem site de conversão, CRM, templates de remarketing ou suporte estratégico.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
           <img src={LogoEixoBranca} alt="Logo Eixo Consórcios" className="mx-auto w-32 md:w-60 mb-8" />
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O <span className="text-[#c9a05a]">Problema</span> dos Representantes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A maioria dos representantes de consórcio está presa em um ciclo de instabilidade,
              sem conseguir escalar de forma consistente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:border-[#b8974c] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#b8974c]/20 rounded-lg flex items-center justify-center group-hover:bg-[#b8974c]/30 transition-colors">
                    <X className="w-6 h-6 text-[#c9a05a]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{problem.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-[#b8974c]/10 border border-[#b8974c]/30 rounded-xl px-8 py-6 max-w-2xl">
              <p className="text-xl text-gray-200 leading-relaxed">
                <span className="font-bold text-[#d8be86]">Sem estrutura profissional, </span>
                você está competindo com uma mão amarrada nas costas contra quem já tem
                tráfego pago, CRM e suporte estratégico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

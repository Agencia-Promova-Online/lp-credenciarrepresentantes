import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Essa estrutura é para iniciantes no mercado de consórcio?',
      answer: 'Não. A estrutura da Eixo Consórcio foi desenvolvida exclusivamente para representantes que já atuam no mercado e desejam escalar com previsibilidade. Se você está começando, recomendamos primeiro adquirir experiência prática antes de investir em tráfego pago e estrutura avançada.',
    },
    {
      question: 'A Eixo fornece os leads ou apenas a estrutura?',
      answer: 'Nós fornecemos a estrutura completa: site, CRM, gestão de tráfego pago, criativos e suporte estratégico. Os leads são gerados através das campanhas que nossa equipe cria e otimiza, mas o investimento em mídia paga é feito pelo próprio representante. Você controla quanto investir e nós garantimos que esse investimento seja bem aplicado.',
    },
    {
      question: 'Quantos criativos estão inclusos por mês?',
      answer: 'Estão inclusos até 4 criativos profissionais por mês. Nossa equipe de design cria peças persuasivas e otimizadas para conversão, alinhadas com as melhores práticas de marketing digital. Se precisar de criativos adicionais, podemos avaliar uma produção extra.',
    },
    {
      question: 'Posso vender consórcio para brasileiros fora do Brasil?',
      answer: 'Sim! Inclusive oferecemos treinamento comercial específico para vendas no exterior. Muitos representantes expandem significativamente o faturamento atendendo brasileiros em Portugal, EUA, Canadá e outros países. A estrutura suporta essa expansão.',
    },
    {
      question: 'A Inteligência Artificial está inclusa no pacote?',
      answer: 'Não. O Agente de IA é um pacote opcional e avançado, vendido separadamente. O pacote base já inclui tudo que você precisa para operar com excelência. A IA é para quem quer automatizar ainda mais o atendimento e qualificação de leads.',
    },
    {
      question: 'Quanto preciso investir em anúncios por mês?',
      answer: 'O investimento em mídia paga varia conforme seu objetivo de leads. Em média, representantes investem entre R$ 1.500 e R$ 5.000/mês em anúncios. Quanto maior o investimento (dentro da estratégia correta), mais leads qualificados você recebe. Nossa equipe te orienta sobre o investimento ideal para seu momento.',
    },
    {
      question: 'Vou ter suporte durante todo o processo?',
      answer: 'Sim! Você terá acompanhamento estratégico contínuo com o Marcelo e a equipe de marketing. Analisamos os resultados, ajustamos campanhas, otimizamos criativos e te orientamos para maximizar suas conversões e faturamento.',
    },
    {
      question: 'Em quanto tempo começo a receber leads?',
      answer: 'Após a implementação da estrutura (site, CRM e campanhas), que leva poucos dias, as campanhas são ativadas e os primeiros leads começam a chegar em até 48-72 horas. O volume de leads aumenta conforme otimizamos as campanhas nas primeiras semanas.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perguntas <span className="text-red-600">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre a estrutura e como ela funciona
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-red-600 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8 group-hover:text-red-600 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
            <p className="text-lg text-gray-700">
              Preencha o formulário abaixo e nossa equipe entrará em contato para esclarecer todas as suas questões.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

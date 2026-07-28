import { Truck, Car, Bike, Home, Construction } from 'lucide-react';

export default function Segments() {
  const segments = [
    {
      icon: Construction,
      title: 'Maquinário Pesado',
      description: 'Retroescavadeiras, tratores, pás carregadeiras e muito mais',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Truck,
      title: 'Caminhões',
      description: 'Todos os modelos e categorias para profissionais do transporte',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Car,
      title: 'Carros',
      description: 'Veículos leves, populares, SUVs e modelos premium',
      color: 'from-[#d6b674] to-[#b8974c]',
    },
    {
      icon: Bike,
      title: 'Motos',
      description: 'Modelos urbanos, esportivos e de trabalho',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Home,
      title: 'Imóveis',
      description: 'Casas, apartamentos, terrenos e empreendimentos comerciais',
      color: 'from-green-500 to-green-700',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Segmentos Que Você Pode <span className="text-[#b8974c]">Vender</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversifique seu portfólio e alcance diferentes públicos com nossa estrutura completa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-[#b8974c]"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${segment.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <segment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{segment.title}</h3>
                <p className="text-gray-600 leading-relaxed">{segment.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#1C1C1C] to-[#1A1A1A] text-white rounded-2xl p-10 text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Múltiplas Oportunidades de Faturamento</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Com acesso a diversos segmentos, você pode atender diferentes perfis de clientes
              e multiplicar suas chances de fechar negócios todos os dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

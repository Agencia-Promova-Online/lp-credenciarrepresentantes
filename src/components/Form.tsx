import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const initialFormData = {
  name: '',
  whatsapp: '',
  email: '',
  instagram: '',
  website: '',
  city: '',
  state: '',
  country: 'Brasil',
  isRepresentative: '',
  segment: '',
  currentRevenue: '',
  desiredLeads: '',
};

const getRedirectUrl = (formData: typeof initialFormData) => {
  const shouldUseConditionalThankYou =
    formData.isRepresentative === 'nao_representante' ||
    formData.currentRevenue === 'nao-faturo';

  return shouldUseConditionalThankYou
    ? '/obrigado?perfil=triagem'
    : '/obrigado';
};

export default function Form() {
  const [formData, setFormData] = useState(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || '',
      utm_term: urlParams.get('utm_term') || '',
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const utmParams = getUTMParams();

    const payload = {
      ...formData,
      ...utmParams,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    };

    try {
      // Use proxy in development to avoid CORS errors
      const webhookUrl = import.meta.env.DEV 
        ? '/api/webhook' 
        : 'https://n8n.promovaonline.com.br/webhook/leads-lp-captarepresentantes';
      
      const checkoutUrl = getRedirectUrl(formData);

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setIsSuccess(true);
      setFormData(initialFormData);
      
      // Redirecionamento para a página de obrigado
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro ao enviar formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSuccess) {
    return (
      <section id="form" className="py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Formulário Enviado com Sucesso!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nossa equipe analisará seu perfil e entrará em contato em breve via WhatsApp.
            </p>
            <p className="text-gray-600">
              Fique atento às mensagens nos próximos dias.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="py-24 bg-gradient-to-br from-[#c9a05a] to-[#8f7336]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Preencha o Formulário de Qualificação
            </h2>
            <p className="text-xl text-[#f3e7c7]">
              Responda às perguntas abaixo para que possamos entender seu perfil e verificar
              se a estrutura é ideal para você
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="instagram" className="block text-sm font-semibold text-gray-700 mb-2">
                    @ do Instagram *
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    required
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                    placeholder="@seuinstagram"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                    Site (opcional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                    placeholder="https://seusite.com.br"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                    placeholder="Sua cidade"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                    Estado *
                  </label>
                  <select
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                  >
                    <option value="">Selecione a UF</option>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                    País *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                    placeholder="País"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="isRepresentative" className="block text-sm font-semibold text-gray-700 mb-2">
                  Você já atua como representante de consórcio? *
                </label>
                <select
                  id="isRepresentative"
                  name="isRepresentative"
                  required
                  value={formData.isRepresentative}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="representante">Sim, já atuo como representante</option>
                  <option value="supervisor">Sim, sou supervisor de consórcio</option>
                  <option value="nao_representante">Não é representante</option>
                </select>
              </div>

              <div>
                <label htmlFor="segment" className="block text-sm font-semibold text-gray-700 mb-2">
                  Qual segmento você trabalha hoje? *
                </label>
                <select
                  id="segment"
                  name="segment"
                  required
                  value={formData.segment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="imovel">Imóvel</option>
                  <option value="carro">Carro</option>
                  <option value="caminhao">Caminhão</option>
                  <option value="maquinario">Maquinário</option>
                   <option value="maquinario">Todos</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentRevenue" className="block text-sm font-semibold text-gray-700 mb-2">
                  Quanto você fatura hoje com consórcio? *
                </label>
                <select
                  id="currentRevenue"
                  name="currentRevenue"
                  required
                  value={formData.currentRevenue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="nao-faturo">Ainda Não faturo</option>
                  <option value="ate-500k">Até 500 mil/mês</option>
                  <option value="500k-1M">500 mil a 1 milhão/mês</option>
                  <option value="1M-2M">1 milhão a 2 milhões/mês</option>
                  <option value="2M-4M">2 milhões a 4 milhões/mês</option>
                  <option value="acima-4M">Acima de 4 milhões/mês</option>
                </select>
              </div>

              <div>
                <label htmlFor="desiredLeads" className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantos leads qualificados você deseja receber por dia? *
                </label>
                <select
                  id="desiredLeads"
                  name="desiredLeads"
                  required
                  value={formData.desiredLeads}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b8974c] focus:outline-none transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="5-10">5 a 10 leads/dia</option>
                  <option value="10-20">10 a 20 leads/dia</option>
                  <option value="20-30">20 a 30 leads/dia</option>
                  <option value="acima-30">Acima de 30 leads/dia</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-to-r from-[#c9a05a] to-[#b8974c] text-white text-xl font-bold rounded-xl hover:from-[#d3ad66] hover:to-[#a7863d] transform hover:scale-105 transition-all duration-200 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Enviar Formulário
                  </>
                )}
              </button>

              <p className="text-sm text-gray-600 text-center mt-4">
                Ao enviar este formulário, você concorda que nossa equipe entre em contato via WhatsApp
                para apresentar a estrutura e esclarecer dúvidas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

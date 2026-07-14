import { useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageCircle, Clock, Smartphone } from 'lucide-react';

export default function ThankYou() {
  const [searchParams] = useSearchParams();
  const isConditionalFlow = searchParams.get('perfil') === 'triagem';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl w-full text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#b8974c] to-[#d6b674]"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f7f1e3] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {isConditionalFlow ? (
              <>
                Cadastro Recebido com <span className="text-green-600">Sucesso!</span>
              </>
            ) : (
              <>
                Solicitação Recebida com <span className="text-green-600">Sucesso!</span>
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {isConditionalFlow
              ? 'Recebemos seus dados. Como voce ainda nao atua como representante ou ainda nao fatura com consorcio, nossa equipe fara uma triagem inicial para entender o melhor proximo passo para o seu momento.'
              : 'Obrigado pelo seu interesse em fazer parte do nosso time. Seus dados ja estao com nossa equipe de expansao.'}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {isConditionalFlow ? 'Triagem Inicial' : 'Análise de Perfil'}
              </h3>
              <p className="text-blue-800/80 text-sm">
                {isConditionalFlow
                  ? 'Nossa equipe vai avaliar seu momento comercial e identificar se esta estrutura ja faz sentido para voce agora.'
                  : 'Nossos especialistas analisarao suas informacoes para identificar a melhor oportunidade para sua regiao.'}
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-100 transform hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                {isConditionalFlow ? 'Orientação do Time' : 'Contato do Gestor'}
              </h3>
              <p className="text-green-800/80 text-sm">
                {isConditionalFlow
                  ? 'Se o seu perfil estiver alinhado, entraremos em contato via WhatsApp para orientar os proximos passos.'
                  : 'Um de nossos gestores entrara em contato via WhatsApp nas proximas 24 horas uteis.'}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5 text-[#b8974c]" />
              Fique atento ao seu WhatsApp
            </h4>
            <p className="text-gray-500 text-sm">
              {isConditionalFlow
                ? 'Se o seu perfil avancar na triagem, nosso contato sera realizado pelo numero informado no formulario. Verifique se o numero esta correto e fique de olho nas notificacoes.'
                : 'Nosso contato sera realizado atraves do numero informado no formulario. Verifique se o numero esta correto e fique de olho nas notificacoes.'}
            </p>
          </div>

          <div className="space-y-4 max-w-md mx-auto">
            <a 
              href="/" 
              className="block w-full py-4 bg-[#b8974c] text-white font-bold rounded-xl hover:bg-[#a7863d] hover:shadow-lg hover:shadow-[#b8974c]/30 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Voltar para a Página Inicial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Eixo Consórcios. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

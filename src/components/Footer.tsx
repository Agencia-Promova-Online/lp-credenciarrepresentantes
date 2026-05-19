import { Shield } from 'lucide-react';
import LogoEixoBranca from '../assets/img/logo-eixo-branca.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-500"> <img src={LogoEixoBranca} alt="Logo Eixo Consórcios" className="mx-auto w-32 md:w-60 mb-8" /></h3>
              <p className="text-gray-400 leading-relaxed">
                Estrutura profissional para representantes de consórcio que buscam crescimento
                sustentável e previsível.
              </p>
            </div>

            {/* <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span>contato@promoveconsorcio.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span>(00) 0000-0000</span>
                </div>
              </div>
            </div> */}

            <div>
              <h4 className="text-lg font-bold mb-4">Informações Legais</h4>
              <div className="flex items-start gap-3 text-gray-400">
                <Shield className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  Estrutura exclusiva para representantes ativos. Resultados dependem de dedicação
                  e aplicação da estratégia.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-500 text-sm">
              <p className="mb-2">
                © {new Date().getFullYear()} Eixo Consórcios. Todos os direitos reservados.
              </p>
              <p>
                Esta é uma landing page de captação. O investimento em anúncios é realizado
                pelo representante.
              </p>
              <div className="mt-4">
                <Link
                  to="/gerador-indicacao"
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Gerador de link de Rastreio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

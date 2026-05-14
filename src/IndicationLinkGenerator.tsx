import { FormEvent, useMemo, useState } from 'react';
import { Copy, Download, Link2 } from 'lucide-react';
import QRCode from 'qrcode';
import LogoEixoPreta from './assets/img/logo-eixo-preta.png';

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  cpf: string;
  email: string;
};

type GenerateResult = {
  url: string;
  qrPngDataUrl: string;
  qrJpgDataUrl: string;
};

const sanitizeFilenamePart = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const dataUrlPngToJpg = (pngDataUrl: string, quality = 0.92) =>
  new Promise<string>((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas not supported'));
        return;
      }
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    image.onerror = () => reject(new Error('Failed to load QR image'));
    image.src = pngDataUrl;
  });

const buildIndicationUrl = (baseUrl: string, indicatorPhone: string, indicatorName: string) => {
  const params = new URLSearchParams({
    utm_source: 'indicacao',
    utm_medium: 'qr_code',
    utm_campaign: 'gerador_link_indicacao',
    utm_content: indicatorPhone,
    utm_term: indicatorName,
    objetivo: 'indicacao',
  });

  return `${baseUrl.replace(/\/$/, '')}/?${params.toString()}`;
};

export default function IndicationLinkGenerator() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    phone: '',
    cpf: '',
    email: '',
  });

  const [result, setResult] = useState<GenerateResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'sending' | 'sent' | 'failed'
  >('idle');

  const baseUrl = useMemo(() => window.location.origin, []);

  const onChange = (field: keyof FormState) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const generate = async () => {
    setIsGenerating(true);
    setSubmitStatus('idle');
    setCopyStatus('idle');

    try {
      const indicatorName = `${form.firstName} ${form.lastName}`.trim().replace(/\s+/g, ' ');
      const url = buildIndicationUrl(baseUrl, form.phone.trim(), indicatorName);
      const qrPngDataUrl = await QRCode.toDataURL(url, {
        margin: 2,
        width: 1024,
        errorCorrectionLevel: 'M',
        color: {
          dark: '#0b0f1a',
          light: '#ffffff',
        },
      });
      const qrJpgDataUrl = await dataUrlPngToJpg(qrPngDataUrl);

      setResult({ url, qrPngDataUrl, qrJpgDataUrl });

      setSubmitStatus('sending');
      const payload = {
        ...form,
        url,
        utm_source: 'indicacao',
        utm_medium: 'qr_code',
        utm_campaign: 'gerador_link_indicacao',
        utm_content: form.phone.trim(),
        utm_term: indicatorName,
        objetivo: 'indicacao',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      };

      const webhookUrl = 'https://n8n.promovaonline.com.br/webhook/indica-eixo-adm';
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setSubmitStatus(response.ok ? 'sent' : 'failed');
    } catch {
      setSubmitStatus('failed');
    } finally {
      setIsGenerating(false);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await generate();
  };

  const onCopy = async () => {
    if (!result?.url) return;
    try {
      await navigator.clipboard.writeText(result.url);
      setCopyStatus('copied');
      window.setTimeout(() => setCopyStatus('idle'), 1500);
    } catch {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = result.url;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopyStatus('copied');
        window.setTimeout(() => setCopyStatus('idle'), 1500);
      } catch {
        setCopyStatus('error');
      }
    }
  };

  const downloadName = useMemo(() => {
    const first = sanitizeFilenamePart(form.firstName || 'indicacao');
    const last = sanitizeFilenamePart(form.lastName);
    const parts = [first, last].filter(Boolean).join('-');
    return `${parts || 'indicacao'}-qr.jpg`;
  }, [form.firstName, form.lastName]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <img
              src={LogoEixoPreta}
              alt="Logo Eixo Consórcios"
              className="h-10 md:h-12 w-auto mb-6"
            />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Gerador de Link de Indicação
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl text-base md:text-lg">
              Gere um link com rastreamento e um QR Code pronto para compartilhar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <section className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7 md:p-10">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="firstName">
                      Primeiro nome *
                    </label>
                    <input
                      id="firstName"
                      value={form.firstName}
                      onChange={e => onChange('firstName')(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="Ex.: Maria"
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="lastName">
                      Sobrenome *
                    </label>
                    <input
                      id="lastName"
                      value={form.lastName}
                      onChange={e => onChange('lastName')(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="Ex.: Silva"
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={e => onChange('phone')(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="(00) 00000-0000"
                      inputMode="tel"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="cpf">
                      CPF *
                    </label>
                    <input
                      id="cpf"
                      value={form.cpf}
                      onChange={e => onChange('cpf')(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="000.000.000-00"
                      inputMode="numeric"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                    E-mail de quem indica *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={e => onChange('email')(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                    autoComplete="email"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-bold rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? 'Gerando...' : 'Gerar link de indicação'}
                </button>

                <div className="text-sm">
                  {submitStatus === 'sending' && (
                    <p className="text-gray-500">Enviando dados para registro...</p>
                  )}
                  {submitStatus === 'sent' && (
                    <p className="text-green-700">Registro enviado com sucesso.</p>
                  )}
                  {submitStatus === 'failed' && (
                    <p className="text-amber-700">
                      Não foi possível registrar no webhook agora. O link e o QR Code foram gerados normalmente.
                    </p>
                  )}
                </div>
              </form>
            </section>

            <section className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">QR Code + Link</h2>
                  <p className="text-sm text-gray-600">Gere e compartilhe em segundos.</p>
                </div>
              </div>

              {!result ? (
                <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center">
                  <p className="text-gray-600">
                    Preencha o formulário e clique em gerar para visualizar o QR Code e o link.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 flex flex-col items-center">
                    <img
                      src={result.qrPngDataUrl}
                      alt="QR Code do link de indicação"
                      className="w-60 h-60 md:w-72 md:h-72 rounded-2xl bg-white shadow-sm"
                    />
                    <a
                      href={result.qrJpgDataUrl}
                      download={downloadName}
                      className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Baixar QR Code (JPG)
                    </a>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-white p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Link de indicação</p>
                    <div className="flex flex-col md:flex-row gap-3">
                      <input
                        value={result.url}
                        readOnly
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-800"
                      />
                      <button
                        type="button"
                        onClick={onCopy}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                      >
                        <Copy className="w-5 h-5" />
                        {copyStatus === 'copied' ? 'Copiado!' : copyStatus === 'error' ? 'Falhou' : 'Copiar'}
                      </button>
                    </div>
                    <p className="mt-3 text-xs text-gray-500">
                      O link já inclui UTMs e o telefone de quem indicou para rastreamento da conversão.
                    </p>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToForm}
        className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-red-600/50 hover:scale-110 transition-all duration-200 flex items-center gap-3 font-bold"
      >
        <span className="hidden sm:inline">Quero a Estrutura</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

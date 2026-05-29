import { useState, useEffect } from 'react';
import {
  FaDownload,
  FaGithub,
  FaHandSparkles,
  FaInstagram,
  FaLaptopCode,
  FaLinkedinIn,
  FaMobileAlt,
  FaTimes,
  FaTwitter,
} from 'react-icons/fa';

const heroTitles = [
  'Full Stack Developer',
  'MERN and Next.js Developer',
  'Production-Ready Mobile Apps',
  'Building Scalable Digital Products',
  'Turning Ideas into Impactful Solutions',
];

const cvOptions = [
  {
    title: 'Web Development CV',
    description: 'Full-stack web projects, live platforms, and backend work.',
    href: 'https://drive.google.com/file/d/1PUXdyiBW4EOisG_LKW5pkS5TnZ2L_kFq/view?usp=sharing',
    icon: FaLaptopCode,
  },
  {
    title: 'App Development CV',
    description: 'React Native apps, mobile product flows, and app backend work.',
    href: 'https://drive.google.com/file/d/1Jy5H4cieHYovaCul88_3rMd2S-DcU372/view?usp=sharing',
    icon: FaMobileAlt,
  },
];

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useEffect(() => {
    const currentText = heroTitles[currentTextIndex];
    
    if (!isDeleting && index < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && index === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, index - 1));
        setIndex(index - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % heroTitles.length);
    }
  }, [index, isDeleting, currentTextIndex]);

  useEffect(() => {
    if (!isCvModalOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsCvModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isCvModalOpen]);

  const handleCvOption = (href) => {
    if (!href) return;
    window.open(href, '_blank', 'noopener,noreferrer');
    setIsCvModalOpen(false);
  };

  return (
    <section id="hero" className="min-h-screen bg-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <div className="flex-1 text-left space-y-6">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3cf26f]/15 text-[#2dd15f]">
                <FaHandSparkles className="h-5 w-5" />
              </span>
              <span className="text-gray-600 text-lg">Hello, I'm</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
              Krrish Singhal
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 min-h-[3rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              I'm Krrish Singhal, a Full Stack Developer passionate about building modern web applications and creating impactful digital experiences. Currently pursuing B.Tech in Computer Science and Engineering at KIET, Ghaziabad.
            </p>
            
            {/* Buttons and Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => setIsCvModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] text-white rounded-full font-medium hover:from-[#2dd15f] hover:to-[#3cf26f] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaDownload className="w-5 h-5" />
                Download CV
              </button>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/krrish-singhal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#3cf26f] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/krrish-singhal-4765b1302/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#3cf26f] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/krrish_sin99953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#3cf26f] transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/krrish_singhal_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#3cf26f] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3cf26f]/20 to-[#2dd15f]/20 rounded-full blur-3xl"></div>
              <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="https://i.imgur.com/1eY8Vuv.jpeg"
                  alt="Krrish Singhal"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-20 h-20 flex flex-wrap gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3cf26f]"></div>
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                <div className="w-2 h-2 rounded-full bg-[#3cf26f]"></div>
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 flex flex-wrap gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                <div className="w-2 h-2 rounded-full bg-[#3cf26f]"></div>
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                <div className="w-2 h-2 rounded-full bg-[#3cf26f]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isCvModalOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-gray-950/60 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          onClick={() => setIsCvModalOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h3 id="cv-modal-title" className="text-2xl font-bold text-gray-900">
                  Choose CV Type
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Select the resume version you want to open.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCvModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                aria-label="Close CV options"
              >
                <FaTimes className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cvOptions.map((option) => {
                const OptionIcon = option.icon;
                const hasLink = Boolean(option.href);

                return (
                  <button
                    key={option.title}
                    type="button"
                    onClick={() => handleCvOption(option.href)}
                    disabled={!hasLink}
                    className={`group rounded-xl border p-5 text-left transition-all duration-300 ${
                      hasLink
                        ? 'border-[#3cf26f]/40 hover:-translate-y-1 hover:border-[#3cf26f] hover:shadow-lg'
                        : 'cursor-not-allowed border-gray-200 bg-gray-50 opacity-80'
                    }`}
                  >
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3cf26f]/15 text-[#2dd15f]">
                      <OptionIcon className="h-6 w-6" />
                    </span>
                    <span className="block text-base font-bold text-gray-900">
                      {option.title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-gray-600">
                      {option.description}
                    </span>
                    <div className="mt-4">
                      {hasLink ? (
                        <span className="inline-flex items-center gap-2 rounded-lg bg-[#3cf26f]/20 px-3 py-2 text-sm font-semibold text-[#2dd15f] transition-all duration-300 group-hover:bg-[#3cf26f]/30">
                          Open Drive Link
                          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                          Drive link pending
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;

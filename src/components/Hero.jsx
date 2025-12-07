import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, Download } from 'lucide-react';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const texts = [
    'Full Stack Developer',
    'MERN and Next.js Developer',
    'Prouction Ready Mobile Apps',
    'Building Scalable Digital Products',
    'Turning Ideas into Impactful Solutions |'
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
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
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }
  }, [index, isDeleting, currentTextIndex]);

  return (
    <section id="hero" className="min-h-screen bg-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <div className="flex-1 text-left space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl">👋</span>
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
              <a
                href="https://drive.google.com/file/d/1pqHJHHRHS5aajZ6o5WjwuC5YiOjXvFnz/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] text-white rounded-full font-medium hover:from-[#2dd15f] hover:to-[#3cf26f] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/krrish-singhal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#3cf26f] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/krrish-singhal-4765b1302/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#3cf26f] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/krrish_sin99953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#3cf26f] transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/krrish_singhal_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#3cf26f] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
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
    </section>
  );
}

export default Hero;

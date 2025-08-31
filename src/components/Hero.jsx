import { ExternalLink } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background gradient or image can be added here if you want, but no repeated photo */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-10">
          <img
            src="https://i.imgur.com/1eY8Vuv.jpeg"
            alt="Krrish Singhal"
            className="w-40 h-40 rounded-full mx-auto border-4 border-purple-500 shadow-lg shadow-purple-500/50 object-cover"
            style={{ objectPosition: 'center top', objectFit: 'cover' }}
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 tracking-tight" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-1px' }}>
          Krrish Singhal
        </h1>
        <div className="text-2xl md:text-3xl mb-8 h-20 text-gray-200 flex items-center justify-center">
          <Typewriter
            options={{
              strings: [
                'Full Stack Web Developer',
                'MERN & Next.js Specialist',
                'Building Scalable Digital Products',
                'Turning Ideas into Impactful Solutions',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 70,
            }}
          />
        </div>
        <div className="flex flex-row gap-6 justify-center items-center mt-2">
          <a
            href="https://github.com/krrish-singhal"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 text-white font-semibold shadow-lg"
          >
            View My Work
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/krrish-singhal-4765b1302/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#0077B5] hover:bg-[#005983] transition-all duration-300 flex items-center gap-2 text-white font-semibold shadow-lg"
          >
            LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

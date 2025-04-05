import { Download, ExternalLink } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[url('https://i.imgur.com/1eY8Vuv.jpeg')] bg-cover bg-center opacity-5" />

      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/50 to-gray-900/80" />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-8">
          <img
            src="https://i.imgur.com/1eY8Vuv.jpeg"
            alt="Krrish Singhal"
            className="w-24 h-24 rounded-full mx-auto border-4 border-purple-500 shadow-lg shadow-purple-500/50"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          I'm Krrish Singhal
        </h1>

        <div className="text-2xl md:text-3xl mb-8 h-20 text-gray-200">
          <Typewriter
            options={{
              strings: [
                'Full Stack Web Developer',
                'Creating Digital Experiences',
                'Building the Future',
                'Turning Ideas into Reality',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
            }}
          />
        </div>

        <div className="flex flex-col gap-6 items-center">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 mx-auto text-white">
            <Link to="https://github.com/krrish-singhal" className="text-white">
              View My Work
            </Link>
            <ExternalLink className="w-4 h-4" />
          </button>

          <div className="flex gap-4">
            {/* Uncomment and replace the link if you want to enable the resume download */}
            {/* <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download CV
            </a> */}
            <a
              href="https://www.linkedin.com/in/krrish-singhal-4765b1302/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#0077B5] hover:bg-[#006399] transition-all duration-300 text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

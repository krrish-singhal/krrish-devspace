import { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { Link } from 'react-scroll';
import PortfolioLogo from '../assets/Portfolio_Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl overflow-hidden transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl">
                    <img 
                      src={PortfolioLogo} 
                      alt="Portfolio Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.to
                      ? 'text-white bg-gradient-to-r from-[#3cf26f] to-[#2dd15f]'
                      : 'text-gray-700 hover:text-[#3cf26f] hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle Button - Removed */}
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#3cf26f] hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === item.to
                  ? 'bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-[#3cf26f]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
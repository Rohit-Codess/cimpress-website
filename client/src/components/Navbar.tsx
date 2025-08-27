import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'ABOUT US', href: '/about' },
    { name: 'FOCUS', href: '/focus' },
    { name: 'BUSINESSES', href: '/businesses' },
    { name: 'STRATEGIC CAPABILITIES', href: '/capabilities' },
    { name: 'CAREERS', href: '/careers' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-orange-100' 
        : 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <div className="flex items-center">
                <div className="relative">
                  <img 
                    src="https://cimpress.com/wp-content/uploads/2018/01/Cimpress_Identity_White_retina.png"
                    alt="Cimpress Logo"
                    className="h-6 sm:h-7 lg:h-8 w-auto transition-all duration-500 group-hover:scale-110"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(15%) sepia(8%) saturate(1052%) hue-rotate(314deg) brightness(95%) contrast(90%)'
                    }}
                  />
                  {/* Hover effect overlay */}
                  <img 
                    src="https://cimpress.com/wp-content/uploads/2018/01/Cimpress_Identity_White_retina.png"
                    alt="Cimpress Logo Hover"
                    className="absolute top-0 left-0 h-6 sm:h-7 lg:h-8 w-auto transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(46%) sepia(89%) saturate(1529%) hue-rotate(12deg) brightness(98%) contrast(94%)'
                    }}
                  />
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-8 xl:ml-10 flex items-center space-x-8 xl:space-x-10">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-semibold text-gray-700 hover:text-orange-600 transition-all duration-300 uppercase tracking-wide group py-3 px-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 rounded-md bg-orange-50 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:block lg:hidden">
            <div className="ml-6 flex items-center space-x-6">
              {navigationItems.slice(0, 3).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 uppercase tracking-wide group py-2 px-1"
                >
                  {item.name.split(' ')[0]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-2 p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                  isMenuOpen 
                    ? 'rotate-45 translate-y-2' 
                    : 'translate-y-1'
                }`}></span>
                <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 translate-y-2 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                  isMenuOpen 
                    ? '-rotate-45 translate-y-2' 
                    : 'translate-y-3'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-3 pb-4 space-y-2 sm:px-6 bg-white/98 backdrop-blur-xl border-t border-orange-100 shadow-2xl">
          {navigationItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-25 transition-all duration-300 uppercase tracking-wide rounded-lg transform border border-transparent hover:border-orange-200 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? `${index * 0.1}s` : '0s'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>{item.name}</span>
                <svg className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
          
          {/* Additional mobile menu items */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <a
              href="/contact"
              className="block px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 rounded-lg text-center shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
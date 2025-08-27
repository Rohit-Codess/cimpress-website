import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Focus', href: '/focus' },
      { name: 'Our Businesses', href: '/businesses' },
      { name: 'Strategic Capabilities', href: '/capabilities' }
    ],
    careers: [
      { name: 'Job Opportunities', href: '/careers' },
      { name: 'Culture & Values', href: '/culture' },
      { name: 'Benefits', href: '/benefits' },
      { name: 'Diversity & Inclusion', href: '/diversity' }
    ],
    investors: [
      { name: 'Investor Relations', href: '/investors' },
      { name: 'Financial Reports', href: '/reports' },
      { name: 'Press Releases', href: '/press' },
      { name: 'SEC Filings', href: '/sec' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Compliance', href: '/compliance' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(233, 78, 27, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(233, 78, 27, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Logo and description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://cimpress.com/wp-content/uploads/2018/01/Cimpress_Identity_White_retina.png"
                alt="Cimpress Logo"
                className="h-8 w-auto transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering people to make an impression through mass customization and innovative technology solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="group p-2.5 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="group p-2.5 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="group p-2.5 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.478 4.267C3.849 4.896 3.5 5.799 3.5 7v6c0 1.201.349 2.104.978 2.733.629.629 1.532.978 2.733.978h6c1.201 0 2.104-.349 2.733-.978C16.573 15.104 16.922 14.201 16.922 13V7c0-1.201-.349-2.104-.978-2.733C15.315 3.638 14.412 3.289 13.211 3.289h-6c-1.201 0-2.104.349-2.733.978zM13.211 1.5c1.56 0 3.054.62 4.156 1.722C18.469 4.324 19.089 5.818 19.089 7.378v5.244c0 1.56-.62 3.054-1.722 4.156-1.102 1.102-2.596 1.722-4.156 1.722H6.967c-1.56 0-3.054-.62-4.156-1.722C1.709 15.676 1.089 14.182 1.089 12.622V7.378c0-1.56.62-3.054 1.722-4.156C3.913 2.12 5.407 1.5 6.967 1.5h6.244zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM5.5 10a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM14.5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 relative">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-all duration-300 text-sm group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    <svg className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 relative">
              Careers
            </h3>
            <ul className="space-y-3">
              {footerLinks.careers.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-all duration-300 text-sm group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    <svg className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Investors Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 relative">
              Investors
            </h3>
            <ul className="space-y-3">
              {footerLinks.investors.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-all duration-300 text-sm group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    <svg className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 relative">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-all duration-300 text-sm group flex items-center">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    <svg className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © 2025 Cimpress plc. All rights reserved.
              </p>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <p className="text-gray-500 text-xs text-center sm:text-left">
                Building the future of mass customization
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
              <a href="/contact" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm uppercase tracking-wider font-medium hover:scale-105 transform">
                Contact
              </a>
              <a href="/careers" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm uppercase tracking-wider font-medium hover:scale-105 transform">
                Careers
              </a>
              <a href="/investors" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm uppercase tracking-wider font-medium hover:scale-105 transform">
                Investors
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm uppercase tracking-wider font-medium hover:scale-105 transform">
                Privacy & Security
              </a>
            </div>
          </div>
          
          {/* Additional mobile-friendly contact info */}
          <div className="mt-6 pt-6 border-t border-gray-800 lg:hidden">
            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🎯",
      title: "Our Focus",
      description: "Mass customization: delivering uniquely relevant products consistently and affordably.",
      link: "/focus",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "🏢", 
      title: "Our Businesses",
      description: "We invest in and build customer-focused software and technology-driven businesses for the long term.",
      link: "/businesses",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "💼",
      title: "Career Opportunities",
      description: "Do you want to empower people to make an impression? Join our work.",
      link: "/careers",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="py-4 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen flex items-center overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600 to-orange-400 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-15 animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Enhanced floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-orange-400 rounded-full opacity-30 animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main content - Enhanced for mobile */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <span className="block">EMPOWERING PEOPLE</span>
              <span className="block mt-2">
                <span className="text-gradient bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  TO MAKE AN
                </span>
              </span>
              <span className="block mt-2">
                <span className="text-gradient bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  IMPRESSION
                </span>
              </span>
            </h1>
            <p className={`text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              Mass customization: delivering uniquely relevant products consistently and affordably.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <button className="btn-gradient text-white font-semibold py-4 px-8 rounded-lg text-lg">
                Discover Our Innovation
              </button>
              <button className="cursor-pointer glass border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Enhanced feature cards - Mobile responsive grid */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            {/* Mobile: Show cards below content in a nice grid */}
            <div className="block lg:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {features.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl p-4 border border-white border-opacity-20 card-enhanced hover-lift animate-on-scroll"
                    style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                  >
                    <div className="text-center">
                      <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-3 text-xl`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-base font-bold text-black uppercase tracking-wide mb-2">{feature.title}</h3>
                      <p className="text-black text-sm mb-3 leading-relaxed line-clamp-2">
                        {feature.description}
                      </p>
                      <a 
                        href={feature.link} 
                        className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold text-sm transition-all duration-300 group"
                      >
                        Learn More 
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Third card spanning full width */}
              <div className="mt-4">
                <div className="glass rounded-xl p-4 border border-white border-opacity-20 card-enhanced hover-lift animate-on-scroll"
                     style={{ animationDelay: '1.1s' }}>
                  <div className="text-center">
                    <div className={`w-10 h-10 bg-gradient-to-r ${features[2].color} rounded-lg flex items-center justify-center mx-auto mb-3 text-xl`}>
                      {features[2].icon}
                    </div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide mb-2">{features[2].title}</h3>
                    <p className="text-black text-sm mb-3 leading-relaxed line-clamp-2">
                      {features[2].description}
                    </p>
                    <a 
                      href={features[2].link} 
                      className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold text-sm transition-all duration-300 group"
                    >
                      Learn More 
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Vertical stack */}
            <div className="hidden lg:block space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`glass rounded-xl p-6 border border-white border-opacity-20 card-enhanced hover-lift transition-all duration-1000 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}
                  style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                >
                  <div className="flex items-start mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mr-3 flex-shrink-0 text-2xl`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-2">{feature.title}</h3>
                      <p className="text-black text-sm mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <a 
                        href={feature.link} 
                        className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold text-sm transition-all duration-300 group"
                      >
                        Learn More 
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
        <p className="text-white/60 text-sm mt-2">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
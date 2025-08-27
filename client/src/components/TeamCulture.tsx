import React, { useEffect, useRef } from 'react';

const TeamCulture: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add scroll-triggered animations
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-slide-scale');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cultureValues = [
    {
      icon: "🎯",
      title: "Focus on Results",
      description: "We deliver measurable outcomes that drive business success and customer satisfaction."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We work together across teams and borders to achieve shared goals and innovation."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We embrace new ideas and technologies to stay ahead in mass customization."
    },
    {
      icon: "🌱",
      title: "Growth Mindset",
      description: "We continuously learn, adapt, and improve both individually and as an organization."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Enhanced Image Section */}
          <div className="animate-on-scroll flex justify-center order-2 lg:order-1">
            <div className="relative group max-w-lg w-full">
              {/* Multiple background layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl transform -rotate-2 scale-105 opacity-20 group-hover:-rotate-3 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-1 scale-95 opacity-10 group-hover:rotate-2 transition-all duration-700"></div>
              
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration at Cimpress"
                className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 card-enhanced"
                loading="lazy"
              />
              
              {/* Enhanced overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-2xl group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Animated floating elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-70 animate-float"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Interactive stats overlay */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="glass-dark rounded-lg p-3">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="text-center">
                      <div className="text-lg font-bold">95%</div>
                      <div className="text-xs">Employee Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">40+</div>
                      <div className="text-xs">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="animate-on-scroll text-center lg:text-left order-1 lg:order-2">
            <div className="mb-6 flex flex-col items-center lg:items-start">
              <p className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-3">
                STAYING SMALL AS WE GET BIG
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shimmer"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight max-w-lg mx-auto lg:mx-0">
              Our Culture & Values
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Being what our culture calls shared strategic capabilities, we limit central 
              decisions to only those that implementing locally at each business would decrease
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              and hold our business highly accountable to act local and think global. These are opportunities to which that 
              we're excited to advance forward.
            </p>

            {/* Mobile: Horizontal scroll for values, Desktop: Grid */}
            <div className="mb-8 sm:mb-10">
              {/* Mobile horizontal scroll */}
              <div className="block sm:hidden">
                <div className="horizontal-scroll">
                  {cultureValues.map((value, index) => (
                    <div key={index} className="horizontal-scroll-item w-64 glass border border-gray-200 rounded-xl p-4 hover-lift">
                      <div className="text-2xl mb-2">{value.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">{value.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop/tablet grid */}
              <div className="hidden sm:grid grid-cols-2 gap-4">
                {cultureValues.map((value, index) => (
                  <div key={index} className="glass border border-gray-200 rounded-xl p-4 sm:p-6 hover-lift card-enhanced">
                    <div className="text-2xl sm:text-3xl mb-3">{value.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{value.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/careers"
                className="btn-gradient text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm transform hover:scale-105 relative overflow-hidden"
              >
                JOIN OUR TEAM
              </a>
              <a
                href="/culture"
                className="cursor-pointer glass border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm font-medium hover:scale-105 relative overflow-hidden"
              >
                Learn About Our Culture
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;
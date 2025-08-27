import React, { useEffect, useRef } from 'react';

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  backgroundColor?: 'white' | 'gray';
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  reversed = false,
  backgroundColor = 'white'
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add scroll-triggered animation classes
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

  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <section ref={sectionRef} className={`py-16 sm:py-20 md:py-24 ${bgClass} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center ${reversed ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content - Enhanced mobile responsiveness */}
          <div className={`${reversed ? 'lg:col-start-2' : ''} animate-on-scroll text-center lg:text-left order-2 lg:order-1 ${reversed ? 'lg:order-2' : ''}`}>
            {subtitle && (
              <div className="mb-6 flex flex-col items-center lg:items-start">
                <p className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-3">
                  {subtitle}
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shimmer"></div>
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight max-w-lg mx-auto lg:mx-0">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
            
            {/* Enhanced button with multiple options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={buttonLink}
                className="btn-gradient text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">{buttonText}</span>
              </a>
              <button className="cursor-pointer glass border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm font-medium hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Enhanced Image with mobile optimizations */}
          <div className={`${reversed ? 'lg:col-start-1' : ''} animate-on-scroll flex justify-center order-1 lg:order-2 ${reversed ? 'lg:order-1' : ''}`}>
            <div className="relative group max-w-lg w-full">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl transform rotate-2 scale-105 opacity-20 group-hover:rotate-3 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform -rotate-1 scale-95 opacity-10 group-hover:-rotate-2 transition-all duration-700"></div>
              
              <img
                src={imageSrc}
                alt={imageAlt}
                className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 card-enhanced"
                loading="lazy"
              />
              
              {/* Enhanced overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-2xl group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Animated floating elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-70 animate-float"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Interactive hover overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
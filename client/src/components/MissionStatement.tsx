import React, { useEffect, useRef, useState } from 'react';

const MissionStatement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-300 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-orange-400 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`glass bg-white rounded-3xl shadow-2xl p-12 md:p-16 border-l-4 border-orange-600 relative overflow-hidden group transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          {/* Decorative quote marks */}
          <div className="absolute top-6 left-6 text-8xl text-orange-200 font-serif leading-none">"</div>
          <div className="absolute bottom-6 right-6 text-8xl text-orange-200 font-serif leading-none rotate-180">"</div>
          
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-gray-700 leading-relaxed font-medium relative z-10 mb-8">
            "In an increasingly digital world, physical connections matter more 
            than ever. Cimpress ceaselessly innovates to make connections ever 
            more impactful and more personal."
          </blockquote>
          
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          </div>
          
          <cite className="text-lg text-gray-500 font-semibold">— Cimpress Leadership Team</cite>

          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 shimmer"></div>
          </div>

          {/* Floating accent elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-60 animate-float"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
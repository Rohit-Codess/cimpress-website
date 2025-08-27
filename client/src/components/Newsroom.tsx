import React, { useEffect, useRef, useState } from 'react';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

const Newsroom: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add staggered animations
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-slide-scale');
            }, index * 150);
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

  const articles: NewsArticle[] = [
    {
      id: 1,
      title: "Druk.nl Recognized for Commitment to Corporate Social Responsibility",
      excerpt: "Cimpress business Drukwerkdeal has been recognized by the industry for the quality and transparency of its continuous commitments to society and its customers to achieve climate neutrality as the winner of the 2023 CSR.",
      date: "Dec 15, 2023",
      category: "Awards",
      imageUrl: "https://media.istockphoto.com/id/1208152999/photo/trophy-with-smoke-effect-holding-on-hand-and-background-blue-and-violet-light-for-e-sport.jpg?s=612x612&w=0&k=20&c=syVR_CDSD5MfKlbLNT1Ykqwb_WUWTY9BQVSvIMdvseE="
    },
    {
      id: 2,
      title: "Announcing New Employee Resource Groups at Vista & Cimpress",
      excerpt: "Vista understands the transformational impact that diversity, equity, and inclusion have on innovation, collaboration, and global business results. Employee Resource Groups will help our team members create and lead opportunities across all.",
      date: "Nov 28, 2023",
      category: "Company News",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Cimpress and Vista Earn 'Most Flexible Workplace' Recognition",
      excerpt: "At the 2023 Business Banter conference in May, Cimpress and Vista were the award for 'Most Flexible Workplace' for offering multiple options for our team to work that fit their unique lives & personal requirements. Flexibility extends to the types than just.",
      date: "Oct 10, 2023",
      category: "Recognition",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      title: "Innovation in Mass Customization Technology",
      excerpt: "Our latest breakthrough in mass customization technology is revolutionizing how personalized products are created and delivered to customers worldwide.",
      date: "Sep 20, 2023",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlubm92YXRpb24lMjBpbiUyMG1hc3MlMjBpbiUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 5,
      title: "Expanding Global Operations",
      excerpt: "Cimpress continues to expand its global footprint with new facilities and partnerships across Europe, Asia, and the Americas.",
      date: "Aug 15, 2023",
      category: "Expansion",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      title: "Sustainability Initiative Achievements",
      excerpt: "Our commitment to environmental responsibility shows significant progress with 40% reduction in carbon footprint and 100% renewable energy adoption.",
      date: "Jul 30, 2023",
      category: "Sustainability",
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 relative inline-block">
            In the news
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shimmer"></div>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Stories from around the business, press releases and recent news
          </p>
        </div>

        {/* Mobile: Horizontal Scroll Layout */}
        <div className="block sm:hidden">
          <div className="horizontal-scroll pb-4">
            {articles.map((article) => (
              <article 
                key={article.id} 
                className="horizontal-scroll-item animate-on-scroll card-enhanced bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div> */}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-gray-500 font-medium">{article.date}</div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                  <a
                    href={`/news/${article.id}`}
                    className="cursor-pointer inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-all duration-300 text-sm group-hover:translate-x-1"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 shimmer"></div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet: Grid Layout */}
        <div className="hidden sm:block">
          <div className="grid-responsive gap-6 lg:gap-8">
            {articles.slice(0, 6).map((article) => (
              <article 
                key={article.id} 
                className={`animate-on-scroll card-enhanced bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group transition-all duration-700`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-2 rounded-full uppercase tracking-wide shadow-lg">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div> */}
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500 font-medium">{article.date}</div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <a
                    href={`/news/${article.id}`}
                    className="cursor-pointer inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-all duration-300 group-hover:translate-x-1"
                  >
                    Read More 
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 shimmer"></div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-12 sm:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.8s' }}>
          <a
            href="/news"
            className="btn-gradient text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm hover-lift relative overflow-hidden inline-block"
          >
            VIEW ALL ANNOUNCEMENTS & NEWS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
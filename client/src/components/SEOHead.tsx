import React from 'react';

const SEOHead: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cimpress plc",
    "alternateName": "Cimpress",
    "url": "https://cimpress.com",
    "logo": "https://cimpress.com/wp-content/uploads/2018/01/Cimpress_Identity_White_retina.png",
    "description": "Cimpress is the world leader in mass customization. Our platform connects efficient manufacturing with online customer experiences.",
    "foundingDate": "1995",
    "industry": "Mass Customization",
    "numberOfEmployees": "8000+",
    "headquarters": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Venlo",
        "addressCountry": "Netherlands"
      }
    },
    "sameAs": [
      "https://www.linkedin.com/company/cimpress",
      "https://twitter.com/cimpress",
      "https://www.facebook.com/cimpress"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://cimpress.com/contact"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SEOHead;
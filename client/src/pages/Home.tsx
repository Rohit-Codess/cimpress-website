import React from 'react';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import MissionStatement from '../components/MissionStatement';
import TeamCulture from '../components/TeamCulture';
import Newsroom from '../components/Newsroom';

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Make an Impression Section */}
      <ContentSection
        subtitle="MAKE AN IMPRESSION. LEAVE YOUR MARK."
        title="Empowering Creativity Through Technology"
        description="Cimpress makes it easy and affordable for customers to express themselves, helping their imagined impact through a broad range of personalized products. Cimpress combines the individual personalization customers desire with the tangible impact of physical products."
        buttonText="HOW WE APPROACH"
        buttonLink="/focus"
        imageSrc="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Customer using personalized products"
        backgroundColor="white"
      />

      {/* Mission Statement */}
      <MissionStatement />

      {/* Entrepreneurial Businesses Section */}
      <ContentSection
        subtitle="ENTREPRENEURIAL BUSINESSES"
        title="Building Innovative Solutions"
        description="Cimpress invests in and builds customer-focused entrepreneurial teams, management structures for the long term. At the same time, we seek to support businesses and services to help our customers make an impression."
        buttonText="LEARN ABOUT OUR BUSINESSES"
        buttonLink="/businesses"
        imageSrc="https://blog.naiop.org/wp-content/uploads/2024/04/Construction-tech-800px.jpg"
        imageAlt="Business team collaborating"
        reversed={true}
        backgroundColor="gray"
      />

      {/* Strategic Capabilities Section */}
      <ContentSection
        subtitle="STRATEGIC CAPABILITIES"
        title="Competitive Advantages That Matter"
        description="We share competitive advantages across Cimpress by investing in a select group of shared strategic capabilities that form the foundation for our businesses to compete more effectively."
        buttonText="OUR STRATEGIC CAPABILITIES"
        buttonLink="/capabilities"
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Strategic planning and analytics"
        backgroundColor="white"
      />

      {/* Team Culture Section */}
      <TeamCulture />

      {/* Newsroom Section */}
      <Newsroom />
    </main>
  );
};

export default Home;
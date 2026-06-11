
import React from 'react';
import { Button } from './button.tsx';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
}) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctaText && ctaLink && (
          <Button variant="primary" onClick={() => (window.location.href = ctaLink)}>
            {ctaText}
          </Button>
        )}
      </div>
      {image && (
        <div className="hero-image-wrapper">
          <img src={image} alt="hero" className="hero-image" />
        </div>
      )}
    </section>
  );
};

export default HeroSection;

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
    <section
      className="hero-section"
      style={image ? { ['--hero-bg' as string]: `url(${image})` } : undefined}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctaText && ctaLink && (
          <Button variant="primary" onClick={() => (window.location.href = ctaLink)}>
            {ctaText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

// components/HeroSection.tsx
import HeroContent from './HeroContent';
import CTAButtons from './CTAButtons';

export default function HeroSection() {
  return (
    <div 
      className="absolute flex flex-col items-center"
      style={{
        width: '1680px',
        height: '447px',
        top: '145px',
        left: '120px',
        gap: '64px'
      }}
    >
      {/* Main Content Container */}
      <div 
        className="flex flex-col items-center"
        style={{
          width: '736px',
          height: '447px',
          gap: '48px'
        }}
      >
        {/* Content Container (Badge, Headline, Subtext) */}
        <HeroContent />

        {/* CTA Buttons */}
        <CTAButtons />
      </div>
    </div>
  );
}
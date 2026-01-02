// components/HeroContent.tsx
import HeroBadge from './HeroBadge';

export default function HeroContent() {
  return (
    <div 
      className="flex flex-col items-center"
      style={{
        width: '736px',
        height: '353px',
        gap: '24px',
        marginBottom: '40px'
      }}
    >
      {/* Hero Badge */}
      <HeroBadge />

      {/* Headline */}
      <h1 
        className="text-center"
        style={{
          width: '736px',
          height: '231px',
          margin: 0
        }}
      >
        <span style={{
          fontFamily: 'General Sans',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          color: 'rgba(0, 111, 232, 1)'
        }}>
          iMessage
        </span>
        <span style={{
          fontFamily: 'General Sans',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          color: 'rgba(0, 0, 0, 1)'
        }}>
          {' '}Automation for Teams and AI Workflows.
        </span>
      </h1>

      {/* Subtext */}
      <p 
        className="text-center"
        style={{
          fontFamily: 'General Sans',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '130%',
          letterSpacing: '-0.02em',
          color: 'rgba(0, 0, 0, 1)',
          margin: 0,
         
        }}
      >
        Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.
      </p>
    </div>
  );
}
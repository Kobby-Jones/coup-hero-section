// components/CTAButtons.tsx
import Image from 'next/image';

export default function CTAButtons() {
  return (
    <div 
      className="flex items-center"
      style={{
        width: '414px',
        height: '46px',
        gap: '12px'
      }}
    >
      {/* Primary Button */}
      <button
        style={{
          width: '136px',
          height: '46px',
          borderRadius: '50px',
          paddingTop: '12px',
          paddingRight: '20px',
          paddingBottom: '12px',
          paddingLeft: '20px',
          background: 'rgba(0, 122, 255, 1)',
          border: 'none',
          cursor: 'pointer',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
      >
        <span style={{
          fontFamily: 'General Sans',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          color: 'rgba(255, 255, 255, 1)'
        }}>
          Get Started
        </span>
      </button>

      {/* Secondary Button */}
      <button
        className="flex items-center"
        style={{
          width: '266px',
          height: '46px',
          gap: '12px',
          borderRadius: '50px',
          paddingTop: '12px',
          paddingRight: '20px',
          paddingBottom: '12px',
          paddingLeft: '20px',
          border: '0.7px solid rgba(108, 120, 143, 1)',
          background: 'transparent',
          cursor: 'pointer',
          transition: 'border-color 0.2s ease, background 0.2s ease',
          fontSize: '18px'
        }}
      >
        <Image 
          src="/apple_icon.svg"
          alt="Apple"
          width={18}
          height={22}
        />
        <div 
          style={{
            width: '0.5px',
            height: '18px',
            background: 'rgba(108, 120, 143, 1)'
          }}
        />
        <span style={{
          fontFamily: 'General Sans',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          color: 'rgba(29, 32, 38, 1)'
        }}>
          Download the Mac app
        </span>
      </button>
    </div>
  );
}
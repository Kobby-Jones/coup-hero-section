// components/ScrollIndicator.tsx
import Image from 'next/image';

export default function ScrollIndicator() {
  return (
    <div 
      className="absolute flex flex-col items-center"
      style={{
        width: '645px',
        height: '63px',
        top: '946.94px',
        left: '637.5px',
        gap: '8px'
      }}
    >
      <span style={{
        width: '645px',
        height: '23px',
        fontFamily: 'General Sans',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '130%',
        letterSpacing: '-0.02em',
        textAlign: 'center',
        color: 'rgba(29, 32, 38, 1)'
      }}>
        Scroll to learn more
      </span>
      <Image 
        src="/down_arrow.svg"
        alt="Scroll down"
        width={32}
        height={32}
        style={{
          width: '32px',
          height: '32px'
        }}
      />
    </div>
  );
}
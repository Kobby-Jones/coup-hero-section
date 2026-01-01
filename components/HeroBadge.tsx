// components/HeroBadge.tsx
import Image from 'next/image';

export default function HeroBadge() {
  return (
    <div 
      className="flex items-center"
      style={{
        width: '265px',
        height: '28px',
        gap: '8px',
        borderRadius: '200px',
        paddingTop: '4px',
        paddingRight: '8px',
        paddingBottom: '5px',
        paddingLeft: '8px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 0.25px 1px 0 rgba(0, 0, 0, 0.1)'
      }}
    >
      <div style={{
        width: '32px',
        height: '17px',
        borderRadius: '185.79px',
        background: 'rgba(0, 122, 255, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image 
          src="/imessage_icon.svg"
          alt="iMessage"
          width={16}
          height={12}
        />
      </div>
      <span style={{
        fontFamily: 'General Sans',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '120%',
        letterSpacing: '-0.02em',
        color: 'rgba(0, 111, 232, 1)'
      }}>
        #1 iMessage Automation Tool
      </span>
    </div>
  );
}
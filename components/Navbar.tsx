// components/Navbar.tsx
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav 
      className="absolute flex items-center justify-between"
      style={{
        width: '1200px',
        height: '81px',
        left: '240px',
        top: '60px',
        borderRadius: '200px',
        paddingTop: '20px',
        paddingRight: '20px',
        paddingBottom: '20px',
        paddingLeft: '24px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 0.25px 1px 0 rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Logo */}
      <div style={{ width: '106.94091796875px', height: '34px' }}>
        <Image 
          src="/logo.svg" 
          alt="Logo" 
          width={107} 
          height={34}
          style={{ width: '106.94091796875px', height: '34px' }}
        />
      </div>

      {/* Nav Links */}
      <div className="flex items-center" style={{ gap: '16px' }}>
        <div 
          className="flex items-center nav-link"
          style={{
            paddingTop: '8px',
            paddingRight: '12px',
            paddingBottom: '8px',
            paddingLeft: '12px',
            cursor: 'pointer'
          }}
        >
          <span style={{
            fontFamily: 'General Sans',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '100%',
            color: 'rgba(140, 151, 168, 1)',
            transition: 'color 0.2s ease'
          }}>
            How it Works
          </span>
        </div>

        <div 
          className="flex items-center nav-link"
          style={{
            paddingTop: '8px',
            paddingRight: '12px',
            paddingBottom: '8px',
            paddingLeft: '12px',
            cursor: 'pointer'
          }}
        >
          <span style={{
            fontFamily: 'General Sans',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '100%',
            color: 'rgba(140, 151, 168, 1)',
            transition: 'color 0.2s ease'
          }}>
            Pricing
          </span>
        </div>

        <div 
          className="flex items-center nav-link"
          style={{
            paddingTop: '8px',
            paddingRight: '12px',
            paddingBottom: '8px',
            paddingLeft: '12px',
            cursor: 'pointer'
          }}
        >
          <span style={{
            fontFamily: 'General Sans',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '100%',
            color: 'rgba(140, 151, 168, 1)',
            transition: 'color 0.2s ease'
          }}>
            Use Case
          </span>
        </div>

        <div 
          className="flex items-center nav-link"
          style={{
            paddingTop: '8px',
            paddingRight: '12px',
            paddingBottom: '8px',
            paddingLeft: '12px',
            cursor: 'pointer'
          }}
        >
          <span style={{
            fontFamily: 'General Sans',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '100%',
            color: 'rgba(140, 151, 168, 1)',
            transition: 'color 0.2s ease'
          }}>
            FAQ
          </span>
        </div>
      </div>

      {/* Contact Sales Button */}
      <button
        className="contact-sales-btn"
        style={{
          width: '138px',
          height: '41px',
          borderRadius: '43.62px',
          paddingTop: '11px',
          paddingRight: '18px',
          paddingBottom: '11px',
          paddingLeft: '18px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <span className="button-text" style={{
          fontFamily: 'General Sans',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          color: 'rgba(255, 255, 255, 1)',
          position: 'relative',
          zIndex: 2,
          transition: 'color 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          Contact Sales
        </span>
        <div className="button-bg" style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'rgba(0, 122, 255, 1)',
          zIndex: 1,
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: 'left'
        }}></div>
      </button>
    </nav>
  );
}
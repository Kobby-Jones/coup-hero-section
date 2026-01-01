// components/BackgroundElements.tsx
import Image from 'next/image';

export default function BackgroundElements() {
  return (
    <>
      {/* Background Ellipse - Upper Left */}
      <div 
        className="absolute"
        style={{
          width: '471.26513671875px',
          height: '441.76220703125px',
          top: '-228.76px',
          left: '-92.47px',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(121px)',
          borderRadius: '50%'
        }}
      />

      {/* Bottom Cloud */}
      <Image 
        src="/bottom_cloud.svg"
        alt="Cloud"
        width={1920}
        height={582}
        className="absolute"
        style={{
          width: '1920px',
          height: '581.7391357421875px',
          top: '686.07px',
          left: '0',
        }}
      />
    </>
  );
}
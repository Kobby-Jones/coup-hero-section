// components/BirdsTop.tsx
import Image from 'next/image';

export default function BirdsTop() {
  return (
    <>
      {/* Top Birds - Left Side */}
      <Image 
        src="/left_top_first.svg"
        alt="Bird"
        width={42}
        height={14}
        className="absolute bird-fly-in"
        style={{
          width: '42.35816955566406px',
          height: '13.960294723510742px',
          top: '291px',
          left: '298.18px'
        }}
      />
      <Image 
        src="/left_top_second.svg"
        alt="Bird"
        width={42}
        height={14}
        className="absolute bird-shadow"
        style={{
          width: '42.35816955566406px',
          height: '13.960294723510742px',
          top: '329.02px',
          left: '495.3px'
        }}
      />
      <Image 
        src="/left_top_second.svg"
        alt="Bird Shadow"
        width={42}
        height={14}
        className="absolute bird-shadow-animate"
        style={{
          width: '42.35816955566406px',
          height: '13.960294723510742px',
          top: '329.02px',
          left: '495.3px'
        }}
      />

      {/* Top Birds - Right Side */}
      <Image 
        src="/right_top_first.svg"
        alt="Bird"
        width={42}
        height={14}
        className="absolute"
        style={{
          width: '42.35816955566406px',
          height: '13.960294723510742px',
          top: '305px',
          left: '1406.18px'
        }}
      />
      <Image 
        src="/right_top_second.svg"
        alt="Bird"
        width={42}
        height={14}
        className="absolute"
        style={{
          width: '42.35816955566406px',
          height: '13.960294723510742px',
          top: '465px',
          left: '1446.18px'
        }}
      />
    </>
  );
}
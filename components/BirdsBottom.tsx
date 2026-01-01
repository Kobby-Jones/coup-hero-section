// components/BirdsBottom.tsx
import Image from 'next/image';

export default function BirdsBottom() {
  return (
    <>
      <Image 
        src="/bottom_left_first.svg"
        alt="Bird with message"
        width={103}
        height={77}
        className="absolute"
        style={{
          width: '103.38276672363281px',
          height: '76.75421142578125px',
          top: '925.39px',
          left: '371.92px'
        }}
      />
      <Image 
        src="/bottom_left_socond.svg"
        alt="Bird with message"
        width={88}
        height={57}
        className="absolute"
        style={{
          width: '87.74223327636719px',
          height: '56.987083435058594px',
          top: '881px',
          left: '665.18px'
        }}
      />
      <Image 
        src="/Bottom_right_first.svg"
        alt="Bird with message"
        width={128}
        height={54}
        className="absolute"
        style={{
          width: '128.21115112304688px',
          height: '54.377986907958984px',
          top: '956px',
          left: '1263.18px'
        }}
      />
      <Image 
        src="/bottom_right_second.svg"
        alt="Bird with message"
        width={129}
        height={102}
        className="absolute"
        style={{
          width: '128.9345245361328px',
          height: '101.98511505126953px',
          top: '882px',
          left: '1577.18px'
        }}
      />
    </>
  );
}
// components/FlyingBirds.tsx
import Image from 'next/image';

export default function FlyingBirds() {
  return (
    <>
      {/* Flying Birds - Cross Animation */}
      <div className="bird-cross-left">
        <Image 
          src="/bottom_left_first.svg"
          alt="Flying Bird Left"
          width={103}
          height={77}
          style={{
            width: '103.38276672363281px',
            height: '76.75421142578125px',
            display: 'block'
          }}
        />
      </div>
      <div className="bird-cross-right">
        <Image 
          src="/bottom_right_second.svg"
          alt="Flying Bird Right"
          width={129}
          height={102}
          style={{
            width: '128.9345245361328px',
            height: '101.98511505126953px',
            display: 'block'
          }}
        />
      </div>
    </>
  );
}
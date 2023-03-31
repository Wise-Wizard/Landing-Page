import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1_201)'>
      <path
        d='M30 12.3283L42.5 22.0783V39H37.5V26H22.5V39H17.5V22.0783L30 12.3283V12.3283ZM30 6.5L5 26H12.5V43.3333H27.5V30.3333H32.5V43.3333H47.5V26H55L30 6.5Z'
        fill='#FF4D01'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_201'>
        <rect width={60} height={52} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };

import { memo, SVGProps } from 'react';

const PersonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1_213)'>
      <path
        d='M26 14C28.3833 14 30.3333 16.1 30.3333 18.6666C30.3333 21.2333 28.3833 23.3333 26 23.3333C23.6167 23.3333 21.6667 21.2333 21.6667 18.6666C21.6667 16.1 23.6167 14 26 14ZM26 37.3333C31.85 37.3333 38.5667 40.3433 39 42H13C13.4983 40.32 20.1717 37.3333 26 37.3333ZM26 9.33331C21.2117 9.33331 17.3333 13.51 17.3333 18.6666C17.3333 23.8233 21.2117 28 26 28C30.7883 28 34.6667 23.8233 34.6667 18.6666C34.6667 13.51 30.7883 9.33331 26 9.33331ZM26 32.6666C20.215 32.6666 8.66666 35.7933 8.66666 42V46.6666H43.3333V42C43.3333 35.7933 31.785 32.6666 26 32.6666Z'
        fill='#FF4D01'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_213'>
        <rect width={52} height={56} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(PersonIcon);
export { Memo as PersonIcon };

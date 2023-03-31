import { memo, SVGProps } from 'react';

const CalendarTodayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 54 58' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1_207)'>
      <path
        d='M44.55 33.0897H42.3V28.2564H37.8V33.0897H15.3V28.2564H10.8V33.0897H8.55C6.075 33.0897 4.05 35.2647 4.05 37.9231V76.5897C4.05 79.2481 6.075 81.4231 8.55 81.4231H44.55C47.025 81.4231 49.05 79.2481 49.05 76.5897V37.9231C49.05 35.2647 47.025 33.0897 44.55 33.0897ZM44.55 76.5897H8.55V50.0064H44.55V76.5897ZM44.55 45.1731H8.55V37.9231H44.55V45.1731Z'
        fill='#FF4D01'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_207'>
        <rect width={54} height={58} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(CalendarTodayIcon);
export { Memo as CalendarTodayIcon };

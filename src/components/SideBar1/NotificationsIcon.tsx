import { memo, SVGProps } from 'react';

const NotificationsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 51 58' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1_204)'>
      <path
        d='M25 58.125C27.3375 58.125 29.25 55.95 29.25 53.2917H20.75C20.75 55.95 22.6625 58.125 25 58.125ZM37.75 43.625V31.5417C37.75 24.1225 34.2862 17.9117 28.1875 16.2683V14.625C28.1875 12.6192 26.7637 11 25 11C23.2363 11 21.8125 12.6192 21.8125 14.625V16.2683C15.735 17.9117 12.25 24.0983 12.25 31.5417V43.625L8 48.4583V50.875H42V48.4583L37.75 43.625ZM33.5 46.0417H16.5V31.5417C16.5 25.5483 19.7087 20.6667 25 20.6667C30.2913 20.6667 33.5 25.5483 33.5 31.5417V46.0417Z'
        fill='#FF4D01'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_204'>
        <rect width={51} height={58} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(NotificationsIcon);
export { Memo as NotificationsIcon };

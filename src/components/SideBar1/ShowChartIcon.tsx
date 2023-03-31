import { memo, SVGProps } from 'react';

const ShowChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 49 51' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1_210)'>
      <path
        d='M7.14583 39.2912L19.3958 26.52L27.5625 35.02L44.9167 14.705L42.0379 11.7087L27.5625 28.645L19.3958 20.145L4.08333 36.1037L7.14583 39.2912Z'
        fill='#FF4D01'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_210'>
        <rect width={49} height={51} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(ShowChartIcon);
export { Memo as ShowChartIcon };

import { SVGProps } from 'react';

const IconPortal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={39} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask
      id="a"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={24}
      width={15}
      height={16}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12.008 24.874h14.8v14.8h-14.8v-14.8Z" fill="#fff" />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.408 36.883c2.727 0 4.609-1.776 4.609-4.334v-4.884h-9.218v4.884c0 2.558 1.882 4.334 4.61 4.334m0 2.79c-4.166 0-7.4-3.044-7.4-7.124v-7.675h14.799v7.675c0 4.08-3.235 7.124-7.4 7.124"
        fill="#1D1D1B"
      />
    </g>
    <mask
      id="b"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={0}
      width={15}
      height={16}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12.008.984h14.8v14.672h-14.8V.984Z" fill="#fff" />
    </mask>
    <g mask="url(#b)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.408 3.775c-2.727 0-4.609 1.776-4.609 4.334v4.757h9.218V8.109c0-2.558-1.882-4.334-4.61-4.334m0-2.79c4.166 0 7.4 3.044 7.4 7.124v7.547H12.009V8.11c0-4.08 3.235-7.125 7.4-7.125"
        fill="#1D1D1B"
      />
    </g>
    <mask
      id="c"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={12}
      width={15}
      height={16}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 12.866h14.8v14.799H0v-14.8Z" fill="#fff" />
    </mask>
    <g mask="url(#c)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.79 20.265c0 2.728 1.777 4.61 4.335 4.61h4.883v-9.219H7.125c-2.558 0-4.334 1.882-4.334 4.61m-2.791 0c0-4.166 3.044-7.4 7.125-7.4h7.674v14.799H7.125c-4.08 0-7.125-3.235-7.125-7.4"
        fill="#1D1D1B"
      />
    </g>
    <mask
      id="d"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={24}
      y={12}
      width={15}
      height={16}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M24.017 12.866h14.8v14.799h-14.8v-14.8Z" fill="#fff" />
    </mask>
    <g mask="url(#d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.026 20.265c0-2.727-1.777-4.609-4.335-4.609h-4.883v9.218h4.884c2.557 0 4.334-1.881 4.334-4.609m2.79 0c0 4.165-3.044 7.4-7.125 7.4h-7.674v-14.8h7.675c4.08 0 7.124 3.235 7.124 7.4"
        fill="#1D1D1B"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.026 20.265c0-2.727-1.777-4.609-4.335-4.609h-4.883v9.218h4.884c2.557 0 4.334-1.881 4.334-4.609"
      fill="#F1DE02"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.408 3.775c-2.727 0-4.609 1.776-4.609 4.334v4.757h9.218V8.109c0-2.558-1.882-4.334-4.61-4.334"
      fill="#009639"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.408 36.883c2.727 0 4.609-1.776 4.609-4.334v-4.884h-9.218v4.884c0 2.558 1.882 4.334 4.61 4.334"
      fill="#FF8300"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.79 20.265c0 2.728 1.777 4.61 4.335 4.61h4.883v-9.219H7.125c-2.558 0-4.334 1.882-4.334 4.61"
      fill="#F40000"
    />
  </svg>
);

export default IconPortal;

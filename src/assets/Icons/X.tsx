import React, { SVGProps } from 'react';

type Props = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconX: React.FC<Props> = ({ className, size = 20, ...props }) => (
  <svg
    {...props}
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7187 14.4479C16.0562 14.8217 16.0562 15.3824 15.7187 15.7189C15.3437 16.0927 14.7812 16.0927 14.4437 15.7189L10.0187 11.2703L5.55625 15.7189C5.18125 16.0927 4.61875 16.0927 4.28125 15.7189C3.90625 15.3824 3.90625 14.8217 4.28125 14.4479L8.74375 9.99927L4.28125 5.55067C3.90625 5.17684 3.90625 4.61609 4.28125 4.27964C4.61875 3.90581 5.18125 3.90581 5.51875 4.27964L10.0187 8.76562L14.4812 4.31702C14.8187 3.94319 15.3812 3.94319 15.7187 4.31702C16.0937 4.65347 16.0937 5.21422 15.7187 5.58805L11.2562 9.99927L15.7187 14.4479Z"
      fill="currentColor"
    />
  </svg>
);

export default IconX;

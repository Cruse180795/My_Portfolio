import type { IconProps } from '../../types';


export default function ContactIcon({...props}: IconProps) {
  return (
    <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path d="M0 5.3585V14H16V5.35849L8 10.3585L0 5.3585Z" fill="currentColor" />
          <path d="M16 3V2H0V3L8 8L16 3Z" fill="currentColor" />
        </g>
      </svg>
  );
}

import type { IconProps } from '../../types';

export default function TimerIcon({ ...props }: IconProps) {
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
          <path d="M9 7L10 0H8L2 7V9H7L6 16H8L14 9L14 7H9Z" fill="currentColor" />
        </g>
      </svg>
  )
}

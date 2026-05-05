export default function HamburgerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
        viewBox="0 0 24 24"
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
          <path
            d="M20 7L4 7"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          <path
            d="M20 12L4 12"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          <path
            d="M20 17L4 17"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
        </g>
      </svg>
  )
}

type Props = {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
}

export default function SocialLink({href, children, ariaLabel}: Props) {
  return (
    <li>
      <a
        className=" transition-colors duration-500 ease-in-out hover:text-blue-500 focus-visible:outline-none focus-visible:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        aria-label={ariaLabel}>
          {children}
      </a>
    </li>

  )
}

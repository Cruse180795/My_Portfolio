type Props = {
  href: string;
  children: React.ReactNode;
}

export default function DesktopLink({ href, children }: Props) {
  return (
    <li>
      <a href={href} className="text-xl transition-colors duration-500 ease-in-out hover:text-blue-500 focus-visible:outline-none focus-visible:text-blue-500">
        {children}
      </a>
    </li>
  )
}

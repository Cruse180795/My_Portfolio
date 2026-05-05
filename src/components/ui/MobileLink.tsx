type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void
}

export default function MobileLink({ href, children, onClick }: Props) {
  return (
    <li className="border-2 px-4 py-2 shadow-md rounded-lg">
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </li>
  )
}

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function DesktopLink({ children, onClick }: Props) {
  return (
    <li>
      <button
        onClick={onClick}
        className="text-xl transition-colors duration-500 ease-in-out hover:text-blue-500 focus-visible:outline-none focus-visible:text-blue-500">
        {children}
      </button>
    </li>
  )
}

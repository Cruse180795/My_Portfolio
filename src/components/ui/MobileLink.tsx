type Props = {
  children: React.ReactNode;
  section: string;
  setActiveSection: (section: string) => void;
  closeMenu: () => void;
}

export default function MobileLink({ children, section, setActiveSection, closeMenu }: Props) {

  const handleClick = () => {
    setActiveSection(section);
    closeMenu();
  }


  return (
    <li>
      <button className="border-2 px-4 py-2 shadow-md rounded-lg" onClick={handleClick}>
        {children}
      </button>
    </li>
  )
}

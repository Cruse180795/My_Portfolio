type MobileNavLinkProps = {
  section: string;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
};


export default function MobileNavLink({ section, activeSection, setActiveSection, children }: MobileNavLinkProps) {

  const isLinkActive = activeSection === section;

  return (
    <li>
      <button
        onClick={() => setActiveSection(section)}
        className={`p-1.5 border rounded-lg flex items-center
          ${isLinkActive ? 'bg-primary/40 border-primary' :
          'bg-neutral border-neutral'}`}>
        {children}
      </button>
    </li>
  )

}

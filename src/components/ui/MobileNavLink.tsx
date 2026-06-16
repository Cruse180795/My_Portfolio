type MobileNavLinkProps = {
  section: string;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  ariaLabel: string;
};

export default function MobileNavLink({
  section,
  activeSection,
  setActiveSection,
  children,
  ariaLabel
}: MobileNavLinkProps) {
  const isLinkActive = activeSection === section;

  return (
    <li>
      <button
        onClick={() => setActiveSection(section)}
        className={`p-2 border rounded-lg flex items-center justify-center transition-all ease-in-out duration-300
          ${isLinkActive
            ? 'bg-primary/40 border-primary'
            : 'bg-neutral border-neutral '
          }

        `}
        aria-label={ariaLabel}
        aria-current={isLinkActive ? 'page' : undefined}>
        {children}
      </button>
    </li>
  );
}

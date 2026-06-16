import AboutIcon from "../icons/AboutIcon";
import ProjectsIcon from "../icons/ProjectsIcon";
import ContactIcon from "../icons/ContactIcon";

import MobileNavLink from "../ui/MobileNavLink";


type NavigationProps = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className=" bg-base-100 text-base-content">

      <div className="flex items-center justify-between p-4">

        {/** Brand */}
        <h1 className="text-3xl">Ryan Cruse</h1>


        {/** Mobile Menu */}
        <ul className="flex items-center gap-x-2">

          <MobileNavLink section="about" activeSection={activeSection} setActiveSection={setActiveSection}>
            <AboutIcon className="size-5"/>
          </MobileNavLink>

          <MobileNavLink section="projects" activeSection={activeSection} setActiveSection={setActiveSection}>
            <ProjectsIcon className="size-5" />
          </MobileNavLink>

          <MobileNavLink section="contact" activeSection={activeSection} setActiveSection={setActiveSection}>
            <ContactIcon className="size-5" />
          </MobileNavLink>

        </ul>


      </div>


    </nav>
  );
}

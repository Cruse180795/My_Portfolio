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
    <nav className=" bg-base-100 text-base-content border-b-base-300 border-b">

      <div className="flex items-center justify-between p-4 container mx-auto">

        {/** Brand */}
        <h1 className="text-3xl underline underline-offset-8 decoration-0 decoration-primary lg:text-4xl">Ryan Cruse</h1>


        {/** Mobile Menu */}
        <ul className="flex items-center gap-x-2 md:hidden">

          <MobileNavLink section="about" activeSection={activeSection} setActiveSection={setActiveSection} ariaLabel="About">
            <AboutIcon className="size-5"/>
          </MobileNavLink>

          <MobileNavLink section="projects" activeSection={activeSection} setActiveSection={setActiveSection} ariaLabel="Projects">
            <ProjectsIcon className="size-5" />
          </MobileNavLink>

          <MobileNavLink section="contact" activeSection={activeSection} setActiveSection={setActiveSection} ariaLabel="Contact">
            <ContactIcon className="size-5" />
          </MobileNavLink>
        </ul>




      </div>


    </nav>
  );
}

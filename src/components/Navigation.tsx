import HamburgerIcon from "./icons/HamburgerIcon"
import CloseIcon from "./icons/CloseIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import DesktopLink from "./ui/DesktopLink";
import MobileLink from "./ui/MobileLink";
import SocialLink from "./ui/SocialLink";
import { useState } from "react"

type NavigationProps = {
  github: string;
  linkedin: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({github, linkedin, setActiveSection}: NavigationProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };


  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav
      role="navigation"
      className="shadow-xl relative z-50">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/** Brand */}
        <h1 className="text-3xl lg:text-4xl">Ryan Cruse</h1>

        {/** Toggle Mobile Menu */}
        <button

          aria-controls="mobile-menu"
          className="p-2 border-2 border-white rounded-full lg:hidden"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}>
            {!isMenuOpen && (
              <HamburgerIcon className="h-10 w-10"/>
            )}
            {isMenuOpen && (
              <CloseIcon className="h-10 w-10"/>
            )}
        </button>

        {/** Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <DesktopLink onClick={() => setActiveSection('about')}>About Me</DesktopLink>
          <DesktopLink onClick={() => setActiveSection('projects')}>Projects</DesktopLink>
          <DesktopLink onClick={() =>setActiveSection('contact')}>Contact Me</DesktopLink>
          <li aria-hidden="true" className="w-0.5 h-6 bg-black opacity-50" />
          <SocialLink href={github} ariaLabel="GitHub">
            <GithubIcon className="h-6 w-6" />
          </SocialLink>
          <SocialLink href={linkedin} ariaLabel="LinkedIn">
            <LinkedinIcon className="h-6 w-6" />
          </SocialLink>
        </ul>
      </div>

      {/** Mobile Menu */}
      {isMenuOpen && (
        <ul
          className="lg:hidden absolute top-full left-0 w-full shadow-xl px-4 py-6 space-y-4 text-lg md:px-6"
          id="mobile-menu">
          <MobileLink section="about" setActiveSection={setActiveSection} closeMenu={closeMenu}>
            About Me
          </MobileLink>
          <MobileLink section="projects" setActiveSection={setActiveSection} closeMenu={closeMenu}>
            Projects
          </MobileLink>
          <MobileLink section="contact" setActiveSection={setActiveSection} closeMenu={closeMenu}>
            Contact Me
          </MobileLink>

          {/** Social Links */}
          <li>
            <div className="flex items-center gap-x-4">
              <SocialLink href={github} ariaLabel="Github">
                <GithubIcon className="h-6 w-6"/>
              </SocialLink>
              <SocialLink href={linkedin} ariaLabel="LinkedIn">
                <LinkedinIcon className="h-6 w-6 "/>
              </SocialLink>
            </div>
          </li>
        </ul>
      )}

    </nav>
  )
}

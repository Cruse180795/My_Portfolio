import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";


type FooterProps = {
  githubLink: string;
  linkedinLink: string;
}

export default function Footer({ githubLink: githubUrl, linkedinLink: linkedinUrl }: FooterProps) {
  return (
    <footer className="bg-neutral text-neutral-content p-4 text-center space-y-2">
      {/** Primary action - email & availability */}
      <p className="text-pretty text-sm">Available for freelance work or hire · ryancruse1807@hotmail.com</p>

      {/** Credibility - what you built it with */}
      <p className="text-xs text-neutral-content/70">Built with React & TailwindCSS</p>

      {/** Secondary contact paths */}
      <div className="flex items-center justify-center gap-x-2">
        <a href={githubUrl} className="p-1.5 rounded-lg bg-github" target="_blank">
          <GithubIcon className="size-5"/>
        </a>
        <a href={linkedinUrl} className="p-1.5 rounded-lg bg-linkedin" target="_blank">
          <LinkedinIcon className="size-5"/>
        </a>
      </div>

      <hr className="border-accent lg:hidden" />

      {/** Legal boilerplate */}
      <small>© 2026 Ryan Cruse. All rights reserved.</small>
    </footer>
  );
}

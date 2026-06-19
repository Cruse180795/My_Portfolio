import LocationIcon from "../icons/LocationIcon";
import ReactIcon from "../icons/ReactIcon";
import LaravelIcon from "../icons/LaravelIcon";
import TailwindIcon from "../icons/TailwindIcon";
import PostgresqlIcon from "../icons/PostgresqlIcon";
import GitIcon from "../icons/GitIcon";
import HTML5Icon from "../icons/HTML5Icon";
import CSSIcon from "../icons/CSSIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";


import SkillCard from "../ui/SkillCard";

import AboutMeIllustration from "../../assets/images/AboutMeIllustration.webp";

type AboutMeSectionProps = {
  githubLink: string;
  linkedinLink: string;

};

export default function AboutMeSection({ githubLink, linkedinLink }: AboutMeSectionProps) {

  const coreStack = [
    { icon: ReactIcon, label: "React"},
    { icon: LaravelIcon, label: "Laravel" },
    { icon: TailwindIcon, label: "Tailwind"},
    { icon: PostgresqlIcon, label: "PostgreSQL"},
  ];

  const otherTools = [
    { icon: GitIcon, label: "Git" },
    { icon: HTML5Icon, label: "HTML5" },
    { icon: CSSIcon, label: "CSS" },
  ]


  return (
    <section className="bg-linear-to-bl from-base-300 via-base-200 to-neutral px-4 py-8">

      {/** Grid container */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">

        {/** Image */}
        <img
          src={AboutMeIllustration}
          alt="About Me Illustration"
          width={600}
          height={400}
          loading="lazy"
          decoding="async"
          className="rounded-lg shadow-2xl w-full h-auto"
        />

        <div className="space-y-6">

          {/** Section Header */}
          <header className="space-y-2 text-center">
            <p className="uppercase text-2xl">Welcome</p>
            <h2 className="text-4xl">I'm <span className="text-primary">Ryan Cruse</span></h2>
          </header>


          {/** Section Content */}
          <div className="space-y-3 text-center font-light text-pretty">
            <p className="leading-relaxed">Full-stack developer building web applications with React, Laravel and TailwindCSS.</p>

            <div className="space-y-2">
              <p className="flex items-center gap-x-2 justify-center">
                <LocationIcon className="size-5"/>
                Newcastle Upon Tyne, UK
              </p>
              <hr className="border-t-0 border-accent border"/>
              <p>Open to work | Freelance</p>
            </div>
          </div>

          <div className="space-y-5">

            {/* Core Stack */}
            <div className="space-y-2.5">
              <h2 className="uppercase text-secondary text-sm">Core Stack</h2>
              <ul className="grid grid-cols-2 gap-4">
                {coreStack.map((stack) => (
                  <SkillCard icon={stack.icon} label={stack.label} key={stack.label} />
                ))}
              </ul>
            </div>

            {/* Other Tools */}
            <div className="space-y-2.5">
              <h2 className="uppercase text-secondary text-sm">Other Tools | languages</h2>
              <ul className="grid grid-cols-2 gap-4">
                {otherTools.map((tool) => (
                  <SkillCard icon={tool.icon} label={tool.label} key={tool.label} />
                ))}
              </ul>
            </div>

          </div>

          <hr className="border-t-0 border-accent border"/>

          {/** Socials */}
          <div className="flex flex-col gap-y-2.5 lg:hidden">
            <h2 className="uppercase text-secondary text-xs">Contect with me:</h2>
            <div className="flex items-center gap-x-3">
              <a href={githubLink} aria-label="GitHub" className="p-2 rounded-lg transition duration-500 ease-in-out bg-github hover:-translate-y-0.5" target="_blank">
                <GithubIcon className="size-5" />
              </a>
              <a href={linkedinLink} aria-label="LinkedIn" className="p-2 rounded-lg transition duration-500 ease-in-out bg-linkedin hover:-translate-y-0.5" target="_blank">
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>

        </div>

      </div>
      {/** End of Grid container */}

    </section>
  );
}

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    imageUrl: string;
    status: string;
    githubUrl: string;
    liveUrl: string;
  };
}

import GithubIcon from "../icons/GithubIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";


export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="border-base-100 shadow-xl border-2 rounded-lg p-4 space-y-4">
      <div className="relative">
        {/** Project Image */}
        <img src={project.imageUrl} alt={project.title} className="rounded-lg border-neutral" />
         <p className="text-xs text-white absolute bottom-2 right-2 rounded-lg p-2 backdrop-blur-sm bg-white/20">{ project.status }</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl">{ project.title }</h3>
          <p className="leading-relaxed font-light text-pretty">{ project.description }</p>

        </div>


        {/** Technologies */}
        <ul className="flex flex-wrap items-center gap-2">
          {project.techStack.map((tech) => (
            <li key={tech} className="bg-neutral  px-2 py-1 rounded-md text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-t-0 border-accent border" />

      <div className="flex items-center gap-x-4 justify-center">
        <a href={project.githubUrl} target="_blank" className="border border-neutral p-2 rounded-lg flex items-center gap-x-2 w-full justify-center">
          <GithubIcon className="size-5" />
          Code
        </a>
        <a href={project.liveUrl} target="_blank" className="border border-neutral px-4 py-2 rounded-lg flex items-center gap-x-2 w-full justify-center">
          <ExternalLinkIcon className="size-5" />
          Live
        </a>
      </div>
    </li>
  )
}

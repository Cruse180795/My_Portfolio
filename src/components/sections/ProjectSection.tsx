

import ProjectCard from "../ui/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  status: string;
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps  {
  projects: Project[];
};


export default function ProjectSection({projects}: ProjectCardProps) {
  return (
    <section className="bg-base-300 text-base-content px-4 py-8 space-y-8">
      <header className="text-center space-y-2">
        <h2 className="uppercase text-2xl"><span className="text-primary">Projects</span> I've built</h2>
        <p className="leading-relaxed font-light text-pretty">Frontend applications and full-stack work built with React, Laravel, and TailwindCSS.</p>
      </header>

      {/** Projects */}
      <ul className="grid grid-cols-1 gap-4">

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}




      </ul>



    </section>
  );
}

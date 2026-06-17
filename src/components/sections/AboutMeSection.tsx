import LocationIcon from "../icons/LocationIcon";
import ReactIcon from "../icons/ReactIcon";
import LaravelIcon from "../icons/LaravelIcon";
import TailwindIcon from "../icons/TailwindIcon";
import PostgresqlIcon from "../icons/PostgresqlIcon";
import GithubIcon from "../icons/GithubIcon";
import HTML5Icon from "../icons/HTML5Icon";
import CSSIcon from "../icons/CSSIcon";


import AboutMeIllustration from "../../assets/images/AboutMeIllustration.webp";

export default function AboutMeSection() {
  return (
    <section className="bg-linear-to-b from-base-300 to-base-100 mx-auto container px-4 py-8">
      {/** Grid container */}
      <div className="grid grid-cols-1  gap-8">

        {/** Image */}
        <img
          src={AboutMeIllustration}
          alt="About Me Illustration"
          width={600}
          height={400}
          loading="lazy"
          decoding="async"
          className="rounded-lg border-[1.5px] border-primary w-full h-auto"
        />

        {/** Content */}
        <div className="space-y-6">

          <header className="space-y-2 text-center">
            <p className="uppercase text-2xl">Welcome</p>
            <h2 className="text-5xl">I'm <span className="text-primary">Ryan Cruse</span></h2>
          </header>

          {/** Description, location and status wrapper */}
          <div className="space-y-3 text-center font-light">
            <p className="leading-relaxed">Full-stack developer building web applications with React, Laravel and TailwindCSS.</p>

            <div className="space-y-2">
              <p className="flex items-center gap-x-2 justify-center">
                <LocationIcon className="size-5"/>
                Based in Newcastle Upon Tyne, UK
              </p>
              <hr className="border-t-0 border-secondary border"/>
              <p>Open to work | Freelance</p>
            </div>
          </div>


          {/** Techstack */}

          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="uppercase text-accent text-sm">Core Stack</h2>
              <ul className="grid grid-cols-2 gap-4">
                <li className="cursor-pointer flex text-neutral-content flex-col items-center justify-center gap-y-2 border-[1.5px] border-accent bg-accent/10  rounded-lg p-2 shadow-2xl transition-all ease-in-out duration-300">
                  <ReactIcon className="size-6 text-react" />
                  <p className="text-sm font-semibold">React</p>
                </li>
                <li className="cursor-pointer flex text-neutral-content flex-col items-center justify-center gap-y-2 border-[1.5px] border-accent bg-accent/10  rounded-lg p-2 shadow-2xl transition-all ease-in-out duration-300">
                  <LaravelIcon className="size-6 text-laravel" />
                  <p className="text-sm font-semibold">Laravel</p>
                </li>
                <li className="cursor-pointer flex text-neutral-content flex-col items-center justify-center gap-y-2 border-[1.5px] border-accent bg-accent/10  rounded-lg p-2 shadow-2xl transition-all ease-in-out duration-300">
                  <TailwindIcon className="size-6 text-tailwind" />
                  <p className="text-sm font-semibold">TailwindCSS</p>
                </li>
                <li className="cursor-pointer flex text-neutral-content flex-col items-center justify-center gap-y-2 border-[1.5px] border-accent bg-accent/10  rounded-lg p-2 shadow-2xl transition-all ease-in-out duration-300">
                  <PostgresqlIcon className="size-6" />
                  <p className="text-sm font-semibold">Postgresql</p>
                </li>
              </ul>
            </div>

            <hr className="border-t-0 border-secondary border"/>

            <div className="space-y-1.5">
              <h2 className="uppercase text-accent text-sm">Other Tools | languages</h2>
              <ul className="grid grid-cols-2 gap-4">
                <li className="cursor-pointer flex text-neutral-content flex-col items-center justify-center gap-y-2 border-[1.5px] border-accent bg-accent/10 rounded-lg p-2 shadow-2xl transition-all ease-in-out duration-300">
                  <GithubIcon className="size-6" />
                  <p className="text-sm font-semibold">Github</p>
                </li>
                <li className="cursor-pointer flex text-neutral-content flex-col items-center justify-center gap-y-2 border-[1.5px] border-accent bg-accent/10 rounded-lg p-2 shadow-2xl transition-all ease-in-out duration-300">
                  <CSSIcon className="size-6" />
                  <p className="text-sm font-semibold">CSS3</p>
                </li>
                <li className="cursor-pointer flex text-neutral-content flex-col items-center justify-center gap-y-2 border-[1.5px] border-accent bg-accent/10 rounded-lg p-2 shadow-2xl transition-all ease-in-out duration-300">
                  <HTML5Icon className="size-6" />
                  <p className="text-sm font-semibold">HTML5</p>
                </li>
              </ul>
            </div>

          </div>


        </div>




      </div>
    </section>
  );
}

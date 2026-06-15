import AboutIcon from "./components/icons/AboutIcon";
import ContactIcon from "./components/icons/ContactIcon";
import CSSIcon from "./components/icons/CSSIcon";
import DownloadIcon from "./components/icons/DownloadIcon";
import GithubIcon from "./components/icons/GithubIcon";
import HTML5Icon from "./components/icons/HTML5Icon";
import LaravelIcon from "./components/icons/LaravelIcon";
import LinkedinIcon from "./components/icons/LinkedinIcon";
import LocationIcon from "./components/icons/LocationIcon";
import PostgresqlIcon from "./components/icons/PostgresqlIcon";
import ProjectsIcon from "./components/icons/ProjectsIcon";
import ReactIcon from "./components/icons/ReactIcon";
import RightArrowIcon from "./components/icons/RightArrowIcon";
import TailwindIcon from "./components/icons/TailwindIcon";
import TimerIcon from "./components/icons/TimerIcon";





export default function App() {

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-4xl font-bold">Ryan Cruse</h1>

      <p className="font-thin text-4xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, dignissimos.
      </p>

      <ul className="grid grid-cols-3 gap-4">
        <li>
          <AboutIcon className="size-6"/>
        </li> <li>
          <ContactIcon className="size-6"/>
        </li>
        <li>
          <CSSIcon className="size-5"/>
        </li>
        <li>
          <DownloadIcon className="size-5"/>
        </li>
        <li>
          <GithubIcon className="size-5"/>
        </li>
        <li>
          <HTML5Icon className="size-5"/>
        </li>
        <li>
          <LaravelIcon className="size-5"/>
        </li>
        <li>
          <LinkedinIcon className="size-5"/>
        </li>
        <li>
          <LocationIcon className="size-5"/>
        </li>
        <li>
          <PostgresqlIcon className="size-5"/>
        </li>
        <li>
          <ProjectsIcon className="size-5"/>
        </li>
        <li>
          <ReactIcon className="size-5"/>
        </li>
        <li>
          <RightArrowIcon className="size-5"/>
        </li>
        <li>
          <TailwindIcon className="size-5"/>
        </li>
        <li>
          <TimerIcon className="size-5"/>
        </li>
      </ul>
    </div>



  )
}

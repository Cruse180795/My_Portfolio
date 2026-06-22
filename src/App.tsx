import Navigation from "./components/other/Navigation"
import AboutMeSection from "./components/sections/AboutMeSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactMeSection from "./components/sections/ContactMeSection";
import Footer from "./components/other/Footer";


import { useState } from "react"

import TestProjectOneImage from "./assets/images/image-3.png";

const githubLink = "";
const linkedinLink = "";
const mailtoLink = "ryancruse1807@hotmail.com"

const projectTests = [
  {
    id: 1,
    title: "Weather Dashboard",
    description: "A real-time weather application with location search, forecast cards, and responsive design.",
    techStack: ["React", "TailwindCSS", "OpenWeather API"],
    imageUrl: TestProjectOneImage,
    status: "In Development",
    githubUrl: "",
    liveUrl: ""
  }
];


export default function App() {



  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="flex flex-col">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className=" text-base-content flex-1 bg-base-200">
        <AboutMeSection githubLink={githubLink} linkedinLink={linkedinLink} />
        <ProjectSection projects={projectTests}/>

        <ContactMeSection mailto={mailtoLink} />
      </main>
      <Footer githubLink={githubLink} linkedinLink={linkedinLink}/>
    </div>



  )
}

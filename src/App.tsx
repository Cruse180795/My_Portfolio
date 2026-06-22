import Navigation from "./components/other/Navigation"
import AboutMeSection from "./components/sections/AboutMeSection";
import ContactMeSection from "./components/sections/ContactMeSection";
import Footer from "./components/other/Footer";


import { useState } from "react"



export default function App() {

  const githubLink = "";
  const linkedinLink = "";
  const mailtoLink = "ryancruse1807@hotmail.com"

  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="flex flex-col">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className=" text-base-content flex-1 bg-base-200">

        <AboutMeSection githubLink={githubLink} linkedinLink={linkedinLink} />
        <ContactMeSection mailto={mailtoLink} />


      </main>
      <Footer githubLink={githubLink} linkedinLink={linkedinLink}/>
    </div>



  )
}

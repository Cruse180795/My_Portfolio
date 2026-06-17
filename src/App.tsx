import Navigation from "./components/other/Navigation"
import AboutMeSection from "./components/sections/AboutMeSection";

import { useState } from "react"



export default function App() {

  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="flex flex-col">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className=" text-base-content flex-1">

        <AboutMeSection />

      </main>
    </div>



  )
}

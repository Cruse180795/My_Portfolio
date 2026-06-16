import Navigation from "./components/other/Navigation"

import { useState } from "react"



export default function App() {

  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </>



  )
}

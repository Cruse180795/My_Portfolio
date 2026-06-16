import Navigation from "./components/other/Navigation"

import { useState } from "react"



export default function App() {

  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="bg-base-200 text-base-content pt-10 ">
        {/** Inner Main Container */}
        <div className="px-4 container mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet reprehenderit vitae odio dignissimos inventore saepe voluptates id, ipsa hic a, repellat, quae illo corporis in voluptas at aspernatur maxime maiores exercitationem. Unde ex sit molestias cumque eos qui ducimus, hic corporis adipisci eligendi atque veniam suscipit, reprehenderit quis laudantium officiis dicta. Unde dicta tempore eveniet assumenda necessitatibus magnam magni qui est suscipit explicabo repellat illum sint aliquid ipsa mollitia harum, dolorem, neque facilis quisquam minima vitae! Earum non rerum aperiam natus. Beatae ipsa, optio itaque numquam deleniti saepe dolorum corporis? Debitis eaque harum quam voluptatum, ab maxime doloribus quibusdam temporibus quos! Hic dolorum eius impedit earum vitae repudiandae, placeat laboriosam deserunt! Quis modi ipsa nemo nam fuga eos commodi sed tempora, accusantium molestiae nihil labore delectus ipsam saepe. Nostrum reiciendis sapiente beatae consequatur quo modi officiis ratione ipsam corporis ea saepe fuga provident deserunt, quis, magnam nobis, id animi debitis nemo itaque. Aliquam optio quas enim. Ducimus aut ad accusantium fugit et fugiat quaerat voluptas fuga nihil hic aperiam commodi dicta voluptatem error ratione optio laborum voluptatum perferendis iusto, voluptate aliquam iste ipsa pariatur. Vel natus sapiente quod illum consequatur dolorem vitae in laborum? Voluptate praesentium iste soluta tempore dolores quisquam nostrum quam consequatur et aliquam exercitationem, tempora ipsa? Rerum molestiae ipsa alias doloremque totam accusantium tempore voluptatum sunt nulla! Suscipit illo ratione accusamus. Tempore temporibus esse fugiat omnis laborum asperiores autem illo incidunt! Itaque minus sed aliquid labore maxime neque doloribus quos, omnis officia blanditiis. Distinctio impedit ratione sit modi, est molestias necessitatibus, iure atque mollitia fuga facilis dicta? Maiores, excepturi eum culpa commodi quas, distinctio provident ea magnam vero perferendis deleniti! Perferendis soluta reiciendis quis ea repellendus hic illo aliquid, perspiciatis ullam nostrum! Alias libero harum pariatur vero sint, ullam beatae voluptates optio quo dolorum vitae quisquam laboriosam, fuga magnam fugiat illo laudantium quos eligendi veniam culpa repudiandae. Deserunt blanditiis voluptatum quam et suscipit. Quas accusantium, aperiam in, quibusdam quos eius beatae voluptates non ipsam voluptatibus optio fugit soluta ad fuga veniam repudiandae sapiente eum atque ipsum eaque? Architecto rerum tempore, asperiores amet totam doloremque pariatur dignissimos iure aut fugit consectetur. Quis earum deleniti dignissimos, non laudantium officiis magni natus, commodi provident doloribus laboriosam eius nihil dolore a autem libero odit distinctio. Iste minus, animi hic ducimus aperiam molestias quas voluptates, voluptatibus pariatur suscipit, voluptatem vitae sequi illum eius laboriosam dolorem. Consectetur harum voluptatibus soluta quas quae dolorum.
        </div>

      </main>
    </>



  )
}

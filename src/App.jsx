import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";
import Skill from "./Component/Skill/Skill";
import Education from "./Component/Education/Education";
import Experience from "./Component/Experience/Experience";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import PointerEffect from "./Component/PointerEffect/PointerEffect";

function App() {
  return (
    <div className="bg-black min-h-screen overflow-hidden relative">

      <PointerEffect />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Home />
          <About />
          <Experience />
          <Skill />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>

    </div>
  )

}

export default App;
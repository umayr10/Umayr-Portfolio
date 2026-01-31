import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Navigation from "./Navigation";
import Techstack from "./Techstack";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import FloatingLines from "./FloatingLines";

function App() {
  return (
    <div className="bg-black">
      <Navigation />
      <div className="flex flex-col justify-center items-center relative">
        <div style={{ width: "100%", height: "800px", position: "relative" }}>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={5}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
        <div className="absolute">
          <Hero />
          <Techstack />
        </div>
      </div>
      <Projects />
      <Experience />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

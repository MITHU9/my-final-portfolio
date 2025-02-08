import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";
import { useScroll } from "framer-motion";

function App() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="h-[300vh]">
      <Navbar />
      <Hero scrollYProgress={scrollYProgress} />
      <About scrollY={scrollYProgress} />
      <Skills scrollYProgress={scrollYProgress} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

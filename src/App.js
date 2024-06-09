import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div
      className="bg-center bg-custom-bg bg-contain">
      <main className="flex flex-col">
        <Navbar />
        <div className="font-serif" id="about">
          <About />
        </div>
        <div id="skills" className="font-serif">
          <Skills />
        </div>
      </main>
    </div>
  );
}

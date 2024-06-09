import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div
      className="bg-contain bg-center bg-custom-bg">
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

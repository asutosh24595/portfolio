import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div
      className="bg-cover bg-center bg-custom-bg">
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow font-serif" id="about">
          <About />
        </div>
        <div id="skills" className="mt-20 font-serif">
          <Skills />
        </div>
      </main>
    </div>
  );
}

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Models from "./components/Models";
import Departments from "./components/Departments";
import Pillars from "./components/Pillars";

export default function App() {
  return (
    <main className="overflow-y-auto overflow-x-hidden font-manrope bg-black relative">
      <Hero />
      <Stats />
      <Models />
      <Departments />
      <Pillars />
    </main>
  );
}

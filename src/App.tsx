import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Models from "./components/Models";
import Departments from "./components/Departments";
import Features from "./components/Features";
import Pillars from "./components/Pillars";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="overflow-y-auto overflow-x-hidden font-manrope bg-black relative">
      <Hero />
      <Stats />
      <Models />
      <Departments />
      <Features />
      <Pillars />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

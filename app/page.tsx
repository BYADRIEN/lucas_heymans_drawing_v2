import Slider from "../components/sections/slider/page";
import About from "../components/sections/aboutme/page";
import Dessins from "../components/sections/dessins/page";
import Tarifs from "../components/sections/tarifs/page";

export default function HomePage() {
  return (
    <>
      <Slider />
      <About />
      <Dessins />
      <Tarifs />
    </>
  );
}
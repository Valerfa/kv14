import { Hero2 } from "@/components/sections/Hero2";
import { About } from "@/components/sections/About";
import { Rent } from "@/components/sections/Rent";
import { FavArea } from "@/components/sections/FavArea";
import { ShotInStudio } from "@/components/sections/ShotInStudio";
import { Events } from "../components/sections/Events";
import { Rules } from "@/components/sections/Rules";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main className="-mt-20 flex-1">
        <Hero2 />
        <About />
        <Rent />
        <FavArea />
        <Events />
        <Rules />
        <ShotInStudio />
      </main>
      <Footer />
    </>
  );
}

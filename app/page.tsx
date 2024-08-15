import Preloader from "@/components/other/preloader";
import Hero from "@/components/sections/hero";
import Highlight from "@/components/sections/highlight";
import Slideshow from "@/components/sections/slideshow";

export default function Home() {
  return (
    <main className="w-full min-h-svh bg-white text-black mx-auto">
      {/* <Preloader /> */}
      <div className="h-svh flex items-center justify-center">
        <Hero />
      </div>
      <Highlight />
      <Slideshow />
    </main>
  );
}

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Architecture } from "@/components/sections/architecture";
import { DeveloperExperience } from "@/components/sections/developer-experience";
import { Features } from "@/components/sections/features";
import { Roadmap } from "@/components/sections/roadmap";
import { Footer } from "@/components/sections/footer";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Architecture />

        <DeveloperExperience />

        <Features />

        <Roadmap />
      </main>


      <Footer />
    </>
  );
}
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OpenSource } from "@/components/OpenSource";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <OpenSource />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

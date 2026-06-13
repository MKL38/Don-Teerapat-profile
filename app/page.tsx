import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import PullQuote from "@/components/PullQuote";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <PullQuote />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

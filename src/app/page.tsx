import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import NavBar from "@/components/ui/Nav";
import ProjectsSection from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className='flex flex-col'>
        <NavBar />
        <Hero />
        <AboutMe />
        <ProjectsSection />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

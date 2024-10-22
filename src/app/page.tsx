import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import NavBar from "@/components/ui/Nav";
import ProjectsSection from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className='flex flex-col'>
        <NavBar />
        <Hero />
        <AboutMe />
        <ProjectsSection />
        <div className='flex items-center justify-center h-screen'>
          <p className='text-[#c9c9c9] text-center'>
            Website is Under Construction.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

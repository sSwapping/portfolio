import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/ui/Nav";

export default function Home() {
  return (
    <>
      <div className='flex flex-col'>
        <NavBar />
        <Hero />
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

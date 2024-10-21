import FloatingIcons from "./ui/FloatingIcons";
import { User } from "lucide-react";

const Hero = () => {
  return (
    <div className='flex flex-col justify-center h-screen gap-4 mx-auto size-screen'>
      <FloatingIcons />
      <div className='relative z-10 flex flex-col items-center justify-center gap-4 px-4 mx-auto max-w-7xl'>
        <div className='flex flex-col items-center justify-center'>
          <span className='text-2xl font-medium tracking-tighter text-center md:text-3xl text-neutral-50/80'>
            Hello, I'm
          </span>
          <h1 className='my-2 text-4xl font-bold tracking-tighter text-center md:text-5xl xl:text-6xl'>
            <span className='font-bold text-[#2778ab]'>Jeffrey Dohmen</span>
          </h1>
        </div>
        <div>
          <div className='max-w-lg font-light tracking-tight text-center md:text-lg text-neutral-50/90'>
            Fullstack Developer, transforming ideas into modern websites.
          </div>
        </div>
        <div>
          <a
            href='#about'
            className='inline-flex items-center font-semibold p-2 rounded-lg justify-center gap-1.5 hover:bg-neutral-300 bg-neutral-50 text-neutral-950'
          >
            <User />
            <span>About Me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

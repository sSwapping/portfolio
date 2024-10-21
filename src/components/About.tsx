import Photo from "@/assets/images/introductionHero.png";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";

const AboutMe = () => {
  return (
    <div id='about' className='container px-4 py-8 mx-auto'>
      <h1 className='mb-8 text-4xl font-bold text-center'>About Me</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {/* Main Profile Card */}
        <div className='p-6 border rounded-lg shadow-sm md:col-span-2 bg-neutral-900/80/80 text-neutral-50 border-neutral-800/50 shadow-neutral-800/50'>
          <Image
            src={Photo}
            alt='Profile Picture'
            className='w-24 h-24 mx-auto mb-4 rounded-full'
          />
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-xl font-semibold text-center text-[#2778ab]'>
              Jeffrey Dohmen
            </h2>
            <p className='mt-2 text-center'>
              Full Stack Developer | Tech Enthusiast | 23 Years Old
            </p>
            <div className='inline-flex gap-2'>
              <MapPin />
              <p>
                <LinkPreview
                  url='https://www.google.com/maps/@50.9199082,6.0787182,10z?hl=nl&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D'
                  imageSrc='/images/googlemaps.png'
                  isStatic
                  className='font-bold'
                >
                  Heerlen, The Netherlands{" "}
                </LinkPreview>
              </p>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div className='p-6 border rounded-lg shadow-lg bg-neutral-200 text-neutral-950 border-neutral-800/50 shadow-neutral-800/50'>
          <h3 className='mb-3 text-xl font-semibold'>Skills</h3>
          <ul className='list-disc list-inside'>
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Tailwind CSS</li>
            <li>LUA</li>
          </ul>
        </div>

        {/* Experience Card */}
        <div className='p-6 border rounded-lg shadow-lg md:col-span-2 bg-neutral-200 text-neutral-950 border-neutral-800/50 shadow-neutral-800/50'>
          <h3 className='mb-3 text-xl font-semibold'>More Information</h3>
          <div className='overflow-auto'>
            <p>
              I'm a <strong>fullstack developer</strong> who began coding custom
              scripts for FiveM, a multiplayer modification framework for GTA V,
              in 2023. Recently, I’ve started integrating my web development
              skills into FiveM scripts to enhance in-game features. With a
              strong focus on creating seamless, user-friendly applications, and
              expertise in <strong>React and TypeScript</strong>, I'm dedicated
              to delivering exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className='p-6 border rounded-lg shadow-lg bg-neutral-200 text-neutral-950 border-neutral-800/50 shadow-neutral-800/50'>
          <h3 className='mb-3 text-xl font-semibold'>Experience</h3>
          <div className='space-y-2'>
            <p>
              <strong>Developer (Front End / LUA) </strong> - Markhor Scripts
              (2024-Present)
            </p>
          </div>
        </div>

        {/* Interests Card */}
        <div className='p-6 border rounded-lg shadow-lg bg-neutral-200 text-neutral-950 border-neutral-800/50 shadow-neutral-800/50'>
          <h3 className='mb-3 text-xl font-semibold'>Interests</h3>
          <ul className='list-disc list-inside'>
            <li>Studying</li>
            <li>Reading</li>
            <li>Gaming</li>
            <li>Working out</li>
          </ul>
        </div>

        {/* Social Links Card */}
        <div className='p-6 border rounded-lg shadow-sm md:col-span-2 bg-neutral-900/80/80 text-neutral-50 border-neutral-800/50 shadow-neutral-800/50'>
          <h3 className='mb-3 text-xl font-semibold'>Social Media</h3>
          <div className='flex justify-center space-x-4'>
            <a href='#' className='transition-colors hover:text-neutral-50/70'>
              <Github className='w-8 h-8' />
            </a>
            <a href='#' className='transition-colors hover:text-neutral-50/70'>
              <Linkedin className='w-8 h-8' />
            </a>
            <a href='#' className='transition-colors hover:text-neutral-50/70'>
              <Mail className='w-8 h-8' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

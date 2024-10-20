import { FooterStore } from "@/stores/FooterLinks";
import { ArrowUpRightIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-[#2778ab]/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10' />
      <div className='container'>
        <div className='flex flex-col items-center gap-8 py-6 text-sm border-t md:flex-row md:justify-between text-neutral-50 border-white/15'>
          <div>&copy; 2024. All rights reserved.</div>
          <nav className='flex flex-col gap-8 md:flex-row'>
            {FooterStore.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className='inline-flex items-center gap-1.5 hover:text-neutral-300'
              >
                <ArrowUpRightIcon className='size-4' />
                <span className='font-semibold'>{link.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

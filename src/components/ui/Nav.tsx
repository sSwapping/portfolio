const NavBar = () => {
  return (
    <div className='sticky z-50 flex items-center justify-center top-3'>
      <nav className='flex gap-1 p-0.5 border border-neutral-800/50 bg-neutral-900/70 rounded-lg backdrop-blur-sm'>
        <a href='#' className='nav-item'>
          Home
        </a>
        <a href='#about' className='transition duration-300 nav-item'>
          About Me
        </a>
        <a href='#projects' className='transition duration-300 nav-item'>
          Projects
        </a>
        <a
          href='#contact'
          className='hover:bg-neutral-300 transition duration-400 bg-neutral-50 text-neutral-950 px-4 py-1.5 rounded-lg text-sm font-semibold'
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default NavBar;

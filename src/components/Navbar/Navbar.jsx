const Navbar = () => {
  return (
    <ul className="fixed top-[50%] translate-y-[-50%] left-12  flex flex-col justify-center items-start gap-6 text-zinc-300">
      <li>
        <a href="#about" className="main-menu-item flex justify-center items-center gap-2">
          <div className="main-menu-item-row w-[20px] h-[2px] bg-zinc-300"></div>
          <span>ABOUT</span>
        </a>
      </li>

      <li>
        <a href="#experience" className="main-menu-item flex justify-center items-center gap-2">
          <div className="main-menu-item-row w-[20px] h-[2px] bg-zinc-300"></div>
          <span>EXPERIENCE</span>
        </a>
      </li>

      <li>
        <a href="#skills" className="main-menu-item flex justify-center items-center gap-2">
          <div className="main-menu-item-row w-[20px] h-[2px] bg-zinc-300"></div>
          <span>SKILLS</span>
        </a>
      </li>

      <li className="main-menu-item flex justify-center items-center gap-2">
        <a href="#work" className="main-menu-item flex justify-center items-center gap-2">
          <div className="main-menu-item-row w-[20px] h-[2px] bg-zinc-300"></div>
          <span>WORK</span>
        </a>
      </li>
      <li>
        <a href="#contact" className="main-menu-item flex justify-center items-center gap-2">
          <div className="main-menu-item-row w-[20px] h-[2px] bg-zinc-300"></div>
          <span>CONTACT</span>
        </a>
      </li>
    </ul>
  );
};

export default Navbar;

import { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import './Navbar.css'
import useWindowSize from "../../hooks/useWindowSize";


const Navbar = () => {

  const appContext = useContext(AppContext);
  const windowSize = useWindowSize();

  const aboutRef = useRef();

  if(windowSize.width >= 1000)
    return <ul className="text-sm fixed top-[50%] translate-y-[-50%] left-12  flex flex-col justify-center items-start gap-6 text-zinc-300">
      <li>
        <a href="#about" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("ABOUT")}>
          <div className={`main-menu-item-row w-[15px] h-[2px] bg-zinc-300
            ${appContext.activeMenuItem == "ABOUT" ? 'w-[30px]' : null}
            
          
            
            
            `} ref={aboutRef}
            


            ></div>
          <span className={`${appContext.activeMenuItem == "ABOUT" ? 'text-teal-600' : null}`}>ABOUT</span>
        </a>
      </li>

      <li>
        <a href="#experience" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("EXPERIENCE")}>
          <div className={`main-menu-item-row w-[15px] h-[2px] bg-zinc-300 ${appContext.activeMenuItem == "EXPERIENCE" ? 'w-[30px] text-teal-600' : null}`}></div>
          <span className={`${appContext.activeMenuItem == "EXPERIENCE" ? 'text-teal-600' : null}`}>EXPERIENCE</span>
        </a>
      </li>

      <li>
        <a href="#education" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("EDUCATION")}>
          <div className={`main-menu-item-row w-[15px] h-[2px] bg-zinc-300 ${appContext.activeMenuItem == "EDUCATION" ? 'w-[30px] text-teal-600' : null}`}></div>
          <span className={`${appContext.activeMenuItem == "EDUCATION" ? 'text-teal-600' : null}`}>EDUCATION</span>
        </a>
      </li>

      <li>
        <a href="#skills" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("SKILLS")}>
          <div className={`main-menu-item-row w-[15px] h-[2px] bg-zinc-300 ${appContext.activeMenuItem == "SKILLS" ? 'w-[30px] text-teal-600' : null}`}></div>
          <span className={`${appContext.activeMenuItem == "SKILLS" ? 'text-teal-600' : null}`}>SKILLS</span>
        </a>
      </li>

      <li className="main-menu-item flex justify-center items-center gap-2">
        <a href="#work" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("WORK")}>
          <div className={`main-menu-item-row w-[15px] h-[2px] bg-zinc-300 ${appContext.activeMenuItem == "WORK" ? 'w-[30px] text-teal-600' : null}`}></div>
          <span className={`${appContext.activeMenuItem == "WORK" ? 'text-teal-600' : null}`}>WORK</span>
        </a>
      </li>
      
      <li>
        <a href="#contact" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("CONTACT")}>
          <div className={`main-menu-item-row w-[15px] h-[2px] bg-zinc-300 ${appContext.activeMenuItem == "CONTACT" ? 'w-[30px] text-teal-600' : null}`}></div>
          <span className={`${appContext.activeMenuItem == "CONTACT" ? 'text-teal-600' : null}`}>CONTACT</span>
        </a>
      </li>
    </ul>

  
};

export default Navbar;

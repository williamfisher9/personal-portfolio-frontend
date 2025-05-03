import "./Header.css";
import useWindowSize from "../../hooks/useWindowSize";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Blinker from "../Blinker/Blinker";

const Header = () => {
  const appContext = useContext(AppContext);
  const windowSize = useWindowSize();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full flex justify-between items-center py-2 px-6">
      <a href="/">
        <img src="logo.png" className="size-16" alt="logo-img" />
      </a>


      {
          windowSize.width >= 1000 && <Blinker />
        }

      {
        windowSize.width < 1000 && windowSize.width >= 700 && <ul className="text-sm flex justify-center items-center gap-3 text-zinc-400">
        <li>
          <a href="#about" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("ABOUT")}>
            
            <span>ABOUT</span>
          </a>
        </li>
  
        <li>
          <a href="#experience" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("EXPERIENCE")}>
            
            <span>EXPERIENCE</span>
          </a>
        </li>
  
        <li>
          <a href="#education" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("EDUCATION")}>
            
            <span>EDUCATION</span>
          </a>
        </li>
  
        
  
        <li>
          <a href="#skills" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("SKILLS")}>
            
            <span>SKILLS</span>
          </a>
        </li>
  
        <li className="main-menu-item flex justify-center items-center gap-2">
          <a href="#work" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("WORK")}>
            
            <span>WORK</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="main-menu-item flex justify-center items-center gap-2" onClick={() => appContext.updateActiveMenuItem("CONTACT")}>
            <span>CONTACT</span>
          </a>
        </li>
      </ul>
      }





{
          windowSize.width < 700 && <span className="material-symbols-rounded text-teal-600 
          bg-transparent cursor-pointer hover:bg-teal-600/10 p-1 rounded-sm"
          onClick={() => setShowMenu(!showMenu)}>
          menu
        </span>
        }














        {
          <div className={`fixed h-full top-0 transition-all duration-300 ${showMenu ? 'right-0 w-[300px]' : 'right-[-300px] w-0'} bg-teal-600 z-50`}>
            <div className="w-full relative">
            <span className="material-symbols-rounded text-black absolute right-8 top-8 text-2xl cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}>
              close
           </span>




           <ul className="text-lg flex  flex-col justify-center items-center gap-3 text-zinc-900 pt-25">
        <li>
          <a href="#about" className="main-menu-item flex justify-center items-center gap-2" onClick={() => {
            appContext.updateActiveMenuItem("ABOUT");
            setShowMenu(!showMenu);
          }}>
            
            <span>ABOUT</span>
          </a>
        </li>
  
        <li>
          <a href="#experience" className="main-menu-item flex justify-center items-center gap-2" onClick={() => {
            appContext.updateActiveMenuItem("EXPERIENCE");
            setShowMenu(!showMenu);
          }}>
            
            <span>EXPERIENCE</span>
          </a>
        </li>
  
        <li>
          <a href="#education" className="main-menu-item flex justify-center items-center gap-2" onClick={() => {
            appContext.updateActiveMenuItem("EDUCATION");
            setShowMenu(!showMenu);
          }}>
            
            <span>EDUCATION</span>
          </a>
        </li>
  
        
  
        <li>
          <a href="#skills" className="main-menu-item flex justify-center items-center gap-2" onClick={() => {
            appContext.updateActiveMenuItem("SKILLS");
            setShowMenu(!showMenu);
          }}>
            
            <span>SKILLS</span>
          </a>
        </li>
  
        <li className="main-menu-item flex justify-center items-center gap-2">
          <a href="#work" className="main-menu-item flex justify-center items-center gap-2" onClick={() => {
            appContext.updateActiveMenuItem("WORK");
            setShowMenu(!showMenu);
          }}>
            
            <span>WORK</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="main-menu-item flex justify-center items-center gap-2" onClick={() => {
            appContext.updateActiveMenuItem("CONTACT");
            setShowMenu(!showMenu);
          }}>
            <span>CONTACT</span>
          </a>
        </li>
      </ul>
            </div>

            
          </div>
        }

















    </div>
  );
};

export default Header;

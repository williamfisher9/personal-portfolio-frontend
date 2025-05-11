import { FaGithub } from "react-icons/fa";
import Header from "../Header/Header";
import "./Layout.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Work from "../Work/Work";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import useWindowSize from "../../hooks/useWindowSize";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constants/Constants";

const Layout = () => {

const windowSize = useWindowSize()

useEffect(() => {
  axios.get(`${BACKEND_URL}/api/v1/accesslog/new`)
  .then((res) => {

  })
  .catch((err) => {
    console.log("error: " + err.status)
  })
})

  return (
    <div className="full-layout" id="scrollspy-scrollable-parent-2">
      <Header />

      <div className="w-full min-[1000px]:px-[250px] max-[1000px]:px-[100px] max-[640px]:px-8 py-5">
        <Hero />
        <About />
        <Experience />
        <Education />
        
        <Skills />
        <Work />
        <Contact />

        <div className="mt-16 text-center text-neutral-300">
          <p className="text-md text-neutral-300/40">
            Designed & Built by William Fisher
          </p>
        </div>
      </div>

      <Navbar />

      {
        windowSize.width > 640 && <>
        <div className="fixed bottom-0 left-12 flex justify-center items-center flex-col gap-3 w-1">
        <div className="">
          <a href="https://github.com/williamfisher9" target="_blank">
            <FaGithub className="text-zinc-300 
            hover:outline hover:outline-teal-500 
            hover:rounded-full hover:outline-offset-2 
            hover:text-teal-500 transition cursor-pointer
            text-2xl" />
          </a>
        </div>
        <div className={`w-[2px] ${windowSize.height < 600 ? 'h-[35px]' : 'h-[100px]'}  bg-zinc-300`}></div>
      </div>

      <div className="fixed bottom-0 right-12 flex justify-center items-center flex-col gap-3 w-1">
        <div className="text-zinc-300 rotate-90 translate-y-[-105px] hover:translate-y-[-110px] hover:text-teal-500 transition cursor-pointer">
          



          <a
          href="#contact"
            className={``}
          >
            william.a.fisher@outlook.com
          </a>



        </div>
        <div className={`w-[2px] ${windowSize.height < 600 ? 'h-[35px]' : 'h-[100px]'}  bg-zinc-300`}></div>
      </div>
      </>
      }


    </div>
  );
};

export default Layout;

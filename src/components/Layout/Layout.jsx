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

const Layout = () => {
  return (
    <div className="full-layout">
      <Header />

      <div className="w-full px-[250px] py-5">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />

        <div className="mt-16 text-center text-neutral-300">
          <p className="text-md text-neutral-300/20">
            Personal Portfolio v2.0.1 - Will Tech Booth
          </p>
        </div>
      </div>

      <Navbar />

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
        <div className="w-[2px] h-[100px] bg-zinc-300"></div>
      </div>

      <div className="fixed bottom-0 right-12 flex justify-center items-center flex-col gap-3 w-1">
        <div className="text-zinc-300 rotate-90 translate-y-[-90px] hover:translate-y-[-93px] hover:text-teal-500 transition cursor-pointer">
          <p className="">william.a.fisher@outlook.com</p>
        </div>
        <div className="w-[2px] h-[100px] bg-zinc-300"></div>
      </div>
    </div>
  );
};

export default Layout;

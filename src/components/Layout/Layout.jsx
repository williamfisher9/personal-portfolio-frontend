import { FaGithub } from "react-icons/fa";
import Header from "../Header/Header";
import './Layout.css'
import { useState } from "react";
import * as myConstants from '../../constants/Constants'
import axios from "axios";

const Layout = () => {
    const [activeTab, setActiveTab] = useState("ALL");
  const [listType, setListType] = useState("BOXES");

  const handleTabClick = (itemName) => {
    setActiveTab(itemName);
  };



  const [mail, setMail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({nameError: "", mailError: "", messageError: "", responseError: ""})

  const [isSendingEmail, setIsSendingEmail] = useState(false)

  const handleNameChange = () => {
    setName(event.target.value)
  }

  const handleMailChange = () => {
    setMail(event.target.value)
  }

  const handleMessageChange = () => {
    setMessage(event.target.value)
  }


  const handleEnterButton = (event) => {
    if(event.key == "Enter")
      submitEmail()
  }

  const submitEmail = () => {
    let hasErrors = false

    let newErrors = {nameError: "", mailError: "", messageError: ""}

    if(name.trim() == ""){
      hasErrors = true;
      newErrors.nameError = "Name field is required"
    }

    if(mail.trim() == ""){
      hasErrors = true;
      newErrors.mailError = "Email address field is required"
    }

    if(message.trim() == ""){
      hasErrors = true;
      newErrors.messageError = "Message field is required"
    }

    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(mail.trim() != "" && !re.test(mail)){
      hasErrors = true;
      newErrors.mailError = "Improper email address format"
    }

    if(!hasErrors){
      setIsSendingEmail(true)
      axios.post(`${myConstants.BACKEND_URL}/api/v1/mail/send`, {name, mail, message})
    .then((res) => {
      if(res.status==200){
        setName("")
        setMessage("")
        setMail("")
        setErrors({nameError: "", mailError: "", messageError: "", responseError: ""})
        setIsSendingEmail(false)
      }
    })
    .catch((err) => {
      console.log(err.message)
      setErrors({nameError: "", mailError: "", messageError: "", responseError: err.message})
      setIsSendingEmail(false)
    })
    } else {
      setErrors(newErrors)
    }
  }


  return (
    <div className="full-layout">
      <Header />

      <div className="w-full px-[250px] py-5">
      <div
      className="w-full
      flex 
      justify-between 
      max-[1000px]:gap-2 
      max-[1000px]:flex-col 
      max-[1000px]:items-center 
      max-[1000px]:justify-center"
    >
      <div
        className="w-[50%] flex justify-center items-center
                      max-[1000px]:w-full"
      >
        <div className="flex flex-col justify-center gap-3">
          <div className="max-[500px]:text-xs">
            <div className="flex gap-2 items-center mb-4">
              <img
                src="profile.jpg"
                className="size-8 rounded-md"
                alt="profile-image"
              />
              <div className="size-3 rounded-full relative">
                <div className="absolute size-full bg-green-500 animate-ping rounded-full opacity-85"></div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto size-2 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-neutral-400">Avilable for work</p>
            </div>

            <p className="text-2xl font-bold my-2 text-neutral-300">William Fisher</p>
            <p className="text-neutral-400">Software Implementation and Support Engineer</p>
            <p className="text-neutral-400">10+ Years of Experiece</p>
            <p className="text-neutral-400">Full-Stack Developer</p>
          </div>
          <div className="flex gap-4 max-md:flex-col">
            <a
            href="#contact"
              className={`flex gap-1 max-md:items-center  max-md:justify-center text-neutral-300  border border-neutral-300  rounded-xs px-2 py-1`}
            >
              Download Resume{" "}
              <span className="material-symbols-rounded">download</span>
            </a>
            <a
              href="#contact"
              className={`flex gap-1 max-md:items-center  max-md:justify-center text-neutral-300 border border-neutral-300 rounded-xs px-2 py-1`}
            >
              Contact Me{" "}
              <span className="material-symbols-rounded">contact_mail</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-[50%] max-[1000px]:flex max-[1000px]:items-center 
        max-[1000px]:justify-center max-[1000px]:w-full"
      >
        <img
          src="profile.jpg"
          className="size-96 rounded-xl
          max-[500px]:size-64"
          alt="profile-image"
        />
      </div>
    </div>













    <div>
      <div className="mt-16 text-center">
        <a id="about" className="text-3xl text-neutral-300 font-bold">
          ABOUT ME
        </a>
      </div>

      
        <p className="text-neutral-300 py-5">
          Over 10 years of experience as a System Implementation and Support Engineer Dedicated Full Stack Developer with [number of years] years of
          experience in [specific programming languages or frameworks]. Seeking
          to leverage my expertise in [specific areas of full stack development]
          to drive [specific outcomes] at [Company Name]. Committed to
          delivering high-quality results in fast-paced environments, and eager
          to contribute innovative solutions that align with the company's
          technological vision.
        </p>
    </div>











    <div>
      <div className="mt-16 text-center">
        <a id="skills" className="text-[40px] font-bold text-neutral-300">
          MY TOOLS
        </a>
        <p className="text-neutral-300">
          Essential tools I use to build exceptional high-performing websites
          and applications.
        </p>
      </div>

      <div className="flex justify-center gap-36 items-center mt-8 max-[1000px]:gap-2 max-[1000px]:flex-col">
        <div className="flex gap-4 justify-center items-center max-[1000px]:text-xs max-[1000px]:gap-0">
          <div
            className={`flex items-center justify-center px-2 h-10  cursor-pointer border-b-4 text-neutral-300`}
            onClick={() => handleTabClick("ALL")}
          >
            ALL
          </div>
          <div
            className={`flex items-center justify-center px-2 h-10  cursor-pointer border-b-4 text-neutral-300`}
            onClick={() => handleTabClick("FRONTEND")}
          >
            FRONTEND
          </div>
          <div
            className={`flex items-center justify-center px-2 h-10  cursor-pointer border-b-4 text-neutral-300`}
            onClick={() => handleTabClick("BACKEND")}
          >
            BACKEND
          </div>
          <div
            className={`flex items-center justify-center px-2 h-10  cursor-pointer border-b-4 text-neutral-300`}
            onClick={() => handleTabClick("INFRASTRUCTURE")}
          >
            INFRASTRUCTURE
          </div>
          <div
            className={`flex items-center justify-center px-2 h-10  cursor-pointer border-b-4 text-neutral-300`}
            onClick={() => handleTabClick("UI/UX")}
          >
            UI/UX
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <span
            className={`text-neutral-300 material-symbols-rounded cursor-pointer hover:scale-125
                 transition duration-300 max-[1000px]:hover:scale-100 border-b-4`}
            onClick={() => setListType("BOXES")}
          >
            apps
          </span>
          <span
            className={`text-neutral-300 material-symbols-rounded cursor-pointer hover:scale-125 
                transition duration-300 max-[1000px]:hover:scale-100 border-b-4`}
            onClick={() => setListType("LIST")}
          >
            list
          </span>
        </div>
      </div>

      {listType == "BOXES" ? (
        <div className="px-12 py-4 grid gap-4 place-items-center grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] transition-all duration-400">
          {
          myConstants.SKILLS_ITEMS
            .filter(
              (item) => activeTab == "ALL" || item.skill_type == activeTab
            )
            .sort((a, b) => a.skill_name.localeCompare(b.skill_name))
            .map((item) => 
                {
                    return (
                        <div className={`w-48 h-16 border border-zinc-400 rounded-md flex gap-3 items-center px-2 
                          hover:scale-105 transition duration-500 hover:transition hover:duration-500 
                          select-none
                          hover:bg-zinc-800 hover:shadow-[2px_2px_4px_4px_#6fb8a7,-2px_-2px_4px_4px_#6fb8a7]`} key={item.skill_name}>
                          <img
                            src={item.icon_name}
                            className="size-10"
                            alt={item.icon_name}
                          />
                          <div className="flex flex-col">
                            <span className="text-[14px] text-neutral-300">{item.skill_name}</span>
                            <span className="text-[10px] text-neutral-300">
                              {item.skill_type}
                            </span>
                          </div>
                        </div>
                        
                      );
                })
            }
        </div>
      ) : (
        
        
        
        
        <div className="px-12 py-4 grid gap-4 place-items-center grid-cols-3 max-[1300px]:grid-cols-2 max-[700px]:grid-cols-1">




          {myConstants.SKILLS_ITEMS
            .filter(
              (item) => activeTab == "ALL" || item.skill_type == activeTab
            )
            .sort((a, b) => a.skill_name.localeCompare(b.skill_name))
            .map((item) => {
              return (
                <div 
                className={`w-full flex gap-2 items-center h-16 border border-zinc-500 rounded-md px-2
                  hover:scale-105 transition duration-500 hover:transition hover:duration-500 
                  select-none
                  hover:bg-zinc-800 hover:shadow-[2px_2px_4px_4px_#6fb8a7,-2px_-2px_4px_4px_#6fb8a7]`} key={item.skill_name}
                  >
                  <div className="w-[12%]">
                    <img
                      src={item.icon_name}
                      className="size-10"
                      alt={item.icon_name}
                    />
                  </div>
                  <div className="w-[30%] flex flex-col">
                    <span className="text-[14px] text-neutral-300">{item.skill_name}</span>
                    <span className="text-[10px] text-neutral-300">
                      {item.skill_type}
                    </span>
                  </div>

                  <div className={`w-[45%] flex h-2 border-2 border-neutral-500 rounded-sm`}>
                    <div
                      className={`h-full bg-neutral-200`}
                      style={{ width: `${item.strength}` }}
                    ></div>
                  </div>

                  <div className="w-[15%]">
                    <span className={`text-neutral-300`}>{item.strength}</span>
                  </div>
                </div>
              );
            })}





        </div>
      )}
    </div>















    <div className="">

<div className="mt-16 text-center text-neutral-300">
  <a id="contact" className="text-[40px] font-bold">
    CONTACT ME
  </a>
  <p className="text-xl text-neutral-300">
      Contact me today to collaborate and discuss amazing projects and ideas
    </p>
</div>

<div className="flex max-[1000px]:flex-col justify-around items-center max-[1000px]:gap-8 mt-4">

  <div className="contact-form flex flex-col w-[50%] max-[1000px]:w-[70%] gap-4">
    <div className="flex flex-col">
    <input
      type="text"
      placeholder="name"
      className={`text-neutral-300 h-10 border-none outline-none rounded-md pl-2 placeholder:uppercase placeholder:text-neutral-300/40 bg-zinc-200/15`}
              onChange={handleNameChange}
              value={name}
              onKeyDown={handleEnterButton}
    />
    <label className="text-red-500">{errors.nameError}</label>
    </div>

    <div className="flex flex-col">
    <input
      type="text"
      placeholder="email"
      className={`text-neutral-300 h-10 border-none outline-none rounded-md pl-2 placeholder:uppercase placeholder:text-neutral-300/40 bg-zinc-200/15`}
      onChange={handleMailChange}
      value={mail}
      onKeyDown={handleEnterButton}
    />
    <label className="text-red-500">{errors.mailError}</label>
    </div>

    <div className="flex flex-col">
    <textarea
      rows="5"
      cols="50"
      placeholder="message"
      className={`text-neutral-300 h-10 border-none outline-none rounded-md pl-2 py-2 placeholder:uppercase placeholder:text-neutral-300/40 bg-zinc-200/15`}
      onChange={handleMessageChange}
      value={message}
      onKeyDown={handleEnterButton}
    />
    <label className="text-red-500">{errors.messageError}</label>
    </div>


      <button disabled={isSendingEmail} className={`disabled:bg-gray-400 disabled:cursor-default flex 
      border border-neutral-300 text-neutral-300 cursor-pointer
        items-center justify-center gap-2 px-4 py-2 uppercase`} onClick={submitEmail}>
         {isSendingEmail ? <><span>SUBMIT</span><span className="material-symbols-rounded animate-spin">sync</span></> : <span>SUBMIT</span>}
      </button>

      <label className="text-red-500 text-center text-lg">{errors.responseError}</label>

  </div>
</div>
</div>






<div className="mt-16 text-center text-neutral-300">
  <p className="text-md text-neutral-300/20">
      Personal Portfolio v2.0.1 - Will Tech Booth
    </p>
</div>







      </div>

      <ul className="fixed top-[50%] translate-y-[-50%] left-12  flex flex-col justify-center items-start gap-6 text-zinc-300">
        <li >
          <a href="#about" className="main-menu-item flex justify-center items-center gap-2">
          <div className="main-menu-item-row w-[20px] h-[2px] bg-zinc-300"></div>
          <span>ABOUT</span>
          </a>
        </li>

        <li className="main-menu-item flex justify-center items-center gap-2">
          <div className="main-menu-item-row w-[20px] h-[2px] bg-zinc-300"></div>
          <span>EXPERIENCE</span>
        </li>

        <li >
            <a href="#skills" className="main-menu-item flex justify-center items-center gap-2">
            <div className="main-menu-item-row w-[20px] h-[2px] bg-zinc-300"></div>
            <span>SKILLS</span>
                </a>

          
        </li>

        <li className="main-menu-item flex justify-center items-center gap-2">
          <div className="main-menu-item-row w-[20px] h-[2px] bg-zinc-300"></div>
          <span>WORK</span>
        </li>
        <li>
          <a href="#contact" className="main-menu-item flex justify-center items-center gap-2">
          <div className="main-menu-item-row w-[20px] h-[2px] bg-zinc-300"></div>
          <span>CONTACT</span>
          </a>
        </li>
      </ul>

      <div className="fixed bottom-0 left-12 flex justify-center items-center flex-col gap-3 w-1">
        <div className="">
          <a href="https://github.com/williamfisher9" target="_blank">
            <FaGithub className="text-zinc-300 hover:outline hover:outline-zinc-300 hover:rounded-full hover:outline-offset-2 text-3xl"/>
          </a>
        </div>
        <div className="w-[2px] h-[100px] bg-zinc-300"></div>
      </div>

      <div className="fixed bottom-0 right-12 flex justify-center items-center flex-col gap-3 w-1">
        <div className="rotate-90 translate-y-[-90px]">
          <p className="text-zinc-300">william.a.fisher@outlook.com</p>
        </div>
        <div className="w-[2px] h-[100px] bg-zinc-300"></div>
      </div>

    


    </div>
  );
};

export default Layout;

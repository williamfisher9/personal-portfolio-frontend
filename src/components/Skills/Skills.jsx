import { useState } from "react";
import * as myConstants from '../../constants/Constants'
import './Skills.css'

const Skills = () => {
    const [activeTab, setActiveTab] = useState("ALL");
      const [listType, setListType] = useState("BOXES");
    
      const handleTabClick = (itemName) => {
        setActiveTab(itemName);
      };


    return <div className="mt-16">
    <div className="text-left mb-4">
            <a id="skills" className="text-3xl max-sm:text-3xl text-teal-600 font-bold">
              SKILLS
            </a>
            <p className="text-neutral-300 py-2">
              Essential tools I use to build exceptional high-performing websites
              and applications.
            </p>
          </div>
    
          <div className="flex justify-center items-center gap-6 max-lg:flex-col max-lg:gap-2">
            <div className="flex justify-center items-center text-xs">
              <div
                className={`flex items-center justify-center px-2 h-7 cursor-pointer text-neutral-300
                  ${activeTab == 'ALL' ? 'bg-teal-600/20 rounded-md' : null}`}
                onClick={() => handleTabClick("ALL")}
              >
                ALL
              </div>
              <div
                className={`flex items-center justify-center px-2 h-7  cursor-pointer text-neutral-300
                  ${activeTab == 'FRONTEND' ? 'bg-teal-600/20 rounded-md' : null}`}
                onClick={() => handleTabClick("FRONTEND")}
              >
                FRONTEND
              </div>
              <div
                className={`flex items-center justify-center px-2 h-7  cursor-pointer text-neutral-300
                  ${activeTab == 'BACKEND' ? 'bg-teal-600/20 rounded-md' : null}`}
                onClick={() => handleTabClick("BACKEND")}
              >
                BACKEND
              </div>
              <div
                className={`flex items-center justify-center px-2 h-7 cursor-pointer text-neutral-300
                  ${activeTab == 'INFRASTRUCTURE' ? 'bg-teal-600/20 rounded-md' : null}`}
                onClick={() => handleTabClick("INFRASTRUCTURE")}
              >
                INFRASTRUCTURE
              </div>
              <div
                className={`flex items-center justify-center px-2 h-7 cursor-pointer text-neutral-300
                  ${activeTab == 'UI/UX' ? 'bg-teal-600/20 rounded-md' : null}`}
                onClick={() => handleTabClick("UI/UX")}
              >
                UI/UX
              </div>
            </div>
    
            <div className="flex gap-4 justify-center items-center">
              <span
                className={`material-symbols-rounded text-neutral-300 cursor-pointer 
                  hover:scale-125 transition duration-300 max-[1000px]:hover:scale-100 p-1
                     ${listType == 'BOXES' ? 'bg-teal-600/20 rounded-md' : null}`}
                onClick={() => setListType("BOXES")}
              >
                apps
              </span>
              {/*<span
                className={`text-neutral-300 material-symbols-rounded cursor-pointer hover:scale-125 
                    transition duration-300 max-[1000px]:hover:scale-100 p-1
                    ${listType == 'LIST' ? 'bg-teal-600/20 rounded-md' : null}`}
                onClick={() => setListType("LIST")}
              >
                list
              </span>*/}
            </div>
          </div>
    
          {listType == "BOXES" ? (
            <div className="p-4 grid gap-4 place-items-center grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
              {
              myConstants.SKILLS_ITEMS
                .filter(
                  (item) => activeTab == "ALL" || item.skill_type == activeTab
                )
                .sort((a, b) => a.skill_name.localeCompare(b.skill_name))
                .map((item) => 
                    {
                        return (
                            <div className={`w-full min-[540px]:w-48 h-16 bg-teal-600/5 rounded-md flex gap-4 items-center px-2
                              hover:scale-105 transition duration-500 hover:transition hover:duration-500 
                              select-none
                              hover:bg-zinc-800 
                              shadow-[0px_0px_2px_1px_rgba(66,_220,_219,_0.5)]
                              hover:shadow-[0px_0px_10px_5px_rgba(66,_220,_219,_0.5)]`} key={item.skill_name}>

                              <img
                                src={item.icon_name}
                                className="size-10 object-contain"
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
          ) : {
            /*
            (
            
            
            
            
            <div className="px-6 py-4 grid gap-4 place-items-center grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">

              {myConstants.SKILLS_ITEMS
                .filter(
                  (item) => activeTab == "ALL" || item.skill_type == activeTab
                )
                .sort((a, b) => a.skill_name.localeCompare(b.skill_name))
                .map((item) => {
                  return (

                    <div className={`w-full flex gap-4 items-center bg-teal-600/5 rounded-md px-2 py-2
                      hover:scale-105 transition duration-500 hover:transition hover:duration-500 
                      select-none
                      hover:bg-zinc-800
                      shadow-[0px_0px_2px_1px_rgba(66,_220,_219,_0.5)]
                      hover:shadow-[0px_0px_10px_5px_rgba(66,_220,_219,_0.5)]`} key={item.skill_name}
                      >
                      <div className="">
                        <img
                          src={item.icon_name}
                          className="size-20 object-contain"
                          alt={item.icon_name}
                        />
                      </div>
                      <div className="w-[100%] flex flex-col gap-1">
                        <span className="text-[14px] text-neutral-300">{item.skill_name}</span>
                        <span className="text-[10px] text-neutral-300">
                          {item.skill_type}
                        </span>

                        <div className="flex justify-start items-center gap-1">
                        <div className={`w-[70%] flex justify-start items-center h-2 border-2 border-neutral-500 rounded-sm`}>
                        <div
                          className={`item-width-${item.strength} h-full bg-neutral-200`}
                          style={{ width: `${item.strength}%` }}
                        ></div>
                        
                      </div>
                      <div className="text-[14px] text-neutral-300">{item.strength}%</div>

                        </div>

                      </div>
    
                      
    
                      
                    </div>
                    
                  );
                })}
    
            </div>
          )
            
            */
          }}
        </div>
}

export default Skills;
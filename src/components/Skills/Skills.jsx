import { useState } from "react";
import * as myConstants from '../../constants/Constants'

const Skills = () => {
    const [activeTab, setActiveTab] = useState("ALL");
      const [listType, setListType] = useState("BOXES");
    
      const handleTabClick = (itemName) => {
        setActiveTab(itemName);
      };


    return <div>
          <div className="mt-16 text-center">
            <a id="skills" className="text-4xl font-bold  text-teal-600">
              MY TOOLS
            </a>
            <p className="text-neutral-300 py-5">
              Essential tools I use to build exceptional high-performing websites
              and applications.
            </p>
          </div>
    
          <div className="flex justify-center gap-36 items-center max-[1000px]:gap-2 max-[1000px]:flex-col">
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
                              hover:bg-zinc-800 
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
          ) : (
            
            
            
            
            <div className="px-12 py-4 grid gap-4 place-items-center grid-cols-3 max-[1300px]:grid-cols-2 max-[700px]:grid-cols-1">

              {myConstants.SKILLS_ITEMS
                .filter(
                  (item) => activeTab == "ALL" || item.skill_type == activeTab
                )
                .sort((a, b) => a.skill_name.localeCompare(b.skill_name))
                .map((item) => {
                  return (
                    <div className={`w-full flex gap-2 items-center h-16 border border-zinc-500 rounded-md px-2
                      hover:scale-105 transition duration-500 hover:transition hover:duration-500 
                      select-none
                      hover:bg-zinc-800 
                      hover:shadow-[0px_0px_10px_5px_rgba(66,_220,_219,_0.5)]`} key={item.skill_name}
                      >
                      <div className="w-[12%]">
                        <img
                          src={item.icon_name}
                          className="size-10 object-contain"
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
}

export default Skills;
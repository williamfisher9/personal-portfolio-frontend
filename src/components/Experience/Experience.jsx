import { useState } from "react";
import './Experience.css'

const Experience = () => {
  const [showFirstDetails, setShowFirstDetails] = useState(false);
  const [showSecondDetails, setShowSecondDetails] = useState(false);
  const [showThirdDetails, setShowThirdDetails] = useState(false);
  const [showFourthDetails, setShowFourthDetails] = useState(false);
  const [showLastDetails, setShowlastDetails] = useState(false);

    return <div className="mt-16">
    <div className="text-center text-neutral-300 mb-2">
      <a id="experience" className="text-3xl max-sm:text-xl text-teal-600 font-bold">
        MY EXPERIENCE
      </a>
    </div>

   




<div className="w-full p-3 rounded-sm relative overflow-hidden bg-teal-600/10 my-2 flex items-center">
    <div className="w-40
        h-13
        rounded-md
        bg-teal-600/30
        absolute
        translate-y-[-50%]
        top-[50%]
        left-[-10px]
        flex justify-center items-center
        max-[700px]:pt-3
        max-[700px]:top-0
        max-[700px]:left-[50%]
        max-[700px]:translate-x-[-50%]
        max-[700px]:translate-y-[-10px]
        max-[700px]:h-15">
        <p className="text-zinc-300 text-sm/16">01/2023 - 03/2025</p>
      </div>

      <div className="max-[700px]:pl-0 pl-42 flex flex-col  gap-2 max-[700px]:justify-center 
      max-[700px]:items-center max-[700px]:w-full max-[700px]:pt-12">
      <p className="text-lg  text-zinc-300">Freelance Web Developer</p>
      <p className="text-md text-teal-600">Amman, Jordan</p>
      <p className="text-md text-teal-600">01/2023 - 03/2025</p>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center" 
      onClick={() => setShowFirstDetails(!showFirstDetails)}>
        more_horiz
        </span>

        {
          showFirstDetails && <div className="text-sm text-zinc-300 w-full">
              <div className="experience-list-item">Designed and built salaries management web apps for small businesses.</div>
              <div className="experience-list-item">Provided on-site support for deployed applications.</div>
          </div>
        }
      </div>
    </div>















    <div className="w-full p-3 rounded-sm relative overflow-hidden bg-teal-600/10 my-2 flex items-center">
    <div className="w-40
        h-13
        rounded-md
        bg-teal-600/30
        absolute
        translate-y-[-50%]
        top-[50%]
        left-[-10px]
        flex justify-center items-center
        max-[700px]:pt-3
        max-[700px]:top-0
        max-[700px]:left-[50%]
        max-[700px]:translate-x-[-50%]
        max-[700px]:translate-y-[-10px]
        max-[700px]:h-15">
        <p className="text-zinc-300 text-sm/16">08/2011 - 12/2022</p>

      </div>

      <div className="max-[700px]:pl-0 pl-42 flex flex-col gap-2 max-[700px]:justify-center max-[700px]:items-center max-[700px]:w-full max-[700px]:pt-12">
      <p className="text-lg  text-zinc-300">ProgressSoft Corporation L.L.C</p>

      <div className="my-2">
      <p className="text-md text-teal-600 text-center text-pretty min-[700px]:text-left min-[700px]:w-[350px] min-[700px]:text-balance">Senior Systems Implementation and Support Engineer</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">San Antonio, Texas</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Remote Work</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">09/2015 - 12/2022</p>
      </div>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowSecondDetails(!showSecondDetails)}>
        more_horiz
        </span>

        {
          showSecondDetails && <div className="text-sm text-zinc-300 w-full">
            <div className="experience-list-item">Participated in requirements gathering and review sessions.</div>
            <div className="experience-list-item">Developed solutions using Java, Spring Boot, and ReactJS.</div>
            <div className="experience-list-item">Provided remote support.</div>
            <div className="experience-list-item">Provided training.</div>
            <div className="experience-list-item">Prepared technical documents of various kinds.</div>
            <div className="experience-list-item">Provided demos to prospect customers.</div>
            <div className="experience-list-item">Deployed applications.</div>
          </div>
        }

      <div className="my-2">
      <p className="text-md text-teal-600 text-center text-pretty min-[700px]:text-left">Systems Engineer</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Muscat, Oman</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">07/2012 - 09/2015</p>
      </div>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowThirdDetails(!showThirdDetails)}>
        more_horiz
        </span>

        {
          showThirdDetails && <div className="text-sm text-zinc-300 w-full">
            <div className="experience-list-item">Worked on online payments systems and cheques clearing systems.</div>
            <div className="experience-list-item">Provided on-site and off-site support.</div>
            <div className="experience-list-item">Provided training.</div>
            <div className="experience-list-item">Prepared technical documents of various kinds.</div>
            <div className="experience-list-item">Provided demos to prospect customers.</div>
            <div className="experience-list-item">Deployed applications.</div>
          </div>
        }

      <div className="my-2">
      <p className="text-md text-teal-600 text-center text-pretty min-[700px]:text-left min-[700px]:w-[350px] min-[700px]:text-balance">Junior Systems Implementation and Support Engineer</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Amman, Jordan</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">12/2011 - 07/2012</p>
      </div>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowFourthDetails(!showFourthDetails)}>
        more_horiz
        </span>

        {
          showFourthDetails && <div className="text-sm text-zinc-300 w-full">
            <div className="experience-list-item">.Net applications deployment and support.</div>
            <div className="experience-list-item">Provided on-site and off-site support for .Net Signature Verification System.</div>
            <div className="experience-list-item">Gained business process understanding of Signature Verification System.</div>
            <div className="experience-list-item">Performed preventive maintenace.</div>
          </div>
        }

      <div className="my-2">
      <p className="text-md text-teal-600 text-center text-pretty min-[700px]:text-left">Internship</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Amman, Jordan</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">08/2011 - 12/2011</p>
      </div>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowlastDetails(!showLastDetails)}>
        more_horiz
        </span>

        {
          showLastDetails && <div className="text-sm text-zinc-300 w-full">
            <div className="experience-list-item">Trained on .Net applications deployment on application servers.</div>
            <div className="experience-list-item">Trained on Jira Help Desk system.</div>
            <div className="experience-list-item">Trained on providing on-site and off-site support.</div>
            <div className="experience-list-item">Trained on performing preventive maintenace.</div>
          </div>
        }
      </div>
    </div>








  </div>
}

export default Experience;
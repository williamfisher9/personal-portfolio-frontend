import { useState } from "react";

const Experience = () => {
  const [showFirstDetails, setShowFirstDetails] = useState(false);
  const [showSecondDetails, setShowSecondDetails] = useState(false);
  const [showLastDetails, setShowlastDetails] = useState(false);

    return <div className="mt-16">
    <div className="text-center text-neutral-300 mb-2">
      <a id="experience" className="text-3xl max-sm:text-xl text-teal-600 font-bold">
        MY EXPERIENCE
      </a>
    </div>

    
{/*

    

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
        <p className="text-zinc-300 text-sm/16">09/2015 - 12/2022</p>

      </div>

      <div className="max-[700px]:pl-0 pl-42 flex flex-col gap-2 max-[700px]:justify-center max-[700px]:items-center max-[700px]:w-full max-[700px]:pt-12">
      <p className="text-lg text-zinc-300">ProgressSoft Corporation L.L.C</p>
      <p className="text-zinc-300 text-pretty text-center" style={{fontSize: "clamp(0.875rem, 0.6463rem + 0.8511vw, 1.125rem)"}}>Senior Systems Implementation and Support Engineer</p>
      <p className="text-md text-teal-600">San Antonio, Texas</p>
      <p className="text-md text-teal-600">Remote Work</p>
      <p className="text-md text-teal-600">09/2015 - 12/2022</p>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowSecondDetails(!showSecondDetails)}>
        more_horiz
        </span>

        {
        showSecondDetails && <ul className="text-sm text-zinc-300 list-none">
  <li className="experience-list-item">Building java applications and tools.</li>
  <li className="experience-list-item">Providing training and apps demos.</li>
  <li className="experience-list-item">Providing support.</li>
  </ul>
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
        <p className="text-zinc-300 text-sm/16">07/2012 - 09/2015</p>

      </div>

      <div className="max-[700px]:pl-0 pl-42 flex flex-col gap-2 max-[700px]:justify-center max-[700px]:items-center max-[700px]:w-full max-[700px]:pt-12">
      <p className="text-lg  text-zinc-300">ProgressSoft Corporation L.L.C</p>
      <p className="text-zinc-300 text-pretty text-center" style={{fontSize: "clamp(0.875rem, 0.6463rem + 0.8511vw, 1.125rem)"}}>Systems Implementation and Support Engineer</p>
      <p className="text-md text-teal-600">Muscat, Oman</p>
      <p className="text-md text-teal-600">07/2012 - 09/2015</p>
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
        <p className="text-zinc-300 text-sm/16">12/2011 - 07/2012</p>

      </div>

      <div className="max-[700px]:pl-0 pl-42 flex flex-col gap-2 max-[700px]:justify-center max-[700px]:items-center max-[700px]:w-full max-[700px]:pt-12">
      <p className="text-lg  text-zinc-300">ProgressSoft Corporation L.L.C</p>
      <p className="text-zinc-300 text-pretty text-center" style={{fontSize: "clamp(0.875rem, 0.6463rem + 0.8511vw, 1.125rem)"}}>Junior Systems Implementation and Support Engineer</p>
      <p className="text-md text-teal-600">Amman, Jordan</p>
      <p className="text-md text-teal-600">12/2011 - 07/2012</p>
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
        <p className="text-zinc-300 text-sm/16">08/2011 - 12/2011</p>

      </div>

      <div className="max-[700px]:pl-0 pl-42 flex flex-col gap-2 max-[700px]:justify-center max-[700px]:items-center max-[700px]:w-full max-[700px]:pt-12">
      <p className="text-lg  text-zinc-300">ProgressSoft Corporation L.L.C</p>
      <p className="text-zinc-300 text-pretty min-[1000px]:text-left text-center" style={{fontSize: "clamp(0.875rem, 0.6463rem + 0.8511vw, 1.125rem)"}}>Internship</p>
      <p className="text-md text-teal-600">Amman, Jordan</p>
      <p className="text-md text-teal-600">08/2011 - 12/2011</p>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowlastDetails(!showLastDetails)}>
        more_horiz
        </span>

        {
        showLastDetails && <ul className="text-sm text-zinc-300 list-none">
  <li className="experience-list-item">Applications deployment on application servers.</li>
  <li className="experience-list-item">Providing onsite and offsite support.</li>
  <li className="experience-list-item">Performing preventative maintenace.</li>
  </ul>
}
      </div>
    </div>

*/}





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
        <p className="text-zinc-300 text-sm/16">01/2023 - Present</p>
      </div>

      <div className="max-[700px]:pl-0 pl-42 flex flex-col  gap-2 max-[700px]:justify-center max-[700px]:items-center max-[700px]:w-full max-[700px]:pt-12">
      <p className="text-lg  text-zinc-300">Online Freelancing Services</p>
      <p className="text-md text-teal-600">Amman, Jordan</p>
      <p className="text-md text-teal-600">01/2023 - present</p>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center" 
      onClick={() => setShowFirstDetails(!showFirstDetails)}>
        more_horiz
        </span>

      {
        showFirstDetails && <ul className="text-sm text-zinc-300 list-none">
        <li className="experience-list-item">Building payroll managemnt apps.</li>
        <li className="experience-list-item">Creating e-commerce websites on both wordpress and full sites.</li>
        <li className="experience-list-item">Providing support for created tools and web apps.</li>
      </ul>
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
      <p className="text-md text-teal-600 text-center text-pretty min[1000px]:text-left">Senior Systems Implementation and Support Engineer</p>
      <p className="text-md text-zinc-300 text-center text-pretty min[1000px]:text-left">San Antonio, Texas</p>
      <p className="text-md text-zinc-300 text-center text-pretty min[1000px]:text-left">Remote Work</p>
      <p className="text-md text-zinc-300 text-center text-pretty min[1000px]:text-left">09/2015 - 12/2022</p>
      </div>

      <div className="my-2">
      <p className="text-md text-teal-600 text-center text-pretty min[1000px]:text-left">Systems Engineer</p>
      <p className="text-md text-zinc-300 text-center text-pretty min[1000px]:text-left">Muscat, Oman</p>
      <p className="text-md text-zinc-300 text-center text-pretty min[1000px]:text-left">07/2012 - 09/2015</p>
      </div>

      <div className="my-2">
      <p className="text-md text-teal-600 text-center text-pretty min[1000px]:text-left">Junior Systems Implementation and Support Engineer</p>
      <p className="text-md text-zinc-300 text-center text-pretty min[1000px]:text-left">Amman, Jordan</p>
      <p className="text-md text-zinc-300 text-center text-pretty min[1000px]:text-left">12/2011 - 07/2012</p>
      </div>

      <div className="my-2">
      <p className="text-md text-teal-600 text-center text-pretty min[1000px]:text-left">Internship</p>
      <p className="text-md text-zinc-300 text-center text-pretty min[1000px]:text-left">Amman, Jordan</p>
      <p className="text-md text-zinc-300 text-center text-pretty min[1000px]:text-left">08/2011 - 12/2011</p>
</div>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowlastDetails(!showLastDetails)}>
        more_horiz
        </span>

        {
        showLastDetails && <ul className="text-sm text-zinc-300 list-none">
          <li className="experience-list-item">Building java applications and tools.</li>
  <li className="experience-list-item">Providing training and apps demos.</li>
  <li className="experience-list-item">Providing support.</li>
  <li className="experience-list-item">Applications deployment on application servers.</li>
  <li className="experience-list-item">Providing onsite and offsite support.</li>
  <li className="experience-list-item">Performing preventative maintenace.</li>
  </ul>
}
      </div>
    </div>








  </div>
}

export default Experience;
import { useState } from "react";
import './Experience.css'

const Experience = () => {
  const [showFirstDetails, setShowFirstDetails] = useState(false);
  const [showSecondDetails, setShowSecondDetails] = useState(false);

    return <div className="mt-16">
    <div className="text-center text-neutral-300 mb-2">
      <a id="experience" className="text-3xl max-sm:text-xl text-teal-600 font-bold">
        MY EXPERIENCE
      </a>
    </div>

   




<div className="w-full p-3 rounded-sm relative overflow-hidden bg-teal-600/10 my-2 flex items-center">
    <div className="w-48
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
        <p className="text-zinc-300 text-sm/16">Jan 2023 - Mar 2025</p>
      </div>

      <div className="max-[700px]:pl-0 pl-52 flex flex-col gap-2 max-[700px]:justify-center 
      max-[700px]:items-center max-[700px]:w-full max-[700px]:pt-12">
      <p className="text-lg  text-zinc-300">Freelance Web Developer</p>
      <p className="text-md text-teal-600">Amman, Jordan</p>
      <p className="text-md text-teal-600">Jan 2023 - Mar 2025</p>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center" 
      onClick={() => setShowFirstDetails(!showFirstDetails)}>
        more_horiz
        </span>

        {
          showFirstDetails && <div className="text-sm text-zinc-300 w-full">
              
              
              <div className="experience-list-item">Designed and built a salary management web application using Java, Spring Boot, and ReactJS.</div>
<div className="experience-list-item">Improved payroll efficiency for small businesses by automating calculations, deductions and reporting.</div>
<div className="experience-list-item">Provided client training and on-site support for deployment and onboarding.</div>
<div className="experience-list-item">Built CI/CD pipelines using GitHub Actions and Docker to automate internal deployments and testing workflows during development. </div>

</div>
        }
      </div>
    </div>















    <div className="w-full p-3 rounded-sm relative overflow-hidden bg-teal-600/10 my-2 flex items-center">
    <div className="w-48
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
        <p className="text-zinc-300 text-sm/16">Sep 2011 - Dec 2022</p>

      </div>

      <div className="max-[700px]:pl-0 pl-52 flex flex-col gap-2 max-[700px]:justify-center max-[700px]:items-center max-[700px]:w-full max-[700px]:pt-12">
      <p className="text-lg  text-zinc-300">ProgressSoft</p>

      <div className="mb-1">
      <p className="text-md text-teal-600 text-center text-pretty min-[700px]:text-left min-[700px]:w-[350px] min-[700px]:text-balance">Senior Systems Implementation and Support Engineer</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">San Antonio, Texas</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Remote Work</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Sep 2015 - Dec 2022</p>
      </div>

      <div className="mb-1">
      <p className="text-md text-teal-600 text-center text-pretty min-[700px]:text-left">Systems Engineer</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Muscat, Oman</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Jul 2012 - Sep 2015</p>
      </div>

      <div className="mb-1">
      <p className="text-md text-teal-600 text-center text-pretty min-[700px]:text-left min-[700px]:w-[350px] min-[700px]:text-balance">Junior Systems Implementation and Support Engineer</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Amman, Jordan</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Dec 2011 - Jul 2012</p>
      </div>

      <div className="mb-1">
      <p className="text-md text-teal-600 text-center text-pretty min-[700px]:text-left">Internship</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Amman, Jordan</p>
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Aug 2011 - Dec 2011</p>
      </div>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowSecondDetails(!showSecondDetails)}>
        more_horiz
        </span>

        {
          showSecondDetails && <div className="text-sm text-zinc-300 w-full">


<div className="experience-list-item">Led end-to-end implementations of enterprise banking solutions—including check clearing and payment processing systems—across multiple financial institutions in Oman, ensuring seamless integration and regulatory compliance.</div>
<div className="experience-list-item">Automated deployment pipelines using GitLab CI/CD, Docker, and Kubernetes, reducing deployment time and improving consistency across environments.</div>
<div className="experience-list-item">Collaborated closely with developers and business stakeholders to troubleshoot issues and deliver tailored solutions that aligned with client requirements.</div>
<div className="experience-list-item">Deployed applications on on-premises and cloud platforms, providing postdeployment support and full-stack customizations for banking clients, including backend logic fixes and frontend UI enhancements.</div>
<div className="experience-list-item">Utilized Agile methodology to manage project development, incorporating sprint planning, daily stand-ups, sprint reviews, and retrospectives to ensure continuous improvement and timely delivery of features.</div>
<div className="experience-list-item">Delivered training sessions to business and IT teams enhancing their skillsets and ensuring effective application usage.</div>
<div className="experience-list-item">Performed system upgrades, data migrations, and patch installations to enhance system stability, boost performance, and ensure seamless transitions.</div>
<div className="experience-list-item">Recognized by clients for excellence in on-site deployment and support.</div>
<div className="experience-list-item">Created user guides, system documentation, and requirements specifications, ensuring clarity for stakeholders, end users, and development teams.</div>
<div className="experience-list-item">Conducted product demonstrations for prospective customers effectively show casing key features and supporting sales efforts.</div>
<div className="experience-list-item">Modified a payment management system implementation to meet a prospective customer's unique requirements resulting in a successful product purchase.</div>
<div className="experience-list-item">Collaborated on the design of sales brochures for a flagship product, improving visual appeal and supporting targeted marketing and sales efforts.</div>
<div className="experience-list-item">Mentored junior helpdesk staff to strengthen their troubleshooting and system knowledge.</div>



          </div>
        }

      





</div></div></div>

}

export default Experience;
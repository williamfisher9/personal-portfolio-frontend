import { useState } from "react";
import './Experience.css'

const Experience = () => {
  const [showFirstDetails, setShowFirstDetails] = useState(false);
  const [showSecondDetails, setShowSecondDetails] = useState(false);
  const [showMiddleDetails, setShowMiddleDetails] = useState(false);

    return <div className="mt-16">
    <div className="text-left text-neutral-300 mb-4">
      <a id="experience" className="text-3xl max-sm:text-3xl text-teal-600 font-bold">
        MY EXPERIENCE
      </a>
    </div>

   




<div className="w-full p-3 rounded-sm relative overflow-hidden bg-teal-600/10 my-2 flex items-center">
    <div className="w-48
        h-13
        rounded-md
        bg-teal-600/30
        absolute
        top-[18px]
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

      <div className="max-[700px]:pl-0 pl-52 gap-4 flex flex-col max-[700px]:w-full max-[700px]:pt-12">
        <div className="flex justify-start items-start flex-col gap-1">
      <p className="text-lg text-teal-600 text-left min-[700px]:text-balance">Freelance Full-Stack Developer</p>
      <p className="text-md text-zinc-300 text-left text-pretty">Amma, Jordan</p>
      <p className="text-md text-zinc-300 text-pretty text-left">Jan 2023 - Mar 2025</p>
        </div>
      

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border
      border-zinc-300 cursor-pointer w-8 text-center" 
      onClick={() => setShowFirstDetails(!showFirstDetails)}>
        more_horiz
        </span>

        {
          showFirstDetails && <div className="text-sm text-zinc-300 w-full">
              

<div className="experience-list-item">Developed a full-featured salaries processing web application using Java, Spring Boot, and React for small businesses, improving payroll efficiency significantly by automating calculations and robust data validations.</div>
<div className="experience-list-item mt-2">Designed and implemented logic for generating compliant Excel and PDF batch files with embedded barcodes, enabling seamless and automated integration with external payroll and financial systems.</div>
<div className="experience-list-item mt-2">Built CI/CD pipelines using GitHub Actions, Docker, and AWS, streamlining deployment processes and reducing release times.</div>
<div className="experience-list-item mt-2">Delivered training and on-site support during deployment, significantly improving client onboarding and overall user satisfaction.</div>
<div className="experience-list-item mt-2">Authored comprehensive user manuals to improve user understanding, significantly enhancing the overall experience and reducing support inquiries.</div>


</div>
        }
      </div>
    </div>















    <div className="w-full p-3 rounded-sm relative overflow-hidden bg-teal-600/10 flex items-center">
    <div className="w-48
        h-13
        rounded-md
        bg-teal-600/30
        absolute
        top-[18px]
        left-[-10px]
        flex justify-center items-center
        max-[700px]:pt-3
        max-[700px]:top-0
        max-[700px]:left-[50%]
        max-[700px]:translate-x-[-50%]
        max-[700px]:translate-y-[-10px]
        max-[700px]:h-15">
        <p className="text-zinc-300 text-sm/16 flex justify-center items-center flex-col">Sep 2011 - Dec 2022</p>
        

      </div>

      <div className="max-[700px]:pl-0 pl-52 flex flex-col gap-4 max-[700px]:w-full max-[700px]:pt-12">
      <div className="flex justify-start items-start flex-col gap-1">
      <p className="text-lg text-teal-600 text-left">Senior Systems Implementation and Support Engineer</p>
<p className="text-md text-zinc-300 text-pretty text-left">ProgressSoft</p>
      <p className="text-md text-zinc-300 text-left text-pretty">San Antonio, Texas</p>
      {/*<p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Remote Work</p>*/}
      <p className="text-md text-zinc-300 text-pretty text-left">Sep 2015 - Dec 2022</p>
      </div>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowMiddleDetails(!showMiddleDetails)}>
        more_horiz
        </span>

        {
          showMiddleDetails && <div className="text-sm text-zinc-300 w-full">

<div className="experience-list-item">Led end-to-end implementation of enterprise banking solutions across multiple financial institutions in Oman, ensuring seamless integration, regulatory compliance, and operational stability.</div>
<div className="experience-list-item mt-2">Delivered integration solutions using synchronous, asynchronous, batch-file processing (scheduled uploads), and message queue–based models to automate workflows and interface with banking systems.</div>
<div className="experience-list-item mt-2">Automated deployments with GitLab CI/CD, Docker, and Kubernetes, significantly reducing release time and ensuring consistency across environments.</div>
<div className="experience-list-item mt-2">Utilized Agile extensively, leveraging Jira and Confluence to support sprint planning, backlog refinement, and continuous delivery, while collaborating cross-functionally to resolve issues and deliver high-quality solutions.</div>
<div className="experience-list-item mt-2">Delivered client demonstrations, conducted training to business users and IT teams, and mentored junior staff to support system adoption and strengthen team capabilities.</div>

          </div>
        }

      <div className="flex justify-start items-start flex-col gap-1">
      <p className="text-lg text-teal-600 text-left text-pretty">Associate Systems Implementation and Support Engineer</p>
      <p className="text-md text-zinc-300 text-left text-pretty">ProgressSoft</p>
      <p className="text-md text-zinc-300 text-left text-pretty">Jordan, Oman, UAE</p>
      <p className="text-md text-zinc-300 text-left text-pretty">Sep 2011 - Sep 2015</p>
      </div>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowSecondDetails(!showSecondDetails)}>
        more_horiz
        </span>

        {
          showSecondDetails && <div className="text-sm text-zinc-300 w-full">

<div className="experience-list-item">Deployed, supported, and maintained enterprise Java and .NET applications across various environments, ensuring stability and regulatory compliance.</div>
<div className="experience-list-item mt-2">Created and executed UAT test cases with end users to validate functionality and user acceptance.</div>
<div className="experience-list-item mt-2">Worked on various system integration models, including synchronous, asynchronous, and file-based, with hands-on experience in message queueing using ActiveMQ and IBM MQ.</div>
<div className="experience-list-item mt-2">Delivered on-site training and product demos to enhance user adoption and system performance.</div>
<div className="experience-list-item mt-2">Authored user guides, technical and installation procedures to streamline end-user onboarding.</div>
<div className="experience-list-item mt-2">Tailored a system to meet client needs, securing a successful sale and improved client satisfaction.</div>

          </div>
        }

      





</div></div></div>

}

export default Experience;
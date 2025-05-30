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
      <p className="text-lg  text-zinc-300">Freelance Full-Stack Developer</p>
      <p className="text-md text-teal-600">Amman, Jordan</p>
      <p className="text-md text-teal-600">Jan 2023 - Mar 2025</p>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center" 
      onClick={() => setShowFirstDetails(!showFirstDetails)}>
        more_horiz
        </span>

        {
          showFirstDetails && <div className="text-sm text-zinc-300 w-full">
              


<div className="experience-list-item">Designed and built a salaries processing web application using Java, Spring Boot, and React for small business.</div>

<div className="experience-list-item">Enhanced payroll processing efficiency by implementing robust data validation, automating payroll calculations and deductions, and generating compliant batch files for seamless integration with external systems. </div>

<div className="experience-list-item">Designed secure RESTful APIs and integrated them with React frontend. </div>

<div className="experience-list-item">Delivered training and on-site support during deployment to ensure smooth onboarding and system readiness. </div>

<div className="experience-list-item">Built CI/CD pipelines using GitHub Actions, Docker, and AWS to automate deployments during development. </div>

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
      <p className="text-md text-teal-600 text-center text-pretty min-[700px]:text-left min-[700px]:w-[350px] min-[700px]:text-balance">Associate Systems Implementation and Support Engineer</p>
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
      <p className="text-md text-zinc-300 text-center text-pretty min-[700px]:text-left">Sep 2011 - Dec 2011</p>
      </div>

      <span className="material-symbols-rounded text-sm text-zinc-300 rounded-sm border 
      border-zinc-300 cursor-pointer w-8 text-center"  onClick={() => setShowSecondDetails(!showSecondDetails)}>
        more_horiz
        </span>

        {
          showSecondDetails && <div className="text-sm text-zinc-300 w-full">


<div className="experience-list-item">Led end-to-end implementation of enterprise banking solutions—including checks clearing, remote deposit, and payments platforms—across multiple financial institutions in Oman, ensuring seamless integration, regulatory compliance, and operational stability. </div>
<div className="experience-list-item">Contributed to product development, architecture, design, and documentation; additionally developed tools for load testing and user experience enhancement, along with service flow and integration planning. </div>
<div className="experience-list-item">Analyzed system logs and usage patterns to uncover code inefficiencies and performance bottlenecks; contributed to refactoring initiatives that improved modularity, maintainability, and overall system reliability. </div>
<div className="experience-list-item">Delivered integration solutions using batch file processing (data validation and scheduled uploads), synchronous, asynchronous, and message queue–based models to automate workflows and interface with banking systems. </div>
<div className="experience-list-item">Automated deployments with GitLab CI/CD, Docker, and Kubernetes, significantly reducing release time and ensuring consistency across environments. </div>
<div className="experience-list-item">Utilized Agile extensively, leveraging Jira and Confluence to support sprint planning, backlog refinement, and continuous delivery, while collaborating cross-functionally to resolve issues and deliver high-quality solutions. </div>
<div className="experience-list-item">Delivered client demos, trained business users and IT teams, and mentored junior staff to support system adoption and strengthen team capabilities. </div>
<div className="experience-list-item">Progressed from Intern to Associate Engineer, supporting the deployment, configuration, and maintenance of enterprise Java and .NET applications across diverse client environments in the banking domain. </div>
<div className="experience-list-item">Developed and executed UAT test cases with end users to validate system functionality and user acceptance. </div>
<div className="experience-list-item">Supported system upgrades, data migrations, patching, and production operations for large-scale platforms. </div>
<div className="experience-list-item">Worked on various system integration models, including synchronous, asynchronous, and file-based, with hands-on experience in message queueing using ActiveMQ and IBM MQ. </div>
<div className="experience-list-item">Delivered on-site training and product demonstrations to drive user adoption and optimize system performance.  </div>
<div className="experience-list-item">Authored user guides, technical documentation, and installation procedures to streamline end-user onboarding. </div>
<div className="experience-list-item">Customized a payment management system to meet client-specific needs, contributing to a successful sale and improved client satisfaction; also created technical and marketing materials to support product adoption. </div>
          </div>
        }

      





</div></div></div>

}

export default Experience;
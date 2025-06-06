import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import './Work.css';

const Work = () => {

    return <div className={`mt-16 flex gap-2 flex-col`}>
    <div className="text-left">
      <a id="work" className="text-3xl max-sm:text-3xl text-teal-600 font-bold">
        MY WORK
      </a>

      <p className="text-neutral-300 py-2">
        A selection of projects that highlight my experience and interests across different areas.
      </p>
    </div>






    <div className="relative w-full flex flex-col rounded-sm overflow-hidden border border-neutral-800 min-[1150px]:border-none min-[1150px]:h-[470px]">

<div className="absolute max-[1150px]:w-64 min-[1150]:w-[450px] min-[1150px]:top-7 max-[1150px]:top-2 max-[1150px]:left-2 left-0 z-10">
  <p className="text-teal-600 text-lg font-bold text-left min-[1150px]:text-left min-[1150px]:text-2xl">Salaries File Generator</p>
  <p className="text-zinc-300 min-[1150px]:text-left">Automated Salary Processing System</p>
</div>

<div className="w-full min-[1150px]:w-[500px] min-[1150px]:top-22 right-0 min-[1150px]:absolute max-[1150px]:img-custom-clip">
  <img src="salaries.png" className="w-full object-contain brightness-30 min-[1150px]:brightness-60 min-[1150px]:hover:brightness-100" alt="" />
</div>

<div className="w-full p-2 text-zinc-300 min-[1150px]:absolute min-[1150px]:top-32 min-[1150px]:w-[600px] min-[1150px]:left-0
min-[1150px]:bg-gray-800 min-[1150px]:p-2">
  <ul className="min-[1150px]:flex min-[1150px]:flex-wrap text-sm">
    <li className="app-feature-item">Generates bank-compliant Excel and PDF outputs with PDF417 barcodes</li>
    <li className="app-feature-item">Improves efficiency and reduces manual errors</li>
    <li className="app-feature-item">Various salary forms and formats</li>
    <li className="app-feature-item">Responsive design</li>
    <li className="app-feature-item">Summary dashboards</li>
    <li className="app-feature-item">JWT authentication</li>
    <li className="app-feature-item">User entry validation</li>
    <li className="app-feature-item">Duplicate records detection</li>
    <li className="app-feature-item">Bulk records pasting</li>
  </ul>
</div>

<div className="w-full p-2 max-[1150px]:flex max-[1150px]:flex-wrap max-[1150px]:gap-1
min-[1150px]:absolute min-[1150px]:top-[360px] min-[1150px]:h-52 min-[1150px]:w-full min-[1150px]:right-0">
  <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Java</span>
  <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">SpringBoot</span>
  <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">iText</span>
  <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">H2 DB</span>
  <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Google ZXING</span>
  <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">GitHub Actions</span>
  <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">AWS EC2</span>
  <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">HTML</span>
  <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Bootstrap</span>
  <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">NGINX</span>
</div>

<div className="absolute p-2 min-[1150px]:top-[400px] max-[1150px]:top-3 max-[1150px]:right-2 min-[1150px]:left-2 flex gap-3 cursor-pointer">
  <FaGithub className="text-zinc-300 text-2xl hover:text-teal-600" onClick={() => {window.open("https://github.com/williamfisher9/salaries-mgmt-app-frontend", '_blank').focus()}}/>
  <FaExternalLinkAlt className="text-zinc-300 text-2xl hover:text-teal-600" onClick={() => {window.open("https://willtechbooth.dev/salaries/login", '_blank').focus()}}/>
</div>

</div>





















    <div className="relative my-2 w-full flex flex-col rounded-sm overflow-hidden border border-neutral-800 min-[1150px]:border-none min-[1150px]:h-[470px]">

      <div className="absolute w-64 top-2 min-[1150px]:right-0 max-[1150px]:left-2 z-10">
        <p className="text-teal-600 text-lg font-bold text-left min-[1150px]:text-right min-[1150px]:text-4xl">Bite & Sip</p>
        <p className="text-zinc-300 min-[1150px]:text-right">Restaurant Management App</p>
      </div>

      <div className="w-full min-[1150px]:w-[500px] min-[1150px]:top-22 left-0 min-[1150px]:absolute max-[1150px]:img-custom-clip">
        <img src="005.png" className="w-full object-contain brightness-30 min-[1150px]:brightness-60 min-[1150px]:hover:brightness-100" alt="" />
      </div>

      

      <div className="w-full p-2 text-zinc-300 min-[1150px]:absolute min-[1150px]:top-32 min-[1150px]:w-[600px] min-[1150px]:right-0
      min-[1150px]:bg-gray-800 min-[1150px]:p-2">
        <ul className="min-[1150px]:flex min-[1150px]:flex-wrap text-sm">
          <li className="app-feature-item">Admin dashboard</li>
          <li className="app-feature-item">Auto refreshing dashboard</li>
          <li className="app-feature-item">Menu items management</li>
          <li className="app-feature-item">Sortable lists</li>
          <li className="app-feature-item">Coupons management</li>
          <li className="app-feature-item">App global settings</li>
          <li className="app-feature-item">User profile</li>
          <li className="app-feature-item">Lists pagination</li>
          <li className="app-feature-item">JWT authentication</li>
          <li className="app-feature-item">Role based authorization</li>
          <li className="app-feature-item">User email verification</li>
          <li className="app-feature-item">Forgot password</li>
          <li className="app-feature-item">Forms validation</li>
          <li className="app-feature-item">Users management</li>
          <li className="app-feature-item">User signup and singin</li>
          <li className="app-feature-item">Orders tracking and management</li>
          <li className="app-feature-item">Responsive design</li>
          <li className="app-feature-item">Stripe integration</li>
        </ul>
      </div>

      <div className="w-full p-2 max-[1150px]:flex max-[1150px]:flex-wrap max-[1150px]:gap-1
      min-[1150px]:absolute min-[1150px]:top-[360px] min-[1150px]:h-52 min-[1150px]:w-full min-[1150px]:right-0">
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Java</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Spring Boot</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Spring Security</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">ReactJS</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">HTML</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">CSS</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">MySQL</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">GitHub Actions</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Docker</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">AWS EC2</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">NGINX</span>
      </div>

      <div className="absolute p-2 min-[1150px]:top-[400px] max-[1150px]:top-3 max-[1150px]:right-2 min-[1150px]:left-2 flex gap-3 cursor-pointer">
        <FaGithub className="text-zinc-300 text-2xl hover:text-teal-600" onClick={() => {window.open("https://github.com/williamfisher9/bite-and-sip-frontend", '_blank').focus()}}/>
        <FaExternalLinkAlt className="text-zinc-300 text-2xl hover:text-teal-600" onClick={() => {window.open("https://willtechbooth.dev/biteandsip", '_blank').focus()}}/>
      </div>

</div>







<div className="relative my-2 w-full flex flex-col rounded-sm overflow-hidden border border-neutral-800 min-[1150px]:border-none min-[1150px]:h-[470px]">

        <div className="absolute max-[1150px]:w-64 min-[1150]:w-[450px] min-[1150px]:top-7 max-[1150px]:top-2 max-[1150px]:left-2 left-0 z-10">
        <p className="text-teal-600 text-lg font-bold text-left min-[1150px]:text-left min-[1150px]:text-4xl">Chatter</p>
        <p className="text-zinc-300 min-[1150px]:text-left">Real-Time Chatting Application</p>
      </div>

      <div className="w-full min-[1150px]:w-[500px] min-[1150px]:top-22 right-0 min-[1150px]:absolute max-[1150px]:img-custom-clip">
        <img src="chatter_001.png" className="w-full object-contain brightness-30 min-[1150px]:brightness-60 min-[1150px]:hover:brightness-100" alt="" />
      </div>

      <div className="w-full p-2 text-zinc-300 min-[1150px]:absolute min-[1150px]:top-32 min-[1150px]:w-[600px] min-[1150px]:left-0
      min-[1150px]:bg-gray-800 min-[1150px]:p-2">
        <ul className="min-[1150px]:flex min-[1150px]:flex-wrap text-sm">
          <li className="app-feature-item">Global chat with all users</li>
          <li className="app-feature-item">One-on-one direct messaging</li>
          <li className="app-feature-item">JWT authentication</li>
          <li className="app-feature-item">Responseive design</li>
          <li className="app-feature-item">User email verification</li>
          <li className="app-feature-item">Messaging history</li>
          <li className="app-feature-item">User signup and singin</li>
          <li className="app-feature-item">Forms validation</li>
        </ul>
      </div>

      <div className="w-full p-2 max-[1150px]:flex max-[1150px]:flex-wrap max-[1150px]:gap-1
      min-[1150px]:absolute min-[1150px]:top-[360px] min-[1150px]:h-52 min-[1150px]:w-full min-[1150px]:right-0">
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Python</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Flask</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Socket.IO</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">SQLite</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">GitHub Actions</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">AWS EC2</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">HTML</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">Tailwind CSS</span>
        <span className="mr-1 text-nowrap text-xs px-2.5 py-0.5 tech-color">NGINX</span>
      </div>

      <div className="absolute p-2 min-[1150px]:top-[400px] max-[1150px]:top-3 max-[1150px]:right-2 min-[1150px]:left-2 flex gap-3 cursor-pointer">
        <FaGithub className="text-zinc-300 text-2xl hover:text-teal-600" onClick={() => {window.open("https://github.com/williamfisher9/real-time-chat-app", '_blank').focus()}}/>
        <FaExternalLinkAlt className="text-zinc-300 text-2xl hover:text-teal-600" onClick={() => {window.open("https://willtechbooth.dev/chatter", '_blank').focus()}}/>
      </div>

</div>


    

    
    
    




    
  </div>
}

export default Work;
import './About.css';

const About = () => {
    return <div className="mt-16">
    <div className="text-center">
      <a id="about" className="text-3xl max-sm:text-xl text-teal-600 font-bold">
        ABOUT ME
      </a>
    </div>

      <p className="text-neutral-300 pt-3 text-justify text-md leading-[26px]">
        Implementation specialist with 10 years of experience providing clients with web-based banking solutions. 
        Passionate about systems integration, automation, APIs and problem resolution with expertise in SQL, operating systems, APIs, and cloud platforms.
        
      </p>

      <p className="text-neutral-300 pt-3 text-justify text-md leading-[26px]">
        Throughout the entire project life-cycle, I collaborate closely with both business and technical teams to ensure the creation of precise documentation and
        effective product development. My responsibilities include deployment of solutions on both test and production infrastructures, as well as overseeing testing,
        training, and providing support both onsite and offsite. 
      </p>

      <p className="text-neutral-300 pt-3 text-justify text-md leading-[26px]">
      My goal is to empower clients with the tools they need to succeed and navigate the complexities of modern
      banking systems.
      </p>
          
  </div>
}

export default About;
import useWindowSize from '../../hooks/useWindowSize';
import Blinker from '../Blinker/Blinker';
import './Hero.css'

const Hero = () => {
  const windowSize = useWindowSize()

    return <div className="w-full flex justify-center items-center flex-col">
      <div className="flex justify-center items-center gap-2 flex-col">
          
          <p className="text-[55px] text-teal-600 font-bold text-center max-md:text-md name">William Fisher</p>
          <p className="text-neutral-400 min-lg:text-nowrap max-md:text-lg text-xl text-center my-1">Full-Stack Developer | Software Engineer</p>
          
          <div className="flex gap-4 justify-start mt-3 mb-5 w-full">

          <a
          href="https://bucket-wf-829140.s3.us-east-2.amazonaws.com/resume/william_fisher_resume.pdf" target='_blank'
            className={`flex gap-1 items-center justify-center text-teal-600 w-[50%] h-9
                 rounded-xs px-2 py-1 box
                hover:bg-teal-600/10 active:bg-transparent max-[1200px]:text-sm`}
          >
            RESUME{" "}
            <span className="material-symbols-rounded">download</span>
          </a>
          <a
            href="#contact"
            className={`flex gap-2 items-center w-[50%] h-9
                justify-center text-teal-600  rounded-xs px-2 py-1 box
                hover:bg-teal-600/10 active:bg-transparent max-[1200px]:text-sm`}
          >
            CONTACT Me{" "}
            <span className="material-symbols-rounded">contact_mail</span>
          </a>
        </div> 

        {
          windowSize.width < 1000 && <Blinker />
        }
    </div>








  </div>
}

export default Hero;

import useWindowSize from '../../hooks/useWindowSize';
import Blinker from '../Blinker/Blinker';
import './Hero.css'

const Hero = () => {
  const windowSize = useWindowSize()

    return <div className="w-full flex justify-center gap-8 items-center max-[1200px]:flex-col max-[1200px]:gap-2">
      <div className="flex justify-center items-center flex-col">
          <div>

          <p className="text-[45px] font-bold my-2 text-teal-600 max-sm:text-md max-[1200px]:text-center">William Fisher</p>
          <p className="text-neutral-400 min-lg:text-nowrap max-sm:text-sm max-[1200px]:text-center my-1">Systems Implementation and Support Engineer</p>
          <p className="text-neutral-400 max-sm:text-sm max-[1200px]:text-center my-1">10+ years of experience</p>

          <div className="flex gap-4 justify-start mt-3 mb-5">

          <a
          href="william_fisher_resume_latest.pdf" target='_blank'
            className={`flex gap-1 items-center justify-center text-teal-600 w-[50%] h-10
                border border-teal-600  rounded-xs px-2 py-1
                hover:bg-teal-600/10 active:bg-transparent max-[1200px]:text-sm`}
          >
            RESUME{" "}
            <span className="material-symbols-rounded">download</span>
          </a>
          <a
            href="#contact"
            className={`flex gap-2 items-center  w-[50%]
                justify-center text-teal-600 border 
                border-teal-600 rounded-xs px-2 py-1
                hover:bg-teal-600/10 active:bg-transparent max-[1200px]:text-sm`}
          >
            CONTACT ME{" "}
            <span className="material-symbols-rounded">contact_mail</span>
          </a>
        </div> 

        {
          windowSize.width < 1000 && <Blinker />
        }
          </div>
    </div>







    <div className=" flex justify-center items-center 
    max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:w-full">
      <div className='size-80 max-[500px]:size-64 relative image-container'>
      <img
        src="profile.jpg"
        className="size-80 max-[500px]:size-64"
        alt="profile-image"
      />
      </div>
    </div>
  </div>
}

export default Hero;
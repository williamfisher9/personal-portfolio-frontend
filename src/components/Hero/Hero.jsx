import './Hero.css'

const Hero = () => {
    return <div className="w-full flex justify-center gap-8 items-center max-[1200px]:flex-col max-[1200px]:gap-2">
      <div className="flex justify-center items-center flex-col">
          <div>

          <div className="flex gap-2 items-center mb-4">
            <img
              src="profile.jpg"
              className="size-8 rounded-md"
              alt="profile-image"
            />
            <div className="size-3 rounded-full relative">
              <div className="absolute size-full bg-green-500 animate-ping rounded-full opacity-85"></div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto size-2 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-neutral-400 text-nowrap">Avilable for work</p>
          </div>

          <p className="text-[45px] font-bold my-2 text-teal-600 max-sm:text-md max-[1200px]:text-center">William Fisher</p>
          <p className="text-neutral-400 min-lg:text-nowrap max-sm:text-sm max-[1200px]:text-center my-1">Software Implementation and Support Engineer</p>
          <p className="text-neutral-400 max-sm:text-sm max-[1200px]:text-center my-1">10+ years of experience</p>

          <div className="flex gap-4 justify-start max-[1200px]:flex-col my-3">

          <a
          href="#contact"
            className={`flex gap-1 max-md:items-center  max-[1200px]:justify-center text-teal-600 
                border border-teal-600  rounded-xs px-2 py-1
                hover:bg-teal-600/10 active:bg-transparent max-[1200px]:text-sm`}
          >
            RESUME{" "}
            <span className="material-symbols-rounded">download</span>
          </a>
          <a
            href="#contact"
            className={`flex gap-1 max-md:items-center 
                max-[1200px]:justify-center text-teal-600 border 
                border-teal-600 rounded-xs px-2 py-1
                hover:bg-teal-600/10 active:bg-transparent max-[1200px]:text-sm`}
          >
            CONTACT ME{" "}
            <span className="material-symbols-rounded">contact_mail</span>
          </a>
        </div> 
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
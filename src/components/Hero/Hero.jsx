const Hero = () => {
    return <div
    className="w-full
    flex 
    justify-between 
    max-[1000px]:gap-2 
    max-[1000px]:flex-col 
    max-[1000px]:items-center 
    max-[1000px]:justify-center"
  >
    <div
      className="w-[50%] flex justify-center items-center
                    max-[1000px]:w-full"
    >
      <div className="flex flex-col justify-center gap-3">
        <div className="max-[500px]:text-xs">
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
            <p className="text-neutral-400">Avilable for work</p>
          </div>

          <p className="text-2xl font-bold my-2 text-teal-600">William Fisher</p>
          <p className="text-neutral-400">Software Implementation and Support Engineer</p>
          <p className="text-neutral-400">10+ Years of Experiece</p>
          <p className="text-neutral-400">Full-Stack Developer</p>
        </div>
        <div className="flex gap-4 max-md:flex-col">
          <a
          href="#contact"
            className={`flex gap-1 max-md:items-center  max-md:justify-center text-teal-600 
                border border-teal-600  rounded-xs px-2 py-1
                hover:bg-teal-600/10 active:bg-transparent`}
          >
            Download Resume{" "}
            <span className="material-symbols-rounded">download</span>
          </a>
          <a
            href="#contact"
            className={`flex gap-1 max-md:items-center 
                max-md:justify-center text-teal-600 border 
                border-teal-600 rounded-xs px-2 py-1
                hover:bg-teal-600/10 active:bg-transparent`}
          >
            Contact Me{" "}
            <span className="material-symbols-rounded">contact_mail</span>
          </a>
        </div>
      </div>
    </div>
    <div
      className="w-[50%] max-[1000px]:flex max-[1000px]:items-center 
      max-[1000px]:justify-center max-[1000px]:w-full"
    >
      <img
        src="profile.jpg"
        className="size-96 rounded-xl
        max-[500px]:size-64"
        alt="profile-image"
      />
    </div>
  </div>
}

export default Hero;
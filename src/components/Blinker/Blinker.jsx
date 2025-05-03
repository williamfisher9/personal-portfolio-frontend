const Blinker = () => {
    return <a href="#contact">
        <div className="flex gap-2 justify-center items-center cursor-pointer" >
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
    </a>
}

export default Blinker;
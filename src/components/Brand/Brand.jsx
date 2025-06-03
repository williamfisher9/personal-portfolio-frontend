import './Brand.css'

const Brand = () => {
     return <div className="h-screen flex items-center justify-center flex-col gap-6 relative">
    <div className="logo-box relative w-44 h-44 flex items-center justify-center rounded-xl">
      <p className='text-2xl text-neutral-800 font-bold logo-box-text'>William Fisher</p>
    </div>

    <p className='text-center text-balance text-neutral-300 logo-box-caption text-2xl max-sm:text-sm flex justify-center align-center gap-2 flex-col'>
      <span>Full-Stack Developer | Software Engineer</span>
    </p>

    <div className="absolute bottom-4 logo-box-caption text-center text-neutral-300">
          <p className="text-md text-neutral-300/40">
            Designed & Built by William Fisher
          </p>
        </div>
  </div>
}

export default Brand;

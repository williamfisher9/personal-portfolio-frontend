import './Brand.css'

const Brand = () => {
     return <div className="h-screen flex items-center justify-center flex-col gap-6">
    <div className="logo-box relative w-44 h-44 flex items-center justify-center rounded-xl">
      <p className='text-2xl text-neutral-800 font-bold logo-box-text'>William Fisher</p>
    </div>

    <p className='text-center text-balance text-teal-600 logo-box-caption text-2xl max-sm:text-sm'>
      Software Full Stack Development, Implementation and Support Engineer
    </p>

    
  </div>
}

export default Brand;
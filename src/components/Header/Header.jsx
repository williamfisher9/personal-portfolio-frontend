import './Header.css'

const Header = () => {
    return <div className="w-full px-8 py-2 flex justify-between items-center">
        <a href='/'>
            <img src='logo.png' className='size-16' alt='logo-img' />
        </a>

        <button className='border 
            border-[#b19e31] 
            text-[#b19e31] 
            text-sm py-1.5 px-3.5 
            hover:bg-[#b19e31] 
            hover:text-neutral-800 
            hover:cursor-pointer
            active:bg-transparent active:text-[#b19e31] transition-[0.2s]'>
            RESUME
        </button>
    </div>
}

export default Header;
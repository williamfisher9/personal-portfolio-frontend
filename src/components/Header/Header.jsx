import './Header.css'

const Header = () => {
    return <div className="w-full px-8 py-2 flex justify-between items-center">
        <a href='/'>
            <img src='logo.png' className='size-16' alt='logo-img' />
        </a>

        <button className='border 
            border-teal-600
            text-teal-600
            text-sm py-1.5 px-3.5 
            hover:bg-teal-600/10
            hover:cursor-pointer
            active:bg-transparent transition-[0.2s]'>
            RESUME
        </button>
    </div>
}

export default Header;
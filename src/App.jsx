import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import Layout from './components/Layout/Layout';

const App = () => {

  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setShowLogo(false)
    }, 7000)
  }, [])

  if(showLogo) {
    return <div className="h-screen flex items-center justify-center flex-col gap-8">
      <div className="logo-box relative w-44 h-44 flex items-center justify-center rounded-xl">
        <p className='text-2xl text-neutral-800 font-bold logo-box-text'>William Fisher</p>
      </div>

      <p className='flex justify-center items-center text-[#b19e31] logo-box-caption text-2xl'>
        System Implementation and Support Engineer
      </p>

      <p className='flex justify-center items-center text-[#b19e31] logo-box-caption text-2xl'>
        Full Stack Developer
      </p>
      
    </div>
  }

  return <Layout />
 
}

export default App;
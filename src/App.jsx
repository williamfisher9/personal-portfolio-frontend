import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Brand from './components/Brand/Brand';
import { AppContextProvider } from './context/AppContext';

const App = () => {
  const [showBrand, setShowBrand] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setShowBrand(false)
    }, 7000)
  }, [])

  if(showBrand)
    return <Brand />

  return <AppContextProvider>
    <Layout />
  </AppContextProvider>
}

export default App;
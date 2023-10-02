import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Themeprovider } from './context/theme.js'
import Themebtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  
  const [themeMode,setThemeMode] =useState('light');

  const lightMode =()=>{
    setThemeMode('light')
  }
  const darkMode =()=>{
    setThemeMode('dark')
  }

  useEffect(()=>{
    const obj = document.querySelector('html')
    obj.classList.remove('light','dark')
    obj.classList.add(themeMode)
  },[themeMode])


  return (
    <Themeprovider value={{themeMode, lightMode, darkMode}} >
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <Themebtn/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card/>
                </div>
            </div>
        </div>

    </Themeprovider>
  )
}

export default App

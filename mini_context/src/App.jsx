import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/Login'
import Dashb from './components/Dashb'

function App() {
  
  return (
    <Usercontextprovider>
      <Login/>
      <Dashb/>

    </Usercontextprovider>

  )
}

export default App

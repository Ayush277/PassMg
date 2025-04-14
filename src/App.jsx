import { useState } from 'react'
import './App.css'
import Navabr from './components/Navabr'
import Manager from './components/Manager'
import Footer from './components/footer' // Ensure this matches the file name exactly (case-sensitive)

function App() {
  return (
    <>
      <Navabr />
      <Manager />
      <Footer /> {/* Use uppercase here */}
    </>
  )
}

export default App

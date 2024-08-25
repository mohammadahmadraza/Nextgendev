import { useState } from 'react'
import Header from './Header/Header.jsx'
import Introduction from './Introduction/Introduction.jsx'
import Skills from './Skills/Skills.jsx'
import './App.css'
import Footer from './Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Introduction/>
        <Skills/>
        <Footer/>
    </>
  )
}

export default App

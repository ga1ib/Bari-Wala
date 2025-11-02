import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'

const App = () => {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
     <Navbar />
     <Hero />
     <Services />

    </main>
  )
}

export default App

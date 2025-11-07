import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import ContactUs from './components/ContactUs.jsx'

const App = () => {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
     <Navbar />
     <Hero />
     <Services />
     <Portfolio />
     <About />
     <Reviews />
     <ContactUs />

    </main>
  )
}

export default App

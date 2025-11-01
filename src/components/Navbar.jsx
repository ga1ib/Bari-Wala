import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.webp'
import { RiCloseLine, RiMenu3Fill, RiMenu3Line } from '@remixicon/react'
const LINKS = [
    { name: 'Services', link: '/' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'About', link: '/about' },
    { name: 'Reviews', link: '/reviews' },
    { name: 'Contact', link: '/contact' }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
return (

        <nav className='border-b-2'>
        <div className='uppercase max-w-7xl mx-auto flex justify-between items-center py-8'>
            <div className='pl-2'>
                <a href="#">
                    <img src={logo} width={150 } height={15} alt="VAstuSpaze" />
                </a>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-2xl pr-2 focus:outline-none aria-label={isOpen ? "Close menu" : "Open menu"}'>
                    {isOpen ? <RiCloseLine/> : <RiMenu3Line/>}
                </button>
            </div>
            <div className='hidden md:flex space-x-8 md:space-x-4 pr-2'>
                {LINKS.map((link,index)=>(
                    <a key={index} href={link.link} className='upercase text-sm font-medium '>{link.name}</a>
                ))}
            </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute px-4 py-5 mt-2 w-full bg-neutral-50`}>{LINKS.map((link,index)=>(
                    <a key={index} href={link.link} className=' uppercase block py-2 text-lg font-medium tracking-wide'>
                        {link.name}
                        </a>
                ))}</div>
        </nav>
    )}

export default Navbar

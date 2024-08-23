import React from 'react'
import '@/app/components/molecules/Navbar.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div id='navbar'>
            <Link className='navbar-links' href='/'>Home</Link>
            <Link className='navbar-links' href='/'>My Projects</Link>
            <Link className='navbar-links' href='/'>Acheivements</Link>
            <Link className='navbar-links' href='/'>Contact Me</Link>
        </div>
    )
}

export default Navbar

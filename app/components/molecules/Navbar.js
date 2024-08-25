import React from 'react'
import '@/app/components/molecules/Navbar.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div id='navbar'>
            <Link className='navbar-links' href='/'>Home</Link>
            <Link className='navbar-links' href='/projects'>Projects</Link>
            <Link className='navbar-links' href='/acheivements'>Acheivements</Link>
            <Link className='navbar-links' href='/'>Contact</Link>
        </div>
    )
}

export default Navbar

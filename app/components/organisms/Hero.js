import React from 'react'
import Image from 'next/image';
import '@/app/components/organisms/Hero.css'
import Mainlogo from '@/public/MainLogo.png'
import Navbar from '../molecules/Navbar';
import Letsconnectbutton from '../atoms/Letsconnectbutton';

const hero = () => {
    return (
        <div id='hero'>
            <Image
                src={Mainlogo}
                alt='yasasbanuka-logo'
                id='main-logo'
            />
            <h3 className='hero-description'>
                Crafting things on the web, with a love for solving puzzles and building ideas.<br />
                Take a peek at what I’m up to! 💀‼️
            </h3>
            <Navbar />
            <Letsconnectbutton />
        </div>
    )
}

export default hero

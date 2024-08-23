import React from 'react'
import Image from 'next/image';
import '@/app/components/organisms/Hero.css'
import Mainlogo from '@/public/MainLogo.png'

const hero = () => {
    return (
        <div id='hero'>
            <Image
                src={Mainlogo}
                alt='yasasbanuka-logo'
                id='main-logo'
            />
        </div>
    )
}

export default hero

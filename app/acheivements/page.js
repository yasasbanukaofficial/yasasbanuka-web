import React from 'react'
import Image from 'next/image'
import DragonBallGif from '@/public/dragonball.gif'
import Navbar from '../components/molecules/Navbar'
import '@/app/acheivements/Acheivements.css'

const page = () => {
    return (
        <div id='projects'>
            <Navbar />
            <Image
                src={DragonBallGif}
                alt="dragonball-background"
                className='dragonball'
            />
        </div>
    )
}

export default page

import React from 'react'
import Image from 'next/image'
import ItachiGif from '@/public/itachi.gif'
import '@/app/projects/projects.css'
import Navbar from '../components/molecules/Navbar'

const page = () => {
    return (
        <div id='projects'>
            <Navbar />
            <Image
                src={ItachiGif}
                alt="itachi-background"
                className='itachi'
            />
        </div>
    )
}

export default page

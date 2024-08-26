import React from 'react'
import Image from 'next/image'
import '@/app/projects/projects.css'
import Navbar from '../components/molecules/Navbar'

const page = () => {
    return (
        <div id='projects'>
            <Navbar />
            <Image
                src="/yasasbanuka-web/itachi.gif"
                alt="itachi-background"
                className='itachi'
            />
        </div>
    )
}

export default page

import React from 'react'
import '@/app/projects/projects.css'
import Navbar from '../components/molecules/Navbar'

const page = () => {
    return (
        <div id='projects'>
            <Navbar />
            <img
                src="/yasasbanuka-web/itachi.gif"
                alt="itachi-background"
                className='itachi'
            />
        </div>
    )
}

export default page

import React from 'react'
import Navbar from '../components/molecules/Navbar'
import '@/app/acheivements/Acheivements.css'

const page = () => {
    return (
        <div id='projects'>
            <Navbar />
            <img
                src="/dragonball.gif"
                alt="itachigif"
                className='dragonball'
            />
        </div>
    )
}

export default page

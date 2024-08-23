import React from 'react';
import Image from 'next/image';
import '@/app/components/templates/About.css'
import Aboutbgimg from '@/public/about-bgimg.jpg'

const About = () => {
    return (
        <div>
            <Image
                src={Aboutbgimg}
                alt='epic-image1'
                className="about-bgimg"
            />

        </div>
    )
}

export default About

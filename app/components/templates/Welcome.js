import React from 'react';
import styles from './Welcome.css';
import Hero from '@/app/components/organisms/hero'


const Welcome = () => {
    return (
        <div className='videoContainer'>
            <video muted autoPlay className='videoplayer'>
                <source src="/effect2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='main-content'>
                <div className='content'>
                    <Hero />
                </div>
            </div>
        </div>
    );
}

export default Welcome;

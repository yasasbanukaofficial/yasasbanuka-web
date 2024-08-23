import React from 'react';
import styles from './Welcome.css';
import Hero from '@/app/components/organisms/Hero'


const Welcome = () => {
    return (
        <div className='videoContainer'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <video muted autoPlay className='videoplayer'>
                <source src="/effect2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='main-content'>
                <div className='content'>
                    <Hero />
                    <div className='icons'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='down-icon' viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m480-351 173-173-43-42-130 130-130-130-43 42 173 173Zm0 271q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className='mouse-icon' viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M480-80q-118 0-199-81t-81-199v-260q0-118 81-199t199-81q118 0 199 81t81 199v260q0 118-81 199T480-80Zm30-540h190q0-81-53-144t-137-74v218Zm-250 0h190v-218q-84 11-137 74t-53 144Zm219.79 480q91.21 0 155.71-64.35Q700-268.7 700-360v-200H260v200q0 91.3 64.29 155.65Q388.58-140 479.79-140Zm.21-420Zm30-60Zm-60 0Zm30 60Z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;

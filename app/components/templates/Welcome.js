import React from 'react';
import styles from './Welcome.css'; // Adjust the path according to your file structure

const Welcome = () => {
    return (
        <div className='videoContainer'>
            <video muted autoPlay className='videoplayer'>
                <source src="/effect1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='main-content'>

            </div>
        </div>
    );
}

export default Welcome;

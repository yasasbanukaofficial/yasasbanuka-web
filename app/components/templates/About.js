'use client'
import { useEffect, useRef, useState } from 'react';
import '@/app/components/templates/About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <div className="fade-container">
            <img
                src="/demonslayergif.gif"
                alt="Fade-in Image"
                className={`fade-in-image ${isVisible ? 'visible' : ''}`}
                ref={imageRef}
            />
            <div className='content'>
                <h11>Paper</h11>
            </div>
        </div>
    );
};

export default About;

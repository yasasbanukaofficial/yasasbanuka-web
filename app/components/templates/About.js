'use client'
import { useEffect, useRef, useState } from 'react';
import '@/app/components/templates/About.css';
import MainSection from '../molecules/MainSection';

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
            <div className='about-content'>
                <div className='info'>
                    <MainSection title='About Me' />
                    <MainSection description='Hi, I’m Yasas Banuka.' />
                    <MainSection description='As a student, I am currently studying Computer Science. I also have a passion to discover various paths on how to interact with technology.' />
                </div>
                <img
                    src='/profilepic.jpg'
                    className='profilepic'
                />
            </div>
        </div>
    );
};

export default About;

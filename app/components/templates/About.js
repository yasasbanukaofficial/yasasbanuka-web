'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import DemonSlayer from '@/public/demonslayergif.gif'
import ProfilePic from '@/public/profilepic.jpg'
import '@/app/components/templates/About.css';
import MainSection from '@/app/components/common/MainSection';
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
            <Image
                src={DemonSlayer}
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
                <Image
                    src={ProfilePic}
                    className='profilepic'
                />
            </div>
        </div>
    );
};

export default About;

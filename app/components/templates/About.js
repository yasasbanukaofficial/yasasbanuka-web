'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import DemonSlayer from '@/public/demonslayergif.gif'
import ProfilePic from '@/public/profilepic.jpg'
import '@/app/components/templates/About.css';
import MainSection from '@/app/components/common/MainSection';
import Socialmedia from '../organisms/SocialMedia';
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
            <div className='aboutme-info'>
                <Image
                    src={DemonSlayer}
                    alt="Fade-in Image"
                    className={`fade-in-image ${isVisible ? 'visible' : ''}`}
                    ref={imageRef}
                    priority
                />
                <div className='about-content'>
                    <div className='info'>
                        <MainSection title='About Me' />
                        <MainSection description='Hi, I’m Yasas Banuka.' />
                        <MainSection description='As a student studying Computer Science, I enjoy the process of learning and solving problems. I work on personal projects, so feel free to explore my work.' />
                        <div className='socials'>
                            <Socialmedia />
                        </div>
                    </div>
                    <Image
                        src={ProfilePic}
                        className='profilepic'
                        priority
                    />

                </div>
            </div>
        </div>
    );
};

export default About;

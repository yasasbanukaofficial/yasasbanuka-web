'use client'
import { useEffect, useRef, useState } from 'react';
import '@/app/components/molecules/fadeInImage.css'; // Import normal CSS

const FadeInImage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing once in view
                }
            },
            {
                threshold: 0.1, // Adjust threshold as needed
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
                src="/about-bgimg.jpg"
                alt="Fade-in Image"
                className={`fade-in-image ${isVisible ? 'visible' : ''}`}
                ref={imageRef}
            />
        </div>
    );
};

export default FadeInImage;

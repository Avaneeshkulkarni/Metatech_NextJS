
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const slides = [
        {
            src: "/images/CNC Tensile NEW.png",
            alt: "Metatech Industry Product Lineup",
            captionTitle: "Precision Metrology for Advanced Materials",
            captionText: "Discover our cutting-edge machines for superior material analysis and testing.",
            ctaText: "View All Products",
            ctaLink: "/products"
        },
        {
            src: "/images/ECM New by Swapnil Sir.png",
            alt: "State-of-the-Art Laboratory Equipment",
            captionTitle: "Unrivaled Accuracy in Lab Equipment",
            captionText: "From sample preparation to final analysis, trust our instruments for reliable results.",
            ctaText: "Request a Demo",
            ctaLink: "/contact"
        },
        {
            src: "/images/Microscope Metagraph Special SPL.png",
            alt: "CNC Machining Capabilities",
            captionTitle: "Engineering Excellence in Manufacturing",
            captionText: "Learn about our commitment to quality, innovation, and customer satisfaction.",
            ctaText: "Explore More.",
            ctaLink: "/products"
        },
        {
            src: "/images/Vobropol New n.png",
            alt: "CNC Machining Capabilities",
            captionTitle: "Engineering Excellence in Manufacturing",
            captionText: "Learn about our commitment to quality, innovation, and customer satisfaction.",
            ctaText: "Explore More.",
            ctaLink: "/products"
        },
        {
            src: "/images/Dual Auto Polisher Other.png",
            alt: "CNC Machining Capabilities",
            captionTitle: "Engineering Excellence in Manufacturing",
            captionText: "Learn about our commitment to quality, innovation, and customer satisfaction.",
            ctaText: "Explore More.",
            ctaLink: "/products"
        }
    ];

    const nextSlide = () => {
        setSlideIndex((prev) => (prev === slides.length ? 1 : prev + 1));
    };

    const prevSlide = () => {
        setSlideIndex((prev) => (prev === 1 ? slides.length : prev - 1));
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // 3000ms auto slide

        return () => clearInterval(interval);
    }, [slideIndex]);

    return (
        <section className="carousel-container">
            <div className="slideshow-wrapper">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide fade ${index + 1 === slideIndex ? 'active-slide' : ''}`}
                        style={{ display: index + 1 === slideIndex ? 'block' : 'none' }}
                    >
                        <img src={slide.src} alt={slide.alt} style={{ width: '100%' }} />
                        <div className="slide-caption">
                            <h1>{slide.captionTitle}</h1>
                            <p>{slide.captionText}</p>
                            <Link href={slide.ctaLink} className="cta-button">{slide.ctaText}</Link>
                        </div>
                    </div>
                ))}

                <a className="prev" onClick={prevSlide}>&#10094;</a>
                <a className="next" onClick={nextSlide}>&#10095;</a>
            </div>

            <div className="dot-container">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index + 1 === slideIndex ? 'active' : ''}`}
                        onClick={() => currentSlide(index + 1)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Carousel;

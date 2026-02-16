"use client";
import { useState, useEffect, useCallback } from 'react';

const MachineImageCarousel = ({ images, altPrefix = "Machine" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [currentIndex, images.length, nextSlide]);

    if (!images || images.length === 0) return null;

    if (images.length === 1) {
        return (
            <div className="machine-image-container">
                <img
                    src={images[0]}
                    alt={`${altPrefix}`}
                    className="machine-image"
                />
            </div>
        );
    }

    return (
        <div className="machine-carousel">
            <div className="machine-carousel-viewport">
                <img
                    src={images[currentIndex]}
                    alt={`${altPrefix} - View ${currentIndex + 1}`}
                    className="machine-carousel-image"
                />

                <button
                    className="machine-carousel-btn machine-carousel-prev"
                    onClick={prevSlide}
                    aria-label="Previous image"
                >
                    &#10094;
                </button>
                <button
                    className="machine-carousel-btn machine-carousel-next"
                    onClick={nextSlide}
                    aria-label="Next image"
                >
                    &#10095;
                </button>
            </div>

            <div className="machine-carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`machine-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MachineImageCarousel;

import React, { useState } from 'react';
import { useEffect } from 'react';

const PhotoCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 7000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full max-w-[22rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem] mx-auto p-4 rounded-lg bg-white drop-shadow-lg">
            <div className="relative w-full flex justify-center items-center">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`w-[25rem] h-[10rem] lg:h-[19rem] lg:w-[40rem] md:h-[18rem] md:w-[35rem] sm:h-[13rem] sm:w-[30rem]  rounded-md transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    />
                ))}
              <button
                    onClick={handlePrevClick}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-stone-500 hover:bg-stone-600 text-white p-2 rounded-full"
                >
                    <img src={`${process.env.PUBLIC_URL}/icons/next.svg`} alt="Previous" className="w-6 h-6 invert transform rotate-180" />
                </button>
                <button
                    onClick={handleNextClick}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-stone-500 hover:bg-stone-600 text-white p-2 rounded-full"
                >
                    <img src={`${process.env.PUBLIC_URL}/icons/next.svg`} alt="Next" className="w-6 h-6 invert" />
                </button>
            </div>
        </div>
    );
};

export default PhotoCarousel;
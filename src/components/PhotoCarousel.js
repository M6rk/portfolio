import React, { useState } from 'react';

const PhotoCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full w-[35rem] max-w-[40rem] mx-auto p-4 rounded-lg bg-white">
            <div className="relative w-full flex justify-center items-center">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`h-[50%] transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    />
                ))}
                <button
                    onClick={handlePrevClick}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                    &#9664;
                </button>
                <button
                    onClick={handleNextClick}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                    &#9654;
                </button>
            </div>
        </div>
    );
};

export default PhotoCarousel;
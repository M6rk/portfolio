import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InvalidRoute = () => {
    const navigate = useNavigate();

    // Fetch dark mode preference from localStorage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            return savedMode === 'true';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Apply the dark mode class to the HTML element
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-[#101010] text-gray-800 dark:text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl text-center mb-6">Oops! The page you're looking for doesn't exist.</p>
            <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-[#599aea] hover:bg-[#4a89d9] dark:bg-[#161616] dark:hover:bg-[#252525] text-white font-medium rounded-lg shadow-md transition-all duration-300"
            >
                Go Back to Home
            </button>
        </div>
    );
};

export default InvalidRoute;
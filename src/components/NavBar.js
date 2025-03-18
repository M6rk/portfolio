import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavBar() {
  const navigate = useNavigate();
    // Function to handle scrolling to sections
    const scrollToSection = (sectionId) => {
      // Check if we're on the homepage
      const isHomePage = window.location.pathname === '/';
      
      if (isHomePage) {
        // If on homepage, scroll to the section
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on homepage, navigate to homepage and then scroll
        navigate('/');
        // Need a small delay to ensure the page renders before scrolling
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if dark mode is saved in localStorage
    const savedMode = localStorage.getItem('darkMode');
    
    // If there's a saved preference, use it
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    
    // Otherwise check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  // Toggle the dark class on the html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };
  return (
    <nav className="navbar-container sticky top-0 z-20 bg-opacity-50">
      <div className="flex justify-center items-center p-6">
        <ul className="flex bg-[#599aea] bg-opacity-75 dark:bg-[#121212] dark:bg-opacity-95 space-x-0 lg:space-x-8 xl:space-x-8 md:space-x-8 border-[0.1rem] border-[#5093e5] dark:border-[#1A1A1A] rounded-xl px-0 py-2 text-white">
          <li
            className="cursor-pointer text-lg lg:text-xl font-light transition-all duration-200 hover:opacity-85 px-4 hover:animate-pulse"
            onClick={() => scrollToSection('about')}
          >
            About
          </li>
          <li
            className="cursor-pointer text-lg lg:text-xl font-light transition-all duration-200 hover:opacity-85 px-4 hover:animate-pulse"
            onClick={() => scrollToSection('portfolio')}
          >
            Portfolio
          </li>
          <li
            className="cursor-pointer text-lg lg:text-xl font-light transition-all duration-200 hover:opacity-85 px-4 hover:animate-pulse"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </li>
          <li
            className="cursor-pointer text-lg lg:text-xl flex items-center font-light transition-all duration-200 hover:opacity-85 px-4 hover:animate-pulse"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
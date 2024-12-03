import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function NavBar() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleImageClick = () => {
    if (!animate) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1000); // Adjust the timeout duration to match the animation duration
    }
  };
  return (
    <nav className="navbar-container bg-blue-500">
      <div className="flex justify-between items-center p-6 w-full">
        <ul className="flex space-x-8 text-white">
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:opacity-75"
            onClick={() => navigate('/portfolio')}
          >
            Home
          </li>
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:opacity-75"
            onClick={() => navigate('/about')}
          >
            About
          </li>
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:opacity-75"
            onClick={() => navigate('/projects')}
          >
            Portfolio
          </li>
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:opacity-75"
            onClick={() => navigate('/contact')}
          >
            Contact
          </li>
        </ul>
        <div className="flex justify-center items-center">
        <img
            src={`${process.env.PUBLIC_URL}/images/mark2.webp`}
            alt="Designed by Freepik"
            className={`w-0 lg:w-9 md:w-9 sm:w-9 cursor-help ${animate ? 'animate-spin animate-once animate-ease-in-out' : ''}`}
            onClick={handleImageClick}
            style={{ pointerEvents: animate ? 'none' : 'auto' }} // Disable pointer events during animation
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
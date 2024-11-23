import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function NavBar() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleImageClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000); // Reset animation after 1 second
  };
  return (
    <nav className="navbar-container bg-blue-500">
      <div className="flex justify-between items-center p-6 w-full">
        <ul className="flex space-x-8 text-white">
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:scale-105 hover:font-normal"
            onClick={() => navigate('/portfolio')}
          >
            Home
          </li>
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:scale-105 hover:font-normal"
            onClick={() => navigate('/about')}
          >
            About
          </li>
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:scale-105 hover:font-normal"
            onClick={() => navigate('/projects')}
          >
            Portfolio
          </li>
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:scale-105 hover:font-normal"
            onClick={() => navigate('/contact')}
          >
            Contact
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <img src={`${process.env.PUBLIC_URL}/images/mark.webp`}
          alt="Designed by Freepik" 
          className={`w-28 cursor-pointer ${animate ? 'animate-spin animate-once animate-ease-in-out' : ''}`}
          onClick={handleImageClick}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
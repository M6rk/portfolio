import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const navigate = useNavigate();
  
  return (
    <nav className="navbar-container bg-blue-400">
      <div className="flex justify-center items-center p-6">
        <ul className="flex bg-[#599aea] space-x-1 lg:space-x-8 xl:space-x-8 md:space-x-8 border-2 border-white rounded-xl px-0 py-2 text-white">
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:opacity-85 px-4 hover:animate-pulse"
            onClick={() => navigate('/')}
          >
            Home
          </li>
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:opacity-85 px-4 hover:animate-pulse"
            onClick={() => navigate('/about')}
          >
            About
          </li>
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:opacity-85 px-4 hover:animate-pulse"
            onClick={() => navigate('/portfolio')}
          >
            Portfolio
          </li>
          <li
            className="cursor-pointer text-xl font-light transition-all duration-200 hover:opacity-85 px-4 hover:animate-pulse"
            onClick={() => navigate('/contact')}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
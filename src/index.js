import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    // '/' path is the homepage/landingpage, TempHomePage should be replaced with the landing page
    path : '/',
    element : <HomePage />
  },
  {
    //portfolio page
    path : '/portfolio',
    element : <PortfolioPage />
  },
  {
    //portfolio page
    path : '/about',
    element : <AboutPage />
  },
  {
    //portfolio page
    path : '/contact',
    element : <ContactPage />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

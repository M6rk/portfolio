import NavBar from '../components/NavBar';
import { useEffect, useRef } from 'react';
import InfiniteScroll from '../components/InfiniteScroll';
const HomePage = () => {

    return (
        <>
            <div className="flex flex-col h-[28rem] bg-center bg-cover bg-blue-400 relative">
                <NavBar />
                <div className="flex justify-center items-center mt-8">
                    <h1 className="text-white text-[3rem] font-light text-center drop-shadow-md lg:text-[5rem] md:text-[4.7rem] sm:text-[4.5rem]">Mark Lovesey</h1>
                </div>
                <div className="flex justify-center items-center">
                    <h1 className="text-white text-[1.1rem] lg:text-[1.35rem] md:text-[1.35] sm:text-[1.3] font-normal text-center">4th Year Computer Science Major and English Minor at UBC</h1>
                </div>
                <div className="flex justify-center items-center mt-1">
                    <h2 className="text-white text-[1.1rem] lg:text-[1.25rem] md:text-[1.25] sm:text-[1.2] font-extralight text-center">
                        Bridging <span className="font-semibold text-white underline decoration-amber-300 decoration-double">Tech</span> & <span className="font-semibold underline text-white decoration-green-300 decoration-double">Humanities</span>
                    </h2>
                </div>
            </div>
            {/*Shape divider*/}
            <div className="absolute w-full overflow-hidden leading-none">
                <svg className="w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-400"></path>
                </svg>
            </div>
            <div className="bg-white p-10">
                <div className="flex justify-center items-center space-x-16">
                    <a href="https://github.com/M6rk" target="_blank">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/github.svg`}
                            alt="GitHub Logo"
                            className="w-16 mt-10 cursor-pointer hover:scale-110 transition-transform duration-200 bg-gray-100 p-4 rounded-xl"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/marklovesey/" target="_blank">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/linkedin.webp`}
                            alt="LinkedIn Logo"
                            className="w-16 mt-10 cursor-pointer hover:scale-110 transition-transform duration-200 bg-gray-100 p-4 rounded-xl"
                        />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=mark.lovesey03@gmail.com&amp;su=Hey%20Mark!" target="_blank">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/gmail.webp`}
                            alt="Gmail Logo"
                            className="w-16 mt-10 cursor-pointer hover:scale-110 transition-transform duration-200 bg-gray-100 p-4 py-5 rounded-xl"
                        />
                    </a>
                </div>
            </div>
            <div className="bg-white justify-items-center">
            <InfiniteScroll />
            </div>
            <div className="bg-blue-400 mt-16 pb-64">

            </div>
        </>
    );
};

export default HomePage;
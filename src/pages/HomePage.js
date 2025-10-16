import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';
import InfiniteScroll from '../components/InfiniteScroll';

const HomePage = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    // Effect to handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            // Show button when user scrolls down 300px
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className="bg-center bg-cover bg-white dark:bg-[#141414]">
                <div className="flex flex-col h-[22rem] bg-center bg-cover bg-blue-400 dark:bg-[#101010] relative">
                    <button
                        onClick={scrollToTop}
                        className={`fixed bottom-6 right-6 z-50 bg-[#5490d8] dark:bg-[#262525] dark:bg-opacity-75 hover:bg-[#4c84c9] dark:hover:bg-[#252525] text-white p-3 rounded-full shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
                        aria-label="Scroll to top"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                            />
                        </svg>
                    </button>
                    <NavBar />
                    <section id="home"></section>
                    <div className="flex justify-center items-center mt-8">
                        <h1 className="text-white dark:text-[#DFDFDF] transition-all duration-200 text-[2.8rem] font-light text-center drop-shadow-md lg:text-[5rem] md:text-[4.7rem] sm:text-[4.5rem]">Mark Lovesey</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="text-white dark:text-[#959595] transition-all duration-200 w-[20rem] lg:w-[25rem] md:w-[20rem] sm:w-[20rem] text-[1.1rem] lg:text-[1.35rem] md:text-[1.35] sm:text-[1.3] font-normal text-center"><span className="text-violet-200 dark:text-violet-300">PHP</span> & <span className="text-blue-200 dark:text-[#0BB3D4]">Tailwind</span> Enjoyer</h1>
                    </div>
                </div>
                {/*Shape divider*/}
                <div className="absolute w-full overflow-hidden leading-none">
                    <svg className="transition-all duration-200 w-full h-6 lg:h-12 md:h-12 sm:h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-400 dark:fill-[#101010]"></path>
                    </svg>
                </div>
                <div className="bg-white dark:bg-[#141414] p-10">
                    <div className="flex justify-center items-center space-x-16">
                        {/* GitHub */}
                        <a href="https://github.com/M6rk" target="_blank" className="mt-10">
                            <div className="w-16 cursor-pointer hover:scale-110 transition-transform duration-300 bg-gray-100 dark:bg-[#121212] dark:hover:bg-[#1E1E1E] p-4 rounded-xl">
                                <svg viewBox="0 0 24 24" className="fill-black dark:fill-white">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/marklovesey/" target="_blank" className="mt-10">
                            <div className="w-16 cursor-pointer hover:scale-110 transition-transform duration-300 bg-gray-100 dark:bg-[#121212] dark:hover:bg-[#1E1E1E] p-4 rounded-xl">
                                <svg viewBox="0 0 24 24" className="fill-[#007FBC] dark:fill-white">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                        </a>
                        {/* Gmail/Email */}
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mark.lovesey03@gmail.com&su=Hey%20Mark!" target="_blank" className="mt-10">
                            <div className="w-16 cursor-pointer hover:scale-110 transition-transform duration-300 bg-gray-100 dark:bg-[#121212] dark:hover:bg-[#1E1E1E] p-4 rounded-xl">
                                <svg viewBox="0 0 24 24" className="fill-[#DD5044] dark:fill-white">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="bg-white dark:bg-[#141414] flex justify-center">
                    <InfiniteScroll />
                </div>
                <div className="absolute w-full overflow-hidden leading-none mt-[4.1rem] md:mt-16 lg:mt-16 sm:mt-16">
                    <svg className="transition-all duration-200 w-full h-6 lg:h-12 md:h-16 sm:h-6" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="fill-blue-400 dark:fill-[#101010]"></path>
                    </svg>
                </div>
                <div className="bg-blue-400 dark:bg-[#101010] mt-[5.5rem] lg:mt-[7rem] md:mt-[7.8rem] pb-[5rem]">
                    <section id="about"></section>
                    <div className="max-w-[85%] xl:max-w-[60%] lg:max-w-[75%] md:max-w-[60%] sm:max-w-[60%] mx-auto px-4 transition-all duration-200 mt-16">
                        {/*About me*/}
                        <h1 className="text-white font-semibold dark:text-[#DFDFDF] text-left text-[2rem] transition-all duration-200 mb-2 pt-8 px-6">About Me</h1>
                        <p className="text-white text-[1rem] dark:text-[#959595] transition-all duration-200 px-6">
                            Hi, I’m Mark! I’ve recently completed my Bachelor of Arts in Computer Science with a Minor in English @ UBC. I was born in Kelowna, BC, Canada. I speak English natively and French fluently. I enjoy building unique web apps that help others and in my free time I like going camping, hiking, and fishing. If you have a project idea, feel free to contact me!
                        </p>
                        {/*Computer Science*/}
                        <div className="flex flex-col lg:flex-row lg:gap-16">
                            <div className="p-6">
                                <h2 className="text-white font-medium dark:text-[#DFDFDF] text-left text-[1.4rem] transition-all duration-200 mt-2 mb-2">
                                    Computer Science
                                </h2>
                                <p className="text-white text-[1rem] dark:text-[#959595] transition-all duration-200">
                                    Throughout my degree, I took a variety of courses from Data Structures & Algorithms, Web Development, and Project Management to Software Engineering and Data Analysis. I’m currently developing websites for two research projects @ UBC and am working to develop a walking app that tracks your steps through fictional journeys.
                                </p>
                            </div>
                            {/*English*/}
                            <div className="p-6">
                                <h2 className="text-white font-medium dark:text-[#DFDFDF] text-left text-[1.4rem] transition-all duration-200 mt-2 mb-2">
                                    English
                                </h2>
                                <p className="text-white text-[1rem] dark:text-[#959595] transition-all duration-200">
                                    I chose to pursue a minor in English because I wanted a chance to improve my ability at giving verbal presentations and at researching hyper-specific subject areas. I found that I was able to incorporate my technical proficiency into my English courses. For instance, in one English course, I developed a website for educators to teach children about climate change.
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-white dark:border-[#959595] border-t-2 max-w-[65%] xl:max-w-[60%] lg:max-w-[75%] md:max-w-[60%] sm:max-w-[60%] mx-auto mt-4 mb-4" />
                    <section id="portfolio"></section>
                    {/* Cards section */}
                    <div>
                        <div className="max-w-[85%] xl:max-w-[60%] lg:max-w-[75%] md:max-w-[60%] sm:max-w-[60%] mx-auto px-4 transition-all duration-200 mt-8">
                            <h2 className="text-white font-semibold dark:text-[#DFDFDF] text-left text-[2rem] mb-6 px-6 mt-8">Projects</h2>
                        </div>
                    </div>
                    <div className="max-w-[90%] xl:max-w-[53%] lg:max-w-[80%] md:max-w-[50%] sm:max-w-[60%] mx-auto px-4 transition-all duration-200">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* IRIS */}
                            <div className="bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#5B9CEE] dark:border-[#252525]">
                                {/* Image with overlay on hover */}
                                <div className="relative overflow-hidden group">
                                    <img className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" src="/images/iris1.gif" alt="IRIS" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                                        <a href="https://github.com/COSC-499-W2024/capstone-project-team-1-003" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            View Code
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="dark:text-[#DFDFDF] font-medium text-xl mb-2 text-gray-800">Insurance Review & Analysis System</h3>

                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap mb-4">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">Express.js</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">React</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">Tailwind CSS</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">JavaScript</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">MySQL</span>
                                    </div>

                                    {/* Role */}
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 dark:text-[#DFDFDF]">
                                            <span className="text-blue-600 dark:text-blue-400">Role:</span> Full Stack Development, UX/UI Design, & Documentation
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-[0.95rem]">
                                        IRIS is an insurance review and analysis system created during my capstone group project. Myself and my four team members are working on this application for a total of two semesters in competition with other groups for our client BFL Canada.
                                    </p>
                                </div>
                            </div>
                            {/* IRIS */}
                            <div className="bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#5B9CEE] dark:border-[#252525]">
                                {/* Image with overlay on hover */}
                                <div className="relative overflow-hidden group">
                                    <img className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" src="/images/is2.png" alt="IRIS" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                                        <a href="https://github.com/COSC-499-W2024/capstone-project-team-1-003" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            View Code
                                        </a>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="dark:text-[#DFDFDF] font-medium text-xl mb-2 text-gray-800">Inflation Station</h3>

                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap mb-4">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">PHP</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">HTML5</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">CSS3</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">JavaScript</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">MySQL</span>
                                    </div>

                                    {/* Role */}
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 dark:text-[#DFDFDF]">
                                            <span className="text-blue-600 dark:text-blue-400">Role:</span> Lead Frontend Development, Backend Development, Design, Documentation
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-[0.95rem]">
                                        Inflation Station is a grocery price tracker web-app that enables users to rate products and view product price fluctuations in real-time.
                                        The application features an administrator dashboard to manage user interactions, approve the publication of new projects, and view graphed site analytics.
                                    </p>
                                </div>
                            </div>
                            {/* EduQuest */}
                            <div className="bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#5B9CEE] dark:border-[#252525]">
                                {/* Image with overlay on hover */}
                                <div className="relative overflow-hidden group">
                                    <img className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" src="/images/eduquestgif1.gif" alt="Project 2" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                                        <a href="https://github.com/chpsmstr/eduQuest.git" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            View Code
                                        </a>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="font-medium text-xl mb-2 text-gray-800 text-gray-800 dark:text-[#DFDFDF]">EduQuest</h3>

                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap mb-4">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">NEXT.js</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">Tailwind CSS</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">Typescript</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">React</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">MySQL</span>
                                    </div>

                                    {/* Role */}
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 dark:text-[#DFDFDF]">
                                            <span className="text-blue-600 dark:text-blue-400">Role:</span> Scrum Master, Full Stack Development, Design, and Documentation
                                        </p>
                                    </div>
                                    {/* Description */}
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 dark:text-[#DFDFDF] text-[0.95rem]">
                                        EduQuest is an innovative student e-learning platform where teachers can operate classroom spaces with the creation of multiple-choice quizzes and asynchronous essay responses. Students can track their grades, interact with other students and complete assignments.
                                    </p>
                                </div>
                            </div>
                            {/* TBA */}
                            <div className="bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#5B9CEE] dark:border-[#252525]">
                                {/* Image with overlay on hover */}
                                <div className="relative overflow-hidden group">
                                    <img className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" src="/images/weatheredroads.png" alt="Project 2" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                                        <a href="https://github.com/M6rk/weathered-roads" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            View Code
                                        </a>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="font-medium text-xl mb-2 text-gray-800 dark:text-[#DFDFDF]">Weathered Roads</h3>

                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap mb-4">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">C#</span>

                                    </div>

                                    {/* Role */}
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 dark:text-[#DFDFDF]">
                                            <span className="text-blue-600 dark:text-blue-400">Role:</span> Developer
                                        </p>
                                    </div>
                                    {/* Description */}
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 dark:text-[#DFDFDF] text-[0.95rem]">
                                        A fully-fledged racing game made by myself and my three teammates in Unity for our two week game jam. Features three handmade trakcs, weather & speed modifiers, and leaderboards. <a href="https://nolannish.itch.io/weathered-roads" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">Play our game here!</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
{/*                     
                    <hr className="border-white dark:border-[#959595] border-t-2 max-w-[65%] xl:max-w-[60%] lg:max-w-[75%] md:max-w-[60%] sm:max-w-[60%] mx-auto mt-12 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20 mb-4" />
                    <div className="max-w-[85%] xl:max-w-[60%] lg:max-w-[75%] md:max-w-[60%] sm:max-w-[60%] mx-auto px-4 transition-all duration-200 mt-8">
                        <h2 className="text-white font-semibold dark:text-[#DFDFDF] text-left text-[2rem] mb-6 px-6 mt-8">Design</h2>
                    </div>
                    <div className="max-w-[90%] xl:max-w-[53%] lg:max-w-[80%] md:max-w-[50%] sm:max-w-[60%] mx-auto px-4 transition-all duration-200">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            /* Left column with stacked images 
                            <div className="flex flex-col space-y-8">
                                <figure className="max-w-lg">
                                    <img className="h-auto max-w-full rounded-lg" src="/images/lowpolylandscapetest.png" alt="Low-poly Landscape" />
                                    <figcaption className="mt-2 text-sm text-center text-gray-100 dark:text-gray-400">Low-poly Landscape</figcaption>
                                </figure>
                                <figure className="max-w-lg">
                                    <img className="h-auto max-w-full rounded-lg" src="/images/twitban.jpg" alt="Twitter Banner" />
                                    <figcaption className="mt-2 text-sm text-center text-gray-100 dark:text-gray-400">Twitter Banner</figcaption>
                                </figure>
                                <figure className="max-w-lg">
                                    <img className="h-auto max-w-full rounded-lg" src="/images/rnvalentines.png" alt="Renatus Network Ad image" />
                                    <figcaption className="mt-2 text-sm text-center text-gray-100 dark:text-gray-400">Commissioned Valentines Day Event Banner</figcaption>
                                </figure>
                            </div>

                            /* Right column with UAD flyer 
                            <figure className="max-w-lg h-full flex flex-col">
                                <img className="h-auto max-w-full rounded-lg flex-grow object-cover" src="/images/UADflyer.png" alt="UAD Soccer Program Poster" />
                                <figcaption className="mt-2 text-sm text-center text-gray-100 dark:text-gray-400">UAD Soccer Program Poster</figcaption>
                            </figure>
                        </div>
                    </div> */}
                    <hr className="border-white dark:border-[#959595] border-t-2 max-w-[65%] xl:max-w-[60%] lg:max-w-[75%] md:max-w-[60%] sm:max-w-[60%] mx-auto mt-12 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20 mb-4" />
                    <div className="max-w-[85%] xl:max-w-[60%] lg:max-w-[75%] md:max-w-[60%] sm:max-w-[60%] mx-auto px-4 transition-all duration-200 mt-8">
                        <h2 className="text-white font-semibold dark:text-[#DFDFDF] text-left text-[2rem] mb-6 px-6 mt-8">Contract Work</h2>
                    </div>
                    {/* RESPECT Magazine */}
                    <div className="max-w-[90%] xl:max-w-[53%] lg:max-w-[80%] md:max-w-[50%] sm:max-w-[60%] mx-auto px-4 transition-all duration-200">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              <div className="bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#5B9CEE] dark:border-[#252525]">
                                {/* Image with overlay on hover */}
                                <div className="relative overflow-hidden group">
                                    <img className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" src="/images/tsascreenshot.jpg" alt="Project 2" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                                        <a href="https://okencs-stearingai-2024.sites.olt.ubc.ca/" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center">
                                            <img
                                                src="images/webglobe.svg"
                                                alt="Web Icon"
                                                className="w-4 h-4 mr-2 invert"
                                            />
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="font-medium text-xl mb-2 text-gray-800 dark:text-[#DFDFDF]">The Salvation Army of Canada</h3>

                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap mb-4">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">WordPress</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">JavaScript</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">PHP</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">HTML</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">CSS</span>

                                    </div>
                                    {/* Role */}
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 dark:text-[#DFDFDF]">
                                            <span className="text-blue-600 dark:text-blue-400">Role:</span> Admin and IT Assistant
                                        </p>
                                        <p className="text-sm font-medium text-gray-400 dark:text-[#c4c4c4]">
                                            June 2025 - Aug 2025
                                        </p>
                                    </div>
                                    {/* Description */}
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 dark:text-[#DFDFDF] text-[0.95rem]">
                                        I worked as a IT and Admin Assistant for the <a href="https://kelownasalvationarmy.ca/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">The Okanagan Central Salvation Army</a> where I developed their new WordPress site, a full-stack room and fleet booking platform, and provided IT Support for staff members.
                                    </p>
                                </div>
                            </div>
                        {/* here */}
                        <div className="bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#5B9CEE] dark:border-[#252525]">
                                {/* Image with overlay on hover */}
                                <div className="relative overflow-hidden group">
                                    <img className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" src="/images/respect.png" alt="Project 2" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                                        <a href="https://respect.ubc.ca/" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center">
                                            <img
                                                src="images/webglobe.svg"
                                                alt="Web Icon"
                                                className="w-4 h-4 mr-2 invert"
                                            />
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="font-medium text-xl mb-2 text-gray-800 dark:text-[#DFDFDF]">UBC's RESPECT Magazine</h3>

                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap mb-4">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">WordPress</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">HTML</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">CSS</span>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md mr-2 mb-2">PHP</span>

                                    </div>

                                    {/* Role */}
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 dark:text-[#DFDFDF]">
                                            <span className="text-blue-600 dark:text-blue-400">Role:</span> Research Assistant
                                        </p>
                                        <p className="text-sm font-medium text-gray-400 dark:text-[#c4c4c4]">
                                            June 2023 - June 2024
                                        </p>
                                    </div>
                                    {/* Description */}
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 dark:text-[#DFDFDF] text-[0.95rem]">
                                        I worked as a Research Assistant for <a href="https://respect.ubc.ca/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">UBC's RESPECT Magazine</a> where I led the development of a new website to house the project.
                                    </p>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                    <hr className="border-white dark:border-[#959595] border-t-2 max-w-[65%] xl:max-w-[60%] lg:max-w-[75%] md:max-w-[60%] sm:max-w-[60%] mx-auto mt-12 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20 mb-4" />
                    <div className="max-w-[85%] xl:max-w-[60%] lg:max-w-[75%] md:max-w-[60%] sm:max-w-[60%] mx-auto px-4 transition-all duration-200 mt-8">
                        {/* Contact Text */}
                        <div className="flex flex-col lg:flex-row gap-4">
                            <section id="contact"></section>
                            <div className="px-6 xl:px-1 lg:px-1">
                                <h2 className="text-white font-semibold dark:text-[#DFDFDF] text-left text-[2rem] transition-all duration-200 mb-1">Contact</h2>
                                <p className="text-white text-[1rem] dark:text-[#959595] transition-all duration-200">
                                    Have a question for me? Feel free to contact me here or at <span className="underline">mark.lovesey03@gmail.com</span>.
                                </p>
                            </div>
                            {/* Contact Form */}
                            <div className="xl:w-[55%] lg:w-[100%]">
                                <div className="bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg p-6 border-[0.1rem] border-[#5093e5] dark:border-[#1A1A1A]">
                                    <form
                                        id="bootstrapForm"
                                        className="space-y-4"
                                        onSubmit={(e) => {
                                            e.preventDefault(); // Prevent default form submission
                                            const form = e.target;
                                            const formData = new FormData(form);

                                            // Submit the form data using fetch
                                            fetch("https://docs.google.com/forms/d/e/1FAIpQLScRuYM6GkbNGqPrQgnelPAVzgTsu4TRt2LNmUz2AbtlVdyDxg/formResponse", {
                                                method: "POST",
                                                body: formData,
                                                mode: "no-cors", // Prevent CORS issues
                                            })
                                                .then(() => {
                                                    alert("Form submitted successfully. Thank you!"); // Show success message
                                                    form.reset(); // Reset the form fields
                                                })
                                                .catch(() => {
                                                    alert("There was an error submitting the form. Please try again later.");
                                                });
                                        }}
                                    >
                                        <div>
                                            <input
                                                type="email"
                                                id="300388543"
                                                name="entry.300388543"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none transition-colors duration-200"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                id="1687892361"
                                                name="entry.1687892361"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none transition-colors duration-200"
                                                placeholder="Subject"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                id="203073163"
                                                name="entry.203073163"
                                                rows="6"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none transition-colors duration-200 resize-none"
                                                placeholder="Your message"
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="flex justify-center pt-2">
                                            <button
                                                type="submit"
                                                className="px-6 py-2.5 bg-[#599aea] hover:bg-[#4a89d9] dark:bg-[#161616] dark:hover:bg-[#252525] text-white font-medium rounded-lg transition-colors duration-200"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
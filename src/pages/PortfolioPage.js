import React from 'react';
import NavBar from '../components/NavBar';
import PhotoCarousel from '../components/PhotoCarousel';

const PortfolioPage = () => {
    const eduQuestImages = [
        `${process.env.PUBLIC_URL}/images/eduquestgif1.gif`,
        `${process.env.PUBLIC_URL}/images/eduquestimage2.png`,
        `${process.env.PUBLIC_URL}/images/eduquestimage3.png`,
    ];
    const iSImages = [
        `${process.env.PUBLIC_URL}/images/is1.png`,
        `${process.env.PUBLIC_URL}/images/is2.png`,
        `${process.env.PUBLIC_URL}/images/is3.png`,
    ];
    const irisImages = [
        `${process.env.PUBLIC_URL}/images/iris1.gif`,
        `${process.env.PUBLIC_URL}/images/iris2.gif`,
        `${process.env.PUBLIC_URL}/images/iris3.png`,
    ];
    const designImages = [
        { src: `${process.env.PUBLIC_URL}/images/markban.png`, caption: 'Social Banner' },
        { src: `${process.env.PUBLIC_URL}/images/alma2.png`, caption: 'Social Banner' },
        { src: `${process.env.PUBLIC_URL}/images/conceptrender.png`, caption: 'Character Perspective Render' },
        { src: `${process.env.PUBLIC_URL}/images/lowpolylandscapetest.png`, caption: 'Lowpoly Landscape Render' },
    ];
    return (
        <>
            <style>
                {`
               @font-face {
                    font-family: 'Lemon Milk';
                    src: url('${process.env.PUBLIC_URL}/fonts/lemonmilk_light.otf') format('opentype');
                    font-weight: 300;
                    font-style: normal;
                }
                     @font-face {
                    font-family: 'Lemon Milk';
                    src: url('${process.env.PUBLIC_URL}/fonts/lemonmilk_medium.otf') format('opentype');
                    font-weight: 500;
                    font-style: normal;
                }
                `}
            </style>
            <div className="flex flex-col min-h-screen bg-cover bg-center bg-blue-400">
                <NavBar />
                <div className="flex justify-center items-center">
                    <div className="w-[90rem] py-8 rounded-md lg:max-w-[90rem] md:max-w-[90rem] sm:max-w-[90rem] max-w-[30rem]">
                        <h1 className="text-[3.5rem] text-center text-stone-900 text-white" style={{ fontFamily: 'Lemon Milk', fontWeight: 500 }}>PORTFOLIO</h1>
                        <h2 className="text-[2.5rem] text-center lg:text-left md:text-left sm:text-left text-stone-900 text-white" style={{ fontFamily: 'Lemon Milk', fontWeight: 300 }}>DEVELOPMENT</h2>
                        <hr className="border-4 border-blue-200 mb-4"></hr>
                        <h3 className="pl-4 font-medium text-[1.5rem] text-center lg:text-left md:text-left sm:text-left text-white">EduQuest - <span className="font-normal italic">Educational Tool</span></h3>
                        <div className="flex justify-center items-center">
                            <img src={`${process.env.PUBLIC_URL}/images/eduquestlogo.webp`} className="w-[17rem] rounded-md" alt="Mark Lovesey" />
                        </div>
                        <div className="flex justify-center items-center mb-6">
                            <PhotoCarousel images={eduQuestImages} />
                        </div>
                        <div className="flex justify-center items-center mb-6">
                        
                            <div className="bg-amber-400 rounded-xl min-w-[80%] max-w-[80%] p-4">
                                <p className="text-white text-left"><strong>Stack:</strong> NEXT.js, Tailwind CSS, Typescript, React<br></br>
                                    <strong>Role:</strong> Scrum Master, Full Stack Development, Design, and Documentation<br></br>
                                    <a className="underline" target="_blank" href="https://github.com/chpsmstr/eduQuest">Repository</a></p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-orange-400 rounded-xl min-w-[80%] max-w-[80%] p-4">
                                <p className="text-white text-left">EduQuest is an innovative student e-learning platform where teachers can operate classroom spaces with the creation of multiple-choice quizzes and asynchronous essay responses.
                                    This application sets itself apart by focusing on a retro video-game theme to entice students to learn on the platform. Students can track their progress/grades, interact with other students and complete assignments.
                                    Administrators can create a school space, within these spaces they can assign teachers, enroll students, and perform space moderation.</p>
                            </div>
                        </div>
                        <hr className="border-4 border-blue-200 mb-4"></hr>
                        <h3 className="pl-4 font-medium text-[1.5rem] text-white text-center lg:text-left md:text-left sm:text-left">Inflation Station - <span className="font-normal italic">Grocery Price Tracker & Community Hub</span></h3>
                        <div className="flex justify-center items-center">
                            <img src={`${process.env.PUBLIC_URL}/images/islogo.webp`} className="w-[12rem] p-4 rounded-md" alt="Mark Lovesey" />
                        </div>
                        <div className="flex justify-center items-center mb-6">
                            <PhotoCarousel images={iSImages} />
                        </div>
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-green-400 rounded-xl min-w-[80%] max-w-[80%] p-4">
                                <p className="text-white text-left"><strong>Stack:</strong> PHP, HTML5, CSS3, JavaScript, JQuery, MySQL<br></br>
                                    <strong>Role:</strong> Lead Frontend Development, Backend Development, Design, Documentation<br></br>
                                    <a className="underline" target="_blank" href="https://github.com/Daniel-Penner/Inflation-Station">Repository</a></p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-emerald-500 rounded-xl min-w-[80%] max-w-[80%] p-4">
                                <p className="text-white text-left">Inflation Station is a grocery price tracker web-app that enables users to rate products and view product price fluctuations in real-time. 
                                    This application focuses on providing users with the lowest grocery prices near them. The application features an administrator dashboard to manage user interactions, approve the publication of new projects, and view graphed site analytics.</p>
                            </div>
                        </div>
                        <hr className="border-4 border-blue-200 mb-4"></hr>
                        <h3 className="pl-4 font-medium text-[1.5rem] text-white text-center lg:text-left md:text-left sm:text-left">IRIS - <span className="font-normal italic">Insurance Review & Inspection System</span></h3>
                        <div className="flex justify-center items-center">
                            <img src={`${process.env.PUBLIC_URL}/images/white_iris_transparent.webp`} className="w-[13rem] p-6 rounded-md" alt="Mark Lovesey" />
                        </div>
                        <div className="flex justify-center items-center mb-6">
                            <PhotoCarousel images={irisImages} />
                        </div>
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-sky-400 rounded-xl min-w-[80%] max-w-[80%] p-4">
                                <p className="text-white text-left"><strong>Stack:</strong> Express.js, React, Tailwind CSS, JavaScript, MySQL<br></br>
                                    <strong>Role:</strong> Full Stack Development, UX/UI Design, & Documentation<br></br>
                                    Repository</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-cyan-400 rounded-xl min-w-[80%] max-w-[80%] p-4">
                                <p className="text-white text-left">IRIS is an insurance review and analysis system created during my capstone group project. 
                                    Myself and my four team members are working on this application for a total of two semesters in competition with other groups for our client BFL Canada.</p>
                            </div>
                        </div>
                        <h2 className="text-[2.5rem] text-left text-stone-900 text-white text-center lg:text-left md:text-left sm:text-left" style={{ fontFamily: 'Lemon Milk', fontWeight: 300 }}>DESIGN</h2>
                        <hr className="border-4 border-blue-200 mb-4"></hr>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {designImages.map((image, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <img src={image.src} alt={image.caption} className="w-full h-auto rounded-md" />
                                    <p className="font-normal text-white underline decoration-blue-300 decoration-double">{image.caption}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioPage;
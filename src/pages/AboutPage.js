import React from 'react';
import NavBar from '../components/NavBar';
import AnimatedButton from '../components/AnimatedButton';

const AboutPage = () => {
    async function copyField() {
        const email = "mark.lovesey03@gmail.com";
        try {
            await navigator.clipboard.writeText(email);
            alert("Email has been copied to clipboard.");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    }
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
            <div className="flex flex-col min-h-screen bg-cover bg-center bg-blue-400 overflow-hidden">
                <NavBar />
                <div className="flex justify-center items-start p-6 space-x-6 pt-12 bg-center bg-blue-400">
                    <div className="flex flex-col space-y-6">
                        <img src={`${process.env.PUBLIC_URL}/images/markphoto.png`} className="w-0 lg:w-[25rem] md:w-0 rounded-md" alt="Mark Lovesey" />
                        <img src={`${process.env.PUBLIC_URL}/images/sky.jpg`} className="w-0 lg:w-[25rem] lg:h-[30.32rem] md:w-0 md:h-0 rounded-md" alt="Mark Lovesey" />
                    </div>
                    <div className="bg-white p-6 rounded-md lg:max-w-[60rem] md:max-w-[60rem] sm:max-w-[60rem] max-w-[20rem]">
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-[2.8rem] text-center text-stone-900 selection:bg-blue-300" style={{ fontFamily: 'Lemon Milk', fontWeight: 300 }}>ABOUT ME</h1>
                            <p className="text-md selection:bg-blue-100">
                                Hi I'm Mark👋. I'm currently pursuing a Bachelor of Arts with a Major in Computer Science and a Minor in English. My native language is English, but I am also fluent in French through the completion of my dual dogwood diploma and upkeep with Duolingo. This high school diploma entails a completion of both English and French education through elementary to secondary. In my free time I enjoy playing guitar, hiking, biking, and skate-skiing.
                            </p>
                            <h2 className="text-2xl selection:bg-blue-300" style={{ fontFamily: 'Lemon Milk', fontWeight: 300 }}>Computer Science</h2>
                            <p className="text-md selection:bg-blue-200">
                                I chose to major in Computer Science as I have always had a passion for technology and I wanted to learn how to create applications that could aid people in everyday life.
                                Throughout my degree, I learned a variety of different topics from Data Structures, Web Development, and Software Engineering to Data Analysis,
                                Recently, I have developed an interest in researching accessible website practices and more broadly the core principles of HCI.
                            </p>
                            <h2 className="text-2xl selection:bg-blue-300" style={{ fontFamily: 'Lemon Milk', fontWeight: 300 }}>English</h2>
                            <p className="text-md selection:bg-blue-200">
                                I chose to pursue a minor in English because I wanted to improve my ability research a range of different topics and sharing my findings in written form.
                                I had a number of opportunities while pursuing my minor to incooperate Computer Science.
                                For instance, in one English course I developed a website where for educators and parents to help teach the younger generation about climate change and misinformation.
                                During the development of this website I found that there did not exist a free HTML multiple-choice quiz generator.
                                Therefore, I created a simple generator using HTML, CSS, & JavaScript that would allow educators to create quizzes for their students on CMS cites like Weebly, Wix, etc. free of charge.
                            </p>
                            <hr></hr>
                            <div className="flex justify-center items-center p-2 space-x-6">
                                <AnimatedButton text="Portfolio" link="projects" color1="#60A5FA" color2="#5492dd" textColor="#ffffff" />
                                <AnimatedButton text="Resume" link="resume" color1="#ffff14" color2="#d2dd56" textColor="#2d2d2d" />
                            </div>
                            <hr></hr>
                            <p className="text-md selection:bg-blue-200">
                                This degree has so far allowed me to advance my programming and digital design abilities while also learning how to communicate effectively across disciplines.
                            </p>
                            <p className="text-md selection:bg-blue-100"> 
                                Thank you for your time and you can connect with me at <span className="underline cursor-pointer" onClick={copyField} style={{ cursor: 'pointer'}}>
                                    mark.lovesey03@gmail.com
                                </span> or through <a className="underline" href="/contact">the form</a>.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AboutPage;
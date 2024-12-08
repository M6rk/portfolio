import React from 'react';
import NavBar from '../components/NavBar';

const ContactPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-cover bg-center bg-blue-400">
                <NavBar />
                <div className="flex justify-center items-center">
                <img src={`${process.env.PUBLIC_URL}/images/wip.png`} className="w-[25rem] rounded-md" alt="WIP" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-white text-3xl">mark.lovesey03@gmail.com</h1>
                    <h2 className="text-white mt-4 text-xl">Contact Form Coming Soon!</h2>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
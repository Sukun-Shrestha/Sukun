import React, { useState, useEffect } from "react";
import avatarImg from "../../assets/sukun.png";

const Home = () => {
    const fullText =
        "I am a passionate Frontend Developer who enjoys creating modern, responsive, and user-friendly websites. I work with technologies such as HTML, CSS, JavaScript, React, and Bootstrap to turn ideas and designs into interactive web experiences. I focus on writing clean code, creating attractive interfaces, and continuously improving my skills through new projects and challenges.";

    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(timer);
        }, 15);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-6 md:p-20 pb-32 md:pb-40 mt-20 md:mt-28 gap-10 md:gap-0">

            <div className="w-full md:w-2/4 md:pt-10 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold leading-normal tracking-tighter">
                    Hi, I am Sukun Shrestha
                </h1>

                <h1 className="text-2xl md:text-5xl animate-pulse">
                    Frontend Developer
                </h1>

                <br />

                <p className="text-base md:text-xl">
                    {typedText}
                    <span className="animate-pulse">|</span>
                </p>

                {/* <button className="mt-8 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 rounded-3xl bg-[#465697]">
                    Download CV
                </button> */}
            </div>

            <div className="w-full md:w-auto flex justify-center">
                <img
                    className="w-56 sm:w-72 md:w-[300px] lg:w-[693px] object-contain -mt-10 md:-mt-44 ml-29 md:ml-80"
                    src={avatarImg}
                    alt="Sukun Shrestha"
                />
            </div>

        </div>
    );
};

export default Home;
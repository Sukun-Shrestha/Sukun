import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full md:w-2/4 md:pt-10 text-center md:text-left"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold leading-normal tracking-tighter"
                >
                    Hi, I am Sukun Shrestha
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="text-2xl md:text-5xl animate-pulse"
                >
                    Frontend Developer
                </motion.h1>

                <br />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base md:text-xl"
                >
                    {typedText}
                    <span className="animate-pulse">|</span>
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-full md:w-auto flex justify-center"
            >
                <img
                    className="w-56 sm:w-72 md:w-[300px] lg:w-[693px] object-contain -mt-10 md:-mt-44 ml-29 md:ml-80"
                    src={avatarImg}
                    alt="Sukun Shrestha"
                />
            </motion.div>

        </div>
    );
};

export default Home;
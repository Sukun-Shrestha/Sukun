import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import avatarImg from "./../../../src/assets/sukun.jpg";

const Home = () => {
    const fullText =
        "I am a passionate Frontend Developer who enjoys creating modern, responsive, and user-friendly websites. I work with technologies such as HTML, CSS, JavaScript, React, and Bootstrap to turn ideas and designs into interactive web experiences. I focus on writing clean and organized code, creating attractive interfaces, and making websites that work smoothly across different devices. I enjoy learning new technologies, exploring creative ideas, and improving my development skills through projects and challenges. My goal is to continuously grow as a developer and build meaningful, engaging, and high-quality web experiences for users.";

    const [typedText, setTypedText] = useState("");
    const [avatarSrc, setAvatarSrc] = useState(avatarImg);
    const fileInputRef = useRef(null);

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(timer);
        }, 15);
        return () => clearInterval(timer);
    }, []);

    // Clean up any object URL we created when it's replaced/unmounted
    useEffect(() => {
        return () => {
            if (avatarSrc && avatarSrc.startsWith("blob:")) {
                URL.revokeObjectURL(avatarSrc);
            }
        };
    }, [avatarSrc]);

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    // const handleAvatarUpload = (e) => {
    //     const file = e.target.files?.[0];
    //     if (!file) return;

    //     if (!file.type.match(/^image\/jpe?g$/)) {
    //         alert("Please upload a JPG image.");
    //         e.target.value = "";
    //         return;
    //     }

    //     const newUrl = URL.createObjectURL(file);
    //     setAvatarSrc(newUrl);
    //     e.target.value = "";
    // };

    return (
        <div className="text-white grid grid-cols-1 md:grid-cols-2 w-full items-center md:items-start px-6 md:px-20 pt-42 md:pt-55 pb-32 md:pb-40 gap-10 md:gap-16">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full text-center md:text-left order-2 md:order-1"
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
                className="w-full flex justify-center md:justify-end items-start order-1 md:order-2"
            >
                <button
                    type="button"
                    // onClick={handleAvatarClick}

                    className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
                >
                    <div
                        className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72
                            lg:w-80 lg:h-80 xl:w-[360px] xl:h-[360px]
                            rounded-full overflow-hidden border-4 border-white/20"
                    >
                        <img
                            className="w-full h-full object-cover object-center scale-125"
                            src={avatarSrc}
                            alt="Sukun Shrestha"
                        />
                    </div>
                </button>

                {/* <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,.jpg,.jpeg"
                    onChange={handleAvatarUpload}
                    className="hidden"
                /> */}
            </motion.div>

        </div>
    );
};

export default Home;
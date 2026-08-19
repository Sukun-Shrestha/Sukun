import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            id="About"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white bg-black/30 shadow-xl rounded-lg p-8 md:p-12 mx-auto max-w-5xl text-center"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-gray-300 mb-8"
            >
                About <span className="text-gray-400">Me</span>
            </motion.h1>

            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 bg-gray-500 mx-auto mb-12 rounded-full"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
                }}
                className="text-gray-400 text-sm md:text-lg leading-relaxed space-y-5"
            >
                {[
                    "I am a passionate Frontend Developer who enjoys turning ideas and designs into modern, responsive, and interactive websites. I work with technologies such as HTML, CSS, JavaScript, React JS, and Bootstrap to create clean and user-friendly web interfaces.",
                    "I enjoy learning new technologies and improving my development skills through practical projects. I focus on writing clean, organized code and creating websites that provide a smooth experience across different devices and screen sizes.",
                    "My goal is to continue growing as a developer, explore new technologies, and build creative web experiences that are both visually appealing and functional.",
                ].map((text, i) => (
                    <motion.p
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {text}
                    </motion.p>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default About;
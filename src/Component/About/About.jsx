import React from "react";

const About = () => {
    return (
        <section
            id="About"
            className="text-white bg-black/30 shadow-xl rounded-lg p-8 md:p-12 mx-auto max-w-5xl text-center"
        >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-300 mb-8">
                About <span className="text-gray-400">Me</span>
            </h1>
            <div className="w-20 h-1 bg-gray-500 mx-auto mb-12 rounded-full"></div>
            <div className="text-gray-400 text-sm md:text-lg leading-relaxed space-y-5">
                <p>
                    I am a passionate Frontend Developer who enjoys turning ideas
                    and designs into modern, responsive, and interactive websites.
                    I work with technologies such as HTML, CSS, JavaScript, React JS,
                    and Bootstrap to create clean and user-friendly web interfaces.
                </p>

                <p>
                    I enjoy learning new technologies and improving my development
                    skills through practical projects. I focus on writing clean,
                    organized code and creating websites that provide a smooth
                    experience across different devices and screen sizes.
                </p>

                <p>
                    My goal is to continue growing as a developer, explore new
                    technologies, and build creative web experiences that are both
                    visually appealing and functional.
                </p>
            </div>
        </section>
    );
};

export default About;
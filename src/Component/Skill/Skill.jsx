import React from "react";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaGithub,
    FaGitAlt,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";
import { SiGitlab, SiVercel } from "react-icons/si";

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 size={40} className="text-orange-500" />,
    },
    {
        name: "CSS",
        icon: <FaCss3Alt size={40} className="text-blue-500" />,
    },
    {
        name: "JavaScript",
        icon: <FaJs size={40} className="text-yellow-400" />,
    },
    {
        name: "React JS",
        icon: <FaReact size={40} className="text-cyan-400" />,
    },
    {
        name: "Bootstrap",
        icon: <FaBootstrap size={40} className="text-purple-500" />,
    },
];

const technologies = [
    {
        name: "VS Code",
        icon: <VscVscode size={40} className="text-blue-400" />,
    },
    {
        name: "GitHub",
        icon: <FaGithub size={40} className="text-white" />,
    },
    {
        name: "Git",
        icon: <FaGitAlt size={40} className="text-orange-600" />,
    },
    {
        name: "GitLab",
        icon: <SiGitlab size={40} className="text-orange-500" />,
    },
    {
        name: "Vercel",
        icon: <SiVercel size={40} className="text-white" />,
    },
];

const Skill = () => {
    return (
        <section
            id="Skill"
            className="text-white w-full min-h-screen p-8 md:p-12"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-gray-300">
                    Skills
                </h2>

                <div className="w-20 h-1 bg-gray-500 mx-auto mb-12 rounded-full"></div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="min-h-[180px] flex flex-col items-center justify-center gap-4 bg-white/5 rounded-xl p-8 hover:scale-105 hover:bg-white/10 duration-300"
                        >
                            {skill.icon}

                            <p className="text-base md:text-lg font-semibold text-gray-300">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-gray-300">
                    Technology
                </h2>

                <div className="w-20 h-1 bg-gray-500 mx-auto mb-12 rounded-full"></div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    {technologies.map((technology, index) => (
                        <div
                            key={index}
                            className="min-h-[180px] flex flex-col items-center justify-center gap-4 bg-white/5 rounded-xl p-8 hover:scale-105 hover:bg-white/10 duration-300"
                        >
                            {technology.icon}

                            <p className="text-base md:text-lg font-semibold text-gray-300">
                                {technology.name}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skill;
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
    {
        role: "Frontend Developer",
        company: "Next Step",
        location: "Banepa, Nepal",
        contributions: [
            "Developed modern and responsive websites using HTML, CSS, JavaScript, React JS, and Bootstrap.",
            "Created reusable and responsive UI components with React and Tailwind CSS.",
            "Implemented interactive features and smooth navigation to improve user experience.",
            "Converted design ideas into clean, functional, and user-friendly web interfaces.",
            "Worked with Git and GitHub for version control and project management.",
            "Deployed frontend projects using Vercel and maintained responsive layouts across different devices.",
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Tailwind CSS",
            "Bootstrap",
            "Git",
            "GitHub",
            "Vercel",
        ],
    },
];

const Experience = () => {
    return (
        <section
            id="Experience"
            className="text-white w-full min-h-screen px-6 py-16 md:px-12"
        >
            <div className="max-w-5xl mx-auto">

                <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-300 mb-4">
                    Professional <span className="text-gray-400">Experience</span>
                </h2>

                <div className="w-20 h-1 bg-gray-500 mx-auto mb-12 rounded-full"></div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-200">
                                        {experience.role}
                                    </h3>

                                    <h4 className="text-lg md:text-xl font-semibold text-gray-400 mt-2">
                                        {experience.company}
                                    </h4>
                                </div>

                                <div className="flex items-center gap-2 text-gray-500">
                                    <FaMapMarkerAlt />
                                    <span>{experience.location}</span>
                                </div>
                            </div>


                            <div className="mt-8">
                                <h4 className="text-lg font-bold text-gray-300 mb-4">
                                    Key Contributions:
                                </h4>

                                <ul className="space-y-3">
                                    {experience.contributions.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-gray-400 text-sm md:text-base leading-relaxed"
                                        >
                                            <span className="text-gray-300 text-lg">
                                                •
                                            </span>

                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-8">
                                {experience.technologies.map((technology, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-400 text-sm font-medium hover:bg-white/15 hover:text-gray-300 transition duration-300"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
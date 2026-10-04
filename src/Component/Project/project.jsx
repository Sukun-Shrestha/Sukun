import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// TODO: replace the "#" links with your real URLs.
const projects = [
    {
        title: "Skyline - Live Weather App",
        category: "Frontend / Weather",
        description:
            "Built a fast, responsive weather web app as a frontend project. Search any city in the world and instantly see its live temperature and current conditions in a clean, easy-to-read interface.",
        features: [
            "Live temperature for any place",
            "Search by city or location",
            "Current weather conditions at a glance",
            "Responsive layout for mobile and desktop",
        ],
        // Edit to match what you actually used
        technologies: ["React", "JavaScript", "CSS", "Weather API", "Vercel"],
        link: "https://skyline-vert.vercel.app/",
        linkType: "live",
    },
    {
        title: "Frontend Mentor - Feedback Board",
        category: "Frontend / Web App",
        description:
            "Built a feedback board based on a Frontend Mentor challenge where users can share ideas, upvote suggestions and follow what is planned. Focused on a clean layout, smooth filtering and predictable state management.",
        features: [
            "Upvote suggestions and sort by most upvotes",
            "Filter feedback by category: Feature, Enhancement and Bug",
            "Roadmap summary showing Planned, In Progress and Live items",
            "Add new feedback and view comments on each suggestion",
        ],
        technologies: ["React", "Redux", "React Router", "Tailwind CSS", "Vercel"],
        link: "https://feedback-two-zeta.vercel.app/",
        linkType: "live",
    },
];

const Projects = () => {
    return (
        <section id="Projects" className="text-white w-full min-h-screen px-6 py-16 md:px-12">
            <div className="max-w-5xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-center text-gray-300 mb-4"
                >
                    Featured <span className="text-gray-400">Projects</span>
                </motion.h2>

                <div className="w-20 h-1 bg-gray-500 mx-auto mb-6 rounded-full"></div>

                <p className="text-gray-400 text-sm md:text-base text-center max-w-xl mx-auto mb-12">
                    A showcase of my recent applications, demonstrating expertise in mobile
                    and frontend development, state management, and user experience design.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{ y: -4 }}
                            className="relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:bg-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-xl font-bold text-gray-200">
                                    {project.title}
                                </h3>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${project.title}`}
                                    className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:translate-x-0.5"
                                >
                                    {project.linkType === "github" ? (
                                        <FaGithub size={18} />
                                    ) : (
                                        <FaExternalLinkAlt size={14} />
                                    )}
                                </a>
                            </div>

                            <span className="w-fit mt-3 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-gray-300 border border-white/10">
                                {project.category}
                            </span>

                            <p className="text-gray-400 text-sm leading-relaxed mt-5">
                                {project.description}
                            </p>

                            <h4 className="text-sm font-semibold text-gray-300 mt-6 mb-3">
                                Key Features:
                            </h4>
                            <ul className="space-y-2">
                                {project.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-3 text-gray-400 text-sm"
                                    >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <h4 className="text-sm font-semibold text-gray-300 mt-6 mb-3">
                                Technologies:
                            </h4>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full text-xs text-gray-300 bg-white/5 border border-white/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
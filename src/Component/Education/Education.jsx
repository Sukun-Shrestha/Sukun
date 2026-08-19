import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const education = [
    {
        degree: "Bachelor's in Business Information System",
        school: "Kathmandu University",
        duration: "2026 – Present",
        location: "Dhulikhel, Nepal",
        status: "In Progress",
        description:
            "Currently pursuing my Bachelor's degree with a focus on an equal blend of business management and information technology/systems.",
    },
    {
        degree: "+2 Management (Computer Science, Basic Maths)",
        school: "Khwopa Secondary School",
        duration: "2024 – 2026",
        location: "Bhaktapur, Nepal",
        status: "Completed",
        description:
            "Completed higher secondary education in the Management stream with a strong foundation in mathematics, marketing, account and computer science.",
    },
];

const Education = () => {
    return (
        <section id="Education" className="text-white w-full min-h-screen px-6 py-16 md:px-12">
            <div className="max-w-5xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-center text-gray-300 mb-4"
                >
                    Education
                </motion.h2>

                <div className="w-20 h-1 bg-gray-500 mx-auto mb-12 rounded-full"></div>

                <div className="space-y-8">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{ y: -4 }}
                            className="relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                                    <div className="flex items-start gap-5">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -30 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                                            className="flex-shrink-0 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center"
                                        >
                                            <FaGraduationCap size={25} className="text-gray-300" />
                                        </motion.div>

                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-200">
                                                {item.degree}
                                            </h3>
                                            <h4 className="text-lg md:text-xl font-semibold text-gray-400 mt-2">
                                                {item.school}
                                            </h4>
                                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 text-gray-400">
                                                <span className="flex items-center gap-2">
                                                    <FaCalendarAlt />
                                                    {item.duration}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <FaMapMarkerAlt />
                                                    {item.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.4 }}
                                        className="w-fit px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-gray-300 border border-white/10"
                                    >
                                        {item.status}
                                    </motion.span>
                                </div>

                                <p className="text-gray-400 text-sm md:text-base leading-relaxed md:pl-[76px]">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
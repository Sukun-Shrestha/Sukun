import React from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaWhatsapp,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";

const navLinks = [
    { href: "#About", label: "About" },
    { href: "#Skill", label: "Skills" },
    { href: "#Experience", label: "Experience" },
    { href: "#Education", label: "Education" },
    { href: "#Contact", label: "Contact" },
];

const socials = [
    {
        icon: FaGithub,
        href: "https://github.com/Sukun-Shrestha",
        label: "GitHub",
    },
    {
        icon: FaWhatsapp,
        href: "https://wa.me/9847383267",
        label: "WhatsApp",
    },
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/sukun_shrestha/?hl=en",
        label: "Instagram",
    },
    {
        icon: FaEnvelope,
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=sukunshrestha0904@gmail.com",
        label: "Email",
    },
];

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white border-t border-white/10 bg-black/30 py-10"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* Footer Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Name and Role */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-200">
                            Sukun Shrestha
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Frontend Developer
                        </p>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.08,
                                    delayChildren: 0.15,
                                },
                            },
                        }}
                        className="flex flex-wrap justify-center gap-6 text-gray-400 font-medium"
                    >
                        {navLinks.map(({ href, label }) => (
                            <motion.li
                                key={href}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: -10,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                            >
                                <a
                                    href={href}
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    {label}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>

                </div>

                {/* Social Media Icons */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.08,
                                delayChildren: 0.25,
                            },
                        },
                    }}
                    className="flex justify-center gap-7 mt-6"
                >
                    {socials.map(({ icon: Icon, href, label }, i) => (
                        <motion.a
                            key={i}
                            href={href}
                            aria-label={label}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 15,
                                    scale: 0.8,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                },
                            }}
                            whileHover={{
                                scale: 1.25,
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                    }}
                    className="border-t border-white/10 mt-8 pt-6"
                >
                    <p className="text-gray-600 text-sm text-center">
                        © {new Date().getFullYear()} Sukun Shrestha. All rights reserved.
                    </p>
                </motion.div>

            </div>
        </motion.footer>
    );
};

export default Footer;
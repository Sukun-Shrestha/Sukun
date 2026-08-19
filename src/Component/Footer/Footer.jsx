import React from "react";
import {
    FaGithub,
    FaWhatsapp,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white border-t border-white/10 bg-black/30 py-10">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-200">
                            Sukun Shrestha
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Frontend Developer
                        </p>
                    </div>

                    <div>
                        <ul className="flex flex-wrap justify-center gap-6 text-gray-400 font-medium">

                            <li>
                                <a
                                    href="#About"
                                    className="hover:text-white transition duration-300"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#Skill"
                                    className="hover:text-white transition duration-300"
                                >
                                    Skills
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#Experience"
                                    className="hover:text-white transition duration-300"
                                >
                                    Experience
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#Education"
                                    className="hover:text-white transition duration-300"
                                >
                                    Education
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#Contact"
                                    className="hover:text-white transition duration-300"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>

                <div className="flex justify-center gap-7 mt-6">

                    <a
                        href="https://github.com/Sukun-Shrestha"
                        className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub size={24} />
                    </a>

                    <a
                        href="https://wa.me/9847383267"
                        className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={24} />
                    </a>

                    <a
                        href="https://www.instagram.com/sukun_shrestha/?hl=en"
                        className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={24} />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sukunshrestha0904@gmail.com"
                        className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                        aria-label="Email"
                    >
                        <FaEnvelope size={24} />
                    </a>

                </div>

                <div className="border-t border-white/10 mt-8 pt-6">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Sukun Shrestha. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
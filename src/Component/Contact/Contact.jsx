import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";


const Contact = () => {
    return (
        <section
            id="Contact"
            className="text-white w-full min-h-screen px-6 py-16 md:px-12"
        >
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-300">
                        Get In <span className="text-gray-400">Touch</span>
                    </h2>

                    <div className="w-20 h-1 bg-gray-500 mx-auto mt-4 rounded-full"></div>

                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-6">
                        Have a project idea or want to work together?
                        Feel free to get in touch with me. I would be happy
                        to discuss your ideas and explore new opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 hover:scale-105 transition-all duration-300">
                        <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-5">
                            <FaEnvelope
                                size={22}
                                className="text-gray-300"
                            />
                        </div>

                        <h3 className="text-lg font-bold text-gray-300 mb-3">
                            Email
                        </h3>

                        <p className="text-gray-500 text-sm break-all">
                            sukunshrestha0904@gmail.com
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 hover:scale-105 transition-all duration-300">
                        <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-5">
                            <FaPhone
                                size={22}
                                className="text-gray-300"
                            />
                        </div>

                        <h3 className="text-lg font-bold text-gray-300 mb-3">
                            Phone
                        </h3>

                        <p className="text-gray-500 text-sm">
                            +977 9847383267
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 hover:scale-105 transition-all duration-300">
                        <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-5">
                            <FaMapMarkerAlt
                                size={22}
                                className="text-gray-300"
                            />
                        </div>

                        <h3 className="text-lg font-bold text-gray-300 mb-3">
                            Location
                        </h3>

                        <p className="text-gray-500 text-sm">
                            Banepa, Nepal
                        </p>
                    </div>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center shadow-xl">

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-300 mb-5">
                        Let's Connect
                    </h3>

                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        I'm always interested in discussing new opportunities,
                        interesting projects, and collaborations. Whether you
                        have a project in mind or just want to say hello, feel
                        free to reach out through any of these channels.
                    </p>

                    <div className="flex justify-center gap-6 mt-8">

                        <a
                            href="https://github.com/Sukun-Shrestha"
                            className="text-gray-400 hover:text-white hover:scale-125 transition duration-300"
                        >
                            <FaGithub size={22} />
                        </a>

                        <a
                            href="https://wa.me/9847383267"
                            className="text-gray-400 hover:text-white hover:scale-125 transition duration-300"
                        >
                            <FaWhatsapp size={22} />
                        </a>

                        <a
                            href="https://www.instagram.com/sukun_shrestha/?hl=en"
                            className="text-gray-400 hover:text-white hover:scale-125 transition duration-300"
                        >
                            <FaInstagram size={22} />
                        </a>

                    </div>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sukunshrestha0904@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 mt-8 px-7 py-3 bg-white/10 border border-white/10 rounded-lg text-gray-300 font-semibold hover:bg-white/20 hover:text-white transition duration-300"
                    >
                        <FaEnvelope />
                        Send Email
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Contact;
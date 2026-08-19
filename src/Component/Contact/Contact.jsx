import React from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";

const cards = [
    { icon: FaEnvelope, title: "Email", value: "sukunshrestha0904@gmail.com" },
    { icon: FaPhone, title: "Phone", value: "+977 9847383267" },
    { icon: FaMapMarkerAlt, title: "Location", value: "Banepa, Nepal" },
];

const socials = [
    { icon: FaGithub, href: "https://github.com/Sukun-Shrestha" },
    { icon: FaWhatsapp, href: "https://wa.me/9847383267" },
    { icon: FaInstagram, href: "https://www.instagram.com/sukun_shrestha/?hl=en" },
];

const Contact = () => {
    return (
        <section id="Contact" className="text-white w-full min-h-screen px-6 py-16 md:px-12">
            <div className="max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-300">
                        Get In <span className="text-gray-400">Touch</span>
                    </h2>

                    <div className="w-20 h-1 bg-gray-500 mx-auto mt-4 rounded-full"></div>

                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-6">
                        Have a project idea or want to work together?
                        Feel free to get in touch with me. I would be happy
                        to discuss your ideas and explore new opportunities.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
                >
                    {cards.map(({ icon: Icon, title, value }, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-5">
                                <Icon size={22} className="text-gray-300" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-300 mb-3">{title}</h3>
                            <p className="text-gray-500 text-sm break-all">{value}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center shadow-xl"
                >
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
                        {socials.map(({ icon: Icon, href }, i) => (
                            <motion.a
                                key={i}
                                href={href}
                                whileHover={{ scale: 1.25, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                <Icon size={22} />
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sukunshrestha0904@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 mt-8 px-7 py-3 bg-white/10 border border-white/10 rounded-lg text-gray-300 font-semibold hover:bg-white/20 hover:text-white transition-colors duration-300"
                    >
                        <FaEnvelope />
                        Send Email
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
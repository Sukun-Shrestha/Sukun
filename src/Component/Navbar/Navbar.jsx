import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { href: '#About', label: 'About' },
    { href: '#Experience', label: 'Experience' },
    { href: '#Skill', label: 'Skills' },
    { href: '#Education', label: 'Education' },
    { href: '#Contact', label: 'Contact' },
];

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menu ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [menu]);

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full flex items-center justify-between
            text-white px-6 sm:px-10 md:px-20 py-5 z-50
            bg-black/70 backdrop-blur-md"
        >
            {/* Logo */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRefresh}
                className="text-3xl font-bold tracking-wide hover:text-gray-300
                transition-colors duration-300 cursor-pointer"
            >
                Sukun Shrestha
            </motion.button>

            {/* Desktop Menu */}
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3,
                        },
                    },
                }}
                className="hidden md:flex gap-8 font-semibold"
            >
                {links.map(({ href, label }) => (
                    <motion.li
                        key={href}
                        variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <a
                            href={href}
                            className="relative text-lg tracking-wide text-white/80
                            hover:text-white transition-colors duration-300
                            after:content-[''] after:absolute after:left-0
                            after:-bottom-1 after:h-[2px] after:w-0
                            after:bg-white after:transition-all
                            after:duration-300 hover:after:w-full"
                        >
                            {label}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Mobile Menu Button */}
            <motion.button
                type="button"
                whileTap={{ scale: 0.85 }}
                aria-label={menu ? 'Close menu' : 'Open menu'}
                aria-expanded={menu}
                onClick={() => setMenu((prev) => !prev)}
                className="md:hidden relative z-50 grid place-items-center
                w-10 h-10 rounded-full hover:bg-white/10
                active:scale-90 transition-all duration-200"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {menu ? (
                        <motion.span
                            key="close"
                            initial={{
                                opacity: 0,
                                rotate: -90,
                                scale: 0.75,
                            }}
                            animate={{
                                opacity: 1,
                                rotate: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                rotate: 90,
                                scale: 0.75,
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute"
                        >
                            <RiCloseLine size={26} />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="menu"
                            initial={{
                                opacity: 0,
                                rotate: 90,
                                scale: 0.75,
                            }}
                            animate={{
                                opacity: 1,
                                rotate: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                rotate: -90,
                                scale: 0.75,
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute"
                        >
                            <RiMenu2Line size={26} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Mobile Background Overlay */}
            <AnimatePresence>
                {menu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setMenu(false)}
                        className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menu && (
                    <motion.ul
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            y: -12,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            y: -12,
                        }}
                        transition={{
                            duration: 0.25,
                            ease: 'easeOut',
                        }}
                        className="md:hidden fixed left-4 right-4 top-20
                        origin-top rounded-2xl bg-black/90 border border-white/10
                        shadow-xl backdrop-blur-md font-semibold text-center
                        overflow-hidden"
                    >
                        {links.map(({ href, label }, i) => (
                            <motion.li
                                key={href}
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: i * 0.06,
                                    duration: 0.25,
                                }}
                            >
                                <a
                                    href={href}
                                    onClick={() => setMenu(false)}
                                    className="block py-3 text-white/90
                                    hover:text-white hover:bg-white/5
                                    transition-colors duration-200"
                                >
                                    {label}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
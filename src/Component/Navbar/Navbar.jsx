import React, { useEffect, useState, useRef } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { href: "#About", label: "About" },
    { href: "#Experience", label: "Experience" },
    { href: "#Skill", label: "Skills" },
    { href: "#Education", label: "Education" },
    { href: "#Contact", label: "Contact" },
];

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [logoSrc, setLogoSrc] = useState(null); // null = show "SS" initials
    const fileInputRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = menu ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menu]);

    // Clean up any object URL we created when it's replaced/unmounted
    useEffect(() => {
        return () => {
            if (logoSrc && logoSrc.startsWith("blob:")) {
                URL.revokeObjectURL(logoSrc);
            }
        };
    }, [logoSrc]);

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleLinkClick = () => {
        setMenu(false);
    };

    const handleLogoClick = () => {
        fileInputRef.current?.click();
    };

    // const handleLogoUpload = (e) => {
    //     const file = e.target.files?.[0];
    //     if (!file) return;

    //     if (!file.type.match(/^image\/jpe?g$/)) {
    //         alert("Please upload a JPG image.");
    //         e.target.value = "";
    //         return;
    //     }

    //     const newUrl = URL.createObjectURL(file);
    //     setLogoSrc(newUrl);
    //     e.target.value = ""; // allow re-selecting the same file later
    // };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full flex items-center justify-between
            text-white px-6 sm:px-10 md:px-20 py-5 z-50
            bg-black/70 backdrop-blur-md"
        >
            {/* Logo */}
            <div className="flex items-center gap-3">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRefresh}
                    // title="Click to upload a new logo (JPG)"
                    className="relative group hover:opacity-80
                    transition-opacity duration-300 cursor-pointer"
                >
                    <div
                        className="w-11 h-11 rounded-full overflow-hidden
                        border-2 border-white/20 shrink-0
                        flex items-center justify-center
                        bg-gradient-to-br from-gray-700 to-gray-900"
                    >
                        {logoSrc ? (
                            <img
                                src={logoSrc}
                                alt="Sukun Shrestha"
                                className="w-[90px] h-full object-cover object-center scale-[1.6] translate-y-5"
                            />
                        ) : (
                            <span className="text-white font-bold text-sm tracking-wide select-none">
                                SS
                            </span>
                        )}
                    </div>
                </motion.button>

                {/* <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,.jpg,.jpeg"
                    onChange={handleLogoUpload}
                    className="hidden"
                /> */}

                <button
                    onClick={handleRefresh}
                    className="text-2xl font-bold tracking-wide hidden sm:inline
                    hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                >
                    Sukun Shrestha
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <motion.a
                        key={link.href}
                        href={link.href}
                        whileHover={{ y: -2 }}
                        className="text-sm lg:text-base font-medium
                        hover:text-gray-400 transition-colors duration-300"
                    >
                        {link.label}
                    </motion.a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenu(!menu)}
                className="md:hidden z-[60] cursor-pointer"
                aria-label={menu ? "Close menu" : "Open menu"}
            >
                {menu ? (
                    <RiCloseLine size={30} />
                ) : (
                    <RiMenu2Line size={30} />
                )}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menu && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        className="fixed top-0 right-0 w-full sm:w-80 h-screen
                        bg-black/95 backdrop-blur-lg
                        flex flex-col items-center justify-center
                        gap-8 md:hidden"
                    >
                        {links.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.3,
                                }}
                                className="text-xl font-medium
                                hover:text-gray-400
                                transition-colors duration-300"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
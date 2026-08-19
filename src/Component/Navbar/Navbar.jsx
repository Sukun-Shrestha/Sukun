import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState, useEffect } from 'react';

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
        <nav
            className="fixed top-0 left-0 w-full flex items-center justify-between
    text-white px-6 sm:px-10 md:px-20 py-5 z-50
    bg-black/70 backdrop-blur-md"
        >
            <button
                onClick={handleRefresh}
                className="text-3xl font-bold tracking-wide hover:text-gray-300
        transition-colors duration-300 cursor-pointer"
            >
                Sukun Shrestha
            </button>

            <ul className="hidden md:flex gap-8 font-semibold">
                {links.map(({ href, label }) => (
                    <li key={href}>
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
                    </li>
                ))}
            </ul>

            <button
                type="button"
                aria-label={menu ? 'Close menu' : 'Open menu'}
                aria-expanded={menu}
                onClick={() => setMenu((prev) => !prev)}
                className="md:hidden relative z-50 grid place-items-center
                w-10 h-10 rounded-full hover:bg-white/10
                active:scale-90 transition-all duration-200"
            >
                <RiMenu2Line
                    size={26}
                    className={`absolute transition-all duration-300 ${menu
                        ? 'opacity-0 rotate-90 scale-75'
                        : 'opacity-100 rotate-0 scale-100'
                        }`}
                />

                <RiCloseLine
                    size={26}
                    className={`absolute transition-all duration-300 ${menu
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-90 scale-75'
                        }`}
                />
            </button>

            <div
                onClick={() => setMenu(false)}
                className={`md:hidden fixed inset-0 bg-black/60
                backdrop-blur-sm transition-opacity duration-300 ${menu
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                    }`}
            />

            <ul
                className={`md:hidden fixed left-4 right-4 top-20
                origin-top rounded-2xl bg-black/90 border border-white/10
                shadow-xl backdrop-blur-md font-semibold text-center
                overflow-hidden transition-all duration-300 ease-out ${menu
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-95 -translate-y-3 pointer-events-none'
                    }`}
            >
                {links.map(({ href, label }, i) => (
                    <li
                        key={href}
                        style={{
                            transitionDelay: menu
                                ? `${i * 60}ms`
                                : '0ms',
                        }}
                        className={`transition-all duration-300 ${menu
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-2'
                            }`}
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
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
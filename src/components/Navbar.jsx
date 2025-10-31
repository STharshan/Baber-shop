import React, { useState } from "react";
import {
    FiFacebook,
    FiMenu,
    FiX,
} from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/#" },
        { name: "About Us", href: "/#about" },
        { name: "Services", href: "/#service" },
        { name: "Our Work", href: "/#work" },
        { name: "Contact", href: "/#contact" },
    ];


    return (
        <nav className="bg-[#1b1b1b] text-white px-6 md:px-12 lg:px-20 shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-18">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="RS Mobile Services Logo"
                        className="w-36 h-15 object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <HashLink
                            key={item.name}
                            smooth
                            to={item.href}
                            className="flex items-center gap-1 font-semibold text-white hover:text-yellow-400 transition-colors"
                        >
                            {item.name}
                        </HashLink>
                    ))}
                </div>

                {/* Desktop Social Icons */}
                <div className="hidden lg:flex items-center">
                    <a
                        smooth
                        href="#contact"
                        className="bg-yellow-400 text-white font-semibold px-5 py-2 rounded-full hover:bg-yellow-600 transition-all duration-300"
                    >
                        Book Now
                    </a>
                </div>

                {/* Mobile Right Side */}
                <div className="flex items-center gap-2 lg:hidden">
                    <a
                        smooth
                        href="#contact"
                        className="bg-yellow-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition-all"
                    >
                        Book Now
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="bg-yellow-400 p-2 rounded-full text-xl"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden mt-4 bg-[#222] rounded-lg p-4 space-y-3">
                    {navLinks.map((item) => (
                        <HashLink
                            key={item.name}
                            smooth
                            to={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 text-gray-200 hover:text-yellow-400 border-b border-gray-700 last:border-0 transition-colors"
                        >
                            {item.name}
                        </HashLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

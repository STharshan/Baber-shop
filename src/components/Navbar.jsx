import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [bookingModalOpen, setBookingModalOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/#" },
        { name: "About Us", href: "/#about" },
        { name: "Services", href: "/#service" },
        { name: "Our Work", href: "/#work" },
        { name: "Contact", href: "/#contact" },
    ];

    const openBookingModal = () => {
        setBookingModalOpen(true);
        setMenuOpen(false);
    };

    const closeBookingModal = () => {
        setBookingModalOpen(false);
    };

    return (
        <>
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

                    {/* Desktop Book Now Button */}
                    <div className="hidden lg:flex items-center">
                        <button
                            onClick={openBookingModal}
                            className="bg-yellow-400 text-white font-semibold px-5 py-2 rounded-full hover:bg-yellow-600 transition-all duration-300"
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Mobile Right Side */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            onClick={openBookingModal}
                            className="bg-yellow-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition-all"
                        >
                            Book Now
                        </button>

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

            {/* Booking Modal */}
            {bookingModalOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-opacity-30 p-4">
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                                Book Your Appointment
                            </h2>
                            <button
                                onClick={closeBookingModal}
                                className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
                                aria-label="Close modal"
                            >
                                <FiX className="w-6 h-6 md:w-7 md:h-7" />
                            </button>
                        </div>

                        {/* Modal Body - iframe */}
                        <div className="flex-1 overflow-hidden">
                            <iframe
                                src="https://booksy.com/widget-2021/index.html?id=3753&lang=en&country=gb&mode=dialog&theme=default&uniqueId=38dd7b502e"
                                className="w-full h-full border-0"
                                title="Booking Widget"
                                allow="payment"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
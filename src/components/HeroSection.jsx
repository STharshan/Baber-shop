"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('/hero.jpg')", // <-- Replace with your background image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Left Diagonal Lines */}
      <div className="absolute top-0 left-0 h-full w-[120px] bg-leaner-to-br from-yellow-400/80 to-transparent clip-diagonal hidden md:block"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl">
        {/* Logo */}
        <img
          src="/logo.png" // <-- Replace with your logo file
          alt="Seven Star Logo"
          className="mx-auto mb-6 w-48 md:w-64"
        />

        {/* Headings */}
        <h1 className="text-2xl uppercase md:text-4xl font-bold leading-snug">
          Student Cut • Gents Cut • Ladies Barber
        </h1>
        <h1 className="text-2xl uppercase md:text-4xl font-bold text-yellow-400 mt-1">
          Ladies Cut • Colours
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 mt-5 text-xl max-w-sm mx-auto font-semibold">
          Bridges the gap between sterile unisex salons and the provincial barber
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-md transition-all">
            Book Appointment
          </button>
          <button className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-white font-semibold py-3 px-8 rounded-md transition-all">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

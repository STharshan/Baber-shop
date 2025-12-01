"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiX } from "react-icons/fi";

const HeroSection = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      easing: "ease-out-cubic",
      once: true, // animation happens only once
    });
  }, []);

  const openBookingModal = () => {
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
  };

  return (
    <>
      <section
        id="#"
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/hero.jpg')", // <-- Replace with your background image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div
          className="relative z-10 text-center px-4 md:px-8 max-w-2xl"
          data-aos="fade-up"
        >
          {/* Logo */}
          <img
            src="/logo.png" // <-- Replace with your logo file
            alt="Seven Star Logo"
            className="mx-auto mb-6 mt-5 w-48"
            data-aos="zoom-in"
            data-aos-delay="200"
          />

          {/* Headings */}
          <h1
            className="text-2xl uppercase md:text-4xl font-bold leading-snug"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Student Cut • Gents Cut • Ladies Barber
          </h1>
          <h1
            className="text-2xl uppercase md:text-4xl font-bold text-yellow-400 mt-1"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Ladies Cut • Colours
          </h1>

          {/* Subtext */}
          <p
            className="text-gray-300 mt-5 text-xl max-w-sm mx-auto font-semibold"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Bridges the gap between sterile unisex salons and the provincial barber
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <button
              onClick={openBookingModal}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-md transition-all"
            >
              Book Appointment
            </button>
            <a
              href="#service"
              className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-white font-semibold py-3 px-8 rounded-md transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

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

export default HeroSection;
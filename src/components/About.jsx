"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-out-cubic",
      once: true, // animate only once when scrolled into view
    });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-13 bg-black text-white px-4 overflow-hidden">
      {/* Diagonal background stripes */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #d4c23b 0px, #d4c23b 2px, transparent 2px, transparent 40px)",
        }}
        data-aos="fade-in"
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <p
          className="text-yellow-400 uppercase tracking-widest text-sm md:text-base font-semibold mb-4"
          data-aos="fade-down"
        >
          Special Offer
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          STUDENT
        </h1>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-yellow-400 mb-4"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          DISCOUNT
        </h1>

        <p
          className="text-lg md:text-xl font-semibold mb-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <span className="inline-block w-10 h-0.5 bg-yellow-400 align-middle mr-2"></span>
          MONDAY - WEDNESDAY
          <span className="inline-block w-10 h-0.5 bg-yellow-400 align-middle ml-2"></span>
        </p>

        <p
          className="text-gray-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-semibold leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Show your valid student ID and get exclusive discounts on all services
          every Monday through Wednesday
        </p>

        <a
          href="#contact"
          className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-md text-sm md:text-base transition-all duration-300"
          data-aos="flip-up"
          data-aos-delay="1000"
        >
          BOOK YOUR APPOINTMENT
        </a>
      </div>
    </section>
  );
};

export default About;

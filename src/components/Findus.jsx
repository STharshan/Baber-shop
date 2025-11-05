"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FindUs() {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration in ms
      easing: "ease-out-cubic", // Smooth easing
      once: false, // Trigger every scroll into view
    });
  }, []);

  return (
    <section
      className="py-16 px-4 bg-black transition-colors duration-500"
      id="find-us"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p
          className="text-yellow-400 font-semibold tracking-widest mb-3 uppercase text-lg"
          data-aos="fade-up"
        >
          Find Us
        </p>

        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-200 mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Visit Our Location
        </h2>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-lg border border-gray-700 w-full h-[400px]"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1628763476266!6m8!1m7!1sCAoSLEFGMVFpcE9qdVEwbFlXQ2hYNHZlSnZkOHhKbDhmRDlBT2ZSdGJob195QU1R!2m2!1d52.9535701204796!2d-1.146184900331718!3f183.14306661740167!4f-0.33547023943884824!5f0.7820865974627469"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

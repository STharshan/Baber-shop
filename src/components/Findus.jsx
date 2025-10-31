// src/components/FindUs.jsx
"use client";
import React, { useEffect } from "react";

export default function FindUs() {

  return (
    <section
      className="py-16 px-4 bg-black transition-colors duration-500"
      id="find-us"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p
          className="text-yellow-400  font-semibold tracking-widest mb-3 uppercase text-lg"
          data-aos="fade-up"
        >
          Find Us
        </p>

        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-200  mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Visit Our Location
        </h2>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-lg border border-gray-200  w-full h-[400px]"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d300.4641670963413!2d-1.1466017194569342!3d52.95358093059182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3d60f24bea5%3A0x70cf26036b4bb3cc!2sTwenty%20eight!5e0!3m2!1sen!2slk!4v1761923635010!5m2!1sen!2slk"
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

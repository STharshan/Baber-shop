"use client";
import React, { useEffect } from "react";
import { Scissors, User, Sparkles, Brush, Droplet } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const services = [
    {
      icon: <Scissors className="w-10 h-10 text-yellow-400 mb-4" />,
      title: "Student Cuts",
      description:
        "Discounted haircuts for students — fades, shape-ups and stylish short cuts. Valid student ID required.",
      price: "From £17.95",
    },
    {
      icon: <User className="w-10 h-10 text-yellow-400 mb-4" />,
      title: "Gents Cuts",
      description:
        "Classic and modern men's cuts: fades, tapers, clipper work and beard tidy-ups for a sharp finish.",
      price: "From £22.95",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-yellow-400 mb-4" />,
      title: "Ladies Barber Cut",
      description:
        "Precision barber-style cuts for women — tailored to hair texture and face shape, includes wash & styling.",
      price: "From £27.95",
    },
    {
      icon: <Brush className="w-10 h-10 text-yellow-400 mb-4" />,
      title: "Ladies Cuts",
      description:
        "Women’s cutting services: layered cuts, long-hair shaping, blow-dries and bespoke styling for every look.",
      price: "From £38.95",
    },
    {
      icon: <Droplet className="w-10 h-10 text-yellow-400 mb-4" />,
      title: "Colours",
      description:
        "Full colour, highlights, balayage and colour corrections using professional products for lasting results.",
      price: "From £50.00",
    },
  ];

  return (
    <section id="service" className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Our <span className="text-yellow-400">Services</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-semibold">
          Expert grooming and beauty services for the whole family
        </p>
      </div>

      {/* ✅ Force perfect 3 + 2 centered grid */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10" data-aos="fade-up">
        {/* Row 1 (3 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] shadow-lg hover:scale-105 hover:shadow-yellow-400 active:shadow-yellow-400 transition-all duration-300 rounded-md p-8 text-center w-full md:w-[90%]"
              data-aos="zoom-in-up"
              data-aos-delay={200 + index * 150}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-2 mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <p className="text-yellow-400 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>

        {/* Row 2 (2 centered items) */}
        <div className="flex justify-center gap-8 flex-wrap">
          {services.slice(3).map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] shadow-lg hover:scale-105 hover:shadow-yellow-400 active:shadow-yellow-400 transition-all duration-300 rounded-md p-8 text-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)]"
              data-aos="zoom-in-up"
              data-aos-delay={700 + index * 150}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-2 mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <p className="text-yellow-400 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      {/* <div
        className="text-center mt-14"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-md text-sm md:text-base transition-all duration-300">
          View All Services & Pricing
        </button>
      </div> */}
    </section>
  );
};

export default ServicesSection;
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true, // only animate once
    });
  }, []);

  const filters = ["ALL", "MEN'S CUT", "WOMEN'S STYLE"];

  // 🖼️ Image gallery data
  const gallery = [
    { id: 1, src: "/g1.jpg", category: "WOMEN'S STYLE", alt: "Men's haircut with textured styling" },
    { id: 2, src: "/g2.jpg", category: "WOMEN'S STYLE", alt: "Women's short pixie cut with color" },
    { id: 3, src: "/g3.jpg", category: "WOMEN'S STYLE", alt: "Classic men's fade haircut" },
    { id: 5, src: "/g5.png", category: "WOMEN'S STYLE", alt: "Modern undercut hairstyle" },
    { id: 6, src: "/g6.png", category: "MEN'S CUT", alt: "Soft balayage coloring" },
    { id: 7, src: "/g7.png", category: "MEN'S CUT", alt: "Sharp taper with clean finish" },
    { id: 8, src: "/g8.png", category: "MEN'S CUT", alt: "Textured bob haircut" },
    { id: 9, src: "/g9.png", category: "MEN'S CUT", alt: "Textured bob haircut" },
    { id: 10, src: "/g10.png", category: "WOMEN'S STYLE", alt: "Textured bob haircut" },
    { id: 11, src: "/g11.png", category: "WOMEN'S STYLE", alt: "Textured bob haircut" },
    { id: 12, src: "/g12.png", category: "WOMEN'S STYLE", alt: "Textured bob haircut" },
  ];

  const filteredGallery =
    activeFilter === "ALL"
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

  return (
    <div id="work" className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header Section */}
      <div
        className="px-4 py-12 md:py-16 lg:py-20 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-4 md:mb-6">
          Our Work
        </h1>
        <p
          className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Showcasing our finest cuts, colors, and styles. Every haircut tells a story.
        </p>
      </div>

      {/* Filter Buttons */}
      <div
        className="flex flex-wrap justify-center gap-3 md:gap-4 px-4 mb-8 md:mb-12 lg:mb-16"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 rounded-lg text-sm md:text-base font-medium tracking-wider transition-all duration-300 ${
              activeFilter === filter
                ? "bg-yellow-500 text-black"
                : "text-white bg-zinc-800 hover:bg-zinc-500"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="px-4 md:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden group cursor-pointer rounded-lg"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-yellow-500/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

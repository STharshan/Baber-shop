import React from "react";
import AOSWrapper from "./AOSWrapper";

const StorySection = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Heading */}
      <AOSWrapper animation="fade-down">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            THE STORY BEHIND
            <br />
            <span className="text-yellow-400">THE BLADE</span>
          </h2>
        </div>
      </AOSWrapper>

      {/* Story Card */}
      <AOSWrapper animation="fade-up" delay={200}>
        <div className="bg-[#0d0d0d] p-8 rounded-md max-w-4xl mx-auto mb-12 shadow-lg hover:shadow-yellow-400 transition-all">
          
          <AOSWrapper animation="fade-right">
            <p className="text-yellow-400 font-semibold uppercase mt-5 tracking-wide mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400 inline-block"></span>
              Est. 1999
            </p>
          </AOSWrapper>

          <AOSWrapper animation="fade-up" delay={300}>
            <p className="text-gray-300 text-xl max-w-3xl leading-relaxed mb-4">
              We opened our first shop in 1999 in the creative hub of hockley with a plan to
              create an environment that was fun, easy going and a whole lot less sterile than
              the usual unisex salon. We obviously did something right and in July 2011
              we opened a flagship store in central notts.
            </p>
          </AOSWrapper>

          <AOSWrapper animation="fade-up" delay={500}>
            <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
              Contemporary and modern with a resident DJ on Saturday's, Twenty Eight is the
              perfect atmosphere to relax and enjoy getting what you want, the way you want
              it – from cuts and colours to a proper cut throat shave… And it won't cost you
              an arm and a leg!
            </p>
          </AOSWrapper>

        </div>
      </AOSWrapper>

      {/* Image Row */}
      <AOSWrapper animation="fade-up" delay={600}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Left Image */}
          <AOSWrapper animation="zoom-in-right">
            <div className="overflow-hidden rounded-md shadow-lg h-64 md:h-80 lg:h-96">
              <img
                src="/about1.jpg"
                alt="Barber chair"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </AOSWrapper>

          {/* Right Image */}
          <AOSWrapper animation="zoom-in-left" delay={200}>
            <div className="overflow-hidden rounded-md shadow-lg h-64 md:h-80 lg:h-96 relative">
              <img
                src="/about2.jpg"
                alt="Resident DJ"
                className="w-full h-full object-cover brightness-75 transition-transform duration-700 hover:scale-110"
              />

              <AOSWrapper animation="fade-up" delay={800}>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-yellow-400 text-xl font-bold tracking-wide">
                    Twenty Eight
                  </h3>
                </div>
              </AOSWrapper>
            </div>
          </AOSWrapper>

        </div>
      </AOSWrapper>
    </section>
  );
};

export default StorySection;
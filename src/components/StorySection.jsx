import React from "react";

const StorySection = () => {
    return (
        <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                    THE STORY BEHIND
                    <br />
                    <span className="text-yellow-400">THE BLADE</span>
                </h2>
            </div>

            {/* Story Card */}
            <div className="bg-[#0d0d0d] border border-gray-700 p-8 rounded-md max-w-4xl mx-auto mb-12">
                <p className="text-yellow-400 font-semibold uppercase mt-5 tracking-wide mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-yellow-400 inline-block "></span>
                    Est. 1999
                </p>

                <p className="text-gray-300 text-xl max-w-3xl leading-relaxed mb-4">
                    We opened our first shop in 1999 in the creative hub of hockley with a plan to create an environment that was fun, easy going and and a whole lot less sterile than the usual unisex salon. We obviously did something right and in july 2011 we opened a flagship store in central notts.
                </p>

                <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
                  Contemporary and modern with a resident DJ on Saturday’s, Twenty Eight is the perfect atmosphere to relax and enjoy getting what you want, the way you want it – from cuts and colours to a proper cut throat shave… And it won’t cost you an arm and a leg!
                </p>
            </div>

            {/* Image Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Left Image */}
                <div className="overflow-hidden rounded-md border border-gray-700">
                    <img
                        src="/about1.jpg"
                        alt="Barber chair"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Image with Overlay */}
                <div className="relative overflow-hidden rounded-md border border-gray-700">
                    <img
                        src="about2.jpg"
                        alt="Resident DJ"
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute bottom-6 left-6">
                        <h3 className="text-yellow-400 text-xl font-bold tracking-wide">
                            Twenty Eight
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;

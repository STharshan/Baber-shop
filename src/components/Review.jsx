import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "neda golestan",
    image: "/test.png",
    text: "I had my hair coloured by Mr. Paul and I honestly couldn’t be happier with the result. The colour is absolutely stunning and looks so natural and vibrant. He is not only talented but also very professional, patient, and attentive to detail. Thank you, Paul, for giving my hair such a beautiful transformation – I’ve received so many compliments already! Highly recommended.",
  },
  {
    name: "Chloe Martin",
    image: "https://i.pravatar.cc/150?img=2",
    text: `I’ve been loyal to Twenty Eight for years, always leave beyond happy with the service. I booked in with new newest stylist Paolo last week and honestly? I don’t exaggerate when I say ‘life changing’. From the moment I walked in Paolo made me feel like a million dollars, he took one look at me and told me exactly what would suit my face shape and colour palette. He was so great to talk to as well.
So glad I had it bleached, it’ll take me there more often!`,
  },
  {
    name: "Omar SK",
    image: "https://i.pravatar.cc/150?img=3",
    text: "Paolo’s service is exceptional, I highly recommend him. I have a family wedding to attend in a couple of days and my usual barber cancelled last minute. Paolo came recommended. He looked after me. And I popped in the next day just to get the beard taken down a little bit more and he was more than accommodating. I will be going back to Paolo from now on. 👌🏽👌🏽👌🏽",
  },
  {
    name: "Alex Lorraine",
    image: "https://i.pravatar.cc/150?img=4",
    text: "I have been coming to Paolo at twenty eight for a very long time and he has never disappointed me I always leave with the results I was looking for and always a pleasure, such a great stylist I recommend highly",
  },
  {
    name: "Jeananne Kelly",
    image: "https://i.pravatar.cc/150?img=4",
    text: "Paolo did a wonderful job cutting my hair. He is very knowledgeable on mullet style and gave me great tips. It was a welcoming space and I felt at ease. Very happy with my haircut!",
  },
  {
    name: "Sherryl Edwards",
    role: "Partner",
    image: "https://i.pravatar.cc/150?img=4",
    text: `Excellent service from RS Mobile Services. It’s great to have someone come to the house while I was at work instead of having to book in at a garage.
Definitely recommend them`,
  },
  {
    name: "Rob Fishlock",
    image: "https://i.pravatar.cc/150?img=4",
    text: "Paulo the Barber is the real deal! I got my haircut from Paulo and I couldn’t be happier. From the moment I sat in the chair, he was professional, attentive, and really listened to what I wanted. He took his time, paid attention to every detail, and the final result was absolutely on point. Easily one of the best haircuts I’ve had in a long time. If you’re looking for someone who knows their craft and delivers consistently great results, Paulo’s your guy. Highly recommend!",
  },
  {
    name: "Alex Hulme",
    image: "https://i.pravatar.cc/150?img=4",
    text: "Amazing service all round, it’s rare to find a barbers you can trust every single barber in the shop to give you a perfect cut and get your beard just right. Whoever you go to will look after you and make you right.",
  },
  {
    name: "James Hamlyn",
    image: "https://i.pravatar.cc/150?img=4",
    text: "Have visited here twice and had Paolo both times, he was fantastic, attentive, polite, a wealth of advice around my specific hair and did a great job both times. Also the aircon was blasting which in this heat I really appreciated. Would highly recommend both 28 and Paolo!",
  },
  {
    name: "Anna Pitt",
    image: "https://i.pravatar.cc/150?img=4",
    text: `Paolo absolutely saved me!! Left with my hair looking exactly how I envisioned after color, cut and blowout. Can’t emphasize how amazing the service was as well as the finished product. Never been so happy with my hair and Paolo is such a joy to talk to and gives the best recommendations about what suits you!`,
  },
];


export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-black relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-yellow-400 font-semibold tracking-widest uppercase text-lg">
            Our Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-200 mt-2">
            What people say about <br /> our company
          </h2>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 mt-20 -translate-y-1/2 bg-yellow-400 p-3 rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition z-20 group"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <FaChevronLeft
            className="transition-transform duration-300 group-hover:-translate-x-1"
            size={18}
          />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 mt-20 -translate-y-1/2 bg-yellow-400 p-3 rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition z-20 group"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <FaChevronRight
            className="transition-transform duration-300 group-hover:translate-x-1"
            size={18}
          />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 py-8 hide-scrollbar"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="shrink-0 w-72 sm:w-80 md:w-96 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-yellow-400 active:shadow-yellow-400 transition-all duration-300 relative snap-start"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 5)} // Staggered animation
            >
              <div className="relative pt-6 px-6 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-white bg-yellow-400 flex items-center justify-center text-black font-extrabold text-3xl uppercase">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1 bg-gray-100 py-3 px-4 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">Client</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
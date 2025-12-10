"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill out all required fields correctly.", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            theme: "dark",
            autoClose: 3000,
            hideProgressBar: false,
          });
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error("Failed to send message. Please try again later.", {
            position: "top-right",
            theme: "dark",
          });
        }
      );
  };

  return (
    <div id="contact" className="min-h-screen scroll-m-5 bg-black text-white relative">
      <ToastContainer />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            {/* Visit Us */}
            <div
              data-aos="fade-right"
              className="shadow-lg p-6 md:p-8 lg:p-10 bg-[#0d0d0d] rounded-md cursor-pointer"
            >
              <h2 className="text-yellow-400 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
                VISIT US
              </h2>
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
                Twenty Eight Barbers
              </h3>
              <a
                href="https://maps.app.goo.gl/J1iB5VohHQsbMenr9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base md:text-lg lg:text-xl space-y-1 md:space-y-2 hover:text-yellow-300 transition-colors block"
              >
                <p>32 Pelham Street</p>
                <p>Nottingham</p>
                <p>NG1 2EG</p>
              </a>
              <a
                href="tel:01159586628"
                className="text-yellow-400 font-sans text-xl md:text-2xl mt-10 lg:text-3xl font-bold hover:text-yellow-300 transition-colors inline-block"
              >
                0115 958 6628
              </a>
            </div>

            {/* Opening Hours */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="bg-yellow-400 text-black p-6 md:p-8 lg:p-10 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
                OPENING HOURS
              </h2>
              <div className="space-y-3 md:space-y-4 lg:space-y-5">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="font-bold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="font-bold">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-bold">11:00 - 16:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                <div className="text-white">GET IN</div>
                <div className="text-yellow-400">TOUCH</div>
              </h2>
              <p className="text-gray-400 text-base md:text-lg lg:text-xl">
                Book your appointment or ask us anything
              </p>
            </div>

            <div className="space-y-5 md:space-y-6">
              {/* Name */}
              <div data-aos="fade-up" data-aos-delay="250">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 px-5 py-3 text-base md:text-lg focus:outline-none focus:border-yellow-400 transition-colors"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email + Phone */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 px-5 py-3 text-base md:text-lg focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 px-5 py-3 text-base md:text-lg focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Message */}
              <div data-aos="fade-up" data-aos-delay="350">
                <textarea
                  name="message"
                  placeholder="Message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-transparent border border-gray-700 text-white rounded-lg placeholder-gray-500 px-5 py-3 text-base md:text-lg focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div data-aos="zoom-in" data-aos-delay="400">
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-yellow-400 text-black font-bold rounded-lg text-base md:text-lg px-10 py-2 hover:bg-yellow-500 transition-colors cursor-pointer"
                  >
                    SEND MESSAGE
                  </button>
                </div>
                <p className="text-xs mt-5 text-center dark:text-gray-300">
                  By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

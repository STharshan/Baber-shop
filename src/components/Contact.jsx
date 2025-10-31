import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Side - Visit Us & Opening Hours */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            
            {/* Visit Us Section */}
            <div className="border border-gray-700 p-6 md:p-8 lg:p-10">
              <h2 className="text-yellow-400 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
                VISIT US
              </h2>
              
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
                Twenty Eight Barbers
              </h3>
              
              <div className="text-white text-base md:text-lg lg:text-xl space-y-1 md:space-y-2 mb-6 md:mb-8">
                <p>32 Pelham Street </p>
                <p>Nottingham</p>
                <p>NG1 2EG</p>
              </div>
              
              <a 
                href="tel:01159586628" 
                className="text-yellow-400 text-xl md:text-2xl lg:text-3xl font-bold hover:text-yellow-300 transition-colors inline-block"
              >
                0115 958 6628
              </a>
            </div>

            {/* Opening Hours Section */}
            <div className="bg-yellow-400 text-black p-6 md:p-8 lg:p-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
                OPENING HOURS
              </h2>
              
              <div className="space-y-3 md:space-y-4 lg:space-y-5">
                {/* Monday - Friday */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                  <span className="text-base md:text-lg lg:text-xl font-medium">
                    Monday - Friday
                  </span>
                  <span className="text-base md:text-lg lg:text-xl font-bold">
                    9:00 - 18:00
                  </span>
                </div>
                
                {/* Saturday */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                  <span className="text-base md:text-lg lg:text-xl font-medium">
                    Saturday
                  </span>
                  <span className="text-base md:text-lg lg:text-xl font-bold">
                    9:00 - 17:00
                  </span>
                </div>
                
                {/* Sunday */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                  <span className="text-base md:text-lg lg:text-xl font-medium">
                    Sunday
                  </span>
                  <span className="text-base md:text-lg lg:text-xl font-bold">
                    11:00 - 16:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Get In Touch Form */}
          <div className="flex flex-col w-full">
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
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 text-white placeholder-gray-500 px-5 md:px-6 py-4 md:py-5 text-base md:text-lg focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              {/* Email and Phone Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 text-white placeholder-gray-500 px-5 md:px-6 py-4 md:py-5 text-base md:text-lg focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 text-white placeholder-gray-500 px-5 md:px-6 py-4 md:py-5 text-base md:text-lg focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-transparent border border-gray-700 text-white placeholder-gray-500 px-5 md:px-6 py-4 md:py-5 text-base md:text-lg focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  onClick={handleSubmit}
                  className="bg-yellow-400 text-black font-bold text-base md:text-lg px-10 md:px-12 py-4 md:py-5 hover:bg-yellow-500 transition-colors cursor-pointer"
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
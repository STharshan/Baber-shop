import React from "react";
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-yellow-400 bg-clip-text text-transparent">
                Twenty  <span className="text-gray-400">Eight Barbers</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 mt-3 leading-relaxed">
              Contemporary and modern with a resident DJ on Saturdays Twenty Eight is the perfect atmosphere to relax, from cuts to colours we have your Barnett sorted.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/twenty8barbers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                  size={20}
                />
              </a>
              <a
                href="https://www.instagram.com/twenty_eight_barbers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaInstagram
                  className="text-gray-400 hover:text-pink-600 cursor-pointer transition-colors duration-300"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 bg-linear-to-r from-yellow-400 to-[#0072ff] bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "Student Cuts",
                "Gents Cuts",
                "Ladies Barber Cut",
                "Ladies Cuts",
                "Colours",
              ].map((service, index) => (
                <li key={index}>
                  <a href="#service" className="hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 bg-linear-to-r from-yellow-400 to-[#0072ff] bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" size={18} />
                <a
                  href="https://maps.app.goo.gl/J1iB5VohHQsbMenr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Twenty Eight Barbers <br/>
                  32 Pelham Street<br/>
                  Nottingham<br/>
                  NG1 2EG
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-yellow-400" size={18} />
                <a
                  href="tel:0115 958 6628"
                  className="hover:text-white transition-colors duration-300"
                >
                  0115 958 6628
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400" size={18} />
                <a
                  href="mailto:jaybo28@me.com"
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  jaybo28@me.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Twenty Eight Barbers. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-yellow-400 transition duration-300"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-yellow-400 transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Center: Powered by Ansely (unchanged) */}
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const HeaderCard: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 border-4 border-black bg-white shadow-[6px_6px_0_#000] relative">
      {/* Top Section */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-4">
          {/* Profile Image */}
          <img
            src="/Hlogo.png" // replace with your own image in public/
            alt="Harsh Bharat Dave"
            className="w-16 h-16 rounded-full border-4 border-black bg-black"
          />
          <div>
            <h1
              className="text-2xl font-bold text-black"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Harsh Bharat Dave
            </h1>

            <p
              className="text-sm"
              style={{ fontFamily: "Poppins, sans-serif", color: "#000" }}
            >
              Product Designer & Developer
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between bg-black text-white px-6 py-3 border-t-4 border-black">
        {/* Left: Status */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <p className="text-sm pixel-font">Available for work</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-2">
          <a
            href="#"
            className="ml-6 bg-orange-500 rounded-full p-2 border-2 border-black shadow-[2px_2px_0_#000] hover:scale-110 transition"
          >
            <FaLinkedin size={14} />
          </a>
          <a
            href="#"
            className="bg-orange-500 rounded-full p-2 border-2 border-black shadow-[2px_2px_0_#000] hover:scale-110 transition"
          >
            <FaInstagram size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;

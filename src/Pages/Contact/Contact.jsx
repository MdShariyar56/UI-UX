import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaDribbble,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import LoadingSpinner from "../../Component/LoadingSpeaner/LoadingSpeaner";


const Contact = () => {
  const [loading, setLoading] = useState(true);

  // Background image preloader
  useEffect(() => {
    const img = new Image();
    img.src = "https://i.ibb.co/j9TWP7rv/bg-2.png";
    img.onload = () => setLoading(false);
  }, []);

  // Loader দেখাও যতক্ষণ loading true
  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <section
      className="min-h-screen py-20 px-6 flex flex-col justify-center items-center bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url('https://i.ibb.co/j9TWP7rv/bg-2.png')`,
      }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* ===== Header Section ===== */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white py-3" id="contact">
            Contact <span className="text-blue-900">Me</span>
          </h2>
        </div>

        {/* ===== Main Grid Section ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* === Left side text + social icons === */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <img
              src="https://i.ibb.co/KxXD9mh0/logo-8-1.png"
              className="w-50 h-auto mb-6"
              alt="Logo"
            />
            <p className="mb-8 text-white">
              I'm a professional <span className="font-semibold">UI/UX designer</span> with strong skills in user interface
              design, user experience strategy, wireframing, prototyping, and
              tools like <span className="text-blue-900 font-medium">Figma</span> and{" "}
              <span className="text-blue-900 font-medium">Adobe Illustrator</span>.
              Over the years, I’ve delivered visually appealing, user-friendly
              designs with <strong>100% client satisfaction</strong>.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-blue-900 text-3xl hover:text-blue-500 transition-all duration-300"><FaFacebook /></a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-pink-500 text-3xl hover:text-pink-400 transition-all duration-300"><FaDribbble /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-900 text-3xl hover:text-blue-500 transition-all duration-300"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-pink-600 text-3xl hover:text-pink-500 transition-all duration-300"><FaInstagram /></a>
              <a href="mailto:example@email.com" className="text-green-600 text-3xl hover:text-green-500 transition-all duration-300"><FaEnvelope /></a>
            </div>
          </div>

          {/* === Right side form === */}
          <div className="shadow-lg rounded-lg p-8 bg-[#1f2937]">
            <form id="contact-form" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white text-xl mb-1">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#273143] text-gray-300" placeholder="Enter your first name" required />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-white text-xl mb-1">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#273143] text-gray-300" placeholder="Enter your last name" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white text-xl mb-1">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#273143] text-gray-300" placeholder="Enter your phone number" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white text-xl mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#273143] text-gray-300" placeholder="Enter subject" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-xl mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#273143] text-gray-300" placeholder="Enter your email" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-xl mb-1">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[#273143] text-gray-300" placeholder="Enter your message" required></textarea>
              </div>

              <button type="submit" className="btn w-full border-none bg-blue-900 hover:bg-blue-200 text-white hover:text-black font-semibold text-xl py-2 rounded-lg transition-all duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

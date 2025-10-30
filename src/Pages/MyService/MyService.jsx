import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Component/LoadingSpeaner/LoadingSpeaner";

const MyService = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  // Background image preloader
  useEffect(() => {
    const img = new Image();
    img.src = "https://i.ibb.co/GvN78L4k/Group-31.png";
    img.onload = () => setLoading(false);
  }, []);

  if (loading) return <LoadingSpinner />; // Loader দেখাবে যতক্ষণ background load হচ্ছে

  const services = [
    {
      title: "Web Design",
      img: "https://i.ibb.co/mFd2kpBy/Group-1.png",
      desc: "I am a professional Web Designer with experience in creating over 50 website templates for various clients. Whether you need a personal, business, or custom website design, I can deliver clean, modern, and fully responsive templates tailored to your needs.",
    },
    {
      title: "UI UX Design",
      img: "https://i.ibb.co/6JWncjbY/Group-101.png",
      desc: "I am a professional UI/UX designer with strong skills in user interface design, user experience strategy, wireframing, prototyping, and design tools like Figma and Adobe Illustration. I have been working in this field for years, delivering visually appealing and user-friendly designs with 100% client satisfaction.",
    },
    {
      title: "Graphic Design",
      img: "https://i.ibb.co/Z1MjLFZ0/streamline-logos-designmoo-logo-solid.png",
      desc: "I am a professional Graphic Designer with experience in delivering over 100 successful projects, including logos, social media posts, business cards, banners, and brand identity designs. I always prioritize client satisfaction and ensure high-quality, timely delivery.",
    },
  ];

  return (
    <div
      className="hero min-h-screen bg-fixed bg-center bg-cover relative transition-all duration-700"
      style={{ backgroundImage: "url('https://i.ibb.co/GvN78L4k/Group-31.png')" }}
    >
      <div className="hero-content text-neutral-content text-center relative z-10 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00D9FF] mb-10">
            <span className="text-white">My</span> Services
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`card cursor-pointer bg-gray-900/85 shadow-lg border transform transition-all duration-300 hover:scale-105 ${
                  activeIndex === index
                    ? "border-[#00D9FF] shadow-[0_0_20px_#00D9FF]"
                    : "border-gray-700"
                }`}
              >
                <div className="card-body flex flex-col justify-between">
                  <div className="flex flex-col items-center text-white">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-14 h-14 mb-4"
                    />
                    <h2 className="card-title text-2xl text-[#00D9FF] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm text-gray-300 leading-relaxed text-justify">
                      {service.desc}
                    </p>
                  </div>

                  <div className="card-actions mt-6">
                    <button
                      className={`btn w-full font-semibold border-none transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-[#00D9FF] text-black shadow-[0_0_10px_#00D9FF]"
                          : "bg-gray-600 text-white hover:bg-[#00b5d8]"
                      }`}
                    >
                      {activeIndex === index ? "Active" : "Hire Me"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;

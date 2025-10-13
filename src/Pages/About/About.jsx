import React, { useState } from "react";

const About = () => {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(https://i.ibb.co/jvS5T8j4/Group-33.png)",
      }}
    >
      <div className="hero-content flex flex-col lg:flex-row gap-10 items-start p-4 lg:p-0">

        {/* Image */}
        <img
          src="https://i.ibb.co/SXYMfz0C/render-15-1.png"
          className="rounded-lg w-80 lg:w-96 mx-auto lg:mx-0"
          alt="profile"
        />

        {/* Right Side: Buttons + Content */}
        <div className="text-white flex-1 w-full">

          {/* Buttons */}
          <div className="mb-4 pt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              onClick={() => setActiveSection("education")}
              className={`hover:text-[#00D9FF] ${
                activeSection === "education" ? "text-[#00D9FF]" : ""
              }`}
            >
              Education Qualification
            </button>
            <button
              onClick={() => setActiveSection("course")}
              className={`hover:text-[#00D9FF] ${
                activeSection === "course" ? "text-[#00D9FF]" : ""
              }`}
            >
              Short Course
            </button>
            <button
              onClick={() => setActiveSection("experience")}
              className={`hover:text-[#00D9FF] ${
                activeSection === "experience" ? "text-[#00D9FF]" : ""
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveSection("details")}
              className={`hover:text-[#00D9FF] ${
                activeSection === "details" ? "text-[#00D9FF]" : ""
              }`}
            >
              Details
            </button>
          </div>

          {/* Dynamic Content */}
          <div className="mt-4 p-4 rounded-lg max-w-md text-base space-y-4 mx-auto lg:mx-0">
            {activeSection === "education" && (
              <div className="space-y-2">
                <p>🎓 <b className="text-[#00D9FF]">Diploma In Computer Technology</b></p>
                <p>Institute: Brahmanbaria Polytechnic Institute</p>
                <p>Session: 2021-2022</p>
                <p>Result: CGPA 3.83 out of 4.00</p>
                <br />
                <p>🎓 <b className="text-[#00D9FF]">Secondary School Certificate (SSC)</b></p>
                <p>School: Ashulia School and College, Ashulia, Savar, Dhaka</p>
                <p>Session: 2020-21</p>
                <p>Result: GPA 4.22 out of 5.00</p>
              </div>
            )}

            {activeSection === "course" && (
              <div className="space-y-2">
                <p>🧑‍💻 <b className="text-[#00D9FF]">UI UX Design Course</b></p>
                <p>Industrial Internship: Universe IT Solution, Dhaka</p>
                <p>Course Duration: 3 Months</p>
                <p>Tools: Figma, Adobe Photoshop, Adobe Illustrator</p>
                <br />
                <p>🎓 <b className="text-[#00D9FF]">Diploma In Computer Technology</b></p>
                <p>Institute: Brahmanbaria Polytechnic Institute, Brahmanbaria</p>
                <p>Session: 2021-22</p>
                <p>Result: CGPA 3.83 out of 4.00</p>
              </div>
            )}

            {activeSection === "experience" && (
              <div className="space-y-2">
                <p>🧑‍💻 <b className="text-[#00D9FF]">UI UX Design Course</b></p>
                <p>Industrial Internship: Universe IT Solution, Dhaka</p>
                <p>Course Duration: 3 Months</p>
                <p>Tools: Figma, Adobe Photoshop, Adobe Illustrator</p>
                <br />
                <p>🎓 <b className="text-[#00D9FF]">Diploma In Computer Technology</b></p>
                <p>Institute: Brahmanbaria Polytechnic Institute, Brahmanbaria</p>
                <p>Session: 2021-22</p>
                <p>Result: CGPA 3.83 out of 4.00</p>
                <br />
                <p>🎓 <b className="text-[#00D9FF]">Secondary School Certificate (SSC)</b></p>
                <p>School: Ashulia School and College, Ashulia, Savar, Dhaka</p>
                <p>Session: 2020-21</p>
                <p>Result: GPA 4.22 out of 5.00</p>
              </div>
            )}

            {activeSection === "details" && (
              <div className="space-y-2">
                <p>Hey! There,</p>
                <p>
                  My name is Mehedi Hasan Tuhin. I completed my SSC from Ashulia School and College in the 2020–21 session with a GPA of 4.22 out of 5.00.
                  Later, I earned a Diploma in Computer Science and Technology from Brahmanbaria Polytechnic Institute (2021–22 session), with a CGPA of 3.00 out of 4.00.
                  Currently, I’m working as a passionate and creative UI/UX Designer. I believe great design should be user-friendly, visually appealing, and solve real problems. I enjoy learning new things and taking on challenges that push my skills forward. My goal is to create effective, functional, and clean designs that enhance user experiences and add value to digital products.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { Mail, Instagram, Linkedin, Facebook } from "lucide-react";
const Home = () => {
    return (
        <div>
            
                 <section  

                 id="home"
         className="h-screen  py-20 p-4 flex flex-col items-center  bg-cover bg-center"
         style={{ backgroundImage: `url('https://i.ibb.co/VY5dshYJ/Group-34.png')` }}

    >
      <div className="flex flex-col md:flex-row md:space-x-6 items-center max-w-6xl w-full px-4 mt-10">
        {/* Text content */}
        <div className="flex-1 lg:px-4 text-center md:text-left">
          <h2 className="text-1xl md:text-2xl text-[#00D9FF] font-bold md:py-1">
            Hey! I'm 
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold py-1 text-white">
            Mehedi Hasan Tuhin
          </h2>

          {/* Dynamic text */}
          <div className="flex items-center font-bold whitespace-nowrap">
            <span className="text-2xl md:text-4xl text-[#00D9FF]">
              I'm into&nbsp;
            </span>
            <span
              id="dynamic-text"
              className="text-lg sm:text-2xl md:text-4xl text-blue-500"
            ></span>
          </div>

          <p className="mt-2 text-gray-300 font-medium">
           I'm a professional UI/UX designer with strong skills in user interface design, user experience strategy, wireframing, prototyping, and design tools like Figma and Adobe XD. I have been working in this field for almost few years, delivering visually appealing and user-friendly designs. All of my projects have been completed successfully with 100% client satisfaction, ensuring both aesthetic quality and functional usability across platforms.
          </p>
             <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-3  ">
      
            <div className="flex gap-2 justify-center lg:justify-start mt-3">
   
         {/* Behance */}
      <a
        href="https://www.behance.net/eng-tuhin000"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2  rounded-full bg-[#00d9ff] hover:bg-blue-500 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faBehance} className="w-7 h-7 p-2 text-black hover:text-white" />
      </a>


      <a
  href="mailto:youremail@example.com"
  className="p-2 rounded-full bg-[#00d9ff] hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center"
>
  <Mail className="w-9 h-7 text-black hover:text-white" />
</a>
    


      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-[#00d9ff] hover:bg-blue-500 transition-colors duration-300"
      >
        <Linkedin className="w-9 h-7 text-black hover:text-white mt-1" />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-[#00d9ff] hover:bg-blue-500 transition-colors duration-300"
      >
        <Facebook className="w-9 h-7 text-black hover:text-white mt-1" />
      </a>
    </div>

    </div>

     <div className="flex flex-nowrap justify-center lg:justify-start gap-3 mt-3">
  <a href="/assets/CV%20Resume-jkkK23EI.pdf" download="resume.pdf">
    <button className="btn mt-5 rounded-full text-lg px-6 py-3 sm:px-4 sm:py-4 border-none bg-[#00D9FF] hover:bg-blue-600 hover:text-white whitespace-nowrap">
      Download Resume
    </button>
  </a>

  <a href="/assets/CV%20Resume-jkkK23EI.pdf" download="resume.pdf">
    <button className="btn mt-5 rounded-full text-lg px-6 py-3 sm:px-4 sm:py-4 border-none bg-[#00D9FF] hover:bg-blue-600 hover:text-white whitespace-nowrap">
      Portfolio
    </button>
  </a>
</div>

         
        </div>

        {/* Image */}
        <div className="flex-1 mt-8 md:mt-5 flex justify-center md:justify-end">
          <img
            src="https://i.ibb.co/nsq3kZnL/Group-39-1.png"
            alt="Shariyar Kobir"
            className="w-96  h-auto rounded-full  transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
             
        </div>
    );
};

export default Home;
import React from "react";

const AboutMe = () => {
  return (
    <section className="h-screen w-screen bg-black p-4 pt-8" id="about">
      <h1 className="text-5xl text-white primary-font">
        About <span className="text-lime-500">Me</span>
      </h1>
      <p className="text-white secondary-font text-lg pt-8 sm:text-3xl mb-24">
        I'm a passionate Computer Science Engineering student at Lovely
        Professional University, with a strong foundation in programming and
        problem-solving. I love tackling complex algorithms and building
        solutions that make a difference.
      </p>

      {/* Cards Container */}

      <div className="group mt-8 border m-4 border-lime-500 p-8 rounded-2xl lime-shadow shadow-2xl shadow-lime-500 hover:bg-lime-500 hover:scale-102 transition-all duration-300 ease-in ">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white group-hover:text-black">
          🎓 Education
        </h2>
        <div className="mb-4 ">
          <h3 className="text-white text-lg font-semibold group-hover:text-black">
            B.Tech Computer Science and Engineering
          </h3>
          <p className="text-gray-300 group-hover:text-black">Lovely Professional University</p>
          <p className="text-gray-400 text-sm group-hover:text-black">
            📅 Aug 2024 - July 2027 📍 Phagwara, Punjab
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

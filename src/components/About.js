import React from "react";

// import img
import Image from "../assets/img/Profile.jpg";
import resume from "../assets/Shivam_Choudhary_Resume.pdf";
const About = () => {
  return (
    <section className="section bg-black" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24 mb-3">
          <img
            className="object-cover h-54 w-[466px] md:mx-auto lg:mx-0 rounded-2xl "
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col mt-20">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Shivam Choudhary
              </h2>
              <p className="mb-4 text-accent">Full Stack Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Full Stack Web Developer loves to build idea into <br /> reality
                through code.
                <br />
                Believe in continuous learning and growth. <br /> Always ready
                to take initiative....
              </p>
            </div>

            <a
              href={resume}
              className="btn btn-md bg-cyan-700 hover:bg-secondary-hover transition-all"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

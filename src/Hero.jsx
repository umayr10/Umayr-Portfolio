import React from 'react'
import avatar from "./assets/avatar.png"
import TextType from './TextType';
import { motion } from "motion/react"
import resume from "./assets/resume.pdf"

const Hero = () => {

   const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{opacity:0,y:100 }}
      animate={{opacity:1, y:0}} 
      transition={{duration: 0.8}}
      id="home"
      className=" w-full text-white flex flex-col justify-center text- items-center gap-8 m-auto py-12 max-sm:flex-col"
    >
      <img
        className="w-[200px] transition-transform duration-300 hover:scale-125"
        src={avatar}
      ></img>

      <div className="text-center leading-none flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold max-sm:text-4xl">
          Muhammad Umair
        </h1> 
        

        {/* <h4 className="text-xl font-medium">MERN stack Developer</h4> */}

        <TextType
          text={["Frontend React Web developer", "UI/UX Designer"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
        />

        {/*Hero Paragraph */}
        <p className="max-w-[480px] py-2 text-center text-sm max-sm:max-w-[375px] break-normal px-4">
          I’m Umair, a React Web Developer focused on creating modern,
          responsive, and user-friendly web applications. My work revolves
          around building clean interfaces and turning ideas into functional
          digital experiences that are both efficient and visually engaging.
        </p>
      </div>

      <div className="flex justify-center items-center gap-6">
        {/*Get in Touch */}
        <button
          onClick={scrollToContact}
          className="bg-white text-black px-4 py-2 rounded-4xl font-semibold hover:text-white hover:bg-black cursor-pointer hover:border hover:border-white"
        >
          Get in Touch
        </button>

        {/*Download btn */}
        <a href= {resume} download>
          <button className="font-semibold border border-solid border-white px-4 py-2       rounded-4xl hover:text-black hover:bg-white cursor-pointer">
            Download CV
          </button>
        </a>
      </div>
    </motion.div>
  );
}

export default Hero;
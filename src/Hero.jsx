import React from 'react'

const Hero = () => {

   const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id='home' className='bg-black w-full text-white flex flex-col justify-center items-center gap-8 m-auto py-12 max-sm:flex-col'>

        <img className='w-[200px] transition-transform duration-300 hover:scale-125' src='avatar.png'></img>

        <div className='text-center leading-none flex flex-col justify-center items-center'>

            <h1 className='text-6xl font-bold bg-gradient-to-l from-[#9A33FF] to-[rgb(255,134,96)] bg-clip-text text-transparent max-sm:text-4xl'>Muhammad Umair</h1>

            <h4 className='text-xl font-medium'>Frontend React Developer</h4>

            {/*Hero Paragraph */}
            <p className='max-w-[480px] py-2 text-gray-500 text-center text-sm max-sm:max-w-[375px] break-normal px-4'>I’m Umair, a Frontend Developer focused on creating modern, responsive, and user-friendly web applications. My work revolves around building clean interfaces and turning ideas into functional digital experiences that are both efficient and visually engaging</p> 

        </div>

        <div className='flex justify-center items-center gap-6'>

            {/*Get in Touch */}
            <button  onClick={scrollToContact} className='bg-white text-black px-4 py-2 rounded-4xl font-semibold hover:text-white hover:bg-black cursor-pointer hover:border hover:border-white'>Get in Touch</button>

            {/*Download btn */}
            <button className='font-semibold border border-solid border-white px-4 py-2 rounded-4xl hover:text-black hover:bg-white cursor-pointer'><a href="/resume.pdf" download
            >Download CV</a></button>

        </div>    
    </div>
  )
}

export default Hero;
import React from 'react'
import logo from "./assets/logo.png"

const Navigation = () => {
   const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='w-full bg-black  p-1 m-auto'>
      <nav className='mx-auto flex justify-between items-center gap-[256px] max-w-[800px] h-[72px] text-white max-sm:max-w-[375px] p-1'>
        
        <img className='w-[40px]' src={logo}></img>
        
        <ul className='flex justify-between items-center gap-[70px] text-md max-sm:hidden'>
          
          <li onClick={scrollToHome} className='hover:text-[#9A33FF] hover:underline hover:decoration-1 hover:underline-offset-16 hover:decoration-[#9A33FF]'><a href='#'>Home</a></li>
          
          <li onClick={scrollToProjects} className='hover:text-[#9A33FF] hover:underline hover:decoration-1 hover:underline-offset-16 hover:decoration-[#9A33FF]'><a href='#'>Projects</a></li>
          
          <li onClick={scrollToExperience} className='hover:text-[#9A33FF] hover:underline hover:decoration-1 hover:underline-offset-16 hover:decoration-[#9A33FF]'><a href='#'>Experience</a></li>
          
          <li onClick={scrollToContactForm} className='hover:text-[#9A33FF] hover:underline hover:decoration-1 hover:underline-offset-16 hover:decoration-[#9A33FF]'><a href='#'>Contact</a></li>
        
        </ul>
        
        <img className='w-[30px] invert hidden max-sm:block ml-4' src='hamburger.png'></img>
      
      </nav>
    </div>
  )
}

export default Navigation;
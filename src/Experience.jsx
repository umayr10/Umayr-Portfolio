import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='bg-black w-full text-white flex flex-col justify-center items-center gap-8 m-auto py-12 max-sm:flex-col'>
        
    {/*Experience*/}
        <div>
            <h1 className='font-bold text-center my-8 text-4xl bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent'>EXPERIENCE</h1>

            {/*Duseca*/}

            <div className='flex flex-col justify-center items-center  text-center gap-4 my-4'>
                <h1 className='text-2xl font-semibold'>Duseca</h1>
                <p> Feb 2024 - April 2025 </p>
                <h3> Junior React Developer </h3>
                <p className='max-w-[800px] break-normal px-4'>Contributed to developing responsive and dynamic web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS. Worked closely with the team to translate UI/UX designs into functional components, ensuring smooth performance and cross-platform compatibility. Gained experience in component-based development, state management, and integrating design with code for real-world projects.</p>
            </div>

            <hr className='max-w-[60%] m-auto my-4'></hr>

            {/*JackSphere*/}
            <div className='flex flex-col justify-center items-center  text-center gap-4'>
                <h1 className='text-2xl font-semibold'>Jacksphere</h1>
                <p> July 2023 - January 2024 </p>
                <h3>UI Developer & Designer </h3>
                <p className='max-w-[800px] break-normal px-4'>Worked on creating and implementing user-friendly interfaces by designing in Figma and collaborating with developers to bring designs to life. Ensured consistent, responsive, and visually appealing experiences across platforms using HTML, CSS, JavaScript, Tailwind CSS, and basic React.js. Focused on bridging design and development to deliver high-quality, scalable UI solutions.</p>
            </div>

            <hr className='max-w-[60%] m-auto my-4'></hr>
            
            {/*Zenith Innovation*/}
            <div className='flex flex-col justify-center items-center  text-center gap-4 m-auto py-4'>
                <h1 className='text-2xl font-semibold'>ZENITH INNOVATION</h1>
                <p> Feb 2023 - April 2023 </p>
                <h3>Frontend Intern </h3>
                <p className='max-w-[800px] break-normal px-4'>Assisted in building and styling web pages using HTML and CSS, while gaining hands-on experience with the basics of JavaScript. Collaborated with the development team to support UI improvements and strengthen foundational skills in frontend development.</p>
            </div>
            <hr className='max-w-[60%] m-auto my-4'></hr>
        </div>
    </div>
  )
}

export default Experience
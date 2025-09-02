import React from 'react'

const Techstack = () => {
  return (
    <div className='bg-black w-full text-white flex flex-col justify-center items-center gap-8 m-auto py-12 max-sm:flex-col'>
                       {/*Projects*/}
        <div className='flex flex-col justify-center items-center gap-12 p-4'>
            <p className='font-semibold tracking-[8px]'>EXPERIENCE WITH</p>

            {/*All vector icons*/}
            <div className='flex justify-center items-center content-center gap-8 flex-wrap max-w-[800px]'>
                

                 <div className='flex justify-between items-center flex-wrap gap-16'>
                    <img className='w-[50px] transition-transform duration-300 hover:scale-200' src='html-1.svg'></img>

                    <img className='w-[50px] transition-transform duration-300 hover:scale-200' src='css-3.svg'></img>

                    <img className='w-[50px] transition-transform duration-300 hover:scale-200' src='tailwind-css-2.svg'></img>

                    <img className='w-[50px] transition-transform duration-300 hover:scale-200' src='javascript-1.svg'></img>

                    <img className='w-[50px] transition-transform duration-300 hover:scale-200' src='react-2.svg'></img>

                     <img className='w-[50px] transition-transform duration-300 hover:scale-200' src='git-icon.svg'></img>

                    <img className='w-[50px] transition-transform duration-300 hover:scale-200' src='github-icon-2.svg'></img>

                </div>  
                {/* <div className='flex justify-center items-center gap-16'>

                    <img className='w-[50px] transition-transform duration-300 hover:scale-200' src='git-icon.svg'></img>

                    <img className='w-[50px] transition-transform duration-300 hover:scale-200' src='github-icon-2.svg'></img>
                </div>  */}
            </div>
            
            
        </div>
    </div>
  )
}

export default Techstack
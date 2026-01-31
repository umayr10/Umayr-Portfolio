import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-4 flex-wrap bg-black '>
        <h1 className='text-white text-4xl font-bold'>Lets Discuss your project</h1>
        <input className='border-1 rounded-md px-4 py-2 w-[40%] text-white max-sm:w-full' name='Name' placeholder='Enter your Full name'></input>
        <input className='border-1 rounded-md px-4 py-2 text-white w-[40%] max-sm:w-full' type='Email' name='Email' placeholder='Enter your email'></input>
        <input className='border-1 rounded-md px-4 py-2 h-50 text-white w-[40%] max-sm:w-full' name='Message' placeholder='Message'></input>
        <button className='bg-black text-white border-1 rounded-md px-4 py-2 '>Submit</button>
    </div>
  )
}

export default ContactForm
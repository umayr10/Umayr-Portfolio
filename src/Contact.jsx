import React from 'react'

const Contact = () => {
  return (
    <div>
         {/*Contact Info*/}
        <div id='contact' className='w-full bg-[#191919] text-white'>
            <div className='max-w-[375px] m-auto py-4 break-normal px-4 '>
                <h1 className='font-bold text-center my-8 text-4xl bg-gradient-to-b from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent'>CONTACT INFO</h1>
                <div className='flex justify-between items-center text-xl py-4 max-sm:text-lg'>
                    <h2>EMAIL: </h2>
                    <h2>umairktk10@gmail.com</h2>
                </div>
                <div className='flex justify-between items-center text-xl  py-4 max-sm:text-lg'>
                    <h2>Mobile: </h2>
                    <h2>+92 343 8569096</h2>
                </div>
                <div className='flex justify-between items-center text-xl  py-4 max-sm:text-lg'>
                    <h2>Phone: </h2>
                    <h2>051 9285722</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
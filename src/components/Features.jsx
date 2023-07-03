import React from 'react'
import hr from '../assests/hr.jpeg'
import AI from '../assests/AI.jpg'
import team from '../assests/team.png'

const Features = () => {
  return (
    <>
      <div className='w-full absolute  md:mt-[30rem] mt-[22rem] justify-center items-center '>    
    <h1 className='text-xl mx-32 text-violet-600'>Features</h1>
    <div className="card mt-6">
    <img src={hr} alt="" />
    <h1 className="m-2 my-6 text-xl text-semibold">Streamline Your Hiring Process</h1>
    </div>

    <div className="card mt-6">
    <img src={AI} alt="" />
    <h1 className="m-2 my-6 text-xl text-semibold">Streamline Smart AI-Assisted Screening</h1>
    </div>
    <div className="card mt-6">
    <img src={team} alt="" />
    <h1 className="m-2 my-6 text-xl text-semibold">Unparalleled Support</h1>
    </div>
    <div className="faq">
      <h1 className='font-medium text-2xl mx-24 mt-8 text-violet-600'>Contact Us </h1>
      <div className="form">
        <input type="text" name="" id="" placeholder='Name' />
        <input type="email" name="" id="" placeholder='Email' />
        <input type="text" name="" id="" placeholder='Subject' />
        <textarea name="" id="" cols="25" rows="5" placeholder='Message'></textarea>
        <br />
        <button className='submit' type='submit'>Submit</button>
      </div>
    </div>
    </div>

    
    </>
  )
}

export default Features